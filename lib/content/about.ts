import { translations } from '@/lib/content/translations';
import type { Locale } from '@/lib/i18n/config';

export type AboutCase = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tech: string;
};

export type AboutContent = {
  name: string;
  role: string;
  intro: string;
  availabilityLabel: string;
  yearsBadge: string;
  productBadge: string;
  techStackTitle: string;
  techStack: string[];
  selectedCasesTitle: string;
  cases: AboutCase[];
  languagesTitle: string;
  ukrainianLabel: string;
  ukrainianLevel: string;
  englishLabel: string;
  englishLevel: string;
  contactTitle: string;
  contactDescription: string;
  telegramLabel: string;
  telegramHref: string;
  linkedInLabel: string;
  linkedInHref: string;
  emailLabel: string;
  emailHref: string;
};

const techStack = [
  'React',
  'Next.js',
  'Vue 3',
  'TypeScript',
  'JavaScript (ES6+)',
  'Redux Toolkit',
  'Pinia',
  'TailwindCSS',
  'Ant Design',
  'GraphQL',
  'REST APIs',
  'Apollo Client',
  'Stripe & Payments',
  'CI/CD',
  'Docker',
  'Git',
];

const cases: AboutCase[] = [
  {
    title: {
      en: 'Subscription & Payments Platform',
      ua: 'Платформа підписок та платежів',
    },
    description: {
      en: 'User dashboards for managing subscriptions and payments. Integrated Stripe and alternative payment providers. Focus on reliability, UX, and secure payment flows.',
      ua: 'Панелі користувачів для управління підписками та платежами. Інтеграція Stripe та альтернативних провайдерів. Фокус на надійність, UX та безпечні платіжні процеси.',
    },
    tech: 'React, TypeScript, Stripe, Axios',
  },
  {
    title: {
      en: 'Interactive Dashboards & Admin Panels',
      ua: 'Інтерактивні панелі та адмін-інтерфейси',
    },
    description: {
      en: 'Built complex admin interfaces for managing users, products, and configurations. Worked closely with backend and analytics teams.',
      ua: 'Розробка складних адмін-інтерфейсів для управління користувачами, продуктами та конфігураціями. Тісна співпраця з backend та аналітичними командами.',
    },
    tech: 'Vue 3, TypeScript, Pinia, TailwindCSS',
  },
  {
    title: {
      en: 'Real-Time Content Management Platform',
      ua: 'Платформа управління контентом в реальному часі',
    },
    description: {
      en: 'Interactive platform with drag-and-drop editors, media uploads, and real-time updates. Optimized performance for large-scale content editing.',
      ua: 'Інтерактивна платформа з drag-and-drop редакторами, завантаженням медіа та оновленнями в реальному часі. Оптимізація продуктивності для масштабного редагування контенту.',
    },
    tech: 'React, Redux Toolkit, Ant Design',
  },
  {
    title: {
      en: 'Automation & Browser Extension',
      ua: 'Автоматизація та браузерне розширення',
    },
    description: {
      en: 'Chrome extension + web app to automate workflows across multiple countries. Reduced manual user actions by more than 50%.',
      ua: 'Chrome розширення + вебзастосунок для автоматизації робочих процесів у різних країнах. Зменшення ручних дій користувачів більш ніж на 50%.',
    },
    tech: 'React, TypeScript, Redux Toolkit',
  },
];

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    name: translations.en.about.name,
    role: translations.en.about.role,
    intro: translations.en.about.intro,
    availabilityLabel: 'Available for new opportunities',
    yearsBadge: '5+ years experience',
    productBadge: 'Product-focused',
    techStackTitle: translations.en.about.techStack,
    techStack,
    selectedCasesTitle: translations.en.about.selectedCases,
    cases,
    languagesTitle: 'Languages',
    ukrainianLabel: 'Ukrainian',
    ukrainianLevel: 'Native',
    englishLabel: 'English',
    englishLevel: 'B1',
    contactTitle: translations.en.about.contact,
    contactDescription: 'Feel free to reach out for collaboration or questions about the API',
    telegramLabel: 'Telegram',
    telegramHref: 'https://t.me/a_y_moroz',
    linkedInLabel: 'LinkedIn',
    linkedInHref: 'https://linkedin.com/in/andrey-moroz-68822a194',
    emailLabel: 'kanbanapigraphql@gmail.com',
    emailHref: 'mailto:kanbanapigraphql@gmail.com?subject=Kanban%20API%20Feedback',
  },
  ua: {
    name: translations.ua.about.name,
    role: translations.ua.about.role,
    intro: translations.ua.about.intro,
    availabilityLabel: 'Відкритий до нових можливостей',
    yearsBadge: '5+ років досвіду',
    productBadge: 'Продуктовий підхід',
    techStackTitle: translations.ua.about.techStack,
    techStack,
    selectedCasesTitle: translations.ua.about.selectedCases,
    cases,
    languagesTitle: 'Мови',
    ukrainianLabel: 'Українська',
    ukrainianLevel: 'Рідна',
    englishLabel: 'Англійська',
    englishLevel: 'B1',
    contactTitle: translations.ua.about.contact,
    contactDescription: "Зв'яжіться зі мною для співпраці або питань про API",
    telegramLabel: 'Telegram',
    telegramHref: 'https://t.me/a_y_moroz',
    linkedInLabel: 'LinkedIn',
    linkedInHref: 'https://linkedin.com/in/andrey-moroz-68822a194',
    emailLabel: 'kanbanapigraphql@gmail.com',
    emailHref: 'mailto:kanbanapigraphql@gmail.com?subject=Kanban%20API%20Feedback',
  },
};
