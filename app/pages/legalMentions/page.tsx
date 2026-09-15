import Link from "next/link";

export default function LegalMentionsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <h1 className="mt-15 text-center text-4xl">Mentions légales</h1>

      <div className="mb-15 mt-5 flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Éditeur du site</h2>
          <p>
            Le site PTEN Officiel France est édité par l'association{" "}
            <strong>[Nom complet de l'association]</strong>, association loi 1901,
            immatriculée sous le n° RNA <strong>[W xxxxxxxxx]</strong>
            {" "}et le n° SIRET <strong>[à compléter si applicable]</strong>,
            dont le siège social est situé au <strong>[Adresse complète]</strong>.
          </p>
          <p>
            Directeur de la publication : <strong>[Prénom Nom]</strong>.
            <br />
            Contact : <Link href="/pages/contactUs" className="text-accent-text underline">nous contacter</Link>.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis — <strong>[à confirmer]</strong>.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, illustrations,
            logo, charte graphique) est la propriété de{" "}
            <strong>[Nom de l'association]</strong>, sauf mention contraire. Toute
            reproduction, représentation ou diffusion, totale ou partielle, sans
            autorisation préalable est interdite.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">
            Formulaires et données personnelles
          </h2>
          <p>
            Le site propose des formulaires (adhésion, suggestion d'un
            professionnel de santé, contact). Les informations recueillies via
            ces formulaires font l'objet d'un traitement de données à caractère
            personnel décrit dans notre{" "}
            <Link href="/pages/privacyPolicy" className="text-accent-text underline">
              politique de confidentialité
            </Link>{" "}
            et notre page{" "}
            <Link href="/pages/RGPD" className="text-accent-text underline">
              RGPD
            </Link>
            , qui précisent notamment les finalités du traitement, la base
            légale, la durée de conservation et vos droits.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Responsabilité</h2>
          <p>
            [Nom de l'association] s'efforce d'assurer l'exactitude des
            informations diffusées sur ce site, sans pouvoir garantir qu'elles
            soient exemptes d'erreurs ou d'omissions. L'association ne saurait
            être tenue responsable des dommages directs ou indirects résultant
            de l'accès ou de l'utilisation du site.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
}