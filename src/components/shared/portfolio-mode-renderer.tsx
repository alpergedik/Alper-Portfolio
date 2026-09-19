"use client";

import type { ReactNode } from "react";
import { usePortfolioMode } from "@/components/shared/portfolio-mode-provider";

type PortfolioModeRendererProps = {
  readonly professional: ReactNode;
  readonly engineer: ReactNode;
};

export function PortfolioModeRenderer({
  professional,
  engineer,
}: PortfolioModeRendererProps) {
  const { mode } = usePortfolioMode();

  return mode === "engineer" ? engineer : professional;
}
