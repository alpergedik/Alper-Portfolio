import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Technology, TechnologyCategory } from "@/types/portfolio";

type ProfessionalStackProps = {
  readonly technologies: readonly Technology[];
};

const categoryLabels: Record<TechnologyCategory, string> = {
  language: "Languages",
  mobile: "Mobile",
  "frontend-web": "Frontend / Web",
  backend: "Backend",
  desktop: "Desktop",
  "game-development": "Game Development",
  database: "Database",
  tool: "Tools",
};

const categoryOrder: readonly TechnologyCategory[] = [
  "language",
  "mobile",
  "frontend-web",
  "backend",
  "desktop",
  "game-development",
  "database",
  "tool",
];

export function ProfessionalStack({ technologies }: ProfessionalStackProps) {
  const groupedTechnologies = categoryOrder
    .map((category) => ({
      category,
      items: technologies.filter((technology) => technology.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <ProfessionalSection
      eyebrow="Stack"
      id="stack"
      title="Technologies I Work With"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groupedTechnologies.map((group) => (
          <section
            aria-labelledby={`stack-${group.category}`}
            className="rounded-[1.5rem] border border-[#1113181a] bg-white p-5 shadow-[0_18px_60px_rgba(17,19,24,0.035)]"
            key={group.category}
          >
            <h3
              className="text-sm font-semibold text-[#111318]"
              id={`stack-${group.category}`}
            >
              {categoryLabels[group.category]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((technology) => (
                <li
                  className="rounded-full bg-[#f0f1ee] px-3 py-1 text-sm font-medium text-[#2f333a]"
                  key={`${group.category}-${technology.name}`}
                >
                  {technology.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ProfessionalSection>
  );
}
