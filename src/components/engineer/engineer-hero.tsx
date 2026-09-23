import { EngineerTerminal } from "@/components/engineer/engineer-terminal";
import type { PortfolioData, SiteConfig, Technology } from "@/types/portfolio";

type EngineerHeroProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

const heroTechnologyNames = ["Flutter", "TypeScript", "Python", "C#", "Git"];

export function EngineerHero({
  siteConfig,
  portfolioData,
}: EngineerHeroProps) {
  const { profile, technologies } = portfolioData;
  const github = siteConfig.socialLinks.find((link) => link.platform === "github");
  const linkedIn = siteConfig.socialLinks.find(
    (link) => link.platform === "linkedin",
  );
  const heroTechnologies = getHeroTechnologies(technologies);
  const heroCopy =
    "Computer Engineer focused on building mobile applications, software products and interactive experiences through thoughtful engineering and product development.";

  return (
    <section className="scroll-mt-24" id="top">
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[680px] lg:grid-cols-[1.04fr_0.96fr] lg:py-12">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#23d5f5]">
            {profile.primaryTitle} {"//"} {profile.secondaryTitle}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#f1f7fa] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Alper.
            <span className="mt-2 block text-[#d9f7ff]">
              I build software from idea to product.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8fa3ad] sm:text-xl">
            {heroCopy}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#23d5f5] px-6 text-sm font-semibold text-[#031015] transition-colors hover:bg-[#8ff1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
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

          <ul
            aria-label="Core technologies"
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroTechnologies.map((technology) => (
              <li
                className="rounded-md border border-[#23d5f5]/18 bg-[#0b1117]/80 px-3 py-1.5 font-mono text-xs text-[#8fa3ad]"
                key={technology.name}
              >
                {technology.name}
              </li>
            ))}
          </ul>
        </div>

        <EngineerTerminal profile={profile} />
      </div>
    </section>
  );
}

function HeroLink({ href, label }: { readonly href: string; readonly label: string }) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#23d5f5]/18 bg-[#0b1117]/80 px-5 text-sm font-semibold text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#05080b]"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}

function getHeroTechnologies(technologies: readonly Technology[]) {
  return heroTechnologyNames
    .map((name) => technologies.find((technology) => technology.name === name))
    .filter((technology): technology is Technology => Boolean(technology));
}
