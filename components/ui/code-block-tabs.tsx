'use client';

import { useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-javascript';

type CodeLanguage = 'graphql' | 'javascript' | 'curl';

type CodeTab = {
  id: string;
  label: string;
  language: CodeLanguage;
  code: string;
};

type CodeBlockTabsProps = {
  tabs: CodeTab[];
  tabsAriaLabel: string;
};

type PrismLanguage = 'graphql' | 'javascript' | 'bash';

function getPrismLanguage(language: CodeLanguage): PrismLanguage {
  if (language === 'curl') {
    return 'bash';
  }

  return language;
}

export function CodeBlockTabs({ tabs, tabsAriaLabel }: CodeBlockTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '');

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [tabs, activeTabId],
  );

  if (!activeTab) {
    return null;
  }

  const prismLanguage = getPrismLanguage(activeTab.language);
  const highlightedCode = Prism.highlight(
    activeTab.code,
    Prism.languages[prismLanguage],
    prismLanguage,
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div
        role="tablist"
        aria-label={tabsAriaLabel}
        className="flex flex-wrap gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-950"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                isActive
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <pre className="code-syntax overflow-x-auto bg-gray-100 p-4 text-sm leading-6 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <code
          className={`language-${prismLanguage}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}
