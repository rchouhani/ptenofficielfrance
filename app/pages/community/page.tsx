import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ExternalLink from "@/app/component/article/ExternalLink";
import { getCommunityMembersByCity } from "@/app/lib/community";

export const metadata: Metadata = {
  title: "La communauté — PTEN Officiel France",
  description:
    "Découvrez la communauté PTEN Officiel France à travers la France, le Québec et la Belgique, et rejoignez le groupe privé Facebook.",
};

const CommunityMap = dynamic(() => import("./CommunityMap"), {
  loading: () => <div className="mb-8 h-[420px] animate-pulse rounded border border-ink/10 bg-ink/5" />,
});

export default function CommunityPage() {
  const cities = getCommunityMembersByCity();

  return (
    <main id="contenu-communaute" className="mx-auto max-w-5xl px-6 py-12">
      <p className="mb-3 text-sm font-medium text-accent-text">La communauté</p>
      <h1 className="mb-6 font-display text-4xl font-bold text-ink">Où se trouve la communauté</h1>
      <p className="mb-10 max-w-2xl leading-relaxed text-ink/80">
        Répartition approximative des membres du groupe Facebook PTEN Officiel France à travers la France, le
        Québec et la Belgique.
      </p>

      <CommunityMap cities={cities} />

      <ul className="mb-16 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
        {cities.map((city) => (
          <li key={city.name} className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-accent-text">{city.members}</span>
            <span className="text-sm text-ink/80">{city.name}</span>
          </li>
        ))}
      </ul>

      <p className="mb-0 text-center text-xl font-semibold">
        <ExternalLink
          href="#TODO-lien-facebook"
          className="text-accent-text underline decoration-accent underline-offset-4"
        >
          Rejoins-Nous sur le groupe privé Facebook
        </ExternalLink>
      </p>

      <p
        className="mx-auto max-w-2xl leading-relaxed text-ink/80"
        style={{ marginTop: "25px", marginBottom: "25px" }}
      >
        Vous pouvez nous poser vos questions en toute sérénité. Les modératrices et administratrices de ce
        groupe ont plusieurs années de suivi et ont de bonnes connaissances des pathologies associées. Elles
        pourront donc vous conseiller sur les démarches à suivre afin d&apos;obtenir un diagnostic fiable.
        N&apos;oubliez pas que seul du personnel de santé sera à même de confirmer un diagnostic.
      </p>
    </main>
  );
}