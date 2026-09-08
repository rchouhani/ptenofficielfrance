"use client";

import { useId, useState } from "react";

type FormState = {
  doctorFirstname: string;
  doctorLastname: string;
  specialite: string;
  cityConsultation: string;
  category: string;
};

const initialFormState: FormState = {
  doctorFirstname: "",
  doctorLastname: "",
  specialite: "",
  cityConsultation: "",
  category: "",
};

export default function FormNewDoctor() {
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

  return (
     <>
<div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
  <h1 className="text-center text-4xl mt-15">Soumission de partenaire médical</h1>
    <span className="mb-15 mt-5">
      <p>Ce formulaire sert à partager un professionnel de santé méconnu dans l'annuaire sur le périmètre de la maladie PTEN.
      Dans un souci de contenu de qualité, nous vérifierons chaque suggestion, une fois validé, vous en serez informé</p>
    </span>
</div>
    <form
      className="mx-auto flex w-full max-w-3xl flex-col gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        if (!form.doctorFirstname || !form.doctorLastname || !form.specialite || !form.cityConsultation || !form.category) {
          setError("Veuillez remplir tous les champs obligatoires.");
          return;
        }
        setError("");
        setSent(false);
        setLoading(true);
        try {
          const res = await fetch("/api/formNewDoctor", {
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
            Prénom du docteur <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("doctor-firstname")}
            className={inputClassName}
            type="text"
            placeholder="Le prénom du docteur"
            value={form.doctorFirstname}
            onChange={updateField("doctorFirstname")}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor={fieldId("doctor-lastname")} className={labelClassName}>
            Nom du docteur <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("doctor-lastname")}
            className={inputClassName}
            type="text"
            placeholder="Le nom du docteur"
            value={form.doctorLastname}
            onChange={updateField("doctorLastname")}
            required
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("specialite")} className={labelClassName}>
          Spécialité du docteur <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("specialite")}
          className={inputClassName}
          type="text"
          placeholder="Sa spécialité"
          value={form.specialite}
          onChange={updateField("specialite")}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor={fieldId("ville")} className={labelClassName}>
          Lieu de soin <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("ville")}
          className={inputClassName}
          type="text"
          placeholder="Son lieu de consultation"
          value={form.cityConsultation}
          onChange={updateField("cityConsultation")}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor={fieldId("category")} className={labelClassName}>
          Patientèle suivie
        </label>
        <select
          id={fieldId("category")}
          className={inputClassName}
          value={form.category}
          onChange={updateField("category")}
        >
          <option value="">Sélectionner…</option>
          <option value="child">Enfant</option>
          <option value="adult">Adulte</option>
        </select>
      </div>

      {error && (
        <p role="alert" className="text-center text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Envoi en cours..." : "Envoyer ma proposition →"}
      </button>

      {sent && (
        <p role="status" className="text-center text-sm text-green-600">
          <span aria-hidden="true">✅</span> <strong>Message envoyé !</strong>
          <br />
          Par souci de conformité, nous devons vérifier ce qui est proposé par les adhérents.
        </p>
      )}
    </form>
    </>
  );
}