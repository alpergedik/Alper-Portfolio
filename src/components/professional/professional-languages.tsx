import { ProfessionalSection } from "@/components/professional/professional-section";
import type { LanguageSkill } from "@/types/portfolio";

type ProfessionalLanguagesProps = {
  readonly languages: readonly LanguageSkill[];
};

export function ProfessionalLanguages({ languages }: ProfessionalLanguagesProps) {
  return (
    <ProfessionalSection
      className="py-8 sm:py-10"
      eyebrow="Languages"
      title="Language Skills"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {languages.map((item) => (
          <div
            className="rounded-2xl border border-[#1113181a] bg-white px-4 py-4"
            key={item.language}
          >
            <p className="text-lg font-semibold text-[#111318]">
              {item.language}
            </p>
            <p className="mt-2 text-sm font-medium text-[#666b73]">
              {item.proficiency}
            </p>
          </div>
        ))}
      </div>
    </ProfessionalSection>
  );
}
