# TASK: Implement multi-language code blocks with tabs and proper syntax highlighting

Read `CODEX_ENTRYPOINT.md` and follow all rules defined there before proceeding.

## Goal
Implement reusable code blocks that support switching between multiple languages
(GraphQL and JavaScript at minimum) with proper syntax highlighting and controlled scrolling.

## Requirements (STRICT)

### Code Block Structure
- Each code example must support language tabs:
  - GraphQL
  - JavaScript
  - (curl may be added later, but is optional now)
- Tabs must switch the visible code block without reloading the page
- Only one language is visible at a time

### Syntax Highlighting
- Code syntax MUST be highlighted correctly per language
- GraphQL syntax highlighting for `.graphql`
- JavaScript syntax highlighting for `.js`
- Use a proper syntax highlighting solution (e.g. Prism, Shiki, or equivalent)
- Do NOT render code as plain text

### Scrolling Rules (VERY IMPORTANT)
- The main page MUST NOT have horizontal scrolling
- Horizontal scrolling is allowed ONLY inside the code block itself
- Code blocks must:
  - have `overflow-x: auto`
  - be visually contained (rounded container or frame)
- Long lines must NOT break the page layout

### Layout Rules
- Code blocks must be responsive
- On small screens:
  - tabs remain accessible
  - code remains scrollable inside the block
- No global `overflow-x: hidden` hacks on the body

### Reusability
- Code block with tabs must be implemented as a reusable component
- The component must accept:
  - language identifier
  - code string
- No duplicated implementations per page or section

## Forbidden
- Do NOT add horizontal scrolling to the entire page
- Do NOT hardcode language switching logic per example
- Do NOT inline styles inside JSX
- Do NOT disable syntax highlighting

## Acceptance Criteria
- User can switch between GraphQL and JavaScript examples
- Syntax highlighting is correct for each language
- Page never scrolls horizontally
- Only code blocks scroll horizontally when needed
- Code block implementation is reusable and clean