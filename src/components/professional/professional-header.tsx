"use client";

import { useState } from "react";
import { usePortfolioMode } from "@/components/shared/portfolio-mode-provider";
import type { SiteConfig, SocialLink } from "@/types/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

type ProfessionalHeaderProps = {
  readonly siteConfig: SiteConfig;
};

export function ProfessionalHeader({ siteConfig }: ProfessionalHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setMode } = usePortfolioMode();
  const headerSocialLinks = siteConfig.socialLinks.filter(
    (link) => link.platform === "github" || link.platform === "linkedin",
  );

  const switchToEngineerMode = () => {
    setMode("engineer");
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1113181a] bg-[#f7f7f4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <a
          aria-label="Alper Gedik home"
          className="text-lg font-semibold tracking-normal text-[#111318] outline-none transition-colors hover:text-[#3b6ef5] focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
          href="#top"
        >
          AG.
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-medium text-[#666b73] md:flex"
        >
          {navItems.map((item) => (
            <a
              className="transition-colors hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {headerSocialLinks.map((link) => (
            <HeaderSocialLink link={link} key={link.platform} />
          ))}
          <button
            className="rounded-full border border-[#1113181a] px-4 py-2 text-sm font-medium text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
            onClick={switchToEngineerMode}
            type="button"
          >
            Engineer Mode
          </button>
        </div>

        <button
          aria-controls="professional-mobile-menu"
          aria-expanded={isOpen}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#1113181a] text-[#111318] transition-colors hover:border-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      {isOpen ? (
        <div
          className="border-t border-[#1113181a] bg-[#f7f7f4] px-5 py-5 md:hidden"
          id="professional-mobile-menu"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1220px] flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-3 text-base font-medium text-[#111318] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-4 flex max-w-[1220px] flex-wrap gap-3 border-t border-[#1113181a] pt-4">
            {headerSocialLinks.map((link) => (
              <a
                className="rounded-full border border-[#1113181a] px-4 py-2 text-sm font-medium text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5]"
                href={link.href}
                key={link.platform}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <button
              className="rounded-full border border-[#1113181a] px-4 py-2 text-sm font-medium text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5]"
              onClick={switchToEngineerMode}
              type="button"
            >
              Engineer Mode
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeaderSocialLink({ link }: { readonly link: SocialLink }) {
  return (
    <a
      aria-label={link.label}
      className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-transparent text-[#666b73] transition-colors hover:border-[#1113181a] hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
      title={link.label}
    >
      {link.platform === "github" ? <GitHubIcon /> : <LinkedInIcon />}
    </a>
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

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 5.98c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.94 8.9H3.85v9.96h3.09V8.9ZM5.4 4a1.79 1.79 0 1 0 0 3.58A1.79 1.79 0 0 0 5.4 4Zm13.77 9.4c0-3-1.6-4.39-3.74-4.39a3.22 3.22 0 0 0-2.9 1.59h-.04V8.9H9.53v9.96h3.08v-4.93c0-1.3.25-2.56 1.86-2.56 1.58 0 1.6 1.48 1.6 2.64v4.85h3.1V13.4Z" />
    </svg>
  );
}
