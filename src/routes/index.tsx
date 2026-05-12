import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christine Bouquet — Sculptrice" },
      {
        name: "description",
        content:
          "Portfolio de Christine Bouquet, sculptrice. Œuvres en bronze, terre, résine et plâtre, écrans et cyanotypes.",
      },
      { property: "og:title", content: "Christine Bouquet — Sculptrice" },
      {
        property: "og:description",
        content:
          "Portfolio de Christine Bouquet, sculptrice. Œuvres, atelier, expositions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sculpteur — France
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.05] text-foreground md:text-7xl">
            Donner forme
            <br />
            au silence.
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Sculptures en bronze, terre et résine. Un travail patient sur la
            matière, le geste et la mémoire des corps.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/galerie"
              className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Découvrir la galerie
            </Link>
            <Link
              to="/portrait"
              className="px-6 py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              À propos →
            </Link>
          </div>
        </div>
        <div>
          <ImagePlaceholder label="Œuvre principale — bronze" ratio="4/5" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-28">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-serif text-2xl font-light text-foreground md:text-3xl">
            Sélection récente
          </h2>
          <Link
            to="/galerie"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
          >
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Bronze — 2024", "Terre — 2023", "Résine — 2024"].map((l) => (
            <ImagePlaceholder key={l} label={l} ratio="3/4" />
          ))}
        </div>
      </section>
    </Layout>
  );
}
