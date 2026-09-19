import { ProfessionalProjectCard } from "@/components/professional/professional-project-card";
import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Project } from "@/types/portfolio";

type ProfessionalProjectsProps = {
  readonly projects: readonly Project[];
};

export function ProfessionalProjects({ projects }: ProfessionalProjectsProps) {
  return (
    <ProfessionalSection
      copy="A selection of software, mobile, game and engineering work."
      eyebrow="Projects"
      id="projects"
      title="Projects"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProfessionalProjectCard key={project.id} project={project} />
        ))}
      </div>
    </ProfessionalSection>
  );
}
