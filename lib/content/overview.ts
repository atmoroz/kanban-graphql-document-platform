import { translations } from '@/figma-design/src/app/data/translations';
import type { Locale } from '@/lib/i18n/config';

export type OverviewContent = {
  badge: string;
  title: string;
  description: string;
  endpointLabel: string;
  endpoint: string;
  primaryCardTitle: string;
  primaryCardDescription: string;
  secondaryCardTitle: string;
  secondaryCardDescription: string;
  featuresTitle: string;
  features: string[];
  useCasesTitle: string;
  useCasesList: string[];
};

export const overviewContent: Record<Locale, OverviewContent> = {
  en: {
    badge: 'GraphQL API Playground',
    title: translations.en.overview.title,
    description: translations.en.overview.description,
    endpointLabel: 'API Endpoint',
    endpoint: 'https://api.kanban.example.com/graphql',
    primaryCardTitle: 'Full-Featured Kanban System',
    primaryCardDescription:
      'Complete implementation with boards, columns, tasks, labels, members, and real-time updates.',
    secondaryCardTitle: 'Production-Ready Patterns',
    secondaryCardDescription:
      'Learn real-world API design patterns used in modern SaaS applications.',
    featuresTitle: 'Key Features',
    features: [...translations.en.overview.features],
    useCasesTitle: translations.en.overview.useCases,
    useCasesList: [...translations.en.overview.useCasesList],
  },
  ua: {
    badge: 'GraphQL API Playground',
    title: translations.ua.overview.title,
    description: translations.ua.overview.description,
    endpointLabel: 'API Endpoint',
    endpoint: 'https://api.kanban.example.com/graphql',
    primaryCardTitle: 'Повноцінна Kanban-система',
    primaryCardDescription:
      'Повна реалізація з дошками, колонками, задачами, мітками, учасниками та realtime-оновленнями.',
    secondaryCardTitle: 'Продуктові патерни',
    secondaryCardDescription:
      'Вивчайте реальні підходи до побудови API, які використовуються в сучасних SaaS-додатках.',
    featuresTitle: 'Ключові можливості',
    features: [...translations.ua.overview.features],
    useCasesTitle: translations.ua.overview.useCases,
    useCasesList: [...translations.ua.overview.useCasesList],
  },
};
