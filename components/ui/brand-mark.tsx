type BrandMarkProps = {
  compact?: boolean;
  label: string;
};

export function BrandMark({ compact = false, label }: BrandMarkProps) {
  const badgeClass = compact
    ? 'flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-indigo-600'
    : 'flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600';

  const textClass = compact ? 'font-mono text-xs text-white' : 'font-mono text-sm text-white';

  return (
    <div className="flex items-center gap-2">
      <div className={badgeClass}>
        <span className={textClass}>K</span>
      </div>
      <span className="font-mono text-sm text-gray-900 dark:text-gray-100">{label}</span>
    </div>
  );
}
