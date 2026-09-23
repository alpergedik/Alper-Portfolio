# Project Showcase

Phase 4 introduces the homepage project showcase hierarchy. Public rendering uses
project visibility, featured state, and featured ordering from `src/data/projects.ts`.

## Featured Projects

1. GedikForge Studio
2. World Cup Draft Simulator
3. Split Battle
4. Bloom Focus

Featured projects must be `visibility: "public"`, `featured: true`, and have a
`featuredOrder` value. `featuredOrder` is not used for non-featured projects.

## Hidden Projects

ProjectPilot is kept in confirmed data for historical/internal use, but it is
`visibility: "hidden"` and must not render publicly.

## More Projects

Current non-featured public projects:

- Integrated Assignment Environment
- Tank Rush
- University Exam Timetabling System
- Historical Artifact Catalog

## Media Variants

The shared media renderer supports:

- `video`
- `gameplay`
- `mobile-demo`
- `interactive-demo`
- `screenshot-gallery`
- `static-image`

When a project has no media entries, each mode renders its approved abstract
fallback surface. Do not add placeholder files or fake media entries.

## Future Asset Strategy

Recommended future local asset organization:

```text
public/
  projects/
    gedikforge-studio/
    world-cup-draft-simulator/
    split-battle/
    bloom-focus/
```

Expected future media direction:

- GedikForge Studio: video, interactive demo, screenshots
- World Cup Draft Simulator: mobile demo, gameplay, screenshots
- Split Battle: gameplay, screenshots
- Bloom Focus: mobile demo, screenshots

Recommended formats:

- Video: `.mp4` or WebM where appropriate
- Images: `.webp` or `.png` where appropriate

Interactive demos should link to real demos only. First-party embeds may use the
safe `embedPath` field; arbitrary external URLs should not be iframed.
