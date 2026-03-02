import { AppShell } from '@/components/layout/app-shell';
import { LocaleProvider } from '@/components/providers/locale-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultLocale } from '@/lib/i18n/config';

import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="865e04fc-279f-4f56-9411-3609da511aaf">
        </script>
        <ThemeProvider>
          <LocaleProvider>
            <AppShell>{children}</AppShell>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
