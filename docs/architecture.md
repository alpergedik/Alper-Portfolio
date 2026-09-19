# Architecture

This repository is in Phase 0: portfolio foundation. It prepares the project structure, data contracts, metadata, and mode architecture without building the final visual portfolio.

## Portfolio Modes

Professional Mode is the default public experience. It should stay bright, minimal, recruiter-friendly, and restrained.

Engineer Mode is an optional presentation layer for a darker, more interactive engineering interface. It is not a separate site and must consume the same portfolio data as Professional Mode.

The mode foundation lives in `src/lib/portfolio-mode.ts` and `src/components/shared/portfolio-mode-provider.tsx`. The provider safely reads and writes `localStorage` after hydration, keeping Professional Mode as the default when no saved preference exists.

## Shared Data

Identity, links, and metadata live in `src/data/site-config.ts`. Portfolio content lives in `src/data/portfolio.ts`. Both visual modes should read from these shared sources instead of duplicating project, experience, education, technology, or social-link content.

The core contracts are defined in `src/types/portfolio.ts`. New content should be added by updating data files once, then rendered differently by each mode as needed.

## Project Media

`ProjectMedia` is designed for future variants:

- `video`
- `gameplay`
- `interactive-demo`
- `mobile-demo`
- `screenshot-gallery`
- `static-image`

This keeps future projects flexible without assuming a fixed number of featured items or a single media format.

## Admin

The future protected admin dashboard is expected at `/admin`, but no authentication, analytics, or admin UI exists in Phase 0. When implemented, it should live as its own route segment and avoid leaking admin-only logic into the public portfolio modes.

## Organization

- `src/app`: App Router route files, layout, metadata entry points, and global styles.
- `src/components/shared`: Cross-mode composition and providers.
- `src/components/professional`: Professional Mode presentation.
- `src/components/engineer`: Engineer Mode presentation.
- `src/components/projects`: Future project-specific presentation components.
- `src/components/ui`: Future reusable low-level UI components.
- `src/data`: Centralized portfolio and site configuration data.
- `src/lib`: Shared constants and framework-independent helpers.
- `src/types`: TypeScript contracts for data and mode boundaries.
