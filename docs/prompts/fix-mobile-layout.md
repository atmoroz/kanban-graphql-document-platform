# TASK: Fix mobile layout overflow and isolate horizontal scrolling to code blocks only

Read `CODEX_ENTRYPOINT.md` and follow all rules strictly before proceeding.

## Problem
The mobile layout is broken:
- The entire viewport scrolls horizontally
- Header layout breaks on mobile
- Code blocks cause the page to exceed viewport width

This is NOT acceptable.

## Goal
Ensure that:
- The page NEVER scrolls horizontally
- Header remains stable on mobile
- Horizontal scrolling is allowed ONLY inside code blocks

## Layout Rules (MANDATORY)

### Global Layout
- The main page layout must never exceed `100%` width
- Do NOT use `width: 100vw` inside page content
- Use `max-width: 100%` instead
- Do NOT apply `overflow-x: hidden` to `body` or `html`

### Header
- Header must be responsive
- Header must not rely on viewport-width units
- Header must not be affected by code blocks below

### Code Blocks (CRITICAL)
- Code blocks must be wrapped in a dedicated container
- The wrapper must:
  - have `max-width: 100%`
  - have `overflow-x: auto`
- The `<pre>` or `<code>` element:
  - must NOT define width or min-width
  - may scroll horizontally internally
- Code blocks must NEVER affect page width

### Mobile Specific
- On small screens:
  - Code blocks scroll horizontally INSIDE their container
  - Tabs remain usable
  - Page layout stays fixed without horizontal scroll

## Forbidden
- Do NOT add `overflow-x: hidden` to body or html
- Do NOT rely on viewport-width hacks
- Do NOT allow code blocks to control page width
- Do NOT break header layout to fix code blocks

## Acceptance Criteria
- No horizontal scrolling on the page itself
- Header stays visually correct on mobile
- Only code blocks scroll horizontally when needed
- Mobile layout behaves correctly on real devices