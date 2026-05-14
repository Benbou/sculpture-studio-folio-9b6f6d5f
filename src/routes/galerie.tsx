import { useState } from "react";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import { works, materials, type Material, type Work } from "../data/works";

export default function Galerie() {
  const [filter, setFilter] = useState<Material | "Tous">("Tous");
  const [active, setActive] = useState<Work | null>(null);
  const list = filter === "Tous" ? works : works.filter((w) => w.material === filter);

  return (
    <Layout>
      <Seo
        title="Galerie — Christine Bouquet"
        description="Galerie des sculptures de Christine Bouquet : bronze patiné, bronze poli-miroir, résine."
      />
      <PageHeader
        eyebrow="Galerie"
        title="Œuvres"
        intro="Sélection de sculptures en bronze et résine. Cliquez sur une œuvre pour l'agrandir."
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

        <div className="gap-x-6 pb-16 [column-fill:_balance] columns-1 sm:columns-2 md:columns-3">
          {list.map((w) => (
            <button
              key={w.title}
              onClick={() => setActive(w)}
              className="group mb-12 block w-full break-inside-avoid text-left"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3">
                <p className="font-serif text-lg text-foreground">{w.title}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {w.material}
                  {w.edition ? ` · ${w.edition}` : ""}
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
            className="grid max-h-[90vh] w-full max-w-5xl gap-6 overflow-auto bg-background p-6 md:grid-cols-[1.4fr_1fr] md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="h-auto w-full object-contain"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {active.material}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground">{active.title}</h2>
                {active.edition && (
                  <p className="mt-1 text-sm text-muted-foreground">{active.edition}</p>
                )}
                {active.dim && (
                  <p className="mt-6 text-sm font-light text-foreground/80">{active.dim}</p>
                )}
                {active.extra && active.extra.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm font-light text-muted-foreground">
                    {active.extra.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                )}
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
