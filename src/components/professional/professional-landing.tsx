import type { PortfolioData, SiteConfig } from "@/types/portfolio";

type ProfessionalLandingProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function ProfessionalLanding({
  siteConfig,
  portfolioData,
}: ProfessionalLandingProps) {
  const { owner, socialLinks } = siteConfig;
  const { profile } = portfolioData;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20 sm:px-10">
        <p className="text-sm font-medium uppercase text-muted">
          Portfolio foundation
        </p>
        <div className="mt-5 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
            {owner.name}
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted sm:text-2xl">
            {owner.primaryTitle} / {owner.secondaryTitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            {profile.bio}
          </p>
        </div>

        <nav
          aria-label="Public profiles"
          className="mt-10 flex flex-wrap gap-3"
        >
          {socialLinks.map((link) => (
            <a
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
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
        </nav>

        <dl className="mt-16 grid gap-4 border-t border-border pt-8 text-sm text-muted sm:grid-cols-5">
          <div>
            <dt className="font-medium text-foreground">Projects</dt>
            <dd className="mt-1">{portfolioData.projects.length}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Experience</dt>
            <dd className="mt-1">{portfolioData.experience.length}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Education</dt>
            <dd className="mt-1">{portfolioData.education.length}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Technologies</dt>
            <dd className="mt-1">{portfolioData.technologies.length}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Languages</dt>
            <dd className="mt-1">{portfolioData.languages.length}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
