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
    cyanotype1,
    cyanotype2,
    cyanotype3,
    cyanotype4,
    cyanotype5,
    cyanotype6,
    cyanotype7,
    cyanotype8,
    cyanotype9,
    cyanotype10,
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
        {pieces.map((image, i) => (
          <figure key={image} className="space-y-3">
            <div className="overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
              <img
                src={image}
                alt={`Cyanotype — n°${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Cyanotype — n°{i + 1}
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
