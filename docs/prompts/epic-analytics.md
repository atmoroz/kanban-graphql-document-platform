# EPIC: Analytics Integration

## Goal

Prepare and integrate analytics in a clean, non-intrusive way.

## Analytics Targets

- Page views
- Tab navigation clicks
- External link clicks (GitHub, LinkedIn, Telegram)
- Feedback (mailto) clicks

## Tasks

1. Prepare analytics abstraction layer
2. Integrate Google Analytics or alternative
3. Track events without polluting UI components

## Rules

- No analytics logic directly inside UI components
- Use centralized tracking helpers
- Respect performance and privacy

## Acceptance Criteria

- Page views are tracked
- Click events are tracked
- Analytics can be replaced without refactoring UI
