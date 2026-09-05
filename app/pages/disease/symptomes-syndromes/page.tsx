import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "symptomes-syndromes";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

const CANCER_RISKS = [
  { type: "Sein", general: "environ 12 %", phts: "jusqu'à 85 %" },
  { type: "Thyroïde", general: "environ 1 %", phts: "environ 35 %" },
  { type: "Endomètre (utérus)", general: "environ 2,6 %", phts: "environ 28 %" },
  { type: "Rein", general: "environ 1,6 %", phts: "environ 34 %" },
  { type: "Côlon", general: "environ 5 %", phts: "environ 9 %" },
  { type: "Mélanome", general: "environ 2 %", phts: "environ 6 %" },
];

export default function SymptomesSyndromesPage() {
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
          Les mutations héréditaires du gène PTEN peuvent donner lieu à plusieurs tableaux cliniques,
          aujourd&apos;hui regroupés sous le terme <strong>PHTS</strong> (<em>PTEN Hamartoma Tumor Syndrome</em>
          , ou syndrome tumoral hamartomateux lié à PTEN). Le syndrome de Cowden en est la forme la plus
          connue, mais ce n&apos;est pas la seule.
        </p>

        <TableOfContents
          items={[
            { id: "syndrome-de-cowden", label: "Le syndrome de Cowden" },
            { id: "syndrome-brrs", label: "Le syndrome de Bannayan-Riley-Ruvalcaba (BRRS)" },
            { id: "formes-plus-rares", label: "Les formes plus rares" },
            { id: "lien-avec-autisme", label: "Le lien avec l'autisme" },
            { id: "risques-de-cancer", label: "Les risques de cancer associés au PHTS" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="syndrome-de-cowden" title="Le syndrome de Cowden">
          <p className="mb-4">
            C&apos;est la forme la plus fréquemment diagnostiquée chez l&apos;adulte. Elle associe, à des
            degrés très variables d&apos;une personne à l&apos;autre :
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              des excroissances bénignes de la peau et des muqueuses (trichilemmomes, papillomes, kératoses
              palmo-plantaires) ;
            </li>
            <li>des polypes gastro-intestinaux, présents chez la grande majorité des patients ;</li>
            <li>des anomalies thyroïdiennes bénignes (goitre, nodules, thyroïdite) ;</li>
            <li>une macrocéphalie ;</li>
            <li>un risque significativement augmenté de certains cancers (voir le tableau plus bas).</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="syndrome-brrs" title="Le syndrome de Bannayan-Riley-Ruvalcaba (BRRS)">
          <p className="mb-4">
            Il se manifeste plutôt dans l&apos;enfance, avec une macrocéphalie, des lipomes, des malformations
            vasculaires, parfois un retard de développement, et des taches pigmentées caractéristiques chez
            les garçons. On sait aujourd&apos;hui que Cowden et BRRS sont deux expressions différentes
            d&apos;une même cause génétique : une personne peut présenter des traits des deux tableaux au
            cours de sa vie.
          </p>
        </ArticleSection>

        <ArticleSection id="formes-plus-rares" title="Les formes plus rares">
          <p className="mb-4">
            D&apos;autres présentations, plus rares, sont également rattachées au PHTS : des formes
            ressemblant au syndrome de Proteus (croissance asymétrique des tissus), parfois désignées par
            l&apos;acronyme SOLAMEN, ainsi que la maladie de Lhermitte-Duclos, une tumeur bénigne du cervelet.
          </p>
        </ArticleSection>

        <ArticleSection id="lien-avec-autisme" title="Le lien avec l'autisme">
          <p className="mb-4">
            Des mutations PTEN ont également été retrouvées chez certaines personnes présentant à la fois une
            macrocéphalie marquée et un trouble du spectre autistique, sans que le lien exact entre le gène et
            ces troubles soit encore totalement compris. La recherche est toujours active sur cette question
            (voir{" "}
            <Link href={chapterHref("recherche-essais-cliniques")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Recherche en cours et essais cliniques
            </Link>
            ).
          </p>
        </ArticleSection>

        <ArticleSection id="risques-de-cancer" title="Les risques de cancer associés au PHTS">
          <p className="mb-4">
            Le tableau ci-dessous donne un ordre de grandeur des risques cumulés au cours de la vie, tels
            qu&apos;ils ressortent des études de référence sur le sujet. Ce sont des risques statistiques, pas
            des certitudes individuelles.
          </p>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="mb-2 text-left text-xs text-[#6B6B66]">
                Risque de cancer à vie, population générale comparée aux personnes porteuses du PHTS
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="border border-black/10 bg-black/5 px-3 py-2 text-left">Type de cancer</th>
                  <th scope="col" className="border border-black/10 bg-black/5 px-3 py-2 text-left">Population générale</th>
                  <th scope="col" className="border border-black/10 bg-black/5 px-3 py-2 text-left">Risque à vie avec PHTS</th>
                </tr>
              </thead>
              <tbody>
                {CANCER_RISKS.map((row) => (
                  <tr key={row.type}>
                    <th scope="row" className="border border-black/10 px-3 py-2 text-left font-normal">{row.type}</th>
                    <td className="border border-black/10 px-3 py-2">{row.general}</td>
                    <td className="border border-black/10 px-3 py-2">{row.phts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            C&apos;est précisément parce que ces risques sont élevés et concernent plusieurs organes
            qu&apos;un suivi médical structuré, et non ponctuel, est recommandé à toutes les personnes
            porteuses d&apos;une mutation PTEN confirmée - voir la page{" "}
            <Link href={chapterHref("suivi-medical")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Propositions de suivi
            </Link>
            .
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("portes-entree"), label: "Les portes d'entrée du diagnostic" },
            { href: chapterHref("suivi-medical"), label: "Propositions de suivi" },
            { href: chapterHref("glossaire"), label: "Glossaire des termes techniques" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
            { note: "Fmedic", label: "PTEN, syndrome de Cowden et syndrome de Bannayan-Riley-Ruvalcaba", href: "https://fmedic.org/pten-syndrome-de-tumeur-hamartome-syndrome-de-cowden-et-syndrome-de-bannayan-riley-ruvalcaba" },
            { note: "MedlinePlus Genetics", label: "PTEN gene", href: "https://medlineplus.gov/genetics/gene/pten/" },
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