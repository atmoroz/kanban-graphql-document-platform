import { AppShell } from '@/components/layout/app-shell';
import { LocaleProvider } from '@/components/providers/locale-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultLocale } from '@/lib/i18n/config';

import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <AppShell>{children}</AppShell>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
