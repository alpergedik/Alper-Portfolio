import {
  getProjectInteractiveDemo,
  ProjectMedia,
} from "@/components/projects/project-media";
import type { Project, ProjectContext, ProjectStatus } from "@/types/portfolio";

type EngineerFeaturedProjectProps = {
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

export function EngineerFeaturedProject({ project }: EngineerFeaturedProjectProps) {
  const metadata = [
    project.status ? statusLabels[project.status] : null,
    project.context ? contextLabels[project.context] : null,
  ].filter(Boolean);
  const interactiveDemo = getProjectInteractiveDemo(project);

  return (
    <article className="overflow-hidden rounded-[1.45rem] border border-[#23d5f5]/18 bg-[#0e151c]/95 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
      <ProjectMedia
        fallback={<EngineerProjectFallback project={project} />}
        imageSizes="(min-width: 1024px) 48vw, 100vw"
        project={project}
        className="relative min-h-[17rem] overflow-hidden border-b border-[#23d5f5]/14 bg-[#071018] sm:min-h-[20rem]"
      />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#23d5f5]">
            /{String(project.featuredOrder ?? 0).padStart(2, "0")} Featured
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

        <h3 className="mt-4 text-2xl font-semibold text-[#f1f7fa] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#8fa3ad]">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li
              className="rounded-md border border-[#23d5f5]/12 bg-[#0b1117] px-2.5 py-1 font-mono text-xs text-[#d6edf3]"
              key={`${project.id}-${technology.name}`}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        {project.sourceUrl ||
        project.liveUrl ||
        interactiveDemo ||
        project.caseStudyAvailable ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.sourceUrl ? (
              <ProjectAction href={project.sourceUrl} label="Source" />
            ) : null}
            {project.liveUrl ? (
              <ProjectAction href={project.liveUrl} label="Live" />
            ) : null}
            {interactiveDemo ? (
              <ProjectAction href={interactiveDemo.href} label="Interactive Demo" />
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

function ProjectAction({
  href,
  label,
}: {
  readonly href: string;
  readonly label: string;
}) {
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

function EngineerProjectFallback({ project }: { readonly project: Project }) {
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
      className={`relative min-h-[17rem] overflow-hidden border-b border-[#23d5f5]/14 ${tone.background} sm:min-h-[20rem]`}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(35,213,245,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(35,213,245,0.065)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-5 rounded-[1.35rem] border border-[#23d5f5]/18 bg-[#0b1117]/70" />
      <div className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-xl border border-[#23d5f5]/28 bg-[#0e151c] font-mono text-lg font-semibold text-[#23d5f5] shadow-[0_0_30px_rgba(35,213,245,0.08)]">
        {initials}
      </div>
      <div className="absolute bottom-8 left-8 max-w-[calc(100%-4rem)] rounded-md border border-[#23d5f5]/18 bg-[#05080b]/85 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8fa3ad] sm:max-w-[calc(100%-8rem)]">
        {project.categoryLabel}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-8 top-8 hidden h-24 w-32 rounded-xl border border-[#23d5f5]/18 bg-[#0e151c]/75 sm:block"
      />
      <div
        aria-hidden="true"
        className={`absolute bottom-8 right-8 hidden h-11 w-24 rounded-xl sm:block ${tone.block}`}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-20 hidden h-px w-24 rotate-[-18deg] bg-[#23d5f5]/35 sm:block"
      />
    </div>
  );
}

function getPreviewTone(category: Project["category"]) {
  if (category === "mobile-game" || category === "mobile-application") {
    return {
      background: "bg-[#071018]",
      block: "bg-[rgba(35,213,245,0.12)]",
    };
  }

  if (category === "game") {
    return {
      background: "bg-[#080f14]",
      block: "bg-[rgba(54,215,243,0.1)]",
    };
  }

  if (category === "developer-tool") {
    return {
      background: "bg-[#071116]",
      block: "bg-[rgba(35,213,245,0.15)]",
    };
  }

  return {
    background: "bg-[#080d12]",
    block: "bg-[rgba(35,213,245,0.1)]",
  };
}
