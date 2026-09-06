import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/app/component/article/Callout";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "recherche-essais-cliniques";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function RechercheEssaisCliniquesPage() {
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
          Cette page présente un panorama général de la recherche sur le PHTS. Elle ne constitue pas une liste
          exhaustive ni à jour en temps réel des essais ouverts : pour toute question sur une étude en cours,
          rapprochez-vous de votre équipe de génétique ou de votre centre de référence.
        </Callout>

        <TableOfContents
          items={[
            { id: "ou-en-est-la-recherche", label: "Où en est la recherche sur le PHTS ?" },
            { id: "registres-fondations-patients", label: "Les registres et fondations de patients dans le monde" },
            { id: "et-en-france", label: "Et en France ?" },
            { id: "comment-contribuer", label: "Comment un patient peut-il contribuer ?" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="ou-en-est-la-recherche" title="Où en est la recherche sur le PHTS ?">
          <p className="mb-4">
            Il n&apos;existe aujourd&apos;hui aucun traitement qui corrige directement la mutation du gène
            PTEN. La recherche se concentre donc sur trois axes principaux :
          </p>
          <ol className="mb-4 list-decimal space-y-2 pl-6">
            <li>
              <strong>Mieux comprendre la maladie</strong> : affiner les risques réels de cancer selon le
              type exact de mutation, mieux caractériser les formes atypiques, et comprendre pourquoi
              l&apos;expression de la maladie varie autant d&apos;une personne à l&apos;autre, y compris au
              sein d&apos;une même famille.
            </li>
            <li>
              <strong>Développer des traitements ciblés</strong> : puisque la perte de PTEN active
              anormalement une voie de signalisation cellulaire appelée PI3K/AKT/mTOR, plusieurs équipes
              étudient des médicaments qui freinent cette voie (notamment des molécules de la famille des
              inhibiteurs de mTOR, comme la rapamycine), dans l&apos;espoir de proposer un jour un traitement
              de fond, en plus de la seule surveillance.
            </li>
            <li>
              <strong>Améliorer le dépistage</strong> : par exemple, des travaux récents explorent
              l&apos;utilité d&apos;un test appelé immunohistochimie PTEN, réalisé directement sur une
              tumeur, comme outil de repérage plus rapide du syndrome de Cowden chez des patients pas encore
              diagnostiqués sur le plan génétique.
            </li>
          </ol>
        </ArticleSection>

        <ArticleSection id="registres-fondations-patients" title="Les registres et fondations de patients dans le monde">
          <p className="mb-4">
            Parce que le PHTS est une maladie rare, la recherche dépend beaucoup de la capacité à regrouper
            des données sur un grand nombre de patients à l&apos;échelle internationale. Plusieurs structures
            y contribuent :
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              La <strong>PTEN Research Foundation</strong> (Royaume-Uni) finance des projets de recherche
              dans le monde entier, avec l&apos;objectif explicite de faire émerger un traitement ciblé du
              PHTS.
            </li>
            <li>
              La <strong>PTEN Hamartoma Tumor Syndrome Foundation</strong> (États-Unis) a mis en place un
              registre de patients porté par les patients eux-mêmes, ainsi qu&apos;un programme de centres
              d&apos;excellence pour améliorer la qualité du suivi clinique.
            </li>
            <li>
              Un <strong>registre international</strong> associant l&apos;Italie et les États-Unis (porté
              notamment par l&apos;association Pten Italia et des centres de référence comme la Cleveland
              Clinic) collecte des données cliniques pour mieux caractériser la maladie et réduire le délai
              diagnostique, qui atteint parfois plusieurs années.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="et-en-france" title="Et en France ?">
          <p className="mb-4">
            Une étude de cohorte nationale, portée par l&apos;<strong>Institut Bergonié</strong> (Bordeaux)
            sous la direction de la Dre Virginie Bubien, avait pour objectif de suivre de façon prospective
            plusieurs centaines de patients porteurs d&apos;une mutation PTEN afin de mieux évaluer leur
            risque réel de cancer. Ce projet, connu sous le nom de cohorte <strong>COCO</strong>, a depuis été
            arrêté ; il reste toutefois un exemple de l&apos;intérêt porté par la recherche française à ce
            sujet, dans la continuité des travaux du <strong>French Cowden Disease Network</strong> évoqués
            sur la page{" "}
            <Link href={chapterHref("approches-internationales-francaises")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Approches internationales et françaises
            </Link>
            .
          </p>
        </ArticleSection>

        <ArticleSection id="comment-contribuer" title="Comment un patient peut-il contribuer ?">
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              En se faisant connaître auprès d&apos;un centre de référence ou de compétence, qui peut
              proposer d&apos;inclure les données (anonymisées) dans des registres de recherche.
            </li>
            <li>
              En signalant à l&apos;association toute étude ou tout essai clinique dont il aurait
              connaissance, afin de partager l&apos;information avec les autres familles.
            </li>
            <li>
              En participant, s&apos;il le souhaite, aux registres internationaux mentionnés ci-dessus, en
              général accessibles directement en ligne.
            </li>
          </ul>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("symptomes-syndromes"), label: "Symptômes et syndromes associés" },
            { href: chapterHref("approches-internationales-francaises"), label: "Approches internationales et françaises" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { label: "PTEN Research Foundation (Royaume-Uni)" },
            { label: "PTEN Hamartoma Tumor Syndrome Foundation (États-Unis)" },
            { label: "AP-HP registre des essais cliniques, étude COCO, Institut Bergonié" },
            { label: "Am J Clin Pathol (2024), étude sur l'immunohistochimie PTEN comme test de repérage du syndrome de Cowden" },
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