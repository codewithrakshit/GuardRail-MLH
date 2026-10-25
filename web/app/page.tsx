import Link from 'next/link';
import { HeroSection } from '@/components/landing/HeroSection';
import { Shield, Lock, Zap, Server, Database, Activity, CheckCircle, Code2, Terminal, Clock, AlertTriangle, Check, Github, Twitter, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-dark text-brand-pink">
      <HeroSection />

      <main className="relative z-10">

        {/* Technology Stack */}
        <section className="py-20 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 text-xs mb-10 uppercase tracking-widest font-semibold">Powered By</p>
            <div className="flex flex-wrap items-center justify-center gap-16 text-gray-400">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-indigo-400" />
                <span className="text-lg font-semibold">AWS Bedrock</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-indigo-400" />
                <span className="text-lg font-semibold">Secrets Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-400" />
                <span className="text-lg font-semibold">DynamoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-indigo-400" />
                <span className="text-lg font-semibold">CloudWatch</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                The Security Bottleneck
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Traditional security workflows are broken. Manual patching creates delays, 
                and vulnerabilities sit unfixed for weeks.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Traditional Approach */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition" />
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-red-950/40 to-orange-950/40 border-2 border-red-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm text-red-400 font-bold uppercase tracking-wider">Traditional Approach</div>
                      <div className="text-xs text-red-400/60">Manual & Slow</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">1</span>
                      </div>
                      <span>Security scanner detects vulnerability</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">2</span>
                      </div>
                      <span>Create ticket, assign to developer</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">3</span>
                      </div>
                      <span>Wait for developer availability</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">4</span>
                      </div>
                      <span>Manual code review and patch writing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">5</span>
                      </div>
                      <span>Test in staging environment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">6</span>
                      </div>
                      <span>Deploy to production</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-red-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold text-lg">Average Time:</span>
                      <span className="text-3xl font-bold text-red-400">Days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GuardRail AI Approach */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition" />
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-green-950/40 to-emerald-950/40 border-2 border-green-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-green-400 font-bold uppercase tracking-wider">GuardRail AI</div>
                      <div className="text-xs text-green-400/60">Autonomous & Fast</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span>AI instantly detects vulnerability</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span>Auto-generates production-ready patch</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span>Provisions AWS secrets automatically</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span>Validates fix with security checks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span>Deploy-ready code delivered</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-green-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold text-lg">Average Time:</span>
                      <span className="text-3xl font-bold text-green-400">&lt;5 seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                How It <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From vulnerability detection to verified patch in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <StepCard
                number="1"
                title="Instant Detection"
                description="AI-powered analysis scans your code in real-time, detecting hardcoded secrets, SQL injection, XSS, and 50+ vulnerability types with 99.9% accuracy."
                icon={<Zap />}
              />
              <StepCard
                number="2"
                title="Auto-Remediation"
                description="Generates production-ready patches, provisions AWS secrets with proper IAM policies, and validates fixes automatically — no manual intervention required."
                icon={<Lock />}
                highlight
              />
              <StepCard
                number="3"
                title="Deploy Ready"
                description="Download secure code with side-by-side diffs, complete AWS integration, audit logs, and zero manual work. Ready to merge and deploy."
                icon={<CheckCircle />}
              />
            </div>

            {/* Visual Flow */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 hidden md:block" />
              <div className="grid md:grid-cols-5 gap-4 relative">
                <FlowStep label="Submit Code" />
                <FlowStep label="AI Analysis" />
                <FlowStep label="Generate Patch" />
                <FlowStep label="Provision Secrets" />
                <FlowStep label="Deploy" />
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-32 px-6 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Enterprise-Grade <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Architecture</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on AWS cloud-native infrastructure for scalability and security
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ArchitectureCard
                icon={<Terminal />}
                title="AI Analysis Engine"
                description="Amazon Bedrock Nova Lite powers real-time vulnerability detection with 50+ security patterns."
              />
              <ArchitectureCard
                icon={<Lock />}
                title="Secret Management"
                description="AWS Secrets Manager integration with automatic provisioning, rotation, and 24h TTL lifecycle."
              />
              <ArchitectureCard
                icon={<Code2 />}
                title="Patch Generator"
                description="Context-aware code generation that maintains functionality while eliminating security risks."
              />
              <ArchitectureCard
                icon={<Database />}
                title="Session Storage"
                description="DynamoDB for session tracking and S3 for encrypted temporary file storage with auto-cleanup."
              />
              <ArchitectureCard
                icon={<Activity />}
                title="Observability"
                description="CloudWatch integration for complete audit trails, monitoring, and compliance reporting."
              />
              <ArchitectureCard
                icon={<Server />}
                title="Isolation Layer"
                description="Per-session resource isolation with automatic cleanup and least-privilege IAM policies."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition" />
              <div className="relative p-16 rounded-3xl bg-gradient-to-br from-indigo-950/50 to-blue-950/50 border-2 border-indigo-500/30 backdrop-blur-sm text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Experience <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Autonomous Security</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  See GuardRail AI in action. Submit your code and watch it detect, patch, and secure vulnerabilities automatically.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/scan"
                    className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-600/50 hover:shadow-indigo-600/80 hover:scale-[1.02] transition-all duration-300"
                  >
                    Try Now
                  </Link>
                  <Link
                    href="/demo"
                    className="px-12 py-5 border-2 border-white/20 hover:border-white/40 rounded-2xl font-bold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                  <Shield className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-xl">GuardRail AI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Autonomous security remediation platform powered by AI. 
                Detect, patch, and deploy secure code in seconds.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <div className="font-bold mb-6 text-white">Platform</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div><Link href="/scan" className="hover:text-white transition">Try Now</Link></div>
                <div><Link href="/demo" className="hover:text-white transition">Demo</Link></div>
                <div><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></div>
                <div><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></div>
                <div><Link href="#architecture" className="hover:text-white transition">Architecture</Link></div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-6 text-white">Resources</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div><Link href="#" className="hover:text-white transition">Documentation</Link></div>
                <div><Link href="#" className="hover:text-white transition">API Reference</Link></div>
                <div><Link href="#" className="hover:text-white transition">GitHub</Link></div>
                <div><Link href="#" className="hover:text-white transition">Blog</Link></div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-6 text-white">Legal</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div><Link href="#" className="hover:text-white transition">Privacy Policy</Link></div>
                <div><Link href="#" className="hover:text-white transition">Terms of Service</Link></div>
                <div><Link href="#" className="hover:text-white transition">Security</Link></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2024 GuardRail AI. Open Source Project.</div>
            <div className="flex items-center gap-6">
              <span>Built with AWS Bedrock</span>
              <span>•</span>
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-3">{number}</div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </div>
  );
}

function FlowStep({ label }: { label: string }) {
  return (
    <div className="relative">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border-2 border-indigo-500/30 flex items-center justify-center backdrop-blur-sm mb-4 hover:scale-110 transition-transform duration-300">
        <div className="w-3 h-3 rounded-full bg-indigo-400" />
      </div>
      <div className="text-center text-sm text-gray-400 font-medium">{label}</div>
    </div>
  );
}

function ProblemItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 text-red-400 flex-shrink-0 mt-1">{icon}</div>
      <span className="text-gray-400">{text}</span>
    </div>
  );
}

function StepCard({ number, title, description, icon, highlight }: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className={`relative group p-10 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
      highlight 
        ? 'bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-600/30' 
        : 'bg-white/5 border-2 border-white/10 hover:border-white/20'
    }`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-3xl ${
          highlight ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/50' : 'bg-white/10 text-indigo-400'
        }`}>
          {number}
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
          highlight ? 'bg-white/10 text-white' : 'bg-white/5 text-indigo-400'
        }`}>
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function ArchitectureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-indigo-500/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
