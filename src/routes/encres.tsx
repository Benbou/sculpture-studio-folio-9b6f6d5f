import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/encres")({
  head: () => ({
    meta: [
      { title: "Encres — Christine Bouquet" },
      {
        name: "description",
        content: "Série « Encres » — œuvres de Christine Bouquet.",
      },
      { property: "og:title", content: "Encres — Christine Bouquet" },
      { property: "og:description", content: "Série Encres de Christine Bouquet." },
    ],
  }),
  component: Encres,
});

function Encres() {
  return (
    <Layout>
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
