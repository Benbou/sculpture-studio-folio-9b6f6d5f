import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import { ImagePlaceholder } from "../components/site/Placeholder";

export default function Encres() {
  return (
    <Layout>
      <Seo
        title="Encres — Christine Bouquet"
        description="Série « Encres » — œuvres de Christine Bouquet."
      />
      <PageHeader
        eyebrow="Série"
        title="Encres"
        intro="[Texte d'introduction à venir : ce que la série Encres explore — le geste, la trace, le rapport au papier.]"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ImagePlaceholder key={i} label={`Encres — pièce ${i + 1}`} ratio="3/4" />
        ))}
      </section>
    </Layout>
  );
}
