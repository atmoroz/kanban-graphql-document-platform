# EPIC: SEO, Canonical URL & Social Preview

## Goal
Ensure that shared links to the documentation platform have a canonical URL
and display a rich social preview with an Apollo / GraphQL themed image.

## Scope
- Canonical URLs
- Open Graph metadata
- Twitter/X metadata
- Social preview image

## Requirements (STRICT)

### Canonical URL
- Every page must define a canonical URL
- Canonical must reflect the public production domain
- No duplicate or relative canonical URLs allowed

### Open Graph Metadata
Set the following meta tags:
- og:title
- og:description
- og:url
- og:type = website
- og:image

### Twitter Metadata
Set the following meta tags:
- twitter:card = summary_large_image
- twitter:title
- twitter:description
- twitter:image

### Social Preview Image
- Use a single static image
- Theme: Apollo / GraphQL (dark, developer-style)
- Image must be reused across all pages
- No page-specific OG images

## Implementation Rules
- Metadata must be defined at layout or page level using Next.js metadata API
- No hardcoded URLs inside components
- Domain and base URL must be configurable

## Forbidden
- Do NOT generate dynamic OG images
- Do NOT create multiple preview images
- Do NOT place meta tags inside UI components

## Acceptance Criteria
- Shared links show correct title, description, and image
- Canonical URL is correct on all pages
- No duplicate meta tags exist
- Preview works in Telegram, LinkedIn, and X