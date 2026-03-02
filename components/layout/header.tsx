'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useLocale } from '@/components/providers/locale-provider';
import { BrandMark } from '@/components/ui/brand-mark';
import { navItems } from '@/lib/content/layout';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <BrandMark />

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
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

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 font-mono text-xs">{locale.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav className="mt-4 flex items-center gap-1 md:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors ${
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
