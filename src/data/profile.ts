import type { Profile } from "@/types/portfolio";

export const profile = {
  name: "Alper Gedik",
  primaryTitle: "Computer Engineer",
  secondaryTitle: "Software Developer",
  professionalAreas: [
    "Software Engineering",
    "Mobile Application Development",
    "Game Development",
    "Product Development",
  ],
  bio: "Alper Gedik is a Computer Engineering graduate with experience building desktop applications, mobile applications, games, and software projects through academic and personal work. He is interested in building complete software products, learning modern technologies, and improving both engineering quality and user experience.",
} as const satisfies Profile;
