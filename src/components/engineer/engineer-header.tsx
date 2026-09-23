"use client";

import { useState } from "react";
import { usePortfolioMode } from "@/components/shared/portfolio-mode-provider";
import type { SiteConfig } from "@/types/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

type EngineerHeaderProps = {
  readonly siteConfig: SiteConfig;
};

export function EngineerHeader({ siteConfig }: EngineerHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setMode } = usePortfolioMode();
  const profileLinks = siteConfig.socialLinks.filter(
    (link) => link.platform === "github" || link.platform === "linkedin",
  );

  const switchToProfessional = () => {
    setMode("professional");
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a2a33] bg-[#05080b]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <a
          aria-label="Alper Gedik home"
          className="flex items-center gap-3 font-semibold text-[#f1f7fa] transition-colors hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
          href="#top"
        >
          <span className="text-lg">AG.</span>
          <span className="hidden items-center gap-2 rounded-full border border-[#23d5f5]/18 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#a9bac2] sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#23d5f5] shadow-[0_0_18px_rgba(35,213,245,0.55)]" />
            Engineer Mode
          </span>
        </a>

        <nav
          aria-label="Engineer navigation"
          className="hidden items-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.13em] text-[#b2c2ca] lg:flex"
        >
          {navItems.map((item) => (
            <a
              className="transition-colors hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {profileLinks.map((link) => (
            <a
              aria-label={link.label}
              className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-[#b2c2ca] transition-colors hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
              href={link.href}
              key={link.platform}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.platform === "github" ? "GitHub" : "LinkedIn"}
            </a>
          ))}
          <button
            className="rounded-md border border-[#23d5f5]/22 bg-[#0b1117] px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#cfe1e7] transition-colors hover:border-[#23d5f5] hover:bg-[#0e151c] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
            onClick={switchToProfessional}
            type="button"
          >
            Professional Mode
          </button>
        </div>

        <button
          aria-controls="engineer-mobile-menu"
          aria-expanded={isOpen}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#23d5f5]/24 text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      {isOpen ? (
        <div
          className="border-t border-white/10 bg-[#05080b] px-5 py-5 lg:hidden"
          id="engineer-mobile-menu"
        >
          <nav
            aria-label="Engineer mobile navigation"
            className="mx-auto flex max-w-[1220px] flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.12em] text-[#f1f7fa] transition-colors hover:bg-[#0b1117] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-4 flex max-w-[1220px] flex-wrap gap-3 border-t border-white/10 pt-4">
            {profileLinks.map((link) => (
              <a
                className="rounded-md border border-[#23d5f5]/20 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5]"
                href={link.href}
                key={link.platform}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <button
              className="rounded-md border border-[#23d5f5]/24 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5]"
              onClick={switchToProfessional}
              type="button"
            >
              Professional Mode
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ isOpen }: { readonly isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
        </>
      )}
    </svg>
  );
}
