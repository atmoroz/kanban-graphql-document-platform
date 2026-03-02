import type { Metadata } from 'next';

import { AboutSection } from '@/components/sections/about-section';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  path: '/about',
  title: 'About — Kanban GraphQL Docs',
  description:
    'About the creator, tech stack, and contact information for the Kanban GraphQL documentation project.',
});

export default function AboutPage() {
  return <AboutSection />;
}
