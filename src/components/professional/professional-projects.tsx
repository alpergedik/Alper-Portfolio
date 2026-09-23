import { getFeaturedProjects, getMoreProjects } from "@/data/projects";
import { ProfessionalFeaturedProject } from "@/components/professional/professional-featured-project";
import { ProfessionalMoreProjectCard } from "@/components/professional/professional-more-project-card";
import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Project } from "@/types/portfolio";

type ProfessionalProjectsProps = {
  readonly projects: readonly Project[];
};

export function ProfessionalProjects({ projects }: ProfessionalProjectsProps) {
  const featuredProjects = getFeaturedProjects(projects);
  const moreProjects = getMoreProjects(projects);

  return (
    <ProfessionalSection
      copy="Selected software, mobile, game and engineering work."
      eyebrow="Projects"
      id="projects"
      title="Projects"
    >
      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <ProfessionalFeaturedProject
            index={index}
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {moreProjects.length > 0 ? (
        <section className="mt-12" aria-labelledby="professional-more-projects">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3b6ef5]">
                More Projects
              </p>
              <h3
                className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#111318]"
                id="professional-more-projects"
              >
                Additional Work
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#666b73]">
              Additional academic, game and engineering projects.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {moreProjects.map((project) => (
              <ProfessionalMoreProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>
      ) : null}
    </ProfessionalSection>
  );
}
