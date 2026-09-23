import Image from "next/image";
import type { ReactNode } from "react";
import type {
  Project,
  ProjectInteractiveDemoMedia,
  ProjectMedia as ProjectMediaType,
  ProjectScreenshotGalleryMedia,
  ProjectStaticImageMedia,
  ProjectVideoMedia,
} from "@/types/portfolio";

type ProjectMediaProps = {
  readonly project: Project;
  readonly fallback: ReactNode;
  readonly className?: string;
  readonly imageSizes?: string;
  readonly priority?: boolean;
};

export function ProjectMedia({
  project,
  fallback,
  className,
  imageSizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: ProjectMediaProps) {
  const [primaryMedia] = project.media;

  if (!primaryMedia) {
    return fallback;
  }

  return (
    <ResolvedProjectMedia
      imageSizes={imageSizes}
      media={primaryMedia}
      priority={priority}
      project={project}
      surfaceClassName={className}
    />
  );
}

export function getProjectInteractiveDemo(
  project: Project,
): ProjectInteractiveDemoMedia | undefined {
  return project.media.find(
    (media): media is ProjectInteractiveDemoMedia =>
      media.variant === "interactive-demo",
  );
}

function ResolvedProjectMedia({
  imageSizes,
  media,
  priority,
  project,
  surfaceClassName,
}: {
  readonly imageSizes: string;
  readonly media: ProjectMediaType;
  readonly priority: boolean;
  readonly project: Project;
  readonly surfaceClassName?: string;
}) {
  if (media.variant === "static-image") {
    return (
      <ProjectStaticImage
        imageSizes={imageSizes}
        media={media}
        priority={priority}
        surfaceClassName={surfaceClassName}
      />
    );
  }

  if (
    media.variant === "video" ||
    media.variant === "gameplay" ||
    media.variant === "mobile-demo"
  ) {
    return (
      <ProjectVideo
        media={media}
        project={project}
        surfaceClassName={surfaceClassName}
      />
    );
  }

  if (media.variant === "screenshot-gallery") {
    return (
      <ProjectScreenshotGallery
        imageSizes={imageSizes}
        media={media}
        priority={priority}
        surfaceClassName={surfaceClassName}
      />
    );
  }

  if (media.variant === "interactive-demo") {
    return (
      <ProjectInteractiveDemo
        media={media}
        project={project}
        surfaceClassName={surfaceClassName}
      />
    );
  }

  return null;
}

function ProjectStaticImage({
  imageSizes,
  media,
  priority,
  surfaceClassName,
}: {
  readonly imageSizes: string;
  readonly media: ProjectStaticImageMedia;
  readonly priority: boolean;
  readonly surfaceClassName?: string;
}) {
  return (
    <div className={surfaceClassName}>
      <Image
        alt={media.alt}
        className="object-cover"
        fill
        priority={priority}
        sizes={imageSizes}
        src={media.src}
      />
    </div>
  );
}

function ProjectVideo({
  media,
  project,
  surfaceClassName,
}: {
  readonly media: ProjectVideoMedia;
  readonly project: Project;
  readonly surfaceClassName?: string;
}) {
  const video = (
    <video
      aria-label={media.alt ?? `${project.title} ${media.title}`}
      autoPlay={media.autoPlay && media.muted ? true : undefined}
      className="h-full w-full object-cover"
      controls={media.controls ?? true}
      loop={media.loop}
      muted={media.muted}
      playsInline
      poster={media.poster}
      preload="metadata"
      src={media.src}
    />
  );

  if (media.variant === "mobile-demo") {
    return (
      <div className={`${surfaceClassName ?? ""} flex items-center justify-center p-4`}>
        <div className="aspect-[9/16] h-full max-h-full overflow-hidden rounded-[1.4rem] border border-current/15 bg-black shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
          {video}
        </div>
      </div>
    );
  }

  return <div className={surfaceClassName}>{video}</div>;
}

function ProjectScreenshotGallery({
  imageSizes,
  media,
  priority,
  surfaceClassName,
}: {
  readonly imageSizes: string;
  readonly media: ProjectScreenshotGalleryMedia;
  readonly priority: boolean;
  readonly surfaceClassName?: string;
}) {
  return (
    <div className={`${surfaceClassName ?? ""} overflow-x-auto p-3`}>
      <ul className="flex min-w-full gap-3" aria-label={media.title}>
        {media.images.map((image, index) => (
          <li
            className="min-w-[72%] sm:min-w-[42%] lg:min-w-[32%]"
            key={`${image.src}-${index}`}
          >
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-black/5">
                <Image
                  alt={image.alt}
                  className="object-cover"
                  fill
                  priority={priority && index === 0}
                  sizes={imageSizes}
                  src={image.src}
                />
              </div>
              {image.caption ? (
                <figcaption className="mt-2 text-xs text-current/70">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectInteractiveDemo({
  media,
  project,
  surfaceClassName,
}: {
  readonly media: ProjectInteractiveDemoMedia;
  readonly project: Project;
  readonly surfaceClassName?: string;
}) {
  if (media.embedPath) {
    return (
      <div className={surfaceClassName}>
        <iframe
          className="h-full w-full border-0"
          loading="lazy"
          src={media.embedPath}
          title={`${project.title} ${media.title}`}
        />
      </div>
    );
  }

  return (
    <div className={`${surfaceClassName ?? ""} flex items-center justify-center p-6`}>
      <a
        className="inline-flex min-h-11 items-center rounded-full border border-current/20 px-5 text-sm font-semibold transition-colors hover:border-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        href={media.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Open Interactive Demo
      </a>
    </div>
  );
}
