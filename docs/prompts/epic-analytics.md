# TASK: Update Analytics Epic — Switch to Umami (FINAL)

Read `CODEX_ENTRYPOINT.md` and follow all rules defined there before proceeding.

## Context
The project analytics solution is switched permanently from Plausible to **Umami Analytics**.

Umami is the ONLY allowed analytics solution for this project.

## Analytics Script (FIXED)

Use the following Umami script exactly as provided.
Do NOT replace, wrap, or modify it.

```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="865e04fc-279f-4f56-9411-3609da511aaf">
</script>

Do NOT modify, wrap, or replace this script.

What to Track (EXACT)
Page Views

Automatic page view tracking via Umami

Must work with Next.js App Router navigation

Navigation Tabs

Track clicks on:

Overview

API / Examples

About

Event names:

nav_overview_click

nav_api_click

nav_about_click

External Links

Track clicks on:

LinkedIn

Telegram

GitHub (if present)

API endpoint links

Event name:

external_link_click

Properties:

destination (string)

Feedback

Track clicks on:

mailto feedback button

Event name:

feedback_click

Implementation Rules

Analytics logic must live in a dedicated analytics layer

UI components must remain analytics-agnostic

Components may only call semantic handlers

Event names must be stable and explicit

Forbidden

Do NOT use Plausible

Do NOT use Google Analytics

Do NOT add cookie banners

Do NOT track personal or sensitive data

Acceptance Criteria

Umami script is loaded once at app root

Page views are tracked correctly

Navigation tab clicks fire correct events

External link clicks include destination metadata

Feedback click is tracked

No analytics code exists inside UI components