import type { PortfolioData, SiteConfig } from "@/types/portfolio";

type ProfessionalHeroProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function ProfessionalHero({
  siteConfig,
  portfolioData,
}: ProfessionalHeroProps) {
  const { profile } = portfolioData;
  const github = siteConfig.socialLinks.find((link) => link.platform === "github");
  const linkedIn = siteConfig.socialLinks.find(
    (link) => link.platform === "linkedin",
  );
  const heroCopy =
    "Computer Engineer focused on building mobile applications, software products and interactive experiences through thoughtful engineering and product development.";

  return (
    <section id="top" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3b6ef5]">
            {profile.primaryTitle} / {profile.secondaryTitle}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#111318] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Alper.
            <span className="mt-2 block text-[#2f333a]">
              I build software from idea to product.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666b73] sm:text-xl">
            {heroCopy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#111318] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
              href="#projects"
            >
              View Projects
            </a>
            <div className="flex gap-3">
              {github ? <HeroLink href={github.href} label={github.label} /> : null}
              {linkedIn ? (
                <HeroLink href={linkedIn.href} label={linkedIn.label} />
              ) : null}
            </div>
          </div>
        </div>

        <aside
          aria-label="Professional summary"
          className="rounded-[2rem] border border-[#1113181a] bg-white p-5 shadow-[0_24px_80px_rgba(17,19,24,0.08)] sm:p-6"
        >
          <div className="rounded-[1.5rem] bg-[#f0f1ee] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#111318]">
                  {profile.name}
                </p>
                <p className="mt-1 text-sm text-[#666b73]">
                  {profile.primaryTitle}
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl border border-[#1113181a] bg-white" />
            </div>

            <div className="mt-7 grid gap-3">
              {profile.professionalAreas.map((area) => (
                <div
                  className="rounded-2xl border border-[#1113181a] bg-white px-4 py-3.5 text-sm font-medium text-[#2f333a]"
                  key={area}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function HeroLink({ href, label }: { readonly href: string; readonly label: string }) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#1113181a] bg-white px-5 text-sm font-semibold text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f4]"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}
