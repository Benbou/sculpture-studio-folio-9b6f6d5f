import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Christine Bouquet" },
      {
        name: "description",
        content:
          "Galerie des sculptures de Christine Bouquet, classées par matériau : bronze, terre, résine, plâtre.",
      },
      { property: "og:title", content: "Galerie — Christine Bouquet" },
      {
        property: "og:description",
        content: "Sculptures en bronze, terre, résine et plâtre.",
      },
    ],
  }),
  component: Galerie,
});

const materials = ["Bronze", "Terre", "Résine", "Plâtre", "Autres"] as const;
type Material = (typeof materials)[number];

type Work = { id: string; title: string; year: string; material: Material; dim: string };

const works: Work[] = [
  { id: "b1", title: "Tête au vent I", year: "2024", material: "Bronze", dim: "45 × 30 × 20 cm" },
  { id: "b2", title: "Tête au vent II", year: "2024", material: "Bronze", dim: "45 × 30 × 20 cm" },
  { id: "b3", title: "Figure debout", year: "2023", material: "Bronze", dim: "70 × 20 × 18 cm" },
  { id: "t1", title: "Étude n°1", year: "2023", material: "Terre", dim: "30 × 25 × 20 cm" },
  { id: "t2", title: "Étude n°2", year: "2023", material: "Terre", dim: "32 × 24 × 22 cm" },
  { id: "r1", title: "Suspension", year: "2024", material: "Résine", dim: "60 × 40 × 30 cm" },
  { id: "p1", title: "Visage", year: "2022", material: "Plâtre", dim: "28 × 20 × 18 cm" },
];

function Galerie() {
  const [filter, setFilter] = useState<Material | "Tous">("Tous");
  const [active, setActive] = useState<Work | null>(null);
  const list = filter === "Tous" ? works : works.filter((w) => w.material === filter);

  return (
    <Layout>
      <PageHeader
        eyebrow="Galerie"
        title="Œuvres"
        intro="Une sélection classée par matériau. Cliquez sur une œuvre pour l'agrandir."
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          {(["Tous", ...materials] as const).map((m) => (
            <button
              key={m}
              onClick={() => setFilter(m)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                filter === m
                  ? "text-foreground underline underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="grid gap-x-6 gap-y-12 pb-16 sm:grid-cols-2 md:grid-cols-3">
          {list.map((w) => (
            <button
              key={w.id}
              onClick={() => setActive(w)}
              className="group text-left"
            >
              <ImagePlaceholder label={`${w.material} — ${w.year}`} ratio="3/4" />
              <div className="mt-3">
                <p className="font-serif text-lg text-foreground">{w.title}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {w.material} · {w.year}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="grid w-full max-w-4xl gap-6 bg-background p-6 md:grid-cols-[1.4fr_1fr] md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ImagePlaceholder label={`${active.material} — ${active.year}`} ratio="4/5" />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {active.material}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground">{active.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{active.year}</p>
                <p className="mt-6 text-sm font-light text-foreground/80">{active.dim}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  [Description à compléter — quelques lignes sur l'œuvre, son
                  contexte, sa technique.]
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="mt-8 self-start border border-foreground px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
