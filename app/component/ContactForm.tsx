"use client";

import { useId, useState } from "react";

type FormState = {
  contactFirstname: string;
  contactLastname: string;
  subject: string;
  subjectOther: string;
  message: string;
};

const initialFormState: FormState = {
  contactFirstname: "",
  contactLastname: "",
  subject: "",
  subjectOther: "",
  message: "",
};

export default function ContactForm() {
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

  function handleSubjectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setForm((prev) => ({
      ...prev,
      subject: value,
      subjectOther: value === "other" ? prev.subjectOther : "",
    }));
  }

  return (
    <>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <h1 className="mt-15 text-center text-4xl">Contactez-nous</h1>

        <div className="mb-15 mt-5 flex flex-col gap-4">
          <p>
            Une question, une demande liée à vos données personnelles ou au
            contenu du site ? Écrivez-nous, nous vous répondrons dès que
            possible.
          </p>
        </div>
      </div>

      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-5"
        onSubmit={async (event) => {
          event.preventDefault();
          if (
            !form.contactFirstname ||
            !form.contactLastname ||
            !form.subject ||
            (form.subject === "other" && !form.subjectOther) ||
            !form.message
          ) {
            setError("Veuillez remplir tous les champs");
            return;
          }
          setError("");
          setSent(false);
          setLoading(true);
          try {
            const res = await fetch("/api/contactForm", {
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
            <label htmlFor={fieldId("contact-firstname")} className={labelClassName}>
              Prénom <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("contact-firstname")}
              className={inputClassName}
              type="text"
              value={form.contactFirstname}
              onChange={updateField("contactFirstname")}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor={fieldId("contact-lastname")} className={labelClassName}>
              Nom <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("contact-lastname")}
              className={inputClassName}
              type="text"
              value={form.contactLastname}
              onChange={updateField("contactLastname")}
              required
              aria-required="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor={fieldId("subject")} className={labelClassName}>
            Sujet de votre demande <span aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId("subject")}
            className={inputClassName}
            value={form.subject}
            onChange={handleSubjectChange}
          >
            <option value="">Sélectionner…</option>
            <option value="rgpd-rights">Exercer un droit RGPD (accès, rectification, effacement...)</option>
            <option value="content-update">Modification de contenu du site</option>
            <option value="data-deletion">Suppression de mes données</option>
            <option value="other">Autre</option>
          </select>

          {form.subject === "other" && (
            <div className="mt-3">
              <label htmlFor={fieldId("subject-other")} className={labelClassName}>
                Précisez <span aria-hidden="true">*</span>
              </label>
              <input
                id={fieldId("subject-other")}
                className={inputClassName}
                type="text"
                placeholder="Ex. : partenariat, presse, question générale…"
                value={form.subjectOther}
                onChange={updateField("subjectOther")}
                required
                aria-required="true"
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("message")} className={labelClassName}>
            Votre message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={fieldId("message")}
            className={inputClassName}
            rows={6}
            value={form.message}
            onChange={updateField("message")}
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
          {loading ? "Envoi en cours..." : "Envoyer mon message →"}
        </button>

        {sent && (
          <p role="status" className="text-center text-sm text-green-600">
            <span aria-hidden="true">✅</span> <strong>Message envoyé !</strong>
            <br />
            Nous reviendrons vers vous dès que possible.
          </p>
        )}
      </form>
    </>
  );
}