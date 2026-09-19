import { EngineerLanding } from "@/components/engineer/engineer-landing";
import { ProfessionalLanding } from "@/components/professional/professional-landing";
import type { PortfolioData, PortfolioMode, SiteConfig } from "@/types/portfolio";

type PortfolioRootProps = {
  readonly mode: PortfolioMode;
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function PortfolioRoot({
  mode,
  siteConfig,
  portfolioData,
}: PortfolioRootProps) {
  if (mode === "professional") {
    return (
      <ProfessionalLanding
        portfolioData={portfolioData}
        siteConfig={siteConfig}
      />
    );
  }

  return <EngineerLanding portfolioData={portfolioData} siteConfig={siteConfig} />;
}
