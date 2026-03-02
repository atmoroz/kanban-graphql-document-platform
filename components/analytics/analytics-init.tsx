'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { onRouteChange, setAnalyticsAdapter } from '@/lib/analytics';
import { createUmamiAdapter } from '@/lib/analytics/umami';

export function AnalyticsInit() {
  const pathname = usePathname();

  useEffect(() => {
    setAnalyticsAdapter(createUmamiAdapter());
  }, []);

  useEffect(() => {
    onRouteChange(pathname);
  }, [pathname]);

  return null;
}
