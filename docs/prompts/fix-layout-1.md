# TASK: Refactor docs layout to move left sidebar to top on mobile and make it sticky

Read `CODEX_ENTRYPOINT.md` and follow all rules strictly before proceeding.

## Problem
The current mobile layout is broken:
- Left sidebar reduces available width
- Causes horizontal overflow on mobile
- Breaks header and overall viewport layout

This approach must be replaced, not patched.

## Goal
Implement a responsive layout where:
- Sidebar stays on the left on desktop
- Sidebar moves to the top on mobile
- Sidebar becomes sticky on mobile
- Main content uses full viewport width on mobile
- No horizontal scrolling exists on the page

## Layout Rules (MANDATORY)

### Desktop (md and up)
- Layout uses horizontal flex:
  - Sidebar on the left
  - Main content on the right
- Sidebar may be sticky vertically
- Main content constrained with max-width

### Mobile (below md)
- Layout switches to vertical flow
- Sidebar moves ABOVE main content
- Sidebar becomes `position: sticky` at the top
- Sidebar spans full width
- Main content spans full width
- Sidebar must NOT reduce content width

### Implementation Rules
- Use responsive utilities (`md:`) for layout switching
- Do NOT duplicate sidebar logic
- Do NOT rely on overflow hacks
- Do NOT allow sidebar to influence page width on mobile

### Sticky Rules
- Sticky sidebar must not overlap the header
- Correct `top` offset must be applied
- Sticky behavior must work on real mobile devices

## Forbidden
- Do NOT apply `overflow-x: hidden` to body or html
- Do NOT keep sidebar on the left on mobile
- Do NOT shrink main content width on mobile
- Do NOT introduce horizontal scrolling

## Acceptance Criteria
- Mobile view has no horizontal scrolling
- Sidebar appears above "Getting Started"
- Sidebar stays sticky while scrolling
- Main content is readable and full-width
- Desktop layout remains unchanged