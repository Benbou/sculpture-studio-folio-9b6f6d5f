import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import signature from "../assets/portrait/signature.png";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact — Christine Bouquet"
        description="Contacter Christine Bouquet, sculptrice à Bondues, près de Lille."
      />
      <PageHeader
        eyebrow="Écrire"
        title="Contact"
        intro="Pour une visite d'atelier, une exposition ou toute information."
      />
      <section className="mx-auto max-w-2xl px-6 pb-20">
        <div className="flex flex-col items-center space-y-3 text-center font-light text-foreground/90">
          <p className="text-sm">
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
      </section>
    </Layout>
  );
}
