import type { Metadata } from "next";
import AudienceTabs from "./AudienceTabs";

export const metadata: Metadata = {
  title: "Les évènements — PTEN Officiel France",
  description:
    "Découvrez la communauté PTEN Officiel France selon votre profil : patients, professionnels de santé, partenaires et journalistes.",
};

export default function NewsPage() {
  return (
    <main id="contenu-evenements" className="mx-auto max-w-5xl px-6 py-12">
      <p className="mb-3 text-sm font-medium text-accent-text">La communauté PTEN</p>
      <h1 className="mb-6 font-display text-4xl font-bold text-ink">Les évènements</h1>
      <p className="mb-10 max-w-2xl leading-relaxed text-ink/80">
        Selon votre profil, découvrez comment la communauté PTEN Officiel France peut vous accompagner, vous
        éclairer ou vous permettre d&apos;agir à nos côtés.
      </p>

      <AudienceTabs />
    </main>
  );
}