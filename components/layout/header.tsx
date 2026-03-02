'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Globe, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { useLocale } from '@/components/providers/locale-provider';
import { onExternalLinkClick, onNavClick, type NavTarget } from '@/lib/analytics';
import { brandContent, externalLinksContent, navItems } from '@/lib/content/layout';
import { uiContent } from '@/lib/content/ui';
import { BrandMark } from '@/components/ui/brand-mark';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { locale, toggleLocale } = useLocale();
  const content = uiContent[locale];
  const brand = brandContent[locale];
  const externalLinks = externalLinksContent[locale];
  const navTargetByHref: Record<(typeof navItems)[number]['href'], NavTarget> = {
    '/': 'overview',
    '/api': 'api',
    '/about': 'about',
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-3 sm:gap-8">
            <BrandMark label={brand.headerLabel} hideLabelOnMobile />

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onNavClick(navTargetByHref[item.href])}
                    className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {isActive ? (
                      <span className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-800" />
                    ) : null}
                    <span
                      className={`relative z-10 ${
                        isActive
                          ? 'text-gray-900 dark:text-gray-100'
                          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                      }`}
                    >
                      {item.label[locale]}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <a
              href={externalLinks.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onExternalLinkClick('github')}
              aria-label={content.header.githubRepoAriaLabel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-transparent px-2.5 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-95 sm:px-4 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{content.header.githubRepoLabel}</span>
            </a>

            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              aria-label={content.header.toggleLanguageAriaLabel}
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              <span className="ml-1 font-mono text-xs">{locale.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              aria-label={content.header.toggleThemeAriaLabel}
            >
              {isMounted ? (
                theme === 'light' ? (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                )
              ) : (
                <span className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav className="mt-4 flex w-full items-center gap-1 md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onNavClick(navTargetByHref[item.href])}
                className={`min-w-0 flex-1 rounded-lg px-2 py-2 text-center text-xs font-medium leading-tight transition-colors sm:text-sm ${
                  isActive
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
