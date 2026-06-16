import { Link } from "react-router-dom";
import { Layout } from "../components/site/Layout";
import { Seo } from "../components/site/Seo";
import { works } from "../data/works";
import cyanotype3 from "../assets/works/cyanotype-3.jpeg";
import encre1 from "../assets/works/encres-1.jpeg";

export default function Index() {
  const hero = works.find((w) => w.title === "Pause ombragée") ?? works[0];
  const poidsDesPas = works.find((w) => w.title === "Le poids des pas");
  const selection = [
    poidsDesPas && {
      title: poidsDesPas.title,
      image: poidsDesPas.image,
      caption: poidsDesPas.material,
      to: "/galerie",
    },
    {
      title: "Cyanotype — pièce 3",
      image: cyanotype3,
      caption: "Cyanotype",
      to: "/cyanotypes",
    },
    {
      title: "Encres — pièce 1",
      image: encre1,
      caption: "Encre sur papier",
      to: "/encres",
    },
  ].filter(Boolean) as { title: string; image: string; caption: string; to: string }[];

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
            Christine sculpte dans la terre la présence du vivant et réalise
            ensuite des bronzes à la cire perdue.
            <br />
            <br />
            Les cyanotypes et les encres sur papier sont deux autres fenêtres
            de création de son travail qui repose essentiellement sur
            l'interaction avec les matières.
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
            className="w-full bg-white object-contain"
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
            <Link to={w.to} key={w.title} className="group block">
              <div className="overflow-hidden bg-white" style={{ aspectRatio: "3/4" }}>
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 font-serif text-lg text-foreground">{w.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {w.caption}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
          « La vision n'est pas que rétinienne. »
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Christine Bouquet
        </p>
      </section>
    </Layout>
  );
}
