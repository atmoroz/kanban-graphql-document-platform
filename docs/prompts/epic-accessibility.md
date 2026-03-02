# EPIC: UI Text & Accessibility Content

## Goal
Ensure that UI components contain no hardcoded user-facing or accessibility-related text.

## Scope
- aria-label
- aria-describedby
- section titles for code blocks
- icon accessible names

## Tasks
1. Create a `ui-content` layer for service UI text
2. Move accessibility-related strings into content files
3. Inject these values via props or context

## Rules
- Components must remain presentational
- No text literals inside JSX except technical placeholders
- Do not over-engineer abstractions

## Acceptance Criteria
- No hardcoded aria-labels in components
- All accessibility text is centralized
- Components remain readable and maintainable