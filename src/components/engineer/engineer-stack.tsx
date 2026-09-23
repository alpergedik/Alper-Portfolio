import { EngineerSection } from "@/components/engineer/engineer-section";
import type { Technology, TechnologyCategory } from "@/types/portfolio";

type EngineerStackProps = {
  readonly technologies: readonly Technology[];
};

const categoryOrder: readonly TechnologyCategory[] = [
  "language",
  "frontend-web",
  "mobile",
  "backend",
  "desktop",
  "game-development",
  "database",
  "tool",
];

const categoryLabels: Record<TechnologyCategory, string> = {
  language: "Languages",
  mobile: "Mobile",
  "frontend-web": "Frontend Web",
  backend: "Backend",
  desktop: "Desktop",
  "game-development": "Game Development",
  database: "Database",
  tool: "Tools",
};

export function EngineerStack({ technologies }: EngineerStackProps) {
  const groupedTechnologies = categoryOrder
    .map((category) => ({
      category,
      items: technologies.filter((technology) => technology.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <EngineerSection
      id="stack"
      label="04 / Stack"
      title="Technologies I Work With"
      copy="A practical toolset shaped by web, mobile, game, and engineering projects."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {groupedTechnologies.map((group, index) => (
          <section
            aria-labelledby={`engineer-stack-${group.category}`}
            className="rounded-[1.35rem] border border-[#23d5f5]/15 bg-[#0e151c]/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.14)]"
            key={group.category}
          >
            <div className="flex items-center justify-between gap-4">
              <h3
                className="text-sm font-semibold text-[#f1f7fa]"
                id={`engineer-stack-${group.category}`}
              >
                {categoryLabels[group.category]}
              </h3>
              <span className="font-mono text-xs text-[#23d5f5]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((technology) => (
                <li
                  className="rounded-full border border-[#22323c] bg-[#05080b] px-3 py-1.5 text-xs font-medium text-[#cfe1e7]"
                  key={technology.name}
                >
                  {technology.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </EngineerSection>
  );
}
