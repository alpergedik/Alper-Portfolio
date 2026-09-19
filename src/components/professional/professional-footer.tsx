import type { SiteConfig } from "@/types/portfolio";

type ProfessionalFooterProps = {
  readonly siteConfig: SiteConfig;
};

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export function ProfessionalFooter({ siteConfig }: ProfessionalFooterProps) {
  const currentYear = new Date().getFullYear();
  const profileLinks = siteConfig.socialLinks.filter(
    (link) => link.platform === "github" || link.platform === "linkedin",
  );

  return (
    <footer className="border-t border-[#1113181a] bg-[#f7f7f4] py-10">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <a
            aria-label="Alper Gedik home"
            className="text-lg font-semibold text-[#111318] transition-colors hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
            href="#top"
          >
            AG.
          </a>
          <p className="mt-4 text-sm font-semibold text-[#111318]">
            {siteConfig.owner.name}
          </p>
          <p className="mt-1 text-sm text-[#666b73]">
            {siteConfig.owner.primaryTitle}
          </p>
          <p className="mt-5 text-sm text-[#8a8f98]">
            Designed & built by {siteConfig.owner.name}. {currentYear}
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#666b73]"
          >
            {footerLinks.map((link) => (
              <a
                className="transition-colors hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#666b73]">
            {profileLinks.map((link) => (
              <a
                className="transition-colors hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
                href={link.href}
                key={link.platform}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
