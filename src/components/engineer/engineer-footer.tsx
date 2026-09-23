import type { SiteConfig } from "@/types/portfolio";

type EngineerFooterProps = {
  readonly siteConfig: SiteConfig;
};

export function EngineerFooter({ siteConfig }: EngineerFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#14202a] px-5 py-8 text-sm text-[#8fa3ad] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#23d5f5]">AG</p>
          <p className="mt-2 text-[#f1f7fa]">
            {siteConfig.owner.name} / {siteConfig.owner.primaryTitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span>{currentYear}</span>
          {siteConfig.socialLinks.map((link) => (
            <a
              className="transition hover:text-[#36d7f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#36d7f3]"
              href={link.href}
              key={link.platform}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
