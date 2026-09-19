import { EngineerLanding } from "@/components/engineer/engineer-landing";
import { ProfessionalLanding } from "@/components/professional/professional-landing";
import { PortfolioModeRenderer } from "@/components/shared/portfolio-mode-renderer";
import type { PortfolioData, SiteConfig } from "@/types/portfolio";

type PortfolioRootProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function PortfolioRoot({
  siteConfig,
  portfolioData,
}: PortfolioRootProps) {
  return (
    <PortfolioModeRenderer
      engineer={
        <EngineerLanding portfolioData={portfolioData} siteConfig={siteConfig} />
      }
      professional={
        <ProfessionalLanding
          portfolioData={portfolioData}
          siteConfig={siteConfig}
        />
      }
    />
  );
}
