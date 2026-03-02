import {
  apiSections,
  type ApiExample,
  type ApiSection,
} from '@/lib/content/api-docs';
import type { Locale } from '@/lib/i18n/config';

export type ApiContent = {
  sections: ApiSection[];
  codeLabels: {
    graphql: string;
    javascript: string;
    curl: string;
  };
  notePrefix: string;
};

export type { ApiExample, ApiSection };

export const apiContent: Record<Locale, ApiContent> = {
  en: {
    sections: apiSections,
    codeLabels: {
      graphql: 'GraphQL',
      javascript: 'JavaScript',
      curl: 'cURL',
    },
    notePrefix: '💡',
  },
  ua: {
    sections: apiSections,
    codeLabels: {
      graphql: 'GraphQL',
      javascript: 'JavaScript',
      curl: 'cURL',
    },
    notePrefix: '💡',
  },
};
