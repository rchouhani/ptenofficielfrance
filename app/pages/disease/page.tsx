import type { Metadata } from "next";
import Link from "next/link";
import { getAllChapters } from "@/app/lib/disease-content";

export const metadata: Metadata = {
  title: "La maladie — PTEN Officiel France",
  description: "Comprendre le gène PTEN, le syndrome de Cowden et les syndromes apparentés.",
};

export default function DiseasePage() {
  const chapters = getAllChapters();

  return (
    <main id="contenu-maladie" className="mx-auto max-w-3xl px-6 py-12">
      <p className="mb-3 text-sm font-medium text-accent-text">Comprendre le gène PTEN</p>
      <h1 className="mb-6 font-display text-4xl font-bold text-ink">La maladie</h1>
      <p className="mb-4 leading-relaxed text-ink/80">
        Cette rubrique explique, en {chapters.length} pages, ce qu&apos;est une mutation PTEN, comment elle se
        transmet, comment elle est diagnostiquée et suivie. Les pages se lisent dans l&apos;ordre ou de façon
        indépendante, selon vos besoins.
      </p>
      <p className="mb-10 rounded border-l-4 border-accent bg-ink/5 px-4 py-3 text-sm">
        Ce contenu a un but informatif et pédagogique. Il ne remplace pas une consultation médicale, un
        diagnostic ou un suivi personnalisé.
      </p>

      <nav aria-label="Sommaire de la rubrique" className="rounded border border-ink/10 bg-ink/[0.03] p-6">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Sommaire</h2>
        <ol className="space-y-5">
          {chapters.map((chapter) => (
            <li key={chapter.slug} className="border-b border-ink/10 pb-5 last:border-b-0 last:pb-0">
              <Link
                href={`/pages/disease/${chapter.slug}`}
                className="font-display text-lg font-semibold text-ink underline decoration-accent underline-offset-4 hover:text-accent-text"
              >
                {String(chapter.order).padStart(2, "0")}. {chapter.title}
                {chapter.kind === "glossary" && (
                  <span className="ml-2 rounded-full bg-ink/10 px-2 py-0.5 text-xs font-normal text-muted">
                    Annexe
                  </span>
                )}
              </Link>
              <p className="mt-2 text-sm text-muted">{chapter.description}</p>
            </li>
          ))}
        </ol>
      </nav>
    </main>
  );
}