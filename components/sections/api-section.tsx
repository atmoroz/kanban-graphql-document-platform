'use client';

import { useLocale } from '@/components/providers/locale-provider';
import { FeatureCard } from '@/components/ui/feature-card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';

const copy = {
  en: {
    title: 'API / Examples',
    description: 'Route-level examples for exploring the API structure.',
    cards: [
      {
        title: 'Health Check',
        description: 'Check API availability and current version.',
      },
      {
        title: 'Getting Started',
        description: 'Register, authorize, and run your first GraphQL request.',
      },
    ],
  },
  ua: {
    title: 'API / Приклади',
    description: 'Приклади для вивчення структури API.',
    cards: [
      {
        title: 'Health Check',
        description: 'Перевірка доступності API та поточної версії.',
      },
      {
        title: 'Початок роботи',
        description: 'Реєстрація, авторизація і перший GraphQL-запит.',
      },
    ],
  },
} as const;

export function ApiSection() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <PageSection>
      <SectionHeading title={t.title} description={t.description} />
      <div className="grid gap-6 md:grid-cols-2">
        {t.cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </PageSection>
  );
}
