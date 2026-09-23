import type { Project } from "@/types/portfolio";

type EngineerMoreProjectCardProps = {
  readonly project: Project;
};

export function EngineerMoreProjectCard({ project }: EngineerMoreProjectCardProps) {
  return (
    <article className="rounded-[1.15rem] border border-[#23d5f5]/14 bg-[#0e151c]/82 p-4">
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#23d5f5]">
        {project.categoryLabel}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-[#f1f7fa]">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#8fa3ad]">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li
            className="rounded-md border border-[#23d5f5]/12 bg-[#0b1117] px-2 py-1 font-mono text-[0.7rem] text-[#d6edf3]"
            key={`${project.id}-${technology.name}`}
          >
            {technology.name}
          </li>
        ))}
      </ul>

      {project.sourceUrl ? (
        <a
          className="mt-5 inline-flex min-h-9 items-center rounded-md border border-[#23d5f5]/20 px-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#f1f7fa] transition-colors hover:border-[#23d5f5] hover:text-[#23d5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23d5f5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0e151c]"
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
