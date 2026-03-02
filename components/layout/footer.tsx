'use client';

import { useLocale } from '@/components/providers/locale-provider';
import { BrandMark } from '@/components/ui/brand-mark';

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <BrandMark compact label="Kanban Dashboard GraphQL API" />
          <div className="text-sm text-gray-500 dark:text-gray-500">
            {locale === 'en' ? '© 2026 Built for educational purposes' : '© 2026 Створено для навчальних цілей'}
          </div>
        </div>
      </div>
    </footer>
  );
}
