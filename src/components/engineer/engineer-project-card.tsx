import { EngineerProjectMedia } from "@/components/engineer/engineer-project-media";
import type { Project, ProjectContext, ProjectStatus } from "@/types/portfolio";

type EngineerProjectCardProps = {
  readonly project: Project;
  readonly index: number;
};

const statusLabels: Record<ProjectStatus, string> = {
  "in-development": "In development",
  completed: "Completed",
};

const contextLabels: Record<ProjectContext, string> = {
  personal: "Personal",
  academic: "Academic",
  capstone: "Capstone",
};

export function EngineerProjectCard({
  project,
  index,
}: EngineerProjectCardProps) {
  const metadata = [
    project.status ? statusLabels[project.status] : null,
    project.context ? contextLabels[project.context] : null,
  ].filter(Boolean);

  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-[#23d5f5]/16 bg-[#0e151c]/95 shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition-colors hover:border-[#23d5f5]/42">
      <EngineerProjectMedia project={project} />
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[#23d5f5]">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8fa3ad]">
            {project.categoryLabel}
          </span>
          {metadata.map((item) => (
            <span
              className="rounded-md border border-[#23d5f5]/16 bg-[#0b1117] px-2.5 py-1 font-mono text-[0.7rem] text-[#8fa3ad]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-[#f1f7fa] sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#8fa3ad]">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li
              className="rounded-md border border-[#23d5f5]/12 bg-[#0b1117] px-2.5 py-1 font-mono text-xs text-[#d6edf3]"
              key={`${project.id}-${technology.name}`}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        {project.sourceUrl || project.liveUrl || project.caseStudyAvailable ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.sourceUrl ? (
              <ProjectAction href={project.sourceUrl} label="Source" />
            ) : null}
            {project.liveUrl ? (
              <ProjectAction href={project.liveUrl} label="Live" />
            ) : null}
            {project.caseStudyAvailable ? (
              <ProjectAction href={`#${project.slug}`} label="Case Study" />
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ProjectAction({ href, label }: { readonly href: string; readonly label: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="inline-flex min-h-10 items-center rounded-md border border-[#23d5f5]/20 px-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0e151c]"
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}
