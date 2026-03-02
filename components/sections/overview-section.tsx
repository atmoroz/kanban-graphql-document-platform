'use client';

import { useLocale } from '@/components/providers/locale-provider';
import { FeatureCard } from '@/components/ui/feature-card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';

const copy = {
  en: {
    title: 'Kanban Dashboard - Public GraphQL API Playground',
    description: 'Public GraphQL API for learning queries, mutations, and subscriptions.',
    cards: [
      {
        title: 'Full-Featured Kanban System',
        description: 'Boards, columns, tasks, labels, members, and realtime updates.',
      },
      {
        title: 'Production-Ready Patterns',
        description: 'Real SaaS-oriented API patterns for practical learning.',
      },
    ],
  },
  ua: {
    title: 'Kanban Dashboard - Публічний GraphQL API Playground',
    description: 'Публічний GraphQL API для практики query, mutation і subscription.',
    cards: [
      {
        title: 'Повноцінна Kanban-система',
        description: 'Дошки, колонки, задачі, мітки, учасники та realtime-оновлення.',
      },
      {
        title: 'Продуктові патерни',
        description: 'Практичні API-патерни, наближені до SaaS-проєктів.',
      },
    ],
  },
} as const;

export function OverviewSection() {
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
