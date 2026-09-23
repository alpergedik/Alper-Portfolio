import { EngineerSection } from "@/components/engineer/engineer-section";
import type { LanguageSkill } from "@/types/portfolio";

type EngineerLanguagesProps = {
  readonly languages: readonly LanguageSkill[];
};

export function EngineerLanguages({ languages }: EngineerLanguagesProps) {
  return (
    <EngineerSection
      id="languages"
      label="05 / Languages"
      title="Languages"
      copy="Communication coverage for technical collaboration and international teams."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((language) => (
          <article
            className="rounded-[1.35rem] border border-[#23d5f5]/15 bg-[#0e151c]/95 p-5"
            key={language.language}
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#23d5f5]">
              language
            </p>
            <h3 className="mt-3 text-lg font-semibold text-[#f1f7fa]">
              {language.language}
            </h3>
            <p className="mt-2 text-sm text-[#8fa3ad]">{language.proficiency}</p>
          </article>
        ))}
      </div>
    </EngineerSection>
  );
}
