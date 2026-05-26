import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import encre1 from "../assets/works/encres-1.jpeg";
import encre2 from "../assets/works/encres-2.jpeg";
import encre3 from "../assets/works/encres-3.jpeg";
import encre4 from "../assets/works/encres-4.jpeg";
import encre5 from "../assets/works/encres-5.jpeg";
import encre6 from "../assets/works/encres-6.jpeg";

export default function Encres() {
  const pieces = [encre1, encre2, encre3, encre4, encre5, encre6];

  return (
    <Layout>
      <Seo
        title="Encres — Christine Bouquet"
        description="Série « Encres » — œuvres de Christine Bouquet."
      />
      <PageHeader
        eyebrow="Série"
        title="Encres"
        intro={
          <>
            <p>Série d'encres sur papier — format 20 cm × 20 cm.</p>
            <p>«&nbsp;Forêts enchantées&nbsp;»</p>
          </>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {pieces.map((image, i) => (
          <figure key={image} className="space-y-3">
            <div className="overflow-hidden bg-white" style={{ aspectRatio: "1 / 1" }}>
              <img
                src={image}
                alt={`Encres — pièce ${i + 1} — 20 × 20 cm`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Encres — pièce {i + 1} — 20 × 20 cm
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
