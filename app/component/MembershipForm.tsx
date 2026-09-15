"use client";

import { useId, useState } from "react";

type FormState = {
  userFirstname: string;
  userLastname: string;
  whoAmI: string;
  whoAmIOther: string;
  cityLocation: string;
  category: string;
  expectations: string;
};

const initialFormState: FormState = {
  userFirstname: "",
  userLastname: "",
  whoAmI: "",
  whoAmIOther: "",
  cityLocation: "",
  category: "",
  expectations: "",
};

export default function MembershipForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;

  const inputClassName =
    "w-full rounded border border-ink/15 bg-paper px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none";
  const labelClassName = "mb-1 block text-sm font-medium text-ink";

  function updateField<K extends keyof FormState>(field: K) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleWhoAmIChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setForm((prev) => ({
        ...prev,
        whoAmI: value,
        whoAmIOther: value === "other" ? prev.whoAmIOther : "",
    }));
  }

  return (
     <>
<div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
  <h1 className="mt-15 text-center text-4xl">Devenir Adhérent</h1>

  <div className="mb-15 mt-5 flex flex-col gap-4">
    <p>
      Devenir simple adhérent pour faire vivre l'association ou contribuer à son évolution. La pathologie touche binen évidemment, le patient, mais aussi les proches autour de lui, c'est pour cela que les adhérents ne se limitent pas qu'au patient mais à tout leur entourage et personne désireuse d'aider à faire connaître ce syndrome encore trop eu connu.
    </p>

      <p className="stripe-band">
        LE ZEBRE EST L'EMBLEME DES MALADIES RARES, SOYONS UNIS COMME SES RAYURES
      </p>

    <p>Vous avez le choix :</p>

    <p>
      <span className="text-accent-text font-black textDecoration: underline">Participer</span> à des salons, foires, journée des associations afin de faire connaître la
      pathologie et les bonnes pratiques de surveillance en général, d'auto-palpations par
      exemple.
    </p>

    <p>
      <span className="text-accent-text font-black textDecoration: underline">Promouvoir</span> l'association sur les réseaux afin de diffuser le message, être visible, ce
      qui nous permettra de recruter des adhérents afin de faire entendre notre voix.
    </p>

    <p>Trouver des partenaires pour des évènements :</p>

    <p>
      <li>
        <span className="text-accent-text font-black textDecoration: underline">Sportifs</span>, tels que des courses comme la "Color Run" organisée un peu partout en France,
        ou encore lors des journées internationales de l'UNESCO, comme les maladies rares, la
        journée contre le Cancer ou tout autre journée.
      </li>
    </p>

    <p>
      <li>
        <span className="text-accent-text font-black textDecoration: underline">Caritatifs</span>, tels que Brocante Solidaire, Tombola de Noël, Course solidaire, Marche
        caritative, Randonnée solidaire, Course cycliste solidaire, Chasse aux œufs de Pâques ...
    </li>
    </p>

    <p>
      <li>
        <span className="text-accent-text font-black textDecoration: underline">Médicaux</span>, distribution de plaquettes dans les maisons des patients des hôpitaux.
      </li>
    </p>

    <p>
      <li>
        <span className="text-accent-text font-black textDecoration: underline">Cagnotte en ligne</span> type Kickstarter, GoFundMe, ou le même format avec des objectifs
        clairs (à définir).
      </li>
    </p>
  </div>
</div>
    <form
      className="mx-auto flex w-full max-w-3xl flex-col gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        if (
            !form.userFirstname || 
            !form.userLastname || 
            !form.whoAmI || 
            (form.whoAmI === "other" && !form.whoAmIOther) ||
            !form.cityLocation || 
            !form.category || 
            !form.expectations) {
          setError("Veuillez remplir tous les champs");
          return;
        }
        setError("");
        setSent(false);
        setLoading(true);
        try {
          const res = await fetch("/api/membershipForm", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(form),
          });
          if (!res.ok) throw new Error();
          setSent(true);
          setForm(initialFormState);
        } catch {
          setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("doctor-firstname")} className={labelClassName}>
            Prénom <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("doctor-firstname")}
            className={inputClassName}
            type="text"
            value={form.userFirstname}
            onChange={updateField("userFirstname")}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor={fieldId("doctor-lastname")} className={labelClassName}>
            Nom <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("doctor-lastname")}
            className={inputClassName}
            type="text"
            value={form.userLastname}
            onChange={updateField("userLastname")}
            required
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("whoAmI")} className={labelClassName}>
          Proche ou aidant <span aria-hidden="true">*</span>
        </label>
        <select
          id={fieldId("whoAmI")}
          className={inputClassName}
          value={form.whoAmI}
          onChange={handleWhoAmIChange}
        >
          <option value="">Vous êtes…</option>
          <option value="patient">Le patient</option>
          <option value="father">Le père</option>
          <option value="mother">La mère</option>
          <option value="other">Autres</option>
        </select>

        {form.whoAmI === "other" && (
            <div className="mt-3">
                <label htmlFor={fieldId("whoAmI-other")} className={labelClassName}>
                    Précisez <span aria-hidden="true">*</span>
                </label>
                <input
                    id={fieldId("whoAmI-other")}
                    className={inputClassName}
                    type="text"
                    placeholder="Ex. : ami proche, conjoint-e, frère ou sœur…"
                    value={form.whoAmIOther}
                    onChange={updateField("whoAmIOther")}
                    required
                    aria-required="true"
                />
            </div>
        )}
      </div>

      <div>
        <label htmlFor={fieldId("ville")} className={labelClassName}>
          Lieu d'habitation <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("ville")}
          className={inputClassName}
          type="text"
          placeholder="Grande ville à proximité"
          value={form.cityLocation}
          onChange={updateField("cityLocation")}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor={fieldId("category")} className={labelClassName}>
          Catégorie
        </label>
        <select
          id={fieldId("category")}
          className={inputClassName}
          value={form.category}
          onChange={updateField("category")}
        >
          <option value="">Sélectionner…</option>
          <option value="child">Enfant</option>
          <option value="teenager">Adolescent-e</option>
          <option value="adult">Adulte</option>
        </select>
      </div>
      <div>
        <label htmlFor={fieldId("expectations")} className={labelClassName}>
          Vos attentes <span aria-hidden="true">*</span>
        </label>
         <input
          id={fieldId("expectations")}
          className={inputClassName}
          type="text"
          placeholder="Dîtes-nous ce que vous attendez de l'association"
          value={form.expectations}
          onChange={updateField("expectations")}
          required
          aria-required="true"
        />
      </div>

      {error && (
        <p role="alert" className="text-center text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 mb-12"
      >
        {loading ? "Demande d'adhésion en cours..." : "Envoyer ma demande d'adhésion →"}
      </button>

      {sent && (
        <p role="status" className="text-center text-sm text-green-600">
          <span aria-hidden="true">✅</span> <strong>Message envoyé !</strong>
          <br />
         Vous serez informés par mail de l'accord de votre adhésion dans les 72h.
        </p>
      )}
    </form>
    </>
  );
}