import type { Project } from "@/types/portfolio";

type ProfessionalMoreProjectCardProps = {
  readonly project: Project;
};

export function ProfessionalMoreProjectCard({
  project,
}: ProfessionalMoreProjectCardProps) {
  return (
    <article className="rounded-[1.25rem] border border-[#1113181a] bg-white p-5 shadow-[0_14px_44px_rgba(17,19,24,0.035)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3b6ef5]">
        {project.categoryLabel}
      </p>
      <h3 className="mt-3 text-xl font-semibold leading-tight text-[#111318]">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#666b73]">{project.summary}</p>

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

      {project.sourceUrl ? (
        <a
          className="mt-5 inline-flex min-h-10 items-center rounded-full border border-[#1113181a] px-4 text-sm font-semibold text-[#111318] transition-colors hover:border-[#3b6ef5] hover:text-[#3b6ef5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b6ef5] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          href={project.sourceUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Source
        </a>
      ) : null}
    </article>
  );
}
