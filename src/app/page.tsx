import { PortfolioRoot } from "@/components/shared/portfolio-root";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { defaultPortfolioMode } from "@/lib/portfolio-mode";

export default function Home() {
  return (
    <PortfolioRoot
      mode={defaultPortfolioMode}
      portfolioData={portfolioData}
      siteConfig={siteConfig}
    />
  );
}
