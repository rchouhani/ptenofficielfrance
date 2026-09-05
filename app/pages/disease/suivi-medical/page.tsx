import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/app/component/article/TableOfContents";
import ArticleSection from "@/app/component/article/ArticleSection";
import RelatedLinks from "@/app/component/article/RelatedLinks";
import Sources from "@/app/component/article/Sources";
import ChapterPager from "@/app/component/article/ChapterPager";
import DirectoryLink from "@/app/component/article/DirectoryLink";
import { getChapterMeta, getAdjacentChapters, chapterHref } from "@/app/lib/disease-content";

const SLUG = "suivi-medical";
const meta = getChapterMeta(SLUG)!;

export const metadata: Metadata = {
  title: `${meta.title} - PTEN Officiel France`,
  description: meta.description,
};

const SUIVIS = [
  { label: "Suivi dermatologique", text: "pour surveiller les lésions cutanées et orienter une biopsie si besoin.", specialite: "dermatologie", cible: "Trouver un dermatologue référent" },
  { label: "Suivi endocrinologique", text: "échographie thyroïdienne de référence puis surveillance annuelle.", specialite: "endocrinologie", cible: "Trouver un endocrinologue référent" },
  { label: "Suivi gynécologique", text: "pour les femmes, discussion sur le dépistage du cancer de l'endomètre et suivi mammaire rapproché (auto-examen, examen clinique, mammographie/IRM selon l'âge).", specialite: "gynecologie", cible: "Trouver un gynécologue référent" },
  { label: "Suivi gastro-entérologique", text: "coloscopie de référence puis surveillance selon les polypes identifiés, avec parfois une endoscopie haute.", specialite: "gastro-enterologie", cible: "Trouver un gastro-entérologue référent" },
  { label: "Suivi néphrologique / imagerie rénale", text: "surveillance régulière à partir de l'âge adulte.", specialite: "nephrologie", cible: "Trouver un néphrologue référent" },
];

export default function SuiviMedicalPage() {
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
          Il n&apos;existe pas aujourd&apos;hui de traitement qui corrige la mutation PTEN elle-même. La prise
          en charge repose donc sur une <strong>surveillance régulière et coordonnée</strong>, dont
          l&apos;objectif est de détecter le plus tôt possible une anomalie, à un stade où elle se soigne
          mieux. Ce suivi mobilise plusieurs spécialités, souvent en parallèle :
        </p>

        <TableOfContents
          items={[
            { id: "suivi-par-specialite", label: "Suivi recommandé par spécialité" },
            { id: "limite-importante", label: "Une limite importante à connaître" },
            { id: "organiser-suivi-quotidien", label: "Organiser son suivi au quotidien" },
            { id: "pour-aller-plus-loin", label: "Pour aller plus loin" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <ArticleSection id="suivi-par-specialite" title="Suivi recommandé par spécialité">
          <ul className="mb-6 list-disc space-y-4 pl-6">
            {SUIVIS.map((suivi) => (
              <li key={suivi.specialite}>
                <p>
                  <strong>{suivi.label}</strong> - {suivi.text}
                </p>
                <DirectoryLink href={`/pages/doctors?specialite=${suivi.specialite}`} label={suivi.cible} />
              </li>
            ))}
            <li>
              <p>
                <strong>Conseil génétique</strong> pour poser le diagnostic, interpréter le résultat
                d&apos;un test PTEN, et accompagner l&apos;information aux autres membres de la famille (voir{" "}
                <Link href={chapterHref("heredite-conseil-genetique")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
                  Hérédité et conseil génétique
                </Link>
                ).
              </p>
              <DirectoryLink href="/pages/doctors?specialite=genetique" label="Trouver un généticien / conseiller en génétique référent" />
            </li>
            <li>
              <p>
                <strong>Suivi oncologique</strong> en coordination avec les autres spécialités, en cas
                d&apos;antécédent ou de découverte d&apos;un cancer.
              </p>
              <DirectoryLink href="/pages/doctors?specialite=oncologie" label="Trouver un oncologue référent" />
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="limite-importante" title="Une limite importante à connaître">
          <p className="mb-4">
            Comme le rappellent les sociétés savantes à l&apos;origine de ces recommandations, aucune étude ne
            prouve à ce jour que ce dépistage réduit la mortalité de façon certaine : les recommandations
            reposent sur un consensus d&apos;experts, dans l&apos;attente de données à plus long terme. Cela
            reste néanmoins l&apos;approche la plus prudente compte tenu des risques identifiés (voir{" "}
            <Link href={chapterHref("symptomes-syndromes")} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              Symptômes et syndromes associés
            </Link>
            ).
          </p>
        </ArticleSection>

        <ArticleSection id="organiser-suivi-quotidien" title="Organiser son suivi au quotidien">
          <p className="mb-4">
            Consigner ses rendez-vous, ses résultats d&apos;examens et les dates de rappel entre plusieurs
            spécialités peut vite devenir difficile à suivre seul. C&apos;est l&apos;un des rôles que peut
            jouer le carnet de suivi personnel de l&apos;association, voir la page dédiée sur le site.
          </p>
        </ArticleSection>

        <RelatedLinks
          id="pour-aller-plus-loin"
          links={[
            { href: chapterHref("symptomes-syndromes"), label: "Symptômes et syndromes associés" },
            { href: chapterHref("demarches-administratives"), label: "Démarches administratives" },
            { href: chapterHref("approches-internationales-francaises"), label: "Approches internationales et françaises" },
          ]}
        />

        <Sources
          id="sources"
          sources={[
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