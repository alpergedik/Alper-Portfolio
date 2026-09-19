import type { SiteConfig } from "@/types/portfolio";

export const siteConfig = {
  owner: {
    name: "Alper Gedik",
    primaryTitle: "Computer Engineer",
    secondaryTitle: "Software Developer",
    email: "alpergedik46@gmail.com",
  },
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/alpergedik",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alper-gedik-6a28b217b",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:alpergedik46@gmail.com",
    },
  ],
  metadata: {
    title: "Alper Gedik",
    titleTemplate: "%s | Alper Gedik",
    description:
      "Personal portfolio for Alper Gedik, a computer engineer and software developer.",
    siteName: "Alper Gedik - Personal Portfolio",
    locale: "en_US",
  },
} as const satisfies SiteConfig;
