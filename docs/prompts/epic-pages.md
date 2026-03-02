# EPIC: Pages Structure

## Goal

Create page-level routes according to the documentation structure.

## Pages

- `/` → Overview
- `/api` → API / Examples
- `/about` → About / About Me

## Tasks

1. Create page files using App Router
2. Each page should only compose existing components
3. No heavy logic inside page files

## Rules

- Pages = composition only
- Content must be injected via props or content files
- Keep pages thin

## Acceptance Criteria

- All routes work correctly
- Pages render correct layout
- No duplicated markup between pages
