import type { Locale } from '@/lib/i18n/config';

export type UiContent = {
  header: {
    toggleLanguageAriaLabel: string;
    toggleThemeAriaLabel: string;
    githubRepoLabel: string;
    githubRepoAriaLabel: string;
  };
  overview: {
    copyEndpointAriaLabel: string;
  };
  api: {
    mobileSectionSelectAriaLabel: string;
    codeTabsAriaLabel: string;
  };
  about: {
    telegramLinkAriaLabel: string;
    linkedInLinkAriaLabel: string;
    feedbackLinkAriaLabel: string;
  };
};

export const uiContent: Record<Locale, UiContent> = {
  en: {
    header: {
      toggleLanguageAriaLabel: 'Toggle language',
      toggleThemeAriaLabel: 'Toggle theme',
      githubRepoLabel: 'GitHub Repo',
      githubRepoAriaLabel: 'Open GitHub repository',
    },
    overview: {
      copyEndpointAriaLabel: 'Copy endpoint',
    },
    api: {
      mobileSectionSelectAriaLabel: 'Select API section',
      codeTabsAriaLabel: 'Code language tabs',
    },
    about: {
      telegramLinkAriaLabel: 'Open Telegram profile',
      linkedInLinkAriaLabel: 'Open LinkedIn profile',
      feedbackLinkAriaLabel: 'Send feedback email',
    },
  },
  ua: {
    header: {
      toggleLanguageAriaLabel: 'Перемкнути мову',
      toggleThemeAriaLabel: 'Перемкнути тему',
      githubRepoLabel: 'GitHub Repo',
      githubRepoAriaLabel: 'Відкрити GitHub репозиторій',
    },
    overview: {
      copyEndpointAriaLabel: 'Скопіювати endpoint',
    },
    api: {
      mobileSectionSelectAriaLabel: 'Обрати секцію API',
      codeTabsAriaLabel: 'Вкладки мов коду',
    },
    about: {
      telegramLinkAriaLabel: 'Відкрити Telegram профіль',
      linkedInLinkAriaLabel: 'Відкрити LinkedIn профіль',
      feedbackLinkAriaLabel: 'Надіслати email з відгуком',
    },
  },
};
