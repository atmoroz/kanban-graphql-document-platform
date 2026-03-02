# EPIC: Global Layout & App Shell

## Goal

Implement the global layout and app shell based on Figma.

## Scope

- Header
- Navigation tabs
- Footer
- Theme toggle
- Language toggle

## Tasks

1. Create global `RootLayout`
2. Implement reusable `Header` component
3. Implement navigation tabs (Overview / API / About)
4. Implement `Footer`
5. Apply responsive layout rules from Figma

## Rules

- Layout components must be reusable
- No page-specific logic inside layout components
- Navigation state must be derived from route, not local state

## Acceptance Criteria

- All pages share the same layout
- Navigation highlights active tab
- Layout matches Figma spacing and typography
- No duplicated layout code
