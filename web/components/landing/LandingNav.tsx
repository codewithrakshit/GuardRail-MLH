'use client';

import Link from 'next/link';
import { Sun } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features', dropdown: true },
  { label: 'Integrations', href: '#integrations', dropdown: true },
  { label: 'Pricing', href: '#pricing', dropdown: false },
  { label: 'Docs', href: '#docs', dropdown: true },
];

export function LandingNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex h-[60px] items-center justify-between bg-transparent px-5 md:px-10">
      <Link href="/" className="flex shrink-0 items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green">
          <span className="text-lg font-bold leading-none text-brand-pink">*</span>
        </div>
        <span className="text-[17px] font-semibold tracking-tight text-brand-pink">GuardRail AI</span>
      </Link>

      <ul className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-1 text-sm text-brand-pink/50 transition-colors hover:text-brand-pink"
            >
              {link.label}
              {link.dropdown && <span className="ml-0.5 text-[10px] opacity-70">∨</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex shrink-0 items-center gap-4">
        <button
          type="button"
          aria-label="Toggle light mode"
          className="hidden h-9 w-9 items-center justify-center rounded-lg text-brand-pink/50 transition-colors hover:text-brand-pink sm:flex"
        >
          <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>
        <Link
          href="/scan"
          className="whitespace-nowrap rounded-full bg-brand-pink px-4 py-2 text-[13px] font-semibold text-brand-dark transition-opacity hover:opacity-90 md:px-[22px] md:py-2.5 md:text-sm"
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}
