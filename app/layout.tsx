import type { Metadata } from 'next';

import { AppShell } from '@/components/layout/app-shell';
import { LocaleProvider } from '@/components/providers/locale-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultLocale } from '@/lib/i18n/config';
import { createPageMetadata, getMetadataBase } from '@/lib/seo/metadata';

import './globals.css';

export const metadata: Metadata = {
  ...createPageMetadata({
    path: '/',
    title: 'Kanban Dashboard — Public GraphQL API Playground',
    description:
      'Public, open GraphQL API built as an educational playground for GraphQL and Apollo Client.',
  }),
  metadataBase: getMetadataBase(),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {umamiWebsiteId ? (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={umamiWebsiteId}
          ></script>
        ) : null}
        <ThemeProvider>
          <LocaleProvider>
            <AppShell>{children}</AppShell>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
