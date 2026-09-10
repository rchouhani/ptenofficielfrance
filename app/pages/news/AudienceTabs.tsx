"use client";

import { useState } from "react";
import Link from "next/link";

type AudienceKey = "patients" | "professionnels" | "partenaires" | "journalistes";

const AUDIENCES: { key: AudienceKey; label: string }[] = [
  { key: "patients", label: "Patients & proches" },
  { key: "professionnels", label: "Professionnels de santé" },
  { key: "partenaires", label: "Partenaires" },
  { key: "journalistes", label: "Journalistes" },
];

const CONTACT_EMAIL = "contact@ptenofficielfrance.fr";

export default function AudienceTabs() {
  const [active, setActive] = useState<AudienceKey>("patients");

  const ctaPrimaryClassName =
    "inline-block rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent";
  const ctaSecondaryClassName =
    "inline-block rounded-sm border border-ink/15 px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-text";

  return (
    <div>
      <div
        role="tablist"
        aria-label="La communauté selon votre profil"
        className="mb-8 flex flex-wrap gap-2 border-b border-ink/10"
      >
        {AUDIENCES.map((audience) => {
          const isActive = audience.key === active;
          return (
            <button
              key={audience.key}
              type="button"
              role="tab"
              id={`tab-${audience.key}`}
              aria-selected={isActive}
              aria-controls={`panel-${audience.key}`}
              onClick={() => setActive(audience.key)}
              className={
                isActive
                  ? "border-b-2 border-accent px-4 py-3 text-sm font-semibold text-accent-text"
                  : "border-b-2 border-transparent px-4 py-3 text-sm font-medium text-ink/70 hover:text-ink"
              }
            >
              {audience.label}
            </button>
          );
        })}
      </div>

      <div id="panel-patients" role="tabpanel" aria-labelledby="tab-patients" hidden={active !== "patients"}>
        <h2 className="mb-4 font-display text-2xl font-bold text-ink">Vous n&apos;êtes pas seul-e</h2>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink/80">
          Des patients et des proches atteints du syndrome PTEN se trouvent partout en France, au Québec et en
          Belgique. L&apos;objectif est de vous permettre de rencontrer d&apos;autres PTENistes près de chez
          vous et, à terme, de créer des groupes d&apos;entraide locaux.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/pages/community" className={ctaPrimaryClassName}>
            Voir la carte de la communauté →
          </Link>
          <Link href="/pages/joinCommunity" className={ctaSecondaryClassName}>
            Rejoindre la communauté
          </Link>
        </div>
      </div>

      <div
        id="panel-professionnels"
        role="tabpanel"
        aria-labelledby="tab-professionnels"
        hidden={active !== "professionnels"}
      >
        <h2 className="mb-4 font-display text-2xl font-bold text-ink">Améliorer la connaissance du syndrome</h2>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink/80">
          La répartition géographique des patients suivis par l&apos;association donne un premier aperçu des
          zones où se trouvent les personnes porteuses d&apos;une mutation PTEN, à l&apos;échelle nationale.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/pages/community" className={ctaPrimaryClassName}>
            Voir la carte de répartition →
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className={ctaSecondaryClassName}>
            Nous apporter votre aide
          </a>
        </div>
      </div>

      <div
        id="panel-partenaires"
        role="tabpanel"
        aria-labelledby="tab-partenaires"
        hidden={active !== "partenaires"}
      >
        <h2 className="mb-4 font-display text-2xl font-bold text-ink">Une diversité régionale</h2>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink/80">
          Notre communauté est répartie sur plusieurs régions françaises ainsi qu&apos;au Québec et en
          Belgique, ce qui permet d&apos;envisager une diffusion de produits, d&apos;actions ou
          d&apos;évènements à l&apos;échelle de plusieurs territoires.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className={ctaPrimaryClassName}>
          Devenir partenaire
        </a>
      </div>

      <div
        id="panel-journalistes"
        role="tabpanel"
        aria-labelledby="tab-journalistes"
        hidden={active !== "journalistes"}
      >
        <h2 className="mb-4 font-display text-2xl font-bold text-ink">Presse</h2>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink/80">
          Pour toute demande d&apos;information, d&apos;interview ou de reportage autour du syndrome PTEN et de
          notre association, contactez-nous directement.
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className={ctaPrimaryClassName}>
          Contacter l&apos;association →
        </a>
      </div>
    </div>
  );
}