import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/app/component/article/Callout";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import DirectoryLink from "@/app/component/article/DirectoryLink";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "heredite-conseil-genetique";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function HerediteConseilGenetiquePage() {
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
          Cette page donne des repères généraux. Chaque situation familiale est différente : seul un
          généticien ou un conseiller en génétique peut évaluer votre cas précis et celui de votre famille.
        </Callout>

        <TableOfContents
          items={[
            { id: "comment-se-transmet", label: "Comment se transmet une mutation PTEN" },
            { id: "pourquoi-prevenir-sa-famille", label: "Pourquoi prévenir sa famille" },
            { id: "deroulement-consultation", label: "Comment se déroule une consultation de conseil génétique" },
            { id: "cas-particulier-enfants", label: "Le cas particulier des enfants" },
            { id: "parentalite-anticipation", label: "Parentalité et anticipation" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="comment-se-transmet" title="Comment se transmet une mutation PTEN">
          <p className="mb-4">
            Une mutation héréditaire du gène PTEN se transmet selon un mode dit{" "}
            <strong>autosomique dominant</strong>. En pratique, cela veut dire :
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>Chacun de nous possède deux copies du gène PTEN (une héritée de chaque parent).</li>
            <li>
              Une personne porteuse d&apos;une mutation PTEN n&apos;a qu&apos;une seule des deux copies
              touchée, c&apos;est suffisant pour que la maladie puisse s&apos;exprimer.
            </li>
            <li>
              <strong>Chaque enfant</strong> d&apos;une personne porteuse a{" "}
              <strong>une probabilité de 50 %</strong> d&apos;hériter de la copie mutée, et 50 % de ne pas en
              hériter. Ce tirage a lieu indépendamment à chaque grossesse.
            </li>
            <li>
              Le fait qu&apos;un frère ou une sœur ne soit pas porteur ne dit rien sur la situation des
              autres membres de la fratrie : chaque personne doit être testée individuellement.
            </li>
          </ul>
          <p className="mb-4">
            Il existe aussi des cas, plus rares, où la mutation apparaît spontanément chez une personne sans
            qu&apos;aucun de ses parents ne soit porteur (on parle de mutation <em>de novo</em>). Dans ce cas,
            le risque de transmission aux générations suivantes reste le même (50 % par enfant), même si les
            parents de la personne concernée n&apos;étaient pas porteurs.
          </p>
        </ArticleSection>

        <ArticleSection id="pourquoi-prevenir-sa-famille" title="Pourquoi prévenir sa famille">
          <p className="mb-4">
            Parce que la mutation peut être présente sans provoquer de symptôme visible pendant des années,
            prévenir ses apparentés (parents, frères et sœurs, enfants majeurs) permet de leur donner la
            possibilité de :
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>décider, en toute connaissance de cause, de faire ou non le test génétique ;</li>
            <li>
              bénéficier plus tôt d&apos;un suivi médical adapté s&apos;ils sont porteurs (voir{" "}
              <Link href={chapterHref("suivi-medical")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
                Propositions de suivi
              </Link>
              ) ;
            </li>
            <li>écarter la question s&apos;ils ne le sont pas.</li>
          </ul>
          <p className="mb-4">
            C&apos;est une démarche qui appartient à chacun, à son rythme, il n&apos;y a pas de bonne ou de
            mauvaise façon d&apos;aborder ce sujet en famille, et un professionnel du conseil génétique peut
            aider à trouver les mots.
          </p>
        </ArticleSection>

        <ArticleSection id="deroulement-consultation" title="Comment se déroule une consultation de conseil génétique">
          <p className="mb-4">
            En France, l&apos;accès au test génétique PTEN passe systématiquement par une consultation avec
            un <strong>généticien</strong> ou un <strong>conseiller en génétique</strong>, en plusieurs
            temps :
          </p>
          <ol className="mb-2 list-decimal space-y-2 pl-6">
            <li>
              <strong>Consultation pré-test</strong> : le professionnel retrace l&apos;histoire personnelle et
              familiale, explique ce que le test peut ou ne peut pas révéler, et s&apos;assure que la
              personne comprend les conséquences possibles d&apos;un résultat positif (implications pour le
              suivi médical, la famille, les assurances).
            </li>
            <li>
              <strong>Prélèvement sanguin</strong> pour l&apos;analyse du gène.
            </li>
            <li>
              <strong>Consultation de rendu de résultat</strong>, en général plusieurs semaines ou mois plus
              tard, où le résultat est expliqué et où un plan de suivi est proposé si la mutation est
              confirmée.
            </li>
          </ol>
          <DirectoryLink
            href="/pages/doctors?specialite=genetique"
            label="Trouver un généticien ou un conseiller en génétique référent"
          />
        </ArticleSection>

        <ArticleSection id="cas-particulier-enfants" title="Le cas particulier des enfants">
          <p className="mb-4">
            Chez un enfant, la question du test génétique se pose différemment. En l&apos;absence de symptôme
            évocateur (macrocéphalie, retard de développement, signes cutanés), il est généralement
            recommandé d&apos;attendre que l&apos;enfant soit en âge de comprendre les enjeux et de
            participer à la décision, plutôt que de tester systématiquement dès le plus jeune âge. Cette
            question mérite d&apos;être discutée avec l&apos;équipe de génétique qui vous suit, au cas par
            cas.
          </p>
        </ArticleSection>

        <ArticleSection id="parentalite-anticipation" title="Parentalité et anticipation">
          <p className="mb-4">
            Certaines personnes porteuses d&apos;une mutation PTEN s&apos;interrogent sur les options
            existantes en matière de grossesse (diagnostic prénatal, diagnostic préimplantatoire). Ce sont des
            sujets personnels et complexes, encadrés par la loi française, qui se discutent uniquement avec
            une équipe de génétique médicale, nous ne sommes pas en mesure, en tant qu&apos;association, de
            donner un avis sur ces choix, mais nous pouvons vous orienter vers les bons interlocuteurs.
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("qu-est-ce-que-pten"), label: "Qu'est-ce que PTEN ?" },
            { href: chapterHref("portes-entree"), label: "Les portes d'entrée du diagnostic" },
            { href: chapterHref("demarches-administratives"), label: "Démarches administratives" },
            { href: chapterHref("glossaire"), label: "Glossaire des termes techniques" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { note: "MedlinePlus Genetics", label: "PTEN gene", href: "https://medlineplus.gov/genetics/gene/pten/" },
            { note: "Fmedic", label: "PTEN, syndrome de Cowden et syndrome de Bannayan-Riley-Ruvalcaba", href: "https://fmedic.org/pten-syndrome-de-tumeur-hamartome-syndrome-de-cowden-et-syndrome-de-bannayan-riley-ruvalcaba" },
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