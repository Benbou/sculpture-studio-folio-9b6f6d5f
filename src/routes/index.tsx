import { Link } from "react-router-dom";
import { Layout } from "../components/site/Layout";
import { Seo } from "../components/site/Seo";
import { works } from "../data/works";

export default function Index() {
  const hero = works.find((w) => w.title === "Tête en l'air") ?? works[0];
  const selection = [
    works.find((w) => w.title === "Forme composée I"),
    works.find((w) => w.title === "L'orchestre"),
    works.find((w) => w.title === "Connexion végétale II"),
  ].filter(Boolean) as typeof works;

  return (
    <Layout>
      <Seo
        title="Christine Bouquet — Sculptrice"
        description="Christine Bouquet, sculptrice et fondeur d'art. Bronzes patinés, bronze poli-miroir et résine. Atelier à Bondues, près de Lille."
      />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sculptrice — Bondues, France
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.05] text-foreground md:text-7xl">
            De la terre
            <br />
            au bronze.
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Christine Bouquet sculpte la présence du vivant. Bronzes patinés,
            poli-miroir et résines, réalisés à la cire perdue dans son atelier.
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
              Portrait →
            </Link>
          </div>
        </div>
        <div>
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full object-cover"
            style={{ aspectRatio: "4/5" }}
          />
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {hero.title} · {hero.material}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-serif text-2xl font-light text-foreground md:text-3xl">
            Sélection
          </h2>
          <Link
            to="/galerie"
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
          >
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {selection.map((w) => (
            <Link to="/galerie" key={w.title} className="group block">
              <div className="overflow-hidden bg-muted" style={{ aspectRatio: "3/4" }}>
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 font-serif text-lg text-foreground">{w.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {w.material}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
          « Le bronze est une matière vivante, jour après jour, au rythme des
          saisons, le temps y laissera ses traces… comme il fait dans nos vies. »
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Christine Bouquet
        </p>
      </section>
    </Layout>
  );
}
