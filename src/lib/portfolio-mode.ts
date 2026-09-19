import type { PortfolioMode } from "@/types/portfolio";

export const portfolioModes = ["professional", "engineer"] as const;

export const defaultPortfolioMode: PortfolioMode = "professional";

export const portfolioModeStorageKey = "alper-portfolio-mode";

export function isPortfolioMode(value: string | null): value is PortfolioMode {
  return portfolioModes.some((mode) => mode === value);
}
