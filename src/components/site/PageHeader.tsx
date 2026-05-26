export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center md:pt-28">
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl font-light leading-tight text-foreground md:text-6xl">
        {title}
      </h1>
      {intro && (
        <div className="mx-auto mt-6 max-w-2xl space-y-2 text-base font-light leading-relaxed text-muted-foreground">
          {intro}
        </div>
      )}
    </header>
  );
}
