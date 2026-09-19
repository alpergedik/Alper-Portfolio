import type { Metadata } from "next";
import { PortfolioModeProvider } from "@/components/shared/portfolio-mode-provider";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.title,
    template: siteConfig.metadata.titleTemplate,
  },
  description: siteConfig.metadata.description,
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.siteName,
    locale: siteConfig.metadata.locale,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <PortfolioModeProvider>{children}</PortfolioModeProvider>
      </body>
    </html>
  );
}
