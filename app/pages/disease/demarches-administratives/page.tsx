import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/app/component/article/Callout";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "demarches-administratives";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function DemarchesAdministrativesPage() {
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
          Cette page donne des repères généraux et non exhaustifs. Les démarches administratives évoluent
          régulièrement : vérifiez toujours les informations auprès de votre CPAM, de votre médecin traitant
          ou d&apos;une assistante sociale hospitalière, qui connaît votre dossier.
        </Callout>

        <p className="mb-6 leading-relaxed">
          Le syndrome de Cowden et les autres formes de PHTS nécessitent un suivi médical à vie, sur
          plusieurs spécialités. Certaines démarches permettent d&apos;alléger le coût et la logistique de ce
          suivi.
        </p>

        <TableOfContents
          items={[
            { id: "prise-en-charge-ald", label: "La prise en charge à 100 % (ALD)" },
            { id: "carte-urgence-maladies-rares", label: "La carte d'urgence maladies rares" },
            { id: "reconnaissance-handicap-mdph", label: "La reconnaissance du handicap (MDPH)" },
            { id: "ce-que-association-peut-faire", label: "Ce que l'association peut faire, et ce qu'elle ne fait pas" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="prise-en-charge-ald" title="La prise en charge à 100 % (ALD)">
          <p className="mb-4">
            Le syndrome de Cowden / PHTS ne figure pas dans la liste des 30 affections de longue durée (
            <strong>ALD 30</strong>) qui bénéficient d&apos;une prise en charge automatique. Il relève en
            général de l&apos;<strong>ALD 31</strong>, dite « hors liste » : une catégorie destinée aux
            maladies graves ou invalidantes, non listées, dont le traitement est prévisible sur plus de 6
            mois et suffisamment coûteux ou fréquent pour le justifier.
          </p>
          <p className="mb-4">Concrètement :</p>
          <ol className="mb-4 list-decimal space-y-2 pl-6">
            <li>
              La demande se construit avec votre <strong>médecin traitant</strong>, qui remplit un formulaire
              de protocole de soins décrivant les actes, examens et traitements prévus dans l&apos;année
              (consultations spécialisées, imagerie, biologie...).
            </li>
            <li>
              Ce protocole est envoyé au médecin-conseil de l&apos;Assurance Maladie, qui statue sur
              l&apos;exonération du ticket modérateur.
            </li>
            <li>
              Une fois accordée, l&apos;ALD 31 permet une prise en charge à 100 % des soins directement liés
              à la pathologie déclarée, pas de l&apos;ensemble des frais de santé.
            </li>
          </ol>
          <p className="mb-4">
            Le dossier est généralement plus solide lorsqu&apos;il détaille précisément le suivi
            multidisciplinaire recommandé (voir{" "}
            <Link href={chapterHref("suivi-medical")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Propositions de suivi
            </Link>
            ) : c&apos;est ce qui permet de démontrer le caractère prolongé et coûteux du traitement exigé
            par l&apos;ALD 31.
          </p>
        </ArticleSection>

        <ArticleSection id="carte-urgence-maladies-rares" title="La carte d'urgence maladies rares">
          <p className="mb-4">
            Certaines filières de santé maladies rares distribuent une{" "}
            <strong>carte de soins et d&apos;urgence</strong>, un document de la taille d&apos;une carte de
            crédit résumant les informations essentielles pour les équipes soignantes en cas d&apos;urgence
            (antécédents, points de vigilance, contacts du centre de référence). Elle est remise par le
            médecin du centre de référence ou de compétence qui vous suit. Si vous n&apos;en avez pas encore
            et que vous pensez qu&apos;elle serait utile dans votre situation, la question peut être posée
            directement à l&apos;équipe de génétique ou de suivi qui vous accompagne.
          </p>
        </ArticleSection>

        <ArticleSection id="reconnaissance-handicap-mdph" title="La reconnaissance du handicap (MDPH)">
          <p className="mb-4">
            Cette démarche ne concerne pas toutes les personnes porteuses d&apos;une mutation PTEN, mais peut
            être pertinente dans certaines situations, notamment :
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6">
            <li>
              un enfant présentant un retard de développement ou un trouble du spectre autistique associé
              (dans le cadre d&apos;un syndrome de Bannayan-Riley-Ruvalcaba, par exemple) ;
            </li>
            <li>
              une personne dont le suivi médical intensif ou les conséquences de la maladie ont un impact
              significatif sur la scolarité, le travail ou la vie quotidienne.
            </li>
          </ul>
          <p className="mb-4">
            Le dossier se dépose auprès de la{" "}
            <strong>Maison Départementale des Personnes Handicapées (MDPH)</strong> de votre lieu de
            résidence. Il peut ouvrir droit, selon les situations, à un plan d&apos;accompagnement scolaire
            (PAI, PPS), une reconnaissance de la qualité de travailleur handicapé (RQTH), ou d&apos;autres
            aides.
          </p>
        </ArticleSection>

        <ArticleSection id="ce-que-association-peut-faire" title="Ce que l'association peut faire, et ce qu'elle ne fait pas">
          <p className="mb-4">
            PTEN Officiel France peut vous orienter vers les bons interlocuteurs et partager les expériences
            d&apos;autres familles sur ces démarches, mais{" "}
            <strong>ne peut pas remplir vos dossiers à votre place ni garantir une décision d&apos;attribution</strong>{" "}
            , ces démarches restent individuelles et dépendent de l&apos;appréciation des organismes
            concernés.
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("suivi-medical"), label: "Propositions de suivi" },
            { href: chapterHref("heredite-conseil-genetique"), label: "Hérédité et conseil génétique" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { label: "Assurance Maladie / synthèses juridiques sur les ALD 30, 31 et 32" },
            { label: "Alliance Maladies Rares, fiche pratique sur les cartes d'urgence maladies rares" },
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