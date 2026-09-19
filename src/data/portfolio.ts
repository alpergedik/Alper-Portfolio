import type { PortfolioData } from "@/types/portfolio";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { languages } from "@/data/languages";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export const portfolioData = {
  profile,
  projects,
  experience,
  education,
  languages,
  technologies,
} as const satisfies PortfolioData;
