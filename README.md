# Alper Gedik - Personal Portfolio

Personal portfolio website for Alper Gedik, a computer engineer and software developer.

## Current Phase

Phase 3 - Engineer Mode. Professional Mode remains the default public experience, Engineer Mode now has its final public presentation, and the protected admin dashboard is intentionally not implemented yet.

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

See `docs/architecture.md` for the Phase 3 structure and expansion notes.
