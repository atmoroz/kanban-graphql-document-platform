# EPIC: Content & Data Separation

## Goal

Separate content from presentation.

## Tasks

1. Create content files for:
   - Overview
   - API sections
   - About Me
2. Prepare structure for EN / UA content
3. Inject content into components via props

## Rules

- No hardcoded text inside components
- Content must live outside JSX
- Support future CMS or MD-based extension

## Acceptance Criteria

- Text content is editable without touching components
- Language switching is possible
- Components remain presentational
