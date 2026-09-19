export type PortfolioMode = "professional" | "engineer";

export type SocialPlatform = "github" | "linkedin" | "email";

export type SocialLink = {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly href: string;
};

export type ProfessionalArea =
  | "Software Engineering"
  | "Mobile Application Development"
  | "Game Development"
  | "Product Development";

export type Profile = {
  readonly name: string;
  readonly primaryTitle: string;
  readonly secondaryTitle: string;
  readonly professionalAreas: readonly ProfessionalArea[];
  readonly bio: string;
};

export type SiteConfig = {
  readonly owner: {
    readonly name: string;
    readonly primaryTitle: string;
    readonly secondaryTitle: string;
    readonly email: string;
  };
  readonly socialLinks: readonly SocialLink[];
  readonly metadata: {
    readonly title: string;
    readonly titleTemplate: string;
    readonly description: string;
    readonly siteName: string;
    readonly locale: string;
  };
};

export type ProjectCategory =
  | "developer-tool"
  | "software-platform"
  | "mobile-game"
  | "desktop-application"
  | "productivity"
  | "game"
  | "academic-project"
  | "other";

export type TechnologyCategory =
  | "language"
  | "mobile"
  | "frontend-web"
  | "backend"
  | "desktop"
  | "game-development"
  | "database"
  | "tool";

export type ProjectTechnology = {
  readonly name: string;
  readonly category: TechnologyCategory;
};

export type ProjectStatus =
  | "in-development"
  | "personal-project"
  | "academic-project"
  | "completed";

export type ProjectMediaVariant =
  | "video"
  | "gameplay"
  | "interactive-demo"
  | "mobile-demo"
  | "screenshot-gallery"
  | "static-image";

type ProjectMediaBase = {
  readonly title: string;
};

export type ProjectVideoMedia = ProjectMediaBase & {
  readonly variant: "video" | "gameplay" | "mobile-demo";
  readonly src: string;
  readonly alt?: string;
  readonly poster?: string;
};

export type ProjectInteractiveDemoMedia = ProjectMediaBase & {
  readonly variant: "interactive-demo";
  readonly href: string;
  readonly fallbackImage?: string;
};

export type ProjectScreenshot = {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
};

export type ProjectScreenshotGalleryMedia = ProjectMediaBase & {
  readonly variant: "screenshot-gallery";
  readonly images: readonly ProjectScreenshot[];
};

export type ProjectStaticImageMedia = ProjectMediaBase & {
  readonly variant: "static-image";
  readonly src: string;
  readonly alt: string;
};

export type ProjectMedia =
  | ProjectVideoMedia
  | ProjectInteractiveDemoMedia
  | ProjectScreenshotGalleryMedia
  | ProjectStaticImageMedia;

export type Project = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly description?: string;
  readonly category: ProjectCategory;
  readonly categoryLabel: string;
  readonly technologies: readonly ProjectTechnology[];
  readonly media: readonly ProjectMedia[];
  readonly sourceUrl?: string;
  readonly liveUrl?: string;
  readonly year?: string;
  readonly status?: ProjectStatus;
  readonly caseStudyAvailable: boolean;
  readonly displayPriority?: number;
  readonly featured: boolean;
};

export type ExperienceVisibility = "primary" | "secondary";

export type Experience = {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly location?: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly dateLabel: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly visibility: ExperienceVisibility;
  readonly priority: number;
};

export type Education = {
  readonly id: string;
  readonly institution: string;
  readonly credential: string;
  readonly field?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly dateLabel: string;
  readonly summary?: string;
};

export type LanguageSkill = {
  readonly language: string;
  readonly proficiency: "Native" | "B2" | "B1";
};

export type Technology = {
  readonly name: string;
  readonly category: TechnologyCategory;
};

export type ProjectCandidateStatus = "needs-review";

export type ProjectCandidate = {
  readonly name: string;
  readonly repositoryUrl: string;
  readonly status: ProjectCandidateStatus;
};

export type PortfolioData = {
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly languages: readonly LanguageSkill[];
  readonly technologies: readonly Technology[];
};
