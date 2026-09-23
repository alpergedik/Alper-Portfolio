# Architecture

This repository is in Phase 4: Project Showcase. The goal is to keep Professional Mode as the approved default public portfolio experience and Engineer Mode as the approved optional presentation while adding a shared featured-project hierarchy and reusable media renderer, without building admin, analytics, authentication, deployment, project detail routes, or fake project media.

## Portfolio Modes

Professional Mode is the default public experience and owns the bright editorial presentation. Engineer Mode is an optional dark technical presentation layer. Both modes must consume the same `portfolioData` object and must not duplicate project, experience, education, language, technology, or profile content.

The mode foundation lives in `src/lib/portfolio-mode.ts` and `src/components/shared/portfolio-mode-provider.tsx`. The provider keeps Professional Mode as the default and safely persists future visitor choice in `localStorage`.

## Content Files

- `src/data/profile.ts`: name, titles, professional areas, and concise bio.
- `src/data/site-config.ts`: public contact links and metadata, deriving owner identity from profile data.
- `src/data/education.ts`: education and future certification records.
- `src/data/experience.ts`: technical and secondary historical experience with visibility metadata.
- `src/data/languages.ts`: language levels without percentage scores.
- `src/data/technologies.ts`: categorized technology list without arbitrary proficiency ranking.
- `src/data/projects.ts`: confirmed public portfolio projects and small query helpers.
- `src/data/project-candidates.ts`: known repositories that need manual review before public display.
- `src/data/portfolio.ts`: aggregate public portfolio data consumed by presentation modes.

## Real-Data-Only Rule

Public portfolio content should use only confirmed information. Do not invent project descriptions, commercial release claims, CV links, live site URLs, phone numbers, case studies, or media. Pending repositories stay in `project-candidates.ts` until reviewed.

Project `status` is reserved for lifecycle state, such as `in-development` or `completed`. Project `context` is separate and optional, covering confirmed origin such as `personal`, `academic`, or `capstone`. Project `visibility` controls public rendering, `featured` controls showcase inclusion, and `featuredOrder` is used only for explicitly featured projects.

## Project Media

`ProjectMedia` supports:

- `video`
- `gameplay`
- `interactive-demo`
- `mobile-demo`
- `screenshot-gallery`
- `static-image`

Project media arrays may remain empty until real assets are selected.

The shared renderer in `src/components/projects/project-media.tsx` handles real media variants while each mode supplies its own abstract fallback when media arrays are empty. See `docs/project-showcase.md` for the featured order and future media plan.

## Admin

The future protected admin dashboard is expected at `/admin`, but no admin route, authentication, analytics, or backend behavior exists in Phase 4.

## Organization

- `src/app`: App Router route files, metadata entry points, and global styles.
- `src/components/shared`: Cross-mode composition and providers.
- `src/components/professional`: Professional Mode visual sections and cards.
- `src/components/engineer`: Engineer Mode dark technical presentation components.
- `src/components/projects`: Shared project media rendering and project-specific presentation helpers.
- `src/components/ui`: Future reusable low-level UI components.
- `src/data`: Centralized, typed portfolio content.
- `src/lib`: Shared constants and framework-independent helpers.
- `src/types`: TypeScript contracts for data and mode boundaries.
