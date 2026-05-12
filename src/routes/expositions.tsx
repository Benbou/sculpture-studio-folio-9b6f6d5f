import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/expositions")({
  head: () => ({
    meta: [
      { title: "Expositions — Christine Bouquet" },
      {
        name: "description",
        content:
          "Expositions passées et à venir de Christine Bouquet, sculptrice (Lille, Paris, Belgique).",
      },
      { property: "og:title", content: "Expositions — Christine Bouquet" },
      {
        property: "og:description",
        content: "Agenda des expositions de Christine Bouquet.",
      },
    ],
  }),
  component: Expositions,
});

type Event = { title: string; place?: string; dates?: string[] };
type Year = { year: string; events: Event[] };

const data: Year[] = [
  {
    year: "2025",
    events: [
      {
        title: "FESTIV'ARTS — Espace Lille Métropole",
        place: "16 avenue du Molinel, Wasquehal",
        dates: [
          "Vernissage : vendredi 31 octobre 2025, 17h",
          "Samedi 1er novembre 9h30 – 20h",
          "Dimanche 2 novembre 8h30 – 19h",
        ],
      },
      {
        title: "Portes ouvertes des Ateliers d'Artistes",
        place: "Bondues",
        dates: ["Samedi 4 et dimanche 5 octobre 2025"],
      },
      {
        title: "5ᵉ Salon des Artistes Solidaires",
        place: "Espace Michel Delplancke, route de Hautevalle, Linselles (59126)",
        dates: ["Samedi 31 mai et dimanche 1er juin 2025, 10h – 19h"],
      },
      {
        title: "Week-end des Arts",
        place: "Ferme du Mont Saint-Jean, Halluin (59250)",
        dates: ["28, 29 et 30 mars 2025, 10h – 19h"],
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "Portes ouvertes des Ateliers d'Artistes",
        place: "158 av. des Saules, 59910 Bondues",
        dates: ["Samedi et dimanche 5 et 6 octobre 2024 — 10h–12h / 14h–18h"],
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "Templ'Œuvres d'Art",
        place: "Salle de l'ancienne mairie, Place du Général de Gaulle, Templeuve-en-Pévèle",
        dates: [
          "Samedi et dimanche 18/19 et 25/26 novembre, 10h30–12h30 / 15h–19h",
          "Vendredi 24 novembre, 15h–19h",
        ],
      },
      {
        title: "Portes ouvertes des Ateliers d'Artistes",
        place: "Bondues",
        dates: ["Samedi et dimanche 7 et 8 octobre, 10h–12h / 14h–18h"],
      },
      {
        title: "ART2-SERVE",
        place: "Musée de Folklore Vie Frontalière, Mouscron (Belgique)",
        dates: [
          "Vernissage 31 mars (sur invitation)",
          "1er et 2 avril, 10h–18h",
          "Organisée par le Lions Club Mouscron",
        ],
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        title: "Exposition « Vision » — Galerie By Châtel",
        place: "58 rue des Tournelles, Paris 3ᵉ",
        dates: [
          "7 avril – 1er mai 2022",
          "Mercredi au samedi 12h–19h, dimanche et jours fériés 14h–19h",
        ],
      },
      {
        title: "Exposition-vente Lions Club Roubaix-Tourcoing",
        place: "Centre Paul Corteville, 295 rue de Lille, Roncq",
        dates: ["1er, 2 et 3 avril 2022 — au profit du CAS de Roubaix"],
      },
      {
        title: "« De la terre au bronze »",
        place: "Espace culturel de Bondues (59)",
        dates: ["26 février – 13 mars 2022"],
      },
    ],
  },
];

function Expositions() {
  return (
    <Layout>
      <PageHeader eyebrow="Agenda" title="Expositions" />
      <section className="mx-auto max-w-3xl space-y-16 px-6 pb-20">
        {data.map((y) => (
          <div key={y.year}>
            <h2 className="mb-6 border-b border-border pb-3 font-serif text-3xl font-light text-foreground">
              {y.year}
            </h2>
            <ul className="divide-y divide-border">
              {y.events.map((e, i) => (
                <li key={i} className="py-8">
                  {e.dates && (
                    <ul className="mb-3 space-y-0.5 font-serif text-lg font-medium tracking-wide text-foreground">
                      {e.dates.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  )}
                  <p className="font-serif text-xl font-light text-foreground">{e.title}</p>
                  {e.place && (
                    <p className="mt-1 text-sm font-light italic text-muted-foreground">
                      {e.place}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}
