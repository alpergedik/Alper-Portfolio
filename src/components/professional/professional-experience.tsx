import { ProfessionalSection } from "@/components/professional/professional-section";
import type { Education, Experience } from "@/types/portfolio";

type ProfessionalExperienceProps = {
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
};

export function ProfessionalExperience({
  experience,
  education,
}: ProfessionalExperienceProps) {
  const sortedExperience = [...experience].sort(
    (first, second) => first.priority - second.priority,
  );

  return (
    <ProfessionalSection
      eyebrow="Experience"
      id="experience"
      title="Experience & Education"
    >
      <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
        <div className="space-y-4">
          {sortedExperience.map((item) => (
            <article
              className={`rounded-[1.5rem] border bg-white p-5 shadow-[0_18px_60px_rgba(17,19,24,0.04)] sm:p-6 ${
                item.visibility === "secondary"
                  ? "border-[#11131812] opacity-80"
                  : "border-[#1113181a]"
              }`}
              key={item.id}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3b6ef5]">
                    {item.visibility === "primary"
                      ? "Technical experience"
                      : "Additional experience"}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#111318]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#2f333a]">
                    {item.organization}
                  </p>
                </div>
                <div className="text-sm text-[#666b73] sm:text-right">
                  <p>{item.dateLabel}</p>
                  {item.location ? <p>{item.location}</p> : null}
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#666b73]">
                {item.summary}
              </p>
              {item.highlights.length > 0 ? (
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[#666b73]">
                  {item.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b6ef5]"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3b6ef5]">
            Education
          </p>
          {education.map((item) => (
            <article
              className="rounded-[1.5rem] border border-[#1113181a] bg-white p-5 shadow-[0_16px_50px_rgba(17,19,24,0.035)] sm:p-6"
              key={item.id}
            >
              <h3 className="text-lg font-semibold text-[#111318]">
                {item.institution}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#2f333a]">
                {item.credential}
                {item.field ? `, ${item.field}` : ""}
              </p>
              <div className="mt-4 border-t border-[#1113181a] pt-4 text-sm text-[#666b73]">
                <p>{item.dateLabel}</p>
                {item.location ? <p className="mt-1">{item.location}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </ProfessionalSection>
  );
}
