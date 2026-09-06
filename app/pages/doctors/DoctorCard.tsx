import type { Doctor } from "@/app/lib/doctors";

const CATEGORY_LABEL: Record<Doctor["category"], string> = {
  child: "Suivi enfant",
  adult: "Suivi adulte",
};

export default function DoctorCard({ doctor, headingId }: { doctor: Doctor; headingId?: string }) {
  const link = doctor.lien ? `https://${doctor.lien.replace(/^https?:\/\//, "")}` : doctor.lienAPHP;

  return (
    <article className="rounded border border-ink/10 p-6">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id={headingId} className="font-display text-xl font-semibold text-ink">
          {doctor.prenom} {doctor.nom}
        </h2>
        <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-medium text-muted">
          {CATEGORY_LABEL[doctor.category]}
        </span>
      </div>
      <p className="mb-3 text-sm font-medium text-accent-text">{doctor.specialites}</p>
      <address className="mb-3 text-sm not-italic text-ink/80">
        {doctor.adresse}
        <br />
        {doctor.codePostal} {doctor.ville}
      </address>
      <div className="flex flex-wrap gap-4 text-sm">
        {doctor.mail && (
          <a href={`mailto:${doctor.mail}`} className="font-semibold underline decoration-accent underline-offset-2">
            Contacter par e-mail
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-accent underline-offset-2"
          >
            Prendre rendez-vous
            <span className="sr-only"> (site externe, nouvel onglet)</span>
          </a>
        )}
      </div>
    </article>
  );
}