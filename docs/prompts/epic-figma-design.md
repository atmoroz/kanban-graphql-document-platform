# TASK: Migrate figma-design data into project and remove all figma-design imports

Read `CODEX_ENTRYPOINT.md` and strictly follow all rules defined there before proceeding.

## Context
The project build is failing because the code contains imports from
`@/figma-design/...`, but the `figma-design` directory DOES NOT exist
and is NOT part of the repository.

`figma-design` was a temporary design reference only and must never be used
as a runtime dependency.

## Objective (MANDATORY)
Completely remove all references to `figma-design` and migrate all required
data, constants, and configuration into the actual project codebase.

## Scope (STRICT)
- Fix every import that references `@/figma-design/...`
- Create proper project-owned replacements for the imported data
- Do NOT add aliases to figma-design
- Do NOT recreate figma-design directory
- Do NOT leave any runtime dependency on figma-design

## Required Actions
1. Locate all imports from `@/figma-design/...`
2. Extract ONLY the necessary data used at runtime (text, constants, static objects)
3. Create appropriate files inside the project (e.g. `/lib/content`, `/lib/config`)
4. Move the extracted data into those files
5. Update all imports to reference the new project-owned files
6. Ensure no file imports from figma-design after the migration

## Architecture Rules
- Figma is a design reference only, never a runtime dependency
- Content must live in `/lib/content`
- Configuration must live in `/lib/config`
- Components may import ONLY from project-owned modules

## Forbidden
- Do NOT add path aliases to figma-design
- Do NOT mock figma-design
- Do NOT leave TODOs or comments about figma-design
- Do NOT ask questions — proceed with migration

## Acceptance Criteria
- Zero imports from `@/figma-design`
- No figma-design directory in the repository
- `npm run build` completes successfully
- Vercel build passes without webpack errors