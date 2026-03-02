'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { useLocale } from '@/components/providers/locale-provider';
import { CodeBlockTabs } from '@/components/ui/code-block-tabs';
import { apiContent } from '@/lib/content/api';
import { uiContent } from '@/lib/content/ui';

export function ApiSection() {
  const { locale } = useLocale();
  const content = apiContent[locale];
  const serviceContent = uiContent[locale];
  const [activeSection, setActiveSection] = useState('getting-started');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const currentSection = useMemo(
    () => content.sections.find((section) => section.id === activeSection) ?? content.sections[0],
    [activeSection, content.sections],
  );

  return (
    <div className="flex min-h-screen min-w-0 flex-col md:flex-row">
      <aside className="sticky top-[110px] z-30 w-full border-b border-gray-200 bg-gray-50/95 backdrop-blur md:top-16 md:w-64 md:shrink-0 md:self-start md:border-b-0 md:border-r dark:border-gray-800 dark:bg-gray-950/95">
        <div className="p-4 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            aria-expanded={isMobileNavOpen}
            aria-controls="api-mobile-nav"
            className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-left text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          >
            <span>{currentSection.title[locale]}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isMobileNavOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {isMobileNavOpen ? (
            <nav id="api-mobile-nav" className="mt-2 space-y-1">
              {content.sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileNavOpen(false);
                  }}
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
          ) : null}
        </div>

        <nav className="hidden space-y-1 p-6 md:block md:h-[calc(100vh-5rem)] md:overflow-y-auto">
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

      <main className="w-full min-w-0 flex-1 px-4 py-10 sm:px-6 sm:py-12">
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
                <p className="text-gray-600 dark:text-gray-400 md:ml-7">{example.description[locale]}</p>
              ) : null}

              <div className="md:ml-7">
                <CodeBlockTabs
                  tabsAriaLabel={serviceContent.api.codeTabsAriaLabel}
                  tabs={[
                    {
                      id: 'graphql',
                      label: content.codeLabels.graphql,
                      language: 'graphql',
                      code: example.code.graphql,
                    },
                    ...(example.code.javascript
                      ? [
                          {
                            id: 'javascript',
                            label: content.codeLabels.javascript,
                            language: 'javascript' as const,
                            code: example.code.javascript,
                          },
                        ]
                      : []),
                    ...(example.code.curl
                      ? [
                          {
                            id: 'curl',
                            label: content.codeLabels.curl,
                            language: 'curl' as const,
                            code: example.code.curl,
                          },
                        ]
                      : []),
                  ]}
                />
              </div>

              {example.note ? (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20 md:ml-7">
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
