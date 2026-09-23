import { EngineerProjectCard } from "@/components/engineer/engineer-project-card";
import { EngineerSection } from "@/components/engineer/engineer-section";
import type { Project } from "@/types/portfolio";

type EngineerProjectsProps = {
  readonly projects: readonly Project[];
};

export function EngineerProjects({ projects }: EngineerProjectsProps) {
  return (
    <EngineerSection
      copy="Real software, mobile, game and engineering work."
      id="projects"
      label="02 / Selected Work"
      title="Projects"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <EngineerProjectCard
            index={index}
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </EngineerSection>
  );
}
