import { translations } from '@/figma-design/src/app/data/translations';
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

export const footerContent: Record<Locale, { copyright: string; brandLabel: string }> = {
  en: {
    copyright: '© 2026 Built for educational purposes',
    brandLabel: 'Kanban Dashboard GraphQL API',
  },
  ua: {
    copyright: '© 2026 Створено для навчальних цілей',
    brandLabel: 'Kanban Dashboard GraphQL API',
  },
};
