import type { Education } from "@/types/portfolio";

export const education = [
  {
    id: "izmir-university-of-economics-computer-engineering",
    institution: "Izmir University of Economics",
    credential: "Bachelor's Degree",
    field: "Computer Engineering",
    location: "Izmir, Türkiye",
    startDate: "2020",
    endDate: "2026",
    dateLabel: "2020 - 2026",
  },
] as const satisfies readonly Education[];
