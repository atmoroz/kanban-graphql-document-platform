'use client';

import { useLocale } from '@/components/providers/locale-provider';
import { brandContent, footerContent } from '@/lib/content/layout';
import { BrandMark } from '@/components/ui/brand-mark';

export function Footer() {
  const { locale } = useLocale();
  const content = footerContent[locale];
  const brand = brandContent[locale];

  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <BrandMark compact label={brand.footerLabel} />
          <div className="text-sm text-gray-500 dark:text-gray-500">{content.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
