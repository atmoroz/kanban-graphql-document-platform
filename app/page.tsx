import type { Metadata } from 'next';

import { OverviewSection } from '@/components/sections/overview-section';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  path: '/',
  title: 'Kanban Dashboard — Public GraphQL API Playground',
  description:
    'Explore GraphQL queries, mutations, and subscriptions in a public Kanban API playground.',
});

export default function OverviewPage() {
  return <OverviewSection />;
}
