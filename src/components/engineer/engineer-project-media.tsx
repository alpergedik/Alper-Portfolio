import Image from "next/image";

import type { Project, ProjectMedia } from "@/types/portfolio";

type EngineerProjectMediaProps = {
  readonly project: Project;
};

export function EngineerProjectMedia({ project }: EngineerProjectMediaProps) {
  const [primaryMedia] = project.media;

  if (primaryMedia) {
    return <ResolvedProjectMedia media={primaryMedia} project={project} />;
  }

  return <EngineerProjectPreview project={project} />;
}

function ResolvedProjectMedia({
  media,
  project,
}: {
  readonly media: ProjectMedia;
  readonly project: Project;
}) {
  if (media.variant === "static-image") {
    return (
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          alt={media.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={media.src}
        />
      </div>
    );
  }

  if (
    media.variant === "video" ||
    media.variant === "gameplay" ||
    media.variant === "mobile-demo"
  ) {
    return (
      <video
        aria-label={media.alt ?? media.title}
        className="h-56 w-full object-cover"
        controls
        poster={media.poster}
        src={media.src}
      />
    );
  }

  return <EngineerProjectPreview project={project} />;
}

function EngineerProjectPreview({ project }: EngineerProjectMediaProps) {
  const initials = project.title
    .split(/\s+/)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const tone = getPreviewTone(project.category);

  return (
    <div
      aria-label={`${project.title} project preview surface`}
      className={`relative h-44 overflow-hidden border-b border-[#23d5f5]/14 ${tone.background} sm:h-48`}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(35,213,245,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(35,213,245,0.065)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute inset-4 rounded-[1.25rem] border border-[#23d5f5]/18 bg-[#0b1117]/70" />
      <div className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#23d5f5]/28 bg-[#0e151c] font-mono text-base font-semibold text-[#23d5f5] shadow-[0_0_30px_rgba(35,213,245,0.08)]">
        {initials}
      </div>
      <div className="absolute bottom-7 left-7 max-w-[calc(100%-3.5rem)] rounded-md border border-[#23d5f5]/18 bg-[#05080b]/85 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8fa3ad] sm:max-w-[calc(100%-7rem)]">
        {project.categoryLabel}
      </div>
      <div
        aria-hidden="true"
        className="absolute right-7 top-7 hidden h-20 w-24 rounded-xl border border-[#23d5f5]/18 bg-[#0e151c]/75 sm:block"
      />
      <div
        aria-hidden="true"
        className={`absolute bottom-7 right-7 hidden h-10 w-20 rounded-xl sm:block ${tone.block}`}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-14 right-16 hidden h-px w-20 rotate-[-18deg] bg-[#23d5f5]/35 sm:block"
      />
    </div>
  );
}

function getPreviewTone(category: Project["category"]) {
  if (category === "mobile-game") {
    return {
      background: "bg-[#071018]",
      block: "bg-[rgba(35,213,245,0.12)]",
    };
  }

  if (category === "game") {
    return {
      background: "bg-[#080f14]",
      block: "bg-[rgba(54,215,243,0.1)]",
    };
  }

  if (category === "developer-tool") {
    return {
      background: "bg-[#071116]",
      block: "bg-[rgba(35,213,245,0.15)]",
    };
  }

  return {
    background: "bg-[#080d12]",
    block: "bg-[rgba(35,213,245,0.1)]",
  };
}
