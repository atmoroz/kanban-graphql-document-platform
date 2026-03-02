import type { MetadataRoute } from 'next';

import { getMetadataBase } from '@/lib/seo/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getMetadataBase().toString();
  const now = new Date();

  return [
    {
      url: new URL('/', baseUrl).toString(),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: new URL('/api', baseUrl).toString(),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: new URL('/about', baseUrl).toString(),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
