# GuardRail AI

## Local AI security scanning and remediation for VS Code

GuardRail AI is a local-first code security assistant. It scans source files
for likely vulnerabilities, explains the findings, and generates secure
replacement code for review inside VS Code.

The complete analysis loop runs on your machine:

- **VS Code extension** — starts scans, displays diagnostics, and previews fixes.
- **Local Express API** — validates requests, orchestrates scans, and stores
  session data.
- **Ollama + Gemma 3 4B** — performs local inference. The required model is
  `gemma3:4b`.
- **Local JSON/JSONL storage** — keeps sessions, findings, logs, source
  snapshots, and patches under `api/data/local/` by default.

Your source code is not sent to a hosted AI provider by the supported local
workflow. You remain in control of every generated change: GuardRail previews
the diff and applies it only after explicit approval.

## How the architecture works

```text
┌─────────────────────┐
│ VS Code extension   │
│ scan + diagnostics  │
└──────────┬──────────┘
           │ HTTP (localhost:3001)
           ▼
┌─────────────────────┐
│ Express API         │
│ validation + limits │
└──────┬─────────┬────┘
       │         │
       │         └── Local JSON/JSONL session storage
       ▼
┌─────────────────────┐
│ Ollama              │
│ gemma3:4b           │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Validated findings  │
│ and secure patch    │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ VS Code diff review │
│ approve or cancel   │
└─────────────────────┘
```

For every scan, the API validates the source and language, sends the request
to Ollama, parses and schema-validates the response, and bounds the number of
returned findings. A remediation request generates a patch from the stored
session. Before applying it, the extension verifies that the file has not
changed since the scan.

## Features

- Scan the current file or workspace from VS Code.
- Inline diagnostics in the editor and Problems panel.
- Severity, explanation, affected line, and CWE information where available.
- Local Gemma inference through Ollama; no cloud AI key is required.
- Strict validation for AI-generated vulnerability results.
- Configurable finding limits, API timeouts, and Ollama timeouts.
- AI-generated remediation patches with a VS Code diff preview.
- Explicit approval before a patch is written to disk.
- Stale-file protection when the source changes after scanning.
- Local session, source, result, log, and patch persistence.
- Supported languages: JavaScript, TypeScript, Python, Java, Go, Ruby, and PHP.

## Prerequisites

Install these before starting:

1. [Node.js](https://nodejs.org/) and npm
2. [Ollama](https://ollama.com/)
3. [Visual Studio Code](https://code.visualstudio.com/) 1.80 or later
4. The **Gemma 3 4B model** — this is the primary AI dependency:

   ```bash
   ollama pull gemma3:4b
   ```

Verify that the model is installed:

```bash
ollama list
```

The output must include `gemma3:4b`. Without Ollama and this model, the API
can start, but scans and fixes cannot run successfully.

## Quick start

Clone the repository and open it in VS Code:

```bash
git clone https://github.com/codewithrakshit/GuardRail-MLH.git
cd GuardRail-MLH
```

### 1. Start Ollama and install Gemma

In Terminal 1:

```bash
ollama serve
```

In Terminal 2:

```bash
ollama pull gemma3:4b
curl http://127.0.0.1:11434/api/tags
```

If Ollama is already running, do not start a second server. The tags response
should list `gemma3:4b`.

### 2. Install and start the local API

In Terminal 3:

```bash
cd api
npm install
cp .env.example .env
npm start
```

The API listens on `http://localhost:3001`. Check its health before using the
extension:

```bash
curl http://localhost:3001/health
```

The health response should report API availability, Ollama reachability, and
`modelAvailable: true`.

### 3. Build and install the VS Code extension

In Terminal 4:

```bash
cd extensions/vscode
npm install
npm run compile
npm run package
```

Install the generated `.vsix` from **Extensions → ... → Install from VSIX**.
The repository also includes `extensions/vscode/guardrail-ai-1.0.1.vsix`;
rebuild the package after changing extension source code.

The extension defaults to `http://localhost:3001`. Change
`guardrailai.apiUrl` only when the API is running on another port.

## Using GuardRail in VS Code

1. Open a supported source file.
2. Run **GuardRail AI: Scan Current File** from the Command Palette, or press
   `Cmd+Shift+G` on macOS (`Ctrl+Shift+G` on Windows/Linux).
3. Review findings in the editor and Problems panel.
4. Select a finding and choose the GuardRail AI quick fix, or run
   **GuardRail AI: Apply Security Fix**.
5. Review the generated diff.
6. Choose **Apply** to write the change, or cancel to leave the file unchanged.

Workspace scanning is available from **GuardRail AI: Scan Workspace**. Auto
scan on save, inline diagnostics, timeouts, and the API URL are configurable
through VS Code settings.

Example settings:

```json
{
  "guardrailai.apiUrl": "http://localhost:3001",
  "guardrailai.autoScanOnSave": true,
  "guardrailai.showInlineErrors": true,
  "guardrailai.timeout": 120000,
  "guardrailai.fixTimeout": 300000
}
```

## Configuration

Copy `api/.env.example` to `api/.env` before starting the API. These are the
important local settings:

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3001` | Express API port. |
| `OLLAMA_BASE_URL` | `http://127.0.0.1:11434` | Ollama HTTP endpoint. |
| `OLLAMA_MODEL` | `gemma3:4b` | Installed Ollama model used for scans and fixes. |
| `OLLAMA_TIMEOUT_MS` | `120000` | Maximum duration of a model request. |
| `GUARDRAIL_MAX_FINDINGS` | `10` | Maximum validated findings per scan. |
| `GUARDRAIL_DATA_DIR` | `./data/local` | Local sessions, source, patches, and logs. |
| `RATE_LIMIT` | `50` | Hourly limit for API write requests. |

Gemma 3 4B is the supported default. If you use another Ollama-compatible
model, set `OLLAMA_MODEL` to its exact installed tag and verify it through
`/health`. Model output must still satisfy GuardRail's response schema.

## API endpoints

The extension is the recommended client, but the API can be checked directly:

```bash
curl http://localhost:3001/health

curl -X POST http://localhost:3001/api/scan \
  -H 'Content-Type: application/json' \
  --data-binary @- <<'JSON'
{"code":"const query = `SELECT * FROM users WHERE id = ${id}`;","language":"javascript","filename":"example.js"}
JSON
```

The scan response includes a session ID, status, vulnerabilities, and timing
metrics. A session can be sent to the fix route:

```bash
curl -X POST http://localhost:3001/api/fix/<sessionId>
```

The fix response contains the generated secure code and patch metadata. Patch
application remains an explicit VS Code approval action.

## Data and privacy

By default, local data is stored in `api/data/local/`. It includes per-session
source snapshots, findings, logs, and generated patches. Keep this directory
private; local JSON and JSONL files are not encrypted.

The local workflow does not require AWS credentials, a hosted AI API key, or a
cloud database. Do not commit `.env` files, credentials, tokens, or real
production source snapshots.

## Testing

Run the supported backend test suite:

```bash
cd api
npm test -- --runInBand
```

The suite covers local persistence and strict analysis-response validation. A
live scan or remediation test also requires Ollama, `gemma3:4b`, and the API
to be running.

Compile the extension after extension changes:

```bash
cd extensions/vscode
npm run compile
```

The root `npm test` command belongs to an older legacy suite. Use the API
command above for the current local backend workflow.

## Troubleshooting

### `modelAvailable: false`

Start Ollama and install the exact configured model:

```bash
ollama serve
ollama pull gemma3:4b
curl http://127.0.0.1:11434/api/tags
```

If `api/.env` specifies another model, pull that exact tag or change
`OLLAMA_MODEL=gemma3:4b`, then restart the API.

### Ollama timeout

Large files can take longer on local hardware. Increase `OLLAMA_TIMEOUT_MS` in
`api/.env` and the extension's `guardrailai.timeout`, then restart the API.
Fix generation uses the separate `guardrailai.fixTimeout` setting.

### Port 3001 is already in use

Run only one API server:

```bash
lsof -nP -iTCP:3001 -sTCP:LISTEN
kill <numeric-pid>
```

Alternatively choose another `PORT` and set `guardrailai.apiUrl` to the same
URL.

### Extension cannot connect

Check `curl http://localhost:3001/health`, confirm the extension API URL, and
reload VS Code. Both the API and Ollama must be running.

### Invalid model output

GuardRail rejects malformed or schema-invalid responses instead of treating
them as successful scans. Check the API terminal, confirm the model is
installed, retry with a smaller file, and keep response validation enabled.

## Repository layout

| Path | Purpose |
| --- | --- |
| `api/` | Express API, Ollama client, validation, orchestration, and local persistence. |
| `extensions/vscode/` | VS Code scanning, diagnostics, diff preview, and patch application. |
| `demo/` | Intentionally vulnerable fixtures for manual testing. |
| `web/` | Separate frontend application; not required for the local VS Code workflow. |
| `cli/` | Separate CLI package. |
| `docs/` | Additional project documentation. |

## Contributing

1. Create a feature branch.
2. Make a focused change.
3. Run the relevant tests and extension compilation.
4. Use intentionally vulnerable fixtures for security testing.
5. Never include real credentials, tokens, or private source code.
6. Open a pull request describing the change.

## License

MIT
