import { EngineerFeaturedProject } from "@/components/engineer/engineer-featured-project";
import { EngineerMoreProjectCard } from "@/components/engineer/engineer-more-project-card";
import { EngineerSection } from "@/components/engineer/engineer-section";
import { getFeaturedProjects, getMoreProjects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

type EngineerProjectsProps = {
  readonly projects: readonly Project[];
};

export function EngineerProjects({ projects }: EngineerProjectsProps) {
  const featuredProjects = getFeaturedProjects(projects);
  const moreProjects = getMoreProjects(projects);

  return (
    <EngineerSection
      copy="Selected builds across software, mobile and game development."
      id="projects"
      label="02 / Selected Work"
      title="Projects"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <EngineerFeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {moreProjects.length > 0 ? (
        <section className="mt-12" aria-labelledby="engineer-more-projects">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#23d5f5]">
                More Projects
              </p>
              <h3
                className="mt-2 text-2xl font-semibold text-[#f1f7fa]"
                id="engineer-more-projects"
              >
                Secondary Nodes
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#8fa3ad]">
              Additional builds across software, games and engineering.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {moreProjects.map((project) => (
              <EngineerMoreProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}
    </EngineerSection>
  );
}
