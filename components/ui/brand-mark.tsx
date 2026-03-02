type BrandMarkProps = {
  compact?: boolean;
  label: string;
  hideLabelOnMobile?: boolean;
};

export function BrandMark({ compact = false, label, hideLabelOnMobile = false }: BrandMarkProps) {
  const badgeClass = compact
    ? 'flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-indigo-600'
    : 'flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600';

  const textClass = compact ? 'font-mono text-xs text-white' : 'font-mono text-sm text-white';
  const labelClass = hideLabelOnMobile
    ? 'hidden font-mono text-sm text-gray-900 sm:inline dark:text-gray-100'
    : 'font-mono text-sm text-gray-900 dark:text-gray-100';

  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className={badgeClass}>
        <span className={textClass}>K</span>
      </div>
      <span className={`${labelClass} truncate`}>{label}</span>
    </div>
  );
}
