# EPIC: Reusable Components System

## Goal

Extract and organize reusable UI components based on Figma.

## Components Examples

- Button
- Tabs
- Card
- CodeBlock
- Section
- Typography components (Heading, Text)
- ThemeToggle
- LanguageSwitcher

## Tasks

1. Identify repeating UI patterns from Figma
2. Create shared components in `/components/ui`
3. Create feature components in `/components/sections`

## Rules

- No page-specific components in `/ui`
- Components must be configurable via props
- Avoid inline styles

## Acceptance Criteria

- UI components are reused across pages
- No duplicated JSX for similar UI
- Components are easy to extend
