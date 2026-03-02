import type { Metadata } from 'next';

const DEFAULT_SITE_URL = 'https://kanban-graphql-docs.example.com';
const SITE_NAME = 'Kanban GraphQL Documentation';
const PREVIEW_IMAGE_PATH = '/social/apollo-graphql-preview.svg';

const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
const previewImageUrl = new URL(PREVIEW_IMAGE_PATH, baseUrl).toString();

type MetadataInput = {
  path: '/' | '/api' | '/about';
  title: string;
  description: string;
};

export function getMetadataBase(): URL {
  return baseUrl;
}

export function createPageMetadata({ path, title, description }: MetadataInput): Metadata {
  const canonicalUrl = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_NAME,
      images: [
        {
          url: previewImageUrl,
          width: 1200,
          height: 630,
          alt: 'Apollo GraphQL themed preview image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [previewImageUrl],
    },
  };
}
