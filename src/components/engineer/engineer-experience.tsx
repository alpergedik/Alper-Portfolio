import { EngineerSection } from "@/components/engineer/engineer-section";
import type { Education, Experience } from "@/types/portfolio";

type EngineerExperienceProps = {
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
};

export function EngineerExperience({
  experience,
  education,
}: EngineerExperienceProps) {
  const sortedExperience = [...experience].sort(
    (first, second) => first.priority - second.priority,
  );

  return (
    <EngineerSection
      id="experience"
      label="03 / Experience"
      title="Experience & Education"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[#23d5f5]/18">
          {sortedExperience.map((item) => {
            const isSecondary = item.visibility === "secondary";

            return (
              <article className="relative pl-11" key={item.id}>
                <span
                  aria-hidden="true"
                  className={`absolute left-[0.58rem] top-4 h-3 w-3 rounded-full border border-[#23d5f5] ${
                    isSecondary
                      ? "bg-[#05080b]"
                      : "bg-[#23d5f5] shadow-[0_0_22px_rgba(35,213,245,0.4)]"
                  }`}
                />
                <div
                  className={`rounded-[1.35rem] border bg-[#0e151c]/95 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ${
                    isSecondary
                      ? "border-white/10 p-4 opacity-80 sm:p-5"
                      : "border-[#23d5f5]/18 p-5 sm:p-6"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#23d5f5]">
                        {isSecondary
                          ? "Secondary node"
                          : "Primary technical node"}
                      </p>
                      <h3
                        className={`mt-3 font-semibold text-[#f1f7fa] ${
                          isSecondary ? "text-lg" : "text-xl"
                        }`}
                      >
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#d6edf3]">
                        {item.organization}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-[#61737d] sm:text-right">
                      <p>{item.dateLabel}</p>
                      {item.location ? <p className="mt-1">{item.location}</p> : null}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#8fa3ad]">
                    {item.summary}
                  </p>
                  {item.highlights.length > 0 ? (
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-[#8fa3ad]">
                      {item.highlights.map((highlight) => (
                        <li className="flex gap-3" key={highlight}>
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#23d5f5]"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-[1.35rem] border border-[#14242d] bg-[#0b1117]/55 p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#23d5f5]">
            Education
          </p>
          {education.map((item) => (
            <article
              className="mt-4 rounded-[1.1rem] border border-[#23d5f5]/18 bg-[#0e151c]/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.16)]"
              key={item.id}
            >
              <h3 className="text-lg font-semibold text-[#f1f7fa]">
                {item.institution}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#d6edf3]">
                {item.credential}
                {item.field ? `, ${item.field}` : ""}
              </p>
              <div className="mt-4 border-t border-[#23d5f5]/16 pt-4 font-mono text-xs text-[#61737d]">
                <p>{item.dateLabel}</p>
                {item.location ? <p className="mt-1">{item.location}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </EngineerSection>
  );
}
