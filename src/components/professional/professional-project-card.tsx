import type { Project, ProjectContext, ProjectStatus } from "@/types/portfolio";

type ProfessionalProjectCardProps = {
  readonly project: Project;
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

export function ProfessionalProjectCard({
  project,
}: ProfessionalProjectCardProps) {
  const metadata = [
    project.status ? statusLabels[project.status] : null,
    project.context ? contextLabels[project.context] : null,
  ].filter(Boolean);

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#1113181a] bg-white shadow-[0_16px_52px_rgba(17,19,24,0.04)] transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <ProjectMediaPlaceholder project={project} />
      <div className="p-5 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3b6ef5]">
            {project.categoryLabel}
          </span>
          {metadata.map((item) => (
            <span
              className="rounded-full bg-[#f0f1ee] px-3 py-1 text-xs font-medium text-[#666b73]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="mt-3.5 text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-[#111318] sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-6 text-[#666b73]">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li
              className="rounded-full border border-[#1113181a] px-2.5 py-1 text-xs font-medium text-[#2f333a]"
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
      className="inline-flex min-h-10 items-center rounded-full border border-[#1113181a] px-4 text-sm font-semibold text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}

function ProjectMediaPlaceholder({ project }: { readonly project: Project }) {
  const initials = project.title
    .split(/\s+/)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const tone = getPreviewTone(project.category);

  return (
    <div
      aria-label={`${project.title} project preview surface`}
      className={`relative h-44 overflow-hidden border-b border-[#1113181a] ${tone.background} sm:h-48`}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,19,24,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,24,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-5 rounded-[1.25rem] border border-[#1113181a] bg-white/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
      <div className={`absolute left-8 top-8 h-14 w-14 rounded-2xl ${tone.accent}`} />
      <div className="absolute left-11 top-11 text-sm font-semibold tracking-[-0.02em] text-[#111318]">
        {initials}
      </div>
      <div className="absolute bottom-8 left-8 max-w-[calc(100%-8rem)] truncate rounded-full border border-[#1113181a] bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#666b73]">
        {project.categoryLabel}
      </div>
      <div className="absolute right-7 top-8 h-20 w-28 rounded-[1.25rem] border border-[#1113181a] bg-white/75" />
      <div className={`absolute bottom-8 right-8 h-10 w-20 rounded-2xl ${tone.block}`} />
    </div>
  );
}

function getPreviewTone(category: Project["category"]) {
  if (category === "mobile-game") {
    return {
      background: "bg-[#eef2f6]",
      accent: "bg-[#3b6ef5]/12",
      block: "bg-[#3b6ef5]/10",
    };
  }

  if (category === "game") {
    return {
      background: "bg-[#f1f2ee]",
      accent: "bg-[#111318]/10",
      block: "bg-[#3b6ef5]/12",
    };
  }

  if (category === "developer-tool") {
    return {
      background: "bg-[#eef1f0]",
      accent: "bg-[#3b6ef5]/15",
      block: "bg-[#111318]/10",
    };
  }

  return {
    background: "bg-[#f0f1ee]",
    accent: "bg-[#111318]/10",
    block: "bg-[#3b6ef5]/10",
  };
}
