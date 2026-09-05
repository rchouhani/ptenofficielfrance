import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "approches-internationales-francaises";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function ApprochesInternationalesFrancaisesPage() {
  const { previous, next } = getAdjacentChapters(SLUG);

  return (
    <main id="contenu-maladie" className="mx-auto max-w-3xl px-6 py-12">
      <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-[#6B6B66]">
        <Link href="/pages/disease" className="underline decoration-[#E85D3D] underline-offset-2">
          La maladie
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{meta.title}</span>
      </nav>

      <article aria-labelledby="article-titre">
        <p className="mb-2 text-sm italic text-[#6B6B66]">Comprendre le gène PTEN - PTEN Officiel France</p>
        <h1 id="article-titre" className="mb-6 font-serif text-4xl font-bold text-[#111]">
          {meta.title}
        </h1>

        <TableOfContents
          items={[
            { id: "a-linternational", label: "À l'international" },
            { id: "en-france", label: "En France" },
            { id: "role-association-patients", label: "Le rôle d'une association de patients" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="a-linternational" title="À l'international">
          <p className="mb-4">
            Le syndrome de Cowden a été précisé et documenté par plusieurs sociétés savantes qui font
            aujourd&apos;hui référence :
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              L&apos;<strong>International Cowden Consortium</strong> a établi les premiers critères
              cliniques diagnostiques, régulièrement révisés depuis.
            </li>
            <li>
              Le <strong>National Comprehensive Cancer Network (NCCN)</strong>, aux États-Unis, publie et met
              à jour des recommandations de dépistage et de prise en charge du PHTS, aujourd&apos;hui
              largement reprises par les équipes spécialisées dans le monde.
            </li>
            <li>
              Des guides de référence comme les <em>GeneReviews</em> de l&apos;Université de Washington
              centralisent les connaissances médicales actualisées sur le sujet pour les professionnels de
              santé.
            </li>
            <li>
              D&apos;autres pays, comme le Japon, ont récemment publié leurs propres recommandations
              nationales de diagnostic et de suivi, signe que la structuration de la prise en charge du PHTS
              est un chantier encore récent, y compris dans des systèmes de santé bien dotés.
            </li>
            <li>
              Des fondations comme <strong>PTEN Research</strong> (Royaume-Uni) ou la{" "}
              <strong>PTEN Hamartoma Tumor Syndrome Foundation</strong> (États-Unis) jouent un rôle actif dans
              le financement de la recherche et la mise en réseau des patients à l&apos;échelle mondiale
              (voir{" "}
              <Link href={chapterHref("recherche-essais-cliniques")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
                Recherche en cours et essais cliniques
              </Link>
              ).
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="en-france" title="En France">
          <p className="mb-4">
            La recherche française a contribué de façon notable à la connaissance de la maladie : une étude
            portée par le <strong>French Cowden Disease Network</strong>, publiée en 2013, a notamment permis
            d&apos;affiner l&apos;estimation des risques cumulés de cancer chez les patients porteurs
            d&apos;une mutation PTEN.
          </p>
          <p className="mb-4">
            Sur le plan de l&apos;organisation des soins, la situation reste toutefois en construction. Selon
            les données de la <strong>Banque nationale des maladies rares</strong>, le nombre de personnes
            diagnostiquées est passé de 347 en 2022 à 725 en août 2025, une progression que les spécialistes
            attribuent surtout à un meilleur repérage de la maladie, tout en estimant qu&apos;un nombre
            significatif de patients reste probablement encore non diagnostiqué.
          </p>
          <p className="mb-4">
            Cette situation a fait l&apos;objet, en mai 2026, de deux questions écrites déposées à
            l&apos;Assemblée nationale, interpellant le ministère de la Santé sur l&apos;errance diagnostique
            fréquente, le manque de formation des professionnels de santé sur cette pathologie, et la
            difficulté d&apos;accéder à un suivi coordonné sur l&apos;ensemble du territoire. Ces questions
            illustrent un constat que beaucoup de familles concernées partagent : le syndrome de Cowden ne
            bénéficie pas encore, en France, d&apos;un protocole national de diagnostic et de soins (PNDS)
            aussi structuré que d&apos;autres maladies rares plus anciennement identifiées, une situation
            qui explique en partie pourquoi les démarches décrites sur la page{" "}
            <Link href={chapterHref("demarches-administratives")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Démarches administratives
            </Link>{" "}
            demandent souvent plus d&apos;efforts qu&apos;elles ne le devraient.
          </p>
        </ArticleSection>

        <ArticleSection id="role-association-patients" title="Le rôle d'une association de patients">
          <p className="mb-4">
            C&apos;est précisément l&apos;un des rôles qu&apos;une association de patients peut jouer en
            complément du système de soins : faire connaître la maladie auprès du grand public et des
            professionnels de santé, aider les familles à trouver des praticiens déjà sensibilisés au sujet,
            et porter la voix des patients auprès des pouvoirs publics pour faire avancer une reconnaissance
            plus formelle de la prise en charge.
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("recherche-essais-cliniques"), label: "Recherche en cours et essais cliniques" },
            { href: chapterHref("demarches-administratives"), label: "Démarches administratives" },
            { href: chapterHref("suivi-medical"), label: "Propositions de suivi" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { note: "Assemblée nationale", label: "Question écrite n° 15069", href: "https://questions.assemblee-nationale.fr/q17/17-15069QE.htm" },
            { note: "Assemblée nationale", label: "Question écrite n° 15427", href: "https://questions.assemblee-nationale.fr/q17/17-15427QE.htm" },
            { note: "MedlinePlus Genetics", label: "PTEN gene (référence à l'étude du French Cowden Disease Network, 2013)", href: "https://medlineplus.gov/genetics/gene/pten/" },
          ]}
        />
      </article>

      <ChapterPager
        previous={previous ? { href: chapterHref(previous.slug), title: previous.title } : null}
        next={next ? { href: chapterHref(next.slug), title: next.title } : null}
      />
    </main>
  );
}