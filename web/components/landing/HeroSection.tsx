import Link from 'next/link';
import { HeroBlob } from './HeroBlob';
import { LandingNav } from './LandingNav';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-brand-dark-elevated">
      <div className="absolute inset-0 z-0 bg-brand-dark" />
      <HeroBlob />

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <LandingNav />

      <div className="relative z-10 max-w-full px-6 pb-[220px] pt-20 text-center">
        <h1 className="mx-auto max-w-[900px] animate-hero-fade-up text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-pink">
          Your Code&apos;s Security Brain.
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] animate-hero-fade-up text-[clamp(15px,2vw,17px)] leading-relaxed text-brand-pink/55 [animation-delay:150ms]">
          Your team ships 30% of PRs with security vulnerabilities they never see.
          GuardRail scans your code, patches it instantly, and blocks unsafe
          commits — all inside VS Code and GitHub.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-hero-fade-up [animation-delay:280ms] sm:gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-brand-green/30 bg-gradient-to-r from-brand-green/25 to-brand-dark/80 px-7 py-3.5 text-[15px] font-medium text-brand-pink shadow-[inset_0_0_30px_rgba(185,247,84,0.25)] transition-[border-color,box-shadow] hover:border-brand-green/50 hover:shadow-[inset_0_0_40px_rgba(185,247,84,0.35)]"
          >
            Install VS Code Extension →
          </Link>
          <Link
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-brand-pink/20 bg-brand-pink/[0.06] px-7 py-3.5 text-[15px] font-medium text-brand-pink transition-[border-color,background-color] hover:border-brand-pink/40 hover:bg-brand-pink/[0.1]"
          >
            Star on GitHub
          </Link>
        </div>
      </div>

      {/* Contrast flip: pink surface, green accents */}
      <div className="absolute bottom-0 left-1/2 z-20 h-[280px] w-[92%] min-w-[280px] max-w-[1080px] -translate-x-1/2 overflow-hidden rounded-t-[20px] bg-brand-pink px-5 py-6 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] sm:w-[75%] sm:px-7">
        <p className="mb-4 text-[13px] font-medium text-brand-dark/50">Security Scan Results</p>
        <div className="font-mono text-[11px] leading-[1.8] text-brand-dark sm:text-[13px]">
          <div>
            <span className="font-semibold text-red-700">[CRITICAL]</span> SQL Injection — auth/login.js:42
          </div>
          <div>
            <span className="font-semibold text-orange-700">[HIGH]</span> Hardcoded JWT secret — config/env.js:8
          </div>
          <div className="font-semibold text-brand-dark">✓ 2 patches generated</div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-brand-dark">
            auth/login.js
          </span>
          <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-brand-dark">
            config/env.js
          </span>
        </div>
      </div>
    </section>
  );
}
