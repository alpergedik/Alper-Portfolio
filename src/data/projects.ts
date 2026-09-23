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
    context: "personal",
    visibility: "public",
    caseStudyAvailable: false,
    featured: true,
    featuredOrder: 1,
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
    context: "personal",
    visibility: "public",
    caseStudyAvailable: false,
    featured: true,
    featuredOrder: 2,
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
    context: "personal",
    visibility: "hidden",
    caseStudyAvailable: false,
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
    context: "capstone",
    visibility: "public",
    caseStudyAvailable: false,
    featured: true,
    featuredOrder: 3,
  },
  {
    id: "bloom-focus",
    slug: "bloom-focus",
    title: "Bloom Focus",
    summary:
      "A nature-inspired Flutter productivity application that combines focus sessions with plant growth.",
    category: "mobile-application",
    categoryLabel: "Mobile Application / Productivity",
    technologies: [
      { name: "Flutter", category: "mobile" },
      { name: "Dart", category: "language" },
      { name: "Riverpod", category: "mobile" },
      { name: "go_router", category: "mobile" },
      { name: "Hive", category: "database" },
    ],
    media: [],
    sourceUrl: "https://github.com/alpergedik/bloom-focus",
    status: "in-development",
    context: "personal",
    visibility: "public",
    caseStudyAvailable: false,
    featured: true,
    featuredOrder: 4,
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
    visibility: "public",
    caseStudyAvailable: false,
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
    visibility: "public",
    caseStudyAvailable: false,
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
    visibility: "public",
    caseStudyAvailable: false,
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
    visibility: "public",
    caseStudyAvailable: false,
    featured: false,
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return getPublicProjects().find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return getPublicProjects().filter((project) => project.category === category);
}

export function getPublicProjects(projectList: readonly Project[] = projects) {
  return projectList.filter((project) => project.visibility === "public");
}

export function getFeaturedProjects(projectList: readonly Project[] = projects) {
  return getPublicProjects(projectList)
    .filter((project) => project.featured)
    .sort((first, second) => {
      const firstOrder = first.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      const secondOrder = second.featuredOrder ?? Number.MAX_SAFE_INTEGER;

      return firstOrder - secondOrder;
    });
}

export function getMoreProjects(projectList: readonly Project[] = projects) {
  return getPublicProjects(projectList).filter((project) => !project.featured);
}
