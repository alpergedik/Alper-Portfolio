export type PortfolioMode = "professional" | "engineer";

export type SocialPlatform = "github" | "linkedin" | "email";

export type SocialLink = {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly href: string;
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
  | "web-application"
  | "mobile-application"
  | "game"
  | "tooling"
  | "systems"
  | "other";

export type TechnologyCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tool"
  | "other";

export type ProjectTechnology = {
  readonly name: string;
  readonly category: TechnologyCategory;
};

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
  readonly title: string;
  readonly summary: string;
  readonly category: ProjectCategory;
  readonly technologies: readonly ProjectTechnology[];
  readonly media: readonly ProjectMedia[];
  readonly sourceUrl?: string;
  readonly liveUrl?: string;
  readonly featured?: boolean;
};

export type Experience = {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly location?: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly summary?: string;
  readonly highlights: readonly string[];
};

export type Education = {
  readonly id: string;
  readonly institution: string;
  readonly credential: string;
  readonly field?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly summary?: string;
};

export type Technology = {
  readonly name: string;
  readonly category: TechnologyCategory;
  readonly proficiency?: "learning" | "working" | "advanced";
};

export type PortfolioData = {
  readonly projects: readonly Project[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly technologies: readonly Technology[];
};
