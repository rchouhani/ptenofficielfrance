import Link from "next/link";

export default function RGPD() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <h1 className="mt-15 text-center text-4xl">Protection des données personnelles (RGPD)</h1>

      <div className="mb-15 mt-5 flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <p>
            Cette page décrit, conformément au Règlement (UE) 2016/679 (RGPD) et
            à la loi Informatique et Libertés, les traitements de données à
            caractère personnel mis en œuvre sur le site PTEN Officiel France.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Responsable du traitement</h2>
          <p>
            Le responsable du traitement est l'association{" "}
            <strong>[Nom complet de l'association]</strong>, dont le siège social
            est situé au <strong>[Adresse complète]</strong>, représentée par{" "}
            <strong>[Prénom Nom]</strong>. Vous pouvez la contacter via notre{" "}
            <Link href="/pages/contactUs" className="text-accent-text underline">
              page de contact
            </Link>{" "}
            ou à l'adresse <strong>[email de contact RGPD]</strong>.
          </p>
          <p>
            L'association n'a pas désigné de délégué à la protection des
            données (DPO), n'y étant pas légalement tenue au regard du volume
            et de la nature des données traitées.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">
            Traitements réalisés sur ce site
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-black">1. Demande d'adhésion</h3>
            <p>
              <strong>Données collectées :</strong> prénom, nom, lien avec la
              pathologie (patient, parent, proche...), ville de résidence,
              tranche d'âge concernée, attentes exprimées vis-à-vis de
              l'association.
              <br />
              <strong>Finalité :</strong> instruire et traiter votre demande
              d'adhésion à l'association.
              <br />
              <strong>Base légale :</strong> exécution de mesures
              précontractuelles prises à votre demande (art. 6.1.b du RGPD),
              en vue de votre adhésion.
              <br />
              <strong>Destinataire :</strong> les données sont transmises par
              email, via le prestataire d'envoi Resend, à la seule boîte de
              réception de l'association en charge des adhésions.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-black">2. Suggestion d'un professionnel de santé</h3>
            <p>
              <strong>Données collectées :</strong> nom, prénom, spécialité et
              lieu de consultation du professionnel de santé suggéré, ainsi que
              la patientèle suivie.
              <br />
              <strong>Finalité :</strong> vérifier puis, le cas échéant,
              référencer le professionnel de santé dans l'annuaire médical du
              site.
              <br />
              <strong>Base légale :</strong> intérêt légitime de l'association
              à constituer et fiabiliser un annuaire utile aux patients atteints
              de la pathologie (art. 6.1.f du RGPD).
              <br />
              <strong>Destinataire :</strong> les données sont transmises par
              email, via le prestataire d'envoi Resend, à la seule boîte de
              réception de l'association.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-black">3. Annuaire des professionnels de santé</h3>
            <p>
              <strong>Données publiées :</strong> nom, prénom, spécialité,
              adresse de consultation et, le cas échéant, email professionnel
              du praticien.
              <br />
              <strong>Finalité :</strong> informer les patients et leurs proches
              des professionnels de santé familiers de la pathologie.
              <br />
              <strong>Base légale :</strong> intérêt légitime de l'association,
              les données publiées étant strictement professionnelles.
              <br />
              Tout professionnel de santé référencé peut demander la
              rectification ou le retrait de sa fiche à tout moment (voir « Vos
              droits » ci-dessous).
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-black">4. Carte de la communauté</h3>
            <p>
              Les effectifs affichés par ville sur la carte de la communauté
              sont des données agrégées et non nominatives : aucune donnée
              individuelle identifiable n'est publiée à cet endroit.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-black">5. Formulaire de contact</h3>
            <p>
              <strong>Données collectées :</strong> prénom, nom, sujet de la
              demande (droit RGPD, modification de contenu, suppression de
              données ou autre) et contenu du message.
              <br />
              <strong>Finalité :</strong> répondre à votre demande, y compris
              lorsqu'elle porte sur l'exercice d'un droit RGPD (accès,
              rectification, effacement...).
              <br />
              <strong>Base légale :</strong> intérêt légitime à traiter les
              demandes qui nous sont adressées (art. 6.1.f du RGPD) ou, lorsque
              la demande porte sur l'exercice d'un droit RGPD, respect d'une
              obligation légale (art. 6.1.c du RGPD).
              <br />
              <strong>Destinataire :</strong> les données sont transmises par
              email, via le prestataire d'envoi Resend, à la seule boîte de
              réception de l'association.
            </p>
          </div>
        </section>
        
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">
            Mineurs
          </h2>
          <p>
            Le formulaire d'adhésion peut concerner un enfant ou un
            adolescent lorsque la personne atteinte de la pathologie est
            mineure. Dans ce cas, la demande doit être effectuée par un
            titulaire de l'autorité parentale ou avec son accord.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Transferts hors Union européenne</h2>
          <p>
            L'envoi des emails générés par les formulaires du site est assuré
            par Resend, prestataire technique. Ce dernier peut être amené à
            traiter des données en dehors de l'Union européenne ;{" "}
            <strong>
              [à vérifier : encadrement du transfert par les clauses
              contractuelles types de la Commission européenne ou équivalent,
              à confirmer dans les conditions de Resend]
            </strong>
            .
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Durée de conservation</h2>
          <p>
            Les données transmises via les formulaires sont conservées le
            temps nécessaire au traitement de votre demande, puis supprimées
            dans un délai de <strong>[à définir, ex. 12 mois]</strong> après
            la dernière interaction, sauf obligation légale de conservation
            plus longue. Les fiches de l'annuaire médical sont conservées tant
            que le professionnel de santé n'a pas demandé leur retrait.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Cookies et traceurs</h2>
          <p>
            Ce site ne dépose aucun cookie de mesure d'audience ni traceur
            publicitaire. Seuls des cookies techniques strictement nécessaires
            au fonctionnement et à l'hébergement du site peuvent être utilisés ;
            ils ne nécessitent pas de consentement au titre de l'article 82 de
            la loi Informatique et Libertés.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Sécurité</h2>
          <p>
            Les données transitent de manière chiffrée (HTTPS) entre votre
            navigateur, le site et nos prestataires techniques. L'accès aux
            emails reçus est limité aux personnes de l'association en charge
            du traitement des demandes.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-black text-accent-text">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de
            rectification, d'effacement, de limitation, d'opposition et de
            portabilité sur vos données, ainsi que du droit de retirer votre
            consentement à tout moment lorsque le traitement en dépend. Pour
            exercer ces droits, contactez-nous via notre{" "}
            <Link href="/pages/contactUs" className="text-accent-text underline">
              page de contact
            </Link>{" "}
            ou à l'adresse <strong>[email de contact RGPD]</strong>, en
            justifiant de votre identité.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne
            sont pas respectés, vous pouvez introduire une réclamation auprès
            de la Commission Nationale de l'Informatique et des Libertés
            (CNIL) : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou
            en ligne sur{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noreferrer"
              className="text-accent-text underline"
            >
              cnil.fr
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
