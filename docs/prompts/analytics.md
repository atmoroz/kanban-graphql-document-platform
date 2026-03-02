Goal:
Add Umami analytics click tracking to external links in the header / footer without changing layout, styles, accessibility or link behavior.

Context:
The project already has Umami installed via script.
We only want to track meaningful user interactions (outbound links).
No new components, no refactors, no visual changes.

Rules:
- Do NOT change href, target, rel, aria-label or className
- Do NOT wrap links with extra elements
- Do NOT introduce new UI or text
- Only add Umami tracking in the cleanest possible way
- Use data-umami-event attributes (preferred)
- Event names must be consistent and readable (kebab-case)

What to implement:
For the following links, add data-umami-event attributes:

1) GitHub repository link  
   Event name: click-github-repo

2) Telegram link  
   Event name: click-telegram

3) LinkedIn profile link  
   Event name: click-linkedin

4) Email (mailto) link  
   Event name: click-email

Example:
<a
  href="https://github.com/..."
  data-umami-event="click-github-repo"
  ...
>
  ...
</a>

Acceptance criteria:
- Clicking any of these links produces a corresponding event in Umami → Events
- No layout shifts
- No console errors
- No duplicate tracking
- Events are visible with correct names