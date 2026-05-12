import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { ImagePlaceholder } from "../components/site/Placeholder";

export const Route = createFileRoute("/fonderie")({
  head: () => ({
    meta: [
      { title: "La fonderie — Christine Bouquet" },
      {
        name: "description",
        content:
          "Plongée dans l'atelier et le processus de fonte des sculptures en bronze.",
      },
      { property: "og:title", content: "La fonderie — Christine Bouquet" },
      {
        property: "og:description",
        content: "Atelier, modelage, moulage, cire perdue, patine.",
      },
    ],
  }),
  component: Fonderie,
});

const steps = [
  { n: "01", t: "Modelage", d: "La terre est travaillée à la main, en atelier, jusqu'à trouver sa forme." },
  { n: "02", t: "Moulage", d: "Un moule est réalisé pour préserver la forme originale." },
  { n: "03", t: "Cire perdue", d: "Une épreuve en cire est tirée puis enrobée de céramique." },
  { n: "04", t: "Coulée", d: "Le bronze en fusion remplace la cire à plus de 1100°C." },
  { n: "05", t: "Patine", d: "Décochage, ciselure et patine donnent à la pièce sa peau finale." },
];

function Fonderie() {
  return (
    <Layout>
      <PageHeader
        eyebrow="L'atelier"
        title="La fonderie"
        intro="Du modelage à la patine — les étapes d'une sculpture en bronze."
      />
      <section className="mx-auto max-w-5xl space-y-20 px-6 pb-20">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`grid items-center gap-10 md:grid-cols-2 ${
              i % 2 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <ImagePlaceholder label={`Étape ${s.n} — ${s.t}`} ratio="4/3" />
            <div>
              <p className="font-serif text-5xl font-light text-muted-foreground">{s.n}</p>
              <h2 className="mt-2 font-serif text-3xl text-foreground">{s.t}</h2>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
