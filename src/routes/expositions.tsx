import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/expositions")({
  head: () => ({
    meta: [
      { title: "Expositions & presse — Christine Bouquet" },
      {
        name: "description",
        content:
          "Expositions passées et à venir, articles et presse autour du travail de Christine Bouquet.",
      },
      { property: "og:title", content: "Expositions & presse — Christine Bouquet" },
      {
        property: "og:description",
        content: "Agenda et revue de presse.",
      },
    ],
  }),
  component: Expositions,
});

const upcoming = [
  { date: "À venir", title: "[Titre de l'exposition]", place: "[Lieu, ville]" },
];

const past = [
  { date: "2024", title: "[Exposition collective]", place: "[Galerie, ville]" },
  { date: "2023", title: "[Exposition personnelle]", place: "[Lieu, ville]" },
  { date: "2022", title: "[Salon]", place: "[Ville]" },
];

const press = [
  { date: "2024", title: "[Titre de l'article]", source: "[Nom du média]" },
  { date: "2023", title: "[Interview]", source: "[Nom du média]" },
];

function List({
  title,
  items,
}: {
  title: string;
  items: { date: string; title: string; place?: string; source?: string }[];
}) {
  return (
    <div>
      <h2 className="mb-6 border-b border-border pb-3 font-serif text-2xl font-light text-foreground">
        {title}
      </h2>
      <ul className="divide-y divide-border">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid gap-1 py-5 md:grid-cols-[120px_1fr_1fr] md:items-baseline md:gap-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {it.date}
            </span>
            <span className="font-serif text-lg text-foreground">{it.title}</span>
            <span className="text-sm font-light text-muted-foreground">
              {it.place ?? it.source}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Expositions() {
  return (
    <Layout>
      <PageHeader eyebrow="Agenda" title="Expositions & presse" />
      <section className="mx-auto max-w-4xl space-y-16 px-6 pb-20">
        <List title="À venir" items={upcoming} />
        <List title="Expositions passées" items={past} />
        <List title="Presse" items={press} />
      </section>
    </Layout>
  );
}
