import type { PortfolioData, SiteConfig } from "@/types/portfolio";

type EngineerLandingProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function EngineerLanding({
  siteConfig,
  portfolioData,
}: EngineerLandingProps) {
  return (
    <main className="min-h-screen bg-[#05070b] text-[#e6f7ff]">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20 font-mono sm:px-10">
        <p className="text-sm text-[#60e6ff]">mode: engineer</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-normal sm:text-6xl">
          {siteConfig.owner.name}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#9fb7c0]">
          Engineer Mode placeholder. This presentation layer is intentionally
          separate from the shared portfolio data source.
        </p>
        <p className="mt-8 text-sm text-[#9fb7c0]">
          data.projects={portfolioData.projects.length}
          <br />
          data.languages={portfolioData.languages.length}
        </p>
      </section>
    </main>
  );
}
