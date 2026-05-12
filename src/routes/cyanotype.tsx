import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/cyanotype")({
  head: () => ({
    meta: [
      { title: "Cyanotype — Christine Bouquet" },
      {
        name: "description",
        content:
          "Travaux cyanotype de Christine Bouquet — empreintes au bleu de Prusse.",
      },
      { property: "og:title", content: "Cyanotype — Christine Bouquet" },
      {
        property: "og:description",
        content: "Cyanotypes de Christine Bouquet.",
      },
    ],
  }),
  component: Cyanotype,
});

function Cyanotype() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Sur papier"
        title="Cyanotype"
        intro="[Texte d'introduction : un détour photographique au bleu de Prusse, en dialogue avec le volume.]"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ImagePlaceholder key={i} label={`Cyanotype — n°${i + 1}`} ratio="4/5" />
        ))}
      </section>
    </Layout>
  );
}
