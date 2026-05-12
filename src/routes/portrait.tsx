import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/portrait")({
  head: () => ({
    meta: [
      { title: "Portrait — Christine Bouquet" },
      {
        name: "description",
        content:
          "Parcours et démarche artistique de Christine Bouquet, sculptrice.",
      },
      { property: "og:title", content: "Portrait — Christine Bouquet" },
      {
        property: "og:description",
        content: "Bio, parcours et démarche de la sculptrice Christine Bouquet.",
      },
    ],
  }),
  component: Portrait,
});

function Portrait() {
  return (
    <Layout>
      <PageHeader eyebrow="Portrait" title="L'atelier d'une vie" />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-16 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <ImagePlaceholder label="Portrait de l'artiste" ratio="3/4" />
        <div className="space-y-6 font-light leading-relaxed text-foreground/90">
          <p className="font-serif text-xl italic text-foreground md:text-2xl">
            « Sculpter, c'est écouter ce que la matière sait déjà. »
          </p>
          <p>
            [Bio à compléter] Christine Bouquet vit et travaille en France.
            Formée à [école / atelier], elle développe depuis [année] un travail
            autour du corps, du portrait et de la mémoire.
          </p>
          <p>
            [Démarche] Chaque pièce naît d'une longue observation : la terre
            d'abord, puis le bronze ou la résine. Le geste reste visible,
            comme une trace.
          </p>
          <p>
            [Parcours] Expositions personnelles et collectives en France et à
            l'étranger. Œuvres présentes dans plusieurs collections privées.
          </p>
        </div>
      </section>
    </Layout>
  );
}
