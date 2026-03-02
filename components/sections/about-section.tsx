'use client';

import { Linkedin, Mail, Send } from 'lucide-react';

import { useLocale } from '@/components/providers/locale-provider';
import { PageSection } from '@/components/ui/page-section';
import { aboutContent } from '@/lib/content/about';

export function AboutSection() {
  const { locale } = useLocale();
  const content = aboutContent[locale];

  return (
    <PageSection>
      <div className="mb-12">
        <div className="mb-8 flex items-start gap-6">
          <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
            <span className="text-4xl font-bold text-white">AM</span>
          </div>
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">{content.name}</h1>
            <p className="mb-4 text-xl text-purple-600 dark:text-purple-400">{content.role}</p>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{content.intro}</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-950/30">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">{content.yearsBadge}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 dark:border-indigo-800 dark:bg-indigo-950/30">
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{content.productBadge}</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{content.techStackTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {content.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{content.selectedCasesTitle}</h2>
        <div className="grid gap-6">
          {content.cases.map((caseItem) => (
            <article
              key={caseItem.title.en}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">{caseItem.title[locale]}</h3>
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{caseItem.description[locale]}</p>
              <div className="flex flex-wrap gap-2">
                {caseItem.tech.split(', ').map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-950/30 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{content.languagesTitle}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700 dark:text-gray-300">{content.ukrainianLabel}</span>
            <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-950/30 dark:text-green-300">
              {content.ukrainianLevel}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700 dark:text-gray-300">{content.englishLabel}</span>
            <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
              {content.englishLevel}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white shadow-xl">
        <h2 className="mb-2 text-2xl font-bold">{content.contactTitle}</h2>
        <p className="mb-6 text-white/80">{content.contactDescription}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={content.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Send className="h-5 w-5" />
            <span>{content.telegramLabel}</span>
          </a>

          <a
            href={content.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Linkedin className="h-5 w-5" />
            <span>{content.linkedInLabel}</span>
          </a>

          <a
            href={content.emailHref}
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Mail className="h-5 w-5" />
            <span>{content.emailLabel}</span>
          </a>
        </div>
      </div>
    </PageSection>
  );
}
