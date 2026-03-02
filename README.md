# Kanban GraphQL Documentation Platform

Міні документаційна платформа для публічного API Kanban GraphQL.

## Мета проєкту

Цей репозиторій містить frontend-документацію для навчального API:
- API repo: https://github.com/atmoroz/kanban-graphql-api
- Docs repo (цей): `kanban-graphql-document-platform`

Ціль платформи:
- дати зручний публічний вхід у GraphQL API (Overview / API / About),
- показати реальні приклади query / mutation / subscription,
- бути навчальним майданчиком для Apollo/GraphQL підходів,
- залишатись легкою, SEO-friendly і privacy-friendly (Umami analytics).

## Технології

- Next.js (App Router)
- TypeScript
- TailwindCSS
- next-themes
- ESLint + Prettier

## Швидкий старт

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Запуск у dev режимі

```bash
npm run dev
```

### 3. Production build

```bash
npm run build
npm run start
```

### 4. Перевірка якості

```bash
npm run lint
```

## Environment variables

Для коректних canonical/OG URL у проді задайте:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Якщо не задано, використовується fallback URL з `lib/seo/metadata.ts`.

## Поточні маршрути

- `/` — Overview
- `/api` — API / Examples
- `/about` — About

## Структура проєкту

```text
app/
  layout.tsx          # root layout + metadata
  page.tsx            # overview route
  api/page.tsx        # api route
  about/page.tsx      # about route

components/
  layout/             # app shell, header, footer
  providers/          # theme + locale providers
  sections/           # route-level sections (overview/api/about)
  ui/                 # reusable presentational components

lib/
  analytics/          # analytics abstraction + Umami adapter
  content/            # контент і service UI/a11y тексти
  i18n/               # locale config
  seo/                # metadata builders (canonical/OG/Twitter)

public/
  social/             # shared OG preview image

docs/prompts/
  epic-*.md           # робочі EPIC-специфікації
```

## Аналітика

Проєкт використовує тільки **Umami**.
Скрипт підключений у `app/layout.tsx`.

## SEO / Social Preview

- canonical URL для всіх сторінок
- OpenGraph + Twitter metadata
- один спільний preview image: `public/social/apollo-graphql-preview.svg`

## Важливо

- UI та layout мають відповідати дизайну з `figma-design/`
- Контент і a11y-тексти централізовані у `lib/content/`
- Нові зміни виконуються по EPIC-документах у `docs/prompts/`
