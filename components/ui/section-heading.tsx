type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">{title}</h1>
      {description ? <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p> : null}
    </div>
  );
}
