import { ProfessionalAbout } from "@/components/professional/professional-about";
import { ProfessionalContact } from "@/components/professional/professional-contact";
import { ProfessionalExperience } from "@/components/professional/professional-experience";
import { ProfessionalFooter } from "@/components/professional/professional-footer";
import { ProfessionalHeader } from "@/components/professional/professional-header";
import { ProfessionalHero } from "@/components/professional/professional-hero";
import { ProfessionalLanguages } from "@/components/professional/professional-languages";
import { ProfessionalProjects } from "@/components/professional/professional-projects";
import { ProfessionalStack } from "@/components/professional/professional-stack";
import type { PortfolioData, SiteConfig } from "@/types/portfolio";

type ProfessionalLandingProps = {
  readonly siteConfig: SiteConfig;
  readonly portfolioData: PortfolioData;
};

export function ProfessionalLanding({
  siteConfig,
  portfolioData,
}: ProfessionalLandingProps) {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#111318]">
      <ProfessionalHeader siteConfig={siteConfig} />
      <main>
        <ProfessionalHero
          portfolioData={portfolioData}
          siteConfig={siteConfig}
        />
        <ProfessionalAbout profile={portfolioData.profile} />
        <ProfessionalProjects projects={portfolioData.projects} />
        <ProfessionalExperience
          education={portfolioData.education}
          experience={portfolioData.experience}
        />
        <ProfessionalStack technologies={portfolioData.technologies} />
        <ProfessionalLanguages languages={portfolioData.languages} />
        <ProfessionalContact siteConfig={siteConfig} />
      </main>
      <ProfessionalFooter siteConfig={siteConfig} />
    </div>
  );
}
