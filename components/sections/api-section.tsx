'use client';

import { ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { useLocale } from '@/components/providers/locale-provider';
import { apiContent } from '@/lib/content/api';
import { uiContent } from '@/lib/content/ui';

export function ApiSection() {
  const { locale } = useLocale();
  const content = apiContent[locale];
  const serviceContent = uiContent[locale];
  const [activeSection, setActiveSection] = useState('getting-started');

  const currentSection = useMemo(
    () => content.sections.find((section) => section.id === activeSection) ?? content.sections[0],
    [activeSection, content.sections],
  );

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950 md:block">
        <nav className="sticky top-20 space-y-1 p-6">
          {content.sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950/50 dark:text-purple-300'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {section.title[locale]}
            </button>
          ))}
        </nav>
      </aside>

      <div className="w-full border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
        <select
          value={activeSection}
          onChange={(event) => setActiveSection(event.target.value)}
          aria-label={serviceContent.api.mobileSectionSelectAriaLabel}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        >
          {content.sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title[locale]}
            </option>
          ))}
        </select>
      </div>

      <main className="max-w-4xl flex-1 px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100">{currentSection.title[locale]}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{currentSection.description[locale]}</p>
        </div>

        <div className="space-y-12">
          {currentSection.examples.map((example) => (
            <section key={`${currentSection.id}-${example.title.en}`} className="space-y-4">
              <div className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{example.title[locale]}</h2>
              </div>

              {example.description ? (
                <p className="ml-7 text-gray-600 dark:text-gray-400">{example.description[locale]}</p>
              ) : null}

              <div className="ml-7 space-y-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {content.codeLabels.graphql}
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-950 dark:text-gray-200">
                    <code>{example.code.graphql}</code>
                  </pre>
                </div>

                {example.code.javascript ? (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {content.codeLabels.javascript}
                    </p>
                    <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-950 dark:text-gray-200">
                      <code>{example.code.javascript}</code>
                    </pre>
                  </div>
                ) : null}

                {example.code.curl ? (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {content.codeLabels.curl}
                    </p>
                    <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-950 dark:text-gray-200">
                      <code>{example.code.curl}</code>
                    </pre>
                  </div>
                ) : null}
              </div>

              {example.note ? (
                <div className="ml-7 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    {content.notePrefix} {example.note[locale]}
                  </p>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
