import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import cyanotype1 from "../assets/works/cyanotype-1.jpeg";
import cyanotype2 from "../assets/works/cyanotype-2.jpeg";
import cyanotype3 from "../assets/works/cyanotype-3.jpeg";
import cyanotype4 from "../assets/works/cyanotype-4.jpeg";
import cyanotype5 from "../assets/works/cyanotype-5.jpeg";
import cyanotype6 from "../assets/works/cyanotype-6.jpeg";
import cyanotype7 from "../assets/works/cyanotype-7.jpeg";
import cyanotype8 from "../assets/works/cyanotype-8.jpeg";
import cyanotype9 from "../assets/works/cyanotype-9.jpeg";
import cyanotype10 from "../assets/works/cyanotype-10.jpeg";

export default function Cyanotypes() {
  const pieces = [
    { src: cyanotype1, size: "24 x 32 cm" },
    { src: cyanotype2, size: "24 x 32 cm" },
    { src: cyanotype3, size: "23 x 23 cm" },
    { src: cyanotype4, size: "24 x 30 cm" },
    { src: cyanotype5, size: "30 x 40 cm" },
    { src: cyanotype6, size: "40 x 50 cm" },
    { src: cyanotype7, size: "40 x 50 cm" },
    { src: cyanotype8, size: "40 x 50 cm" },
    { src: cyanotype9, size: "40 x 50 cm" },
    { src: cyanotype10, size: "40 x 50 cm" },
  ];

  return (
    <Layout>
      <Seo
        title="Cyanotypes — Christine Bouquet"
        description="Travaux cyanotypes de Christine Bouquet — empreintes au bleu de Prusse."
      />
      <PageHeader
        eyebrow="Sur papier"
        title="Cyanotypes"
        intro="[Texte d'introduction : un détour photographique au bleu de Prusse, en dialogue avec le volume.]"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {pieces.map((piece, i) => (
          <figure key={piece.src} className="space-y-3">
            <div className="overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
              <img
                src={piece.src}
                alt={`Cyanotype — n°${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="block">Cyanotype n°{i + 1}</span>
              <span className="block text-muted-foreground/70">{piece.size}</span>
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
