export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

export interface AnalyticsAdapter {
  pageView(path: string): void;
  track(event: AnalyticsEvent): void;
}

class NoopAnalyticsAdapter implements AnalyticsAdapter {
  pageView(_path: string): void {}

  track(_event: AnalyticsEvent): void {}
}

let adapter: AnalyticsAdapter = new NoopAnalyticsAdapter();

export function setAnalyticsAdapter(nextAdapter: AnalyticsAdapter): void {
  adapter = nextAdapter;
}

export function trackPageView(path: string): void {
  adapter.pageView(path);
}

export function trackEvent(event: AnalyticsEvent): void {
  adapter.track(event);
}
