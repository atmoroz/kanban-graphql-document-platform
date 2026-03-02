type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </article>
  );
}
