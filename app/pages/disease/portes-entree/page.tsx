import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "portes-entree";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

export default function PortesEntreePage() {
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
          Il n&apos;existe pas un seul chemin qui mène au diagnostic d&apos;une mutation PTEN héréditaire. En
          pratique, on observe plusieurs situations qui amènent à évoquer la maladie.
        </p>

        <TableOfContents
          items={[
            { id: "signes-cutanes", label: "1. Des signes cutanés caractéristiques" },
            { id: "cancer-jeune-ou-familial", label: "2. Un diagnostic de cancer chez un adulte jeune, ou des cancers répétés dans la famille" },
            { id: "macrocephalie-enfant", label: "3. Une macrocéphalie associée à d'autres signes chez l'enfant" },
            { id: "histoire-familiale", label: "4. Une histoire familiale connue" },
            { id: "decouverte-fortuite", label: "5. Une découverte fortuite lors d'un test génétique élargi" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="signes-cutanes" title="1. Des signes cutanés caractéristiques">
          <p className="mb-4">
            Chez de nombreux patients, les premiers signes visibles apparaissent à la fin de
            l&apos;adolescence ou autour de la vingtaine : petites excroissances bénignes sur la peau du
            visage, papillomes sur la langue ou les gencives donnant un aspect « pavé », taches sombres sur
            la paume des mains ou la plante des pieds.
          </p>
        </ArticleSection>

        <ArticleSection id="cancer-jeune-ou-familial" title="2. Un diagnostic de cancer chez un adulte jeune, ou des cancers répétés dans la famille">
          <p className="mb-4">
            Un cancer du sein, de la thyroïde ou de l&apos;endomètre diagnostiqué plus tôt que la moyenne, ou
            plusieurs cancers de ce type dans une même famille, peut amener un médecin à rechercher une cause
            génétique.
          </p>
        </ArticleSection>

        <ArticleSection id="macrocephalie-enfant" title="3. Une macrocéphalie associée à d'autres signes chez l'enfant">
          <p className="mb-4">
            Un périmètre crânien nettement supérieur à la moyenne, associé à un trouble du spectre autistique,
            un retard de développement, ou des lipomes, oriente parfois vers une recherche de mutation PTEN
            dès l&apos;enfance, c&apos;est notamment le tableau du syndrome de Bannayan-Riley-Ruvalcaba.
          </p>
        </ArticleSection>

        <ArticleSection id="histoire-familiale" title="4. Une histoire familiale connue">
          <p className="mb-4">
            Lorsqu&apos;une mutation PTEN a déjà été identifiée chez un parent, un frère ou une sœur, un
            conseil génétique est proposé aux autres membres de la famille.{" "}
            <em>
              (Voir{" "}
              <Link href={chapterHref("heredite-conseil-genetique")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
                Hérédité et conseil génétique
              </Link>{" "}
              pour le détail de cette démarche.)
            </em>
          </p>
        </ArticleSection>

        <ArticleSection id="decouverte-fortuite" title="5. Une découverte fortuite lors d'un test génétique élargi">
          <p className="mb-4">
            Avec la généralisation des panels de gènes réalisés en cancérologie, une mutation PTEN peut être
            identifiée alors que ce n&apos;était pas la question posée au départ.
          </p>
        </ArticleSection>

        <hr className="my-8 border-black/10" />

        <p className="mb-6 leading-relaxed">
          Dans tous les cas, le diagnostic définitif passe par une prise de sang et une analyse du gène PTEN,
          en général orientée par des critères cliniques établis à l&apos;échelle internationale (voir{" "}
          <Link href={chapterHref("approches-internationales-francaises")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
            Approches internationales et françaises
          </Link>
          ).
        </p>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("qu-est-ce-que-pten"), label: "Qu'est-ce que PTEN ?" },
            { href: chapterHref("heredite-conseil-genetique"), label: "Hérédité et conseil génétique" },
            { href: chapterHref("symptomes-syndromes"), label: "Symptômes et syndromes associés" },
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