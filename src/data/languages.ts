import type { LanguageSkill } from "@/types/portfolio";

export const languages = [
  {
    language: "Turkish",
    proficiency: "Native",
  },
  {
    language: "English",
    proficiency: "B2",
  },
  {
    language: "German",
    proficiency: "B1",
  },
] as const satisfies readonly LanguageSkill[];
