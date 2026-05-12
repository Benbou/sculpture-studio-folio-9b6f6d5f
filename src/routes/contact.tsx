import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import signature from "../assets/portrait/signature.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Christine Bouquet" },
      {
        name: "description",
        content: "Contacter Christine Bouquet, sculptrice à Bondues, près de Lille.",
      },
      { property: "og:title", content: "Contact — Christine Bouquet" },
      { property: "og:description", content: "Écrire à l'artiste." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:chr.bouquet@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Écrire"
        title="Contact"
        intro="Pour une visite d'atelier, une exposition ou toute information."
      />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 md:grid-cols-2">
        <div className="space-y-3 font-light text-foreground/90">
          <p className="font-serif text-xl text-foreground">Atelier</p>
          <p className="text-sm text-muted-foreground">158 avenue des Saules</p>
          <p className="text-sm text-muted-foreground">59910 Bondues</p>
          <p className="pt-3 text-sm">
            <a className="hover:text-foreground" href="mailto:chr.bouquet@icloud.com">
              chr.bouquet@icloud.com
            </a>
          </p>
          <p className="text-sm">
            <a className="hover:text-foreground" href="tel:+33679790839">
              06 79 79 08 39
            </a>
          </p>
          <p className="pt-6 max-w-sm text-sm italic text-muted-foreground">
            Merci pour votre message et l'intérêt que vous portez à mon travail.
            Je vous réponds rapidement.
          </p>
          <img
            src={signature}
            alt="Signature de Christine Bouquet"
            className="mt-2 h-12 w-auto opacity-80"
          />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block pb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Nom
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-border bg-background px-3 py-3 text-sm focus:border-foreground focus:outline-none"
            />
          </div>
          <div>
            <label className="block pb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-border bg-background px-3 py-3 text-sm focus:border-foreground focus:outline-none"
            />
          </div>
          <div>
            <label className="block pb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-border bg-background px-3 py-3 text-sm focus:border-foreground focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background"
          >
            Envoyer
          </button>
        </form>
      </section>
    </Layout>
  );
}
