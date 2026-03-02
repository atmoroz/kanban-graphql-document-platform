# EPIC: Project Initialization — Mini Docs Platform

## Goal

Create a clean, production-ready Next.js application for a mini documentation platform.

The project is based strictly on the UI and layout exported from Figma.
All visual decisions must follow the Figma source located in `/figma`.

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- next-themes (dark / light)
- ESLint + Prettier

## Constraints

- Do NOT invent UI or content not present in Figma
- Do NOT hardcode text content into components
- Prefer composition over duplication
- Follow scalable folder structure

## Tasks

1. Initialize Next.js project with App Router
2. Configure TailwindCSS
3. Setup light / dark theme support
4. Setup basic i18n structure (EN / UA, without content yet)
5. Prepare project for future analytics integration

## Acceptance Criteria

- Project builds successfully
- App Router is used (`/app`)
- Tailwind is configured and working
- Theme switching works
- No business logic yet
