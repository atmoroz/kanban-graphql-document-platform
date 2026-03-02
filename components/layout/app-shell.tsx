import { AnalyticsInit } from '@/components/analytics/analytics-init';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <AnalyticsInit />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
