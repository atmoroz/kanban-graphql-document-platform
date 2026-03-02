export const translations = {
  en: {
    nav: {
      overview: 'Overview',
      api: 'API / Examples',
      about: 'About Me',
    },
    overview: {
      title: 'Kanban Dashboard — Public GraphQL API Playground',
      description: `This is a public, open GraphQL API built as an educational playground for developers who want to learn and practice GraphQL, Apollo Client, and real-world API design.

The API models a full-featured Kanban system with boards, columns, tasks, labels, members, activity logs, and real-time updates via subscriptions.

It is designed to demonstrate:`,
      features: [
        'Clean GraphQL schema design',
        'JWT-based authentication',
        'Cursor-based pagination',
        'Filtering, sorting, and search',
        'Role-based access control',
        'Real-time updates with subscriptions',
        'Optimistic UI updates using Apollo Client',
        'Typical product-level API patterns used in real SaaS applications',
      ],
      useCases: `You can freely explore queries, mutations, and subscriptions, test edge cases, and use this API as:`,
      useCasesList: [
        'A learning sandbox',
        'A demo backend for pet projects',
        'A reference architecture for GraphQL APIs',
      ],
    },
    about: {
      name: 'Andrii Moroz',
      role: 'Frontend Developer (React / Next.js / Vue.js)',
      intro: 'Frontend Developer with 5+ years of experience building scalable web applications. Strong focus on clean UI, performance, and real-world product development. Interested in modern frontend architecture, and developer tooling.',
      techStack: 'Tech Stack',
      selectedCases: 'Selected Cases',
      contact: 'Contact me',
    },
  },
  ua: {
    nav: {
      overview: 'Огляд',
      api: 'API / Приклади',
      about: 'Про мене',
    },
    overview: {
      title: 'Kanban Dashboard — Публічний GraphQL API Playground',
      description: `Це публічний GraphQL API, створений як навчальний майданчик для розробників, які хочуть практикувати GraphQL, Apollo Client та підхід до побудови реальних API.

API моделює повноцінну Kanban-систему: дошки, колонки, задачі, мітки, учасники, журнал активності та realtime-оновлення через підписки.

Проєкт демонструє:`,
      features: [
        'Продуманий дизайн GraphQL-схем',
        'JWT-автентифікацію',
        'Пагінацію на курсорах',
        'Фільтрацію, сортування та пошук',
        'Ролі та доступи',
        'Realtime-логіку (subscriptions)',
        'Типові патерни SaaS-продуктів',
      ],
      useCases: `API можна використовувати для:`,
      useCasesList: [
        'Навчання та практики',
        'Тестування та прототипування',
        'Демо-бекенду для власних проєктів',
      ],
    },
    about: {
      name: 'Андрій Мороз',
      role: 'Frontend Developer (React / Next.js / Vue.js)',
      intro: 'Frontend-розробник з понад 5 роками досвіду у створенні масштабованих вебзастосунків. Основний фокус — якісний UI, продуктивність та продуктовий підхід. Цікавлюсь сучасною frontend-архітектурою.',
      techStack: 'Технології',
      selectedCases: 'Вибрані проєкти',
      contact: 'Зв\'язатися',
    },
  },
} as const;
