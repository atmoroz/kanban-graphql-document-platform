import { translations } from '@/lib/content/translations';
import type { Locale } from '@/lib/i18n/config';

export type NavItem = {
  href: '/' | '/api' | '/about';
  label: Record<Locale, string>;
};

export const navItems: NavItem[] = [
  { href: '/', label: { en: translations.en.nav.overview, ua: translations.ua.nav.overview } },
  { href: '/api', label: { en: translations.en.nav.api, ua: translations.ua.nav.api } },
  { href: '/about', label: { en: translations.en.nav.about, ua: translations.ua.nav.about } },
];

export const brandContent: Record<Locale, { headerLabel: string; footerLabel: string }> = {
  en: {
    headerLabel: 'kanban-api',
    footerLabel: 'Kanban Dashboard GraphQL API',
  },
  ua: {
    headerLabel: 'kanban-api',
    footerLabel: 'Kanban Dashboard GraphQL API',
  },
};

export const externalLinksContent: Record<Locale, { githubRepoUrl: string }> = {
  en: {
    githubRepoUrl: 'https://github.com/atmoroz/kanban-graphql-api',
  },
  ua: {
    githubRepoUrl: 'https://github.com/atmoroz/kanban-graphql-api',
  },
};

export const footerContent: Record<Locale, { copyright: string }> = {
  en: {
    copyright: '© 2026 Built for educational purposes',
  },
  ua: {
    copyright: '© 2026 Створено для навчальних цілей',
  },
};
