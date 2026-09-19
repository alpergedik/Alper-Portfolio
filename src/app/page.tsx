import { PortfolioRoot } from "@/components/shared/portfolio-root";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  return <PortfolioRoot portfolioData={portfolioData} siteConfig={siteConfig} />;
}
