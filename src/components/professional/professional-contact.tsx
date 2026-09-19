import type { SiteConfig } from "@/types/portfolio";

type ProfessionalContactProps = {
  readonly siteConfig: SiteConfig;
};

export function ProfessionalContact({ siteConfig }: ProfessionalContactProps) {
  return (
    <section className="scroll-mt-24 py-14 sm:py-20" id="contact">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
        <div className="rounded-[2rem] border border-[#1113181a] bg-[#111318] p-6 text-white shadow-[0_24px_80px_rgba(17,19,24,0.12)] sm:p-9 lg:p-11">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fabff]">
            Contact
          </p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c8ccd3] sm:text-lg">
                Reach out through email or connect through Alper&apos;s public
                professional profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {siteConfig.socialLinks.map((link) => (
                <a
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-[#8fabff] hover:text-[#8fabff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fabff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111318]"
                  href={link.href}
                  key={link.platform}
                  rel={
                    link.platform === "email" ? undefined : "noopener noreferrer"
                  }
                  target={link.platform === "email" ? undefined : "_blank"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
