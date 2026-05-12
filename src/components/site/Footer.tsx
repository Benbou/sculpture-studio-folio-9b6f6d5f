export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs tracking-wider text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Christine Bouquet — Sculptrice</span>
        <span className="font-serif italic">« La matière, le geste, le silence. »</span>
      </div>
    </footer>
  );
}
