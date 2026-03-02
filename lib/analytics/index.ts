export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

export type NavTarget = 'overview' | 'api' | 'about';
export type ExternalDestination = 'linkedin' | 'telegram' | 'github' | 'api';

export const ANALYTICS_EVENTS = {
  navOverviewClick: 'nav_overview_click',
  navApiClick: 'nav_api_click',
  navAboutClick: 'nav_about_click',
  externalLinkClick: 'external_link_click',
  feedbackClick: 'feedback_click',
} as const;

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

export function onRouteChange(path: string): void {
  trackPageView(path);
}

export function onNavClick(target: NavTarget): void {
  const eventNameByTarget: Record<NavTarget, string> = {
    overview: ANALYTICS_EVENTS.navOverviewClick,
    api: ANALYTICS_EVENTS.navApiClick,
    about: ANALYTICS_EVENTS.navAboutClick,
  };

  trackEvent({ name: eventNameByTarget[target] });
}

export function onExternalLinkClick(destination: ExternalDestination): void {
  trackEvent({
    name: ANALYTICS_EVENTS.externalLinkClick,
    properties: { destination },
  });
}

export function onFeedbackClick(): void {
  trackEvent({ name: ANALYTICS_EVENTS.feedbackClick });
}
