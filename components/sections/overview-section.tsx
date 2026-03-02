'use client';

import { Check, CheckCircle2, Copy, Layers, Terminal, Zap } from 'lucide-react';
import { useState } from 'react';

import { useLocale } from '@/components/providers/locale-provider';
import { PageSection } from '@/components/ui/page-section';
import { overviewContent } from '@/lib/content/overview';

export function OverviewSection() {
  const { locale } = useLocale();
  const content = overviewContent[locale];
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageSection>
      <div className="mb-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 dark:border-purple-800 dark:bg-purple-950/30">
          <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">{content.badge}</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {content.title}
        </h1>

        <p className="whitespace-pre-line text-lg text-gray-600 dark:text-gray-400">{content.description}</p>
      </div>

      <div className="mb-12 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950/20">
        <div className="mb-3 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{content.endpointLabel}</h3>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-purple-200 bg-white p-3 dark:border-purple-700 dark:bg-gray-900">
          <code className="flex-1 text-sm text-purple-700 dark:text-purple-300">{content.endpoint}</code>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded p-2 transition-colors hover:bg-purple-100 dark:hover:bg-purple-900/50"
            aria-label="Copy endpoint"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-purple-950/20 dark:to-indigo-950/20">
          <Layers className="mb-4 h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{content.primaryCardTitle}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{content.primaryCardDescription}</p>
        </article>

        <article className="rounded-xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 dark:border-gray-800 dark:from-indigo-950/20 dark:to-blue-950/20">
          <CheckCircle2 className="mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {content.secondaryCardTitle}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{content.secondaryCardDescription}</p>
        </article>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{content.featuresTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 rounded-lg p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">{content.useCasesTitle}</h2>
        <ul className="space-y-3">
          {content.useCasesList.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
