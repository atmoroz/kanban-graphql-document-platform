import type { Metadata } from 'next';

import { ApiSection } from '@/components/sections/api-section';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  path: '/api',
  title: 'API / Examples — Kanban GraphQL Docs',
  description:
    'Reference queries, mutations, and subscription examples for the Kanban GraphQL API.',
});

export default function ApiPage() {
  return <ApiSection />;
}
