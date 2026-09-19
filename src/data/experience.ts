import type { Experience } from "@/types/portfolio";

export const experience = [
  {
    id: "pilenpak-it-intern",
    role: "IT Intern",
    organization: "PilenPak Ambalaj San. ve Tic. A.Ş.",
    location: "Manisa, Türkiye",
    startDate: "2025-06-16",
    endDate: "2025-07-11",
    dateLabel: "16 June 2025 - 11 July 2025",
    summary:
      "Technical internship focused on web interface improvements, ERP data workflows, and practical database work.",
    highlights: [
      "Contributed to web design and UI improvements.",
      "Performed analysis and data processing in ERP systems.",
      "Gained practical experience with JavaScript, SQL, and PL/SQL.",
    ],
    visibility: "primary",
    priority: 1,
  },
  {
    id: "berlin-brandenburg-airport-ground-service-handling",
    role: "Ground Service Handling Staff",
    organization: "Berlin Brandenburg Airport",
    location: "Berlin, Germany",
    startDate: "2023-07-10",
    endDate: "2023-09-09",
    dateLabel: "10 July 2023 - 9 September 2023",
    summary:
      "Operational airport role supporting passenger services, ground operations, and coordination.",
    highlights: [
      "Supported passenger services.",
      "Worked within ground operations workflows.",
      "Contributed to operational coordination.",
    ],
    visibility: "secondary",
    priority: 2,
  },
] as const satisfies readonly Experience[];
