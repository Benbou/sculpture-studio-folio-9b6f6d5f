import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import { ImagePlaceholder } from "../components/site/Placeholder";

export default function Cyanotypes() {
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
        {Array.from({ length: 6 }).map((_, i) => (
          <ImagePlaceholder key={i} label={`Cyanotypes — n°${i + 1}`} ratio="4/5" />
        ))}
      </section>
    </Layout>
  );
}
