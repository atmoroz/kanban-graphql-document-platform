'use client';

import { useLocale } from '@/components/providers/locale-provider';
import { FeatureCard } from '@/components/ui/feature-card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';

const copy = {
  en: {
    title: 'About Me',
    description: 'Frontend engineer focused on product interfaces and API integrations.',
    cards: [
      {
        title: 'Experience',
        description: '5+ years building dashboard and admin interfaces.',
      },
      {
        title: 'Stack',
        description: 'React, Next.js, TypeScript, GraphQL, TailwindCSS.',
      },
    ],
  },
  ua: {
    title: 'Про мене',
    description: 'Frontend-інженер з фокусом на продуктові інтерфейси та API-інтеграції.',
    cards: [
      {
        title: 'Досвід',
        description: '5+ років розробки dashboard та admin-інтерфейсів.',
      },
      {
        title: 'Стек',
        description: 'React, Next.js, TypeScript, GraphQL, TailwindCSS.',
      },
    ],
  },
} as const;

export function AboutSection() {
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
