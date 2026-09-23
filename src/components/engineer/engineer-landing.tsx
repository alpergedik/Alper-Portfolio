import { EngineerAbout } from "@/components/engineer/engineer-about";
import { EngineerContact } from "@/components/engineer/engineer-contact";
import { EngineerExperience } from "@/components/engineer/engineer-experience";
import { EngineerFooter } from "@/components/engineer/engineer-footer";
import { EngineerHeader } from "@/components/engineer/engineer-header";
import { EngineerHero } from "@/components/engineer/engineer-hero";
import { EngineerLanguages } from "@/components/engineer/engineer-languages";
import { EngineerProjects } from "@/components/engineer/engineer-projects";
import { EngineerStack } from "@/components/engineer/engineer-stack";
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
    <div className="min-h-screen bg-[#05080b] text-[#f1f7fa]">
      <EngineerHeader siteConfig={siteConfig} />
      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(35,213,245,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(35,213,245,0.045)_1px,transparent_1px)] bg-[size:44px_44px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(35,213,245,0.13),transparent_30%),radial-gradient(circle_at_12%_18%,rgba(54,215,243,0.08),transparent_28%)]"
        />
        <div className="relative">
          <EngineerHero
            portfolioData={portfolioData}
            siteConfig={siteConfig}
          />
          <EngineerAbout profile={portfolioData.profile} />
          <EngineerProjects projects={portfolioData.projects} />
          <EngineerExperience
            education={portfolioData.education}
            experience={portfolioData.experience}
          />
          <EngineerStack technologies={portfolioData.technologies} />
          <EngineerLanguages languages={portfolioData.languages} />
          <EngineerContact siteConfig={siteConfig} />
        </div>
      </main>
      <EngineerFooter siteConfig={siteConfig} />
    </div>
  );
}
