import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/app/component/article/Callout";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "qu-est-ce-que-pten";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function QuestCeQuePtenPage() {
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

        <Callout>
          Cet article a un but informatif et pédagogique. Il ne remplace pas une consultation médicale, un
          diagnostic ou un suivi personnalisé.
        </Callout>

        <p className="mb-6 leading-relaxed">
          PTEN (pour <em>Phosphatase and TENsin homolog</em>) est un gène situé sur le chromosome 10, qui
          fabrique une protéine du même nom. Cette protéine appartient à une catégorie appelée « gènes
          suppresseurs de tumeurs » : son rôle normal est de freiner la croissance et la division des
          cellules, un peu comme un système de régulation qui empêche les cellules de se multiplier de façon
          anarchique.
        </p>

        <TableOfContents
          items={[
            { id: "role-proteine", label: "Le rôle de la protéine PTEN" },
            { id: "deux-origines", label: "Deux origines très différentes pour une mutation PTEN" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin sur cette page" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="role-proteine" title="Le rôle de la protéine PTEN">
          <p className="mb-4">Concrètement, la protéine PTEN agit à deux niveaux :</p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              <strong>Dans le cytoplasme</strong> de la cellule, elle ralentit une voie de signalisation
              appelée PI3K/AKT/mTOR, qui autrement pousse les cellules à croître et à survivre plus que
              nécessaire.
            </li>
            <li>
              <strong>Dans le noyau</strong>, elle participe à la réparation de l&apos;ADN et à la bonne
              régulation de la division cellulaire.
            </li>
          </ul>
          <p className="mb-4">
            Quand le gène PTEN fonctionne mal parce qu&apos;il est muté, partiellement supprimé, ou
            désactivé chimiquement, ce frein disparaît. Les cellules peuvent alors se diviser sans
            contrôle, ce qui favorise l&apos;apparition de tumeurs, bénignes (les <em>hamartomes</em>, des
            excroissances non cancéreuses) ou malignes (cancers).
          </p>
        </ArticleSection>

        <ArticleSection id="deux-origines" title="Deux origines très différentes pour une mutation PTEN">
          <p className="mb-4">
            Il existe deux grandes façons pour une mutation PTEN d&apos;apparaître, et la distinction est
            importante à comprendre :
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              <strong>Une mutation somatique</strong> : elle survient dans certaines cellules seulement, au
              cours de la vie, sans être transmissible aux enfants. C&apos;est la situation la plus fréquente
              en cancérologie, on la retrouve par exemple dans une grande partie des cancers de la prostate
              ou des glioblastomes. Elle ne concerne pas directement le champ d&apos;action de notre
              association.
            </li>
            <li>
              <strong>Une mutation germinale (héréditaire)</strong> : elle est présente dans toutes les
              cellules du corps dès la naissance et peut être transmise aux enfants. C&apos;est cette forme
              héréditaire qui est à l&apos;origine du syndrome de Cowden et des maladies apparentées, celles
              qui concernent directement les familles que nous accompagnons.
            </li>
          </ul>
          <p className="mb-4">
            <em>
              (Voir la page{" "}
              <Link href={chapterHref("heredite-conseil-genetique")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
                Hérédité et conseil génétique
              </Link>{" "}
              pour comprendre comment cette transmission fonctionne concrètement dans une famille.)
            </em>
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          title="Pour aller plus loin sur cette page"
          links={[
            { href: chapterHref("portes-entree"), label: "Les portes d'entrée du diagnostic" },
            { href: chapterHref("symptomes-syndromes"), label: "Symptômes et syndromes associés" },
            { href: chapterHref("glossaire"), label: "Glossaire des termes techniques" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { note: "MyPathologyReport", label: "Définition PTEN", href: "https://www.mypathologyreport.ca/fr/pathology-dictionary/pten/" },
            { note: "MedlinePlus Genetics", label: "PTEN gene", href: "https://medlineplus.gov/genetics/gene/pten/" },
            { note: "Wikipédia (FR)", label: "PTEN", href: "https://fr.wikipedia.org/wiki/PTEN" },
            { note: "GeneCards", label: "PTEN Gene", href: "https://www.genecards.org/card/PTEN" },
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