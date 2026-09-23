import {
  getProjectInteractiveDemo,
  ProjectMedia,
} from "@/components/projects/project-media";
import type { Project, ProjectContext, ProjectStatus } from "@/types/portfolio";

type ProfessionalFeaturedProjectProps = {
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

export function ProfessionalFeaturedProject({
  project,
  index,
}: ProfessionalFeaturedProjectProps) {
  const metadata = [
    project.status ? statusLabels[project.status] : null,
    project.context ? contextLabels[project.context] : null,
  ].filter(Boolean);
  const interactiveDemo = getProjectInteractiveDemo(project);
  const isReversed = index % 2 === 1;

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#1113181a] bg-white shadow-[0_22px_70px_rgba(17,19,24,0.06)]">
      <div
        className={`grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <ProjectMedia
          fallback={<ProfessionalProjectFallback project={project} />}
          imageSizes="(min-width: 1024px) 54vw, 100vw"
          priority={index === 0}
          project={project}
          className="relative min-h-[18rem] overflow-hidden bg-[#f0f1ee] lg:min-h-[28rem]"
        />

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3b6ef5]">
              Featured {String(project.featuredOrder ?? index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666b73]">
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

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#111318] sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-[#666b73]">
            {project.summary}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li
                className="rounded-full border border-[#1113181a] px-3 py-1.5 text-xs font-medium text-[#2f333a]"
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
            <div className="mt-7 flex flex-wrap gap-3">
              {project.sourceUrl ? (
                <ProjectAction href={project.sourceUrl} label="Source" />
              ) : null}
              {project.liveUrl ? (
                <ProjectAction href={project.liveUrl} label="Live" />
              ) : null}
              {interactiveDemo ? (
                <ProjectAction
                  href={interactiveDemo.href}
                  label="Interactive Demo"
                />
              ) : null}
              {project.caseStudyAvailable ? (
                <ProjectAction href={`#${project.slug}`} label="Case Study" />
              ) : null}
            </div>
          ) : null}
        </div>
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
      className="inline-flex min-h-11 items-center rounded-full border border-[#1113181a] px-5 text-sm font-semibold text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}

function ProfessionalProjectFallback({ project }: { readonly project: Project }) {
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
      className={`relative min-h-[18rem] overflow-hidden border-b border-[#1113181a] ${tone.background} lg:h-full lg:border-b-0`}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,19,24,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,24,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute inset-6 rounded-[1.55rem] border border-[#11131814] bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]" />
      <div
        aria-hidden="true"
        className={`absolute left-10 top-10 h-20 w-20 rounded-[1.35rem] ${tone.accent}`}
      />
      <div className="absolute left-10 top-10 flex h-20 w-20 items-center justify-center rounded-[1.35rem] border border-[#11131812] bg-white/75 text-xl font-semibold tracking-[-0.03em] text-[#111318] shadow-[0_14px_34px_rgba(17,19,24,0.055)]">
        <span>{initials}</span>
      </div>
      <div className="absolute bottom-10 left-10 max-w-[calc(100%-5rem)] rounded-full border border-[#11131814] bg-white/82 px-4 py-2 text-[0.7rem] font-semibold uppercase leading-4 tracking-[0.14em] text-[#666b73] sm:max-w-[calc(100%-10rem)]">
        {project.categoryLabel}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-10 top-12 hidden h-24 w-36 rounded-[1.35rem] border border-[#11131812] bg-white/55 sm:block"
      />
      <div
        aria-hidden="true"
        className={`absolute bottom-12 right-12 hidden h-11 w-32 rounded-full sm:block ${tone.block}`}
      />
      <div
        aria-hidden="true"
        className={`absolute bottom-20 right-24 hidden h-px w-36 rotate-[-18deg] sm:block ${tone.line}`}
      />
    </div>
  );
}

function getPreviewTone(category: Project["category"]) {
  if (category === "mobile-game" || category === "mobile-application") {
    return {
      background: "bg-[#eef2f6]",
      accent: "bg-[rgba(59,110,245,0.12)]",
      block: "bg-[rgba(59,110,245,0.1)]",
      line: "bg-[rgba(59,110,245,0.2)]",
    };
  }

  if (category === "game") {
    return {
      background: "bg-[#f1f2ee]",
      accent: "bg-[rgba(17,19,24,0.1)]",
      block: "bg-[rgba(59,110,245,0.12)]",
      line: "bg-[rgba(17,19,24,0.16)]",
    };
  }

  if (category === "developer-tool") {
    return {
      background: "bg-[#eef1f0]",
      accent: "bg-[rgba(59,110,245,0.15)]",
      block: "bg-[rgba(17,19,24,0.1)]",
      line: "bg-[rgba(59,110,245,0.24)]",
    };
  }

  return {
    background: "bg-[#f0f1ee]",
    accent: "bg-[rgba(17,19,24,0.1)]",
    block: "bg-[rgba(59,110,245,0.1)]",
    line: "bg-[rgba(17,19,24,0.14)]",
  };
}
