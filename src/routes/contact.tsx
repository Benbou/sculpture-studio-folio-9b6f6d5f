import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Christine Bouquet" },
      {
        name: "description",
        content:
          "Contacter Christine Bouquet, sculptrice — atelier, expositions, commandes.",
      },
      { property: "og:title", content: "Contact — Christine Bouquet" },
      {
        property: "og:description",
        content: "Écrire à l'artiste.",
      },
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
    window.location.href = `mailto:contact@christinebouquet.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Écrire"
        title="Contact"
        intro="Pour une visite d'atelier, une exposition ou toute information."
      />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 md:grid-cols-2">
        <div className="space-y-4 font-light text-foreground/90">
          <p className="font-serif text-xl text-foreground">Atelier</p>
          <p className="text-sm text-muted-foreground">[Adresse à compléter]</p>
          <p className="text-sm text-muted-foreground">[Téléphone]</p>
          <p className="text-sm text-muted-foreground">contact@christinebouquet.com</p>
          <p className="pt-6 text-sm text-muted-foreground">
            Les visites se font uniquement sur rendez-vous.
          </p>
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
