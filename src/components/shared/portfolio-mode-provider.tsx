"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultPortfolioMode,
  isPortfolioMode,
  portfolioModeStorageKey,
} from "@/lib/portfolio-mode";
import type { PortfolioMode } from "@/types/portfolio";

type PortfolioModeContextValue = {
  readonly mode: PortfolioMode;
  readonly setMode: (mode: PortfolioMode) => void;
};

const PortfolioModeContext = createContext<PortfolioModeContextValue | null>(
  null,
);

const portfolioModeChangeEvent = "portfolio-mode-change";

type PortfolioModeProviderProps = {
  readonly children: ReactNode;
};

function getPortfolioModeSnapshot(): PortfolioMode {
  if (typeof window === "undefined") {
    return defaultPortfolioMode;
  }

  const savedMode = window.localStorage.getItem(portfolioModeStorageKey);

  return isPortfolioMode(savedMode) ? savedMode : defaultPortfolioMode;
}

function subscribeToPortfolioModeChange(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(portfolioModeChangeEvent, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(portfolioModeChangeEvent, onChange);
  };
}

export function PortfolioModeProvider({
  children,
}: PortfolioModeProviderProps) {
  const mode = useSyncExternalStore(
    subscribeToPortfolioModeChange,
    getPortfolioModeSnapshot,
    () => defaultPortfolioMode,
  );

  useEffect(() => {
    document.documentElement.dataset.portfolioMode = mode;
  }, [mode]);

  const setMode = useCallback((nextMode: PortfolioMode) => {
    window.localStorage.setItem(portfolioModeStorageKey, nextMode);
    window.dispatchEvent(new Event(portfolioModeChangeEvent));
  }, []);

  const value = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode, setMode],
  );

  return (
    <PortfolioModeContext.Provider value={value}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);

  if (!context) {
    throw new Error("usePortfolioMode must be used inside PortfolioModeProvider");
  }

  return context;
}
