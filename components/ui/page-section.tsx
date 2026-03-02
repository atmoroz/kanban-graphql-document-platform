export function PageSection({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section className="mx-auto max-w-4xl px-6 py-12">{children}</section>;
}
