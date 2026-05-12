import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { steps } from "../data/foundry";

export const Route = createFileRoute("/fonderie")({
  head: () => ({
    meta: [
      { title: "La fonderie — Christine Bouquet" },
      {
        name: "description",
        content:
          "De la terre au bronze : les 19 étapes de la technique du bronze à la cire perdue, dans l'atelier de Christine Bouquet.",
      },
      { property: "og:title", content: "La fonderie — Christine Bouquet" },
      {
        property: "og:description",
        content: "Technique du bronze à la cire perdue, étape par étape.",
      },
    ],
  }),
  component: Fonderie,
});

function Fonderie() {
  return (
    <Layout>
      <PageHeader
        eyebrow="L'atelier"
        title="La fonderie"
        intro="De la terre au bronze. L'apprentissage de la technique permet la connaissance de la matière. La connaissance est un pas vers la liberté. C'est pourquoi, en 2010, la fonderie a vu le jour."
      />
      <section className="mx-auto max-w-3xl px-6 pb-10">
        <p className="text-center font-serif text-xl italic text-foreground">
          Technique du bronze à la cire perdue
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-x-6 gap-y-12 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
        {steps.map((s) => (
          <figure key={s.n} className="flex flex-col">
            <div className="overflow-hidden bg-muted" style={{ aspectRatio: "1/1" }}>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Étape {s.n}
              </p>
              <p className="mt-1 font-serif text-lg text-foreground">{s.title}</p>
              <p className="mt-1 text-sm font-light text-muted-foreground">{s.desc}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </Layout>
  );
}
