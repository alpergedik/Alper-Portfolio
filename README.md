# Alper Gedik - Personal Portfolio

Personal portfolio website for Alper Gedik, a computer engineer and software developer.

## Current Phase

Phase 4 — Project Showcase. Professional Mode remains the default public experience, Engineer Mode remains optional, and both modes now share a featured project showcase with secondary More Projects.

## Development

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Architecture

The site uses Next.js App Router with TypeScript and Tailwind CSS. Public portfolio content is centralized in focused files under `src/data` and typed through `src/types`, so Professional Mode and Engineer Mode can share one content source while rendering different presentations.

Professional Mode is the default public experience and has the approved bright editorial implementation. Engineer Mode is a separate dark technical presentation layer, with mode persistence isolated in shared mode utilities and provider code.

See `docs/architecture.md` for the Phase 4 structure and expansion notes. See `docs/project-showcase.md` for featured project and media guidance.
