# Alper Gedik - Personal Portfolio

Personal portfolio website for Alper Gedik, a computer engineer and software developer.

## Current Phase

Phase 2 - Professional Mode. The final Engineer Mode and protected admin dashboard are intentionally not implemented yet.

## Development

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Architecture

The site uses Next.js App Router with TypeScript and Tailwind CSS. Public portfolio content is centralized in focused files under `src/data` and typed through `src/types`, so Professional Mode and Engineer Mode can share one content source while rendering different presentations.

Professional Mode is the default public experience and now has the first final-quality visual implementation. Engineer Mode remains a separate placeholder presentation layer, with mode persistence isolated in shared mode utilities and provider code.

See `docs/architecture.md` for the Phase 2 structure and expansion notes.
