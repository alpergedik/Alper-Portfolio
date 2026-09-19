import type { Project, ProjectCategory } from "@/types/portfolio";

export const projects = [
  {
    id: "gedikforge-studio",
    slug: "gedikforge-studio",
    title: "GedikForge Studio",
    summary:
      "A personal multi-agent development environment designed to coordinate specialized AI agents for software and mobile product development.",
    category: "developer-tool",
    categoryLabel: "Developer Tool / Software Platform",
    technologies: [
      { name: "Next.js", category: "frontend-web" },
      { name: "TypeScript", category: "language" },
      { name: "FastAPI", category: "backend" },
      { name: "Python", category: "language" },
      { name: "SQLite", category: "database" },
    ],
    media: [],
    sourceUrl: "https://github.com/alpergedik/GedikForgeStudio",
    status: "in-development",
    caseStudyAvailable: false,
    displayPriority: 1,
    featured: false,
  },
  {
    id: "world-cup-draft-simulator",
    slug: "world-cup-draft-simulator",
    title: "World Cup Draft Simulator",
    summary:
      "A Flutter-based football squad-building and World Cup simulation game with player drafting, tactical styles, chemistry and tournament progression.",
    category: "mobile-game",
    categoryLabel: "Mobile Game",
    technologies: [
      { name: "Flutter", category: "mobile" },
      { name: "Dart", category: "language" },
    ],
    media: [],
    status: "in-development",
    caseStudyAvailable: false,
    displayPriority: 2,
    featured: false,
  },
  {
    id: "projectpilot",
    slug: "projectpilot",
    title: "ProjectPilot",
    summary:
      "A desktop productivity application for managing projects, tasks, Kanban workflows, calendar planning and engineering work.",
    category: "productivity",
    categoryLabel: "Desktop Application / Productivity",
    technologies: [
      { name: "C#", category: "language" },
      { name: ".NET", category: "desktop" },
      { name: "WPF", category: "desktop" },
    ],
    media: [],
    status: "personal-project",
    caseStudyAvailable: false,
    displayPriority: 3,
    featured: false,
  },
  {
    id: "split-battle",
    slug: "split-battle",
    title: "Split Battle",
    summary:
      "A local multiplayer mobile game supporting 1-4 players on a shared device, with modular mini-games, player controls, scoring and round management.",
    category: "mobile-game",
    categoryLabel: "Mobile Game",
    technologies: [
      { name: "Unity", category: "game-development" },
      { name: "C#", category: "language" },
      { name: "Android", category: "mobile" },
    ],
    media: [],
    sourceUrl: "https://github.com/3msd5/AA_Renkli",
    status: "academic-project",
    caseStudyAvailable: false,
    displayPriority: 4,
    featured: false,
  },
  {
    id: "integrated-assignment-environment",
    slug: "integrated-assignment-environment",
    title: "Integrated Assignment Environment",
    summary:
      "A Java desktop application for automated programming assignment evaluation, including ZIP extraction, automated compilation and execution, SQLite integration, configurable output comparison and visual expected-vs-actual diffs.",
    category: "desktop-application",
    categoryLabel: "Desktop Application",
    technologies: [
      { name: "Java", category: "language" },
      { name: "SQLite", category: "database" },
    ],
    media: [],
    sourceUrl: "https://github.com/AycaCetinkaya/CE316-course-project",
    caseStudyAvailable: false,
    displayPriority: 5,
    featured: false,
  },
  {
    id: "tank-rush",
    slug: "tank-rush",
    title: "Tank Rush",
    summary:
      "A 3D tower-defense game built with Unity and C#, including enemy spawning, wave management, player movement, combat mechanics, UI systems and gameplay balancing.",
    category: "game",
    categoryLabel: "Game",
    technologies: [
      { name: "Unity", category: "game-development" },
      { name: "C#", category: "language" },
    ],
    media: [],
    sourceUrl: "https://github.com/CemBC/TankRush",
    caseStudyAvailable: false,
    displayPriority: 6,
    featured: false,
  },
  {
    id: "university-exam-timetabling-system",
    slug: "university-exam-timetabling-system",
    title: "University Exam Timetabling System",
    summary:
      "A Java-based desktop application that generates university final-exam timetables under scheduling constraints and supports CSV import/export.",
    category: "desktop-application",
    categoryLabel: "Desktop Application",
    technologies: [
      { name: "Java", category: "language" },
      { name: "JavaFX", category: "desktop" },
    ],
    media: [],
    sourceUrl: "https://github.com/elifkarsli/Desktop_Application_Project_",
    caseStudyAvailable: false,
    displayPriority: 7,
    featured: false,
  },
  {
    id: "historical-artifact-catalog",
    slug: "historical-artifact-catalog",
    title: "Historical Artifact Catalog",
    summary:
      "A JavaFX desktop application for managing historical artifacts and museum collections, including JSON import/export, search, filtering and image management.",
    category: "desktop-application",
    categoryLabel: "Desktop Application",
    technologies: [
      { name: "Java", category: "language" },
      { name: "JavaFX", category: "desktop" },
    ],
    media: [],
    sourceUrl: "https://github.com/melihcna1/CE-216-Project",
    caseStudyAvailable: false,
    displayPriority: 8,
    featured: false,
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}
