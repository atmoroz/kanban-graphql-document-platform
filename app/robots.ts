import type { MetadataRoute } from 'next';

import { getMetadataBase } from '@/lib/seo/metadata';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getMetadataBase().toString();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', baseUrl).toString(),
  };
}
