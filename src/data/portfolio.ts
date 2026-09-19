import type { PortfolioData } from "@/types/portfolio";

export const portfolioData = {
  projects: [],
  experience: [],
  education: [],
  technologies: [],
} as const satisfies PortfolioData;
