import type { Metadata } from "next";
import Link from "next/link";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "glossaire";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

const TERMS: { term: string; body: React.ReactNode }[] = [
  {
    term: "ALD (Affection de Longue Durée)",
    body: (
      <>
        Statut administratif ouvrant droit à une prise en charge à 100 % des soins liés à une pathologie
        donnée. Voir{" "}
        <Link href={chapterHref("demarches-administratives")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
          Démarches administratives
        </Link>
        .
      </>
    ),
  },
  {
    term: "Autosomique dominant",
    body: (
      <>
        Mode de transmission héréditaire dans lequel une seule copie mutée du gène (sur les deux que possède
        chaque personne) suffit à ce que la maladie puisse s&apos;exprimer. C&apos;est le mode de transmission
        du PHTS. Voir{" "}
        <Link href={chapterHref("heredite-conseil-genetique")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
          Hérédité et conseil génétique
        </Link>
        .
      </>
    ),
  },
  {
    term: "Conseil génétique",
    body: "Démarche médicale, réalisée par un généticien ou un conseiller en génétique, qui accompagne une personne ou une famille avant et après un test génétique.",
  },
  {
    term: "De novo (mutation)",
    body: "Mutation apparue spontanément chez une personne, sans qu'elle ait été héritée de l'un de ses parents.",
  },
  {
    term: "Gène suppresseur de tumeur",
    body: "Catégorie de gènes dont le rôle normal est de freiner la croissance et la division des cellules. PTEN en fait partie.",
  },
  {
    term: "Germinale (mutation)",
    body: "Mutation présente dans toutes les cellules du corps dès la naissance, transmissible aux enfants. À distinguer d'une mutation somatique.",
  },
  {
    term: "Hamartome",
    body: "Excroissance bénigne (non cancéreuse) formée d'un mélange anormal de tissus normalement présents à cet endroit du corps. Les hamartomes sont une caractéristique centrale du PHTS.",
  },
  {
    term: "Macrocéphalie",
    body: "Périmètre crânien significativement supérieur à la moyenne pour l'âge et le sexe. C'est l'un des critères cliniques majeurs utilisés dans le diagnostic du PHTS.",
  },
  {
    term: "PHTS (PTEN Hamartoma Tumor Syndrome)",
    body: (
      <>
        Terme regroupant l&apos;ensemble des syndromes causés par une mutation héréditaire du gène PTEN, dont
        le syndrome de Cowden et le syndrome de Bannayan-Riley-Ruvalcaba. Voir{" "}
        <Link href={chapterHref("symptomes-syndromes")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
          Symptômes et syndromes associés
        </Link>
        .
      </>
    ),
  },
  {
    term: "PI3K/AKT/mTOR (voie de signalisation)",
    body: "Chaîne de signaux à l'intérieur de la cellule qui régule sa croissance, sa survie et sa division. La protéine PTEN freine normalement cette voie ; sa perte la rend hyperactive, ce qui favorise la formation de tumeurs.",
  },
  {
    term: "PNDS (Protocole National de Diagnostic et de Soins)",
    body: "Document de référence, publié en France par la Haute Autorité de Santé, qui structure officiellement le diagnostic et la prise en charge d'une maladie rare donnée. Le syndrome de Cowden n'en possède pas encore à ce jour.",
  },
  {
    term: "Pénétrance",
    body: "Probabilité qu'une personne porteuse d'une mutation développe effectivement des signes ou des symptômes de la maladie au cours de sa vie. Dans le PHTS, la pénétrance est élevée mais l'expression de la maladie reste très variable d'une personne à l'autre.",
  },
  {
    term: "Somatique (mutation)",
    body: "Mutation apparue dans certaines cellules seulement, au cours de la vie d'une personne, et qui n'est pas transmissible à ses enfants. À l'origine de nombreux cancers non héréditaires. À distinguer d'une mutation germinale.",
  },
  {
    term: "Suppresseur de tumeur",
    body: "Voir Gène suppresseur de tumeur.",
  },
  {
    term: "Trichilemmome",
    body: "Petite tumeur bénigne se développant à partir des cellules de la gaine du follicule pileux, le plus souvent sur le visage. C'est l'un des signes cutanés caractéristiques du syndrome de Cowden.",
  },
];

export default function GlossairePage() {
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

        <p className="mb-6 leading-relaxed">
          Un lexique des termes techniques rencontrés dans les pages de cette rubrique, dans l&apos;ordre
          alphabétique.
        </p>

        <dl className="mb-10 divide-y divide-black/10">
          {TERMS.map((entry) => (
            <div key={entry.term} className="py-3">
              <dt className="font-serif font-semibold text-[#111]">{entry.term}</dt>
              <dd className="mt-1 text-[#2b2b28]">{entry.body}</dd>
            </div>
          ))}
        </dl>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("qu-est-ce-que-pten"), label: "Qu'est-ce que PTEN ?" },
            { href: chapterHref("heredite-conseil-genetique"), label: "Hérédité et conseil génétique" },
            { href: chapterHref("symptomes-syndromes"), label: "Symptômes et syndromes associés" },
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