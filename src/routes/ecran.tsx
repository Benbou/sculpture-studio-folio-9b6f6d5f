import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/ecran")({
  head: () => ({
    meta: [
      { title: "Écran — Christine Bouquet" },
      {
        name: "description",
        content: "Série « Écran » — œuvres de Christine Bouquet.",
      },
      { property: "og:title", content: "Écran — Christine Bouquet" },
      { property: "og:description", content: "Série Écran de Christine Bouquet." },
    ],
  }),
  component: Ecran,
});

function Ecran() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Série"
        title="Écran"
        intro="[Texte d'introduction à venir : ce que la série Écran explore — la surface, la projection, le voile entre les corps.]"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ImagePlaceholder key={i} label={`Écran — pièce ${i + 1}`} ratio="3/4" />
        ))}
      </section>
    </Layout>
  );
}
