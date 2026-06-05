import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import encre1 from "../assets/works/encres-1.jpeg";
import encre2 from "../assets/works/encres-2.jpeg";
import encre3 from "../assets/works/encres-3.jpeg";
import encre4 from "../assets/works/encres-4.jpeg";
import encre5 from "../assets/works/encres-5.jpeg";
import encre6 from "../assets/works/encres-6.jpeg";
import encre7 from "../assets/works/encres-7.jpeg";
import encre8 from "../assets/works/encres-8.jpeg";
import encre9 from "../assets/works/encres-9.jpeg";
import encre10 from "../assets/works/encres-10.jpeg";

export default function Encres() {
  const pieces = [
    { src: encre1, size: "20 × 20 cm" },
    { src: encre2, size: "20 × 20 cm" },
    { src: encre3, size: "20 × 20 cm" },
    { src: encre4, size: "20 × 20 cm" },
    { src: encre5, size: "20 × 30 cm" },
    { src: encre6, size: "20 × 30 cm" },
    { src: encre7, size: "20 × 20 cm" },
    { src: encre8, size: "20 × 20 cm" },
    { src: encre9, size: "20 × 20 cm" },
    { src: encre10, size: "20 × 20 cm" },
  ];

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
            <p>Série d'encres sur papier.</p>
            <p>«&nbsp;Forêts enchantées&nbsp;»</p>
          </>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {pieces.map((piece, i) => (
          <figure key={piece.src} className="space-y-3">
            <div className="overflow-hidden bg-white">
              <img
                src={piece.src}
                alt={`Encres — pièce ${i + 1} — ${piece.size}`}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
            <figcaption className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Encres — pièce {i + 1} — {piece.size}
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
