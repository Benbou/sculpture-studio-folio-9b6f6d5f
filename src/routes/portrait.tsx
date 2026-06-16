import { Layout } from "../components/site/Layout";
import { PageHeader } from "../components/site/PageHeader";
import { Seo } from "../components/site/Seo";
import portrait from "../assets/portrait/christine.jpeg";
import signature from "../assets/portrait/signature.png";

export default function Portrait() {
  return (
    <Layout>
      <Seo
        title="Portrait — Christine Bouquet, sculptrice"
        description="Née à Paris en 1960, Christine Bouquet vit et travaille à Bondues près de Lille. Sculptrice et fondeur d'art."
      />
      <PageHeader eyebrow="Portrait" title="Christine Bouquet" />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-16 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <img
            src={portrait}
            alt="Christine Bouquet, sculptrice"
            className="w-full object-cover"
            style={{ aspectRatio: "1/1" }}
          />
          <img
            src={signature}
            alt="Signature de Christine Bouquet"
            className="mt-6 h-12 w-auto opacity-80"
          />
        </div>
        <div className="space-y-6 font-light leading-relaxed text-foreground/90">
          <p>
            Née en 1960 à Paris, Christine vit et travaille actuellement à
            Bondues, près de Lille.
          </p>
          <p>
            Après 10 ans de formation classique en atelier à Marcq, puis à
            Tournai en Belgique, elle associe ensuite la technique à la création
            puisqu'elle a réalisé, elle-même, toutes les étapes de la terre au
            bronze pendant plus de 10 ans.
          </p>
          <p>
            À travers ses sculptures, Christine nous parle de son rapport au
            monde. Ses multiples sources d'inspirations, géométrie, nature et
            poésie ne sont que prétexte à faire fonctionner les formes entre
            elles.
          </p>
          <p>
            Animée par les matières, leurs propriétés et leurs fonctionnements,
            les cyanotypes et les encres sur papier sont venues enrichir son
            travail en lui conférant, comme en sculpture, un pouvoir structural
            et une interaction avec la matière.
          </p>
          <blockquote className="border-l-2 border-foreground/40 pl-6 font-serif text-lg italic text-foreground">
            « Le bronze est une matière vivante,
            <br />
            jour après jour,
            <br />
            au rythme des saisons,
            <br />
            le temps y laissera ses traces…
            <br />
            comme il fait dans nos vies. »
          </blockquote>
        </div>
      </section>
    </Layout>
  );
}
