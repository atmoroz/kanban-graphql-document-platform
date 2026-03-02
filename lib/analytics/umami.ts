import type { AnalyticsAdapter, AnalyticsEvent } from '@/lib/analytics';

type UmamiProps = Record<string, string | number | boolean | null>;

type UmamiTrack = {
  (eventName: string, eventData?: UmamiProps): void;
  (eventData?: UmamiProps): void;
};

declare global {
  interface Window {
    umami?: {
      track: UmamiTrack;
    };
  }
}

export function createUmamiAdapter(): AnalyticsAdapter {
  return {
    pageView(path: string): void {
      if (typeof window === 'undefined' || typeof window.umami?.track !== 'function') {
        return;
      }

      window.umami.track({ url: path });
    },
    track(event: AnalyticsEvent): void {
      if (typeof window === 'undefined' || typeof window.umami?.track !== 'function') {
        return;
      }

      window.umami.track(event.name, event.properties);
    },
  };
}
