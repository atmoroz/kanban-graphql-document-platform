export function PageSection({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">{children}</section>;
}
