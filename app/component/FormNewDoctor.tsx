'use client'

import { useId, useState } from "react"

export default function FormNewDoctor () {
    const [error, setError] = useState('')
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [userFirstname, setuserFirstname] = useState('')
    const [userLastname, setuserLastname] = useState('')
    const [doctorFirstname, setDoctorFirstname] = useState('')
    const [doctorLastname, setDoctorLastname] = useState('')
    const [specialite, setSpecialite] = useState('')
    const [cityConsultation, setCityConsultation] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')

    const formId = useId();
    const fieldId = (name: string) => `${formId}-${name}`;

    const inputClassName = "w-full rounded border border-ink/15 bg-paper px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none";
    const labelClassName = "mb-1 block text-sm font-medium text-ink"

     if (sent) {
    return (
      <div role="status" className="rounded-lg border border-accent/40 bg-ink/5 p-7 text-center">
        <div className="mb-3 text-4xl">✅</div>
        <p className="mb-2 font-display text-base font-bold text-ink">
          Message envoyé !
        </p>
        <p className="text-sm text-ink/80">
          Par souci de conformité, nous devons vérifier ce qui est proposé par les adhérents. <strong className="text-accent-text">{email}</strong>
        </p>
      </div>
    )
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
<form className="mx-auto flex w-full max-w-3xl flex-col gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        if (!doctorFirstname || !doctorLastname || !specialite || !cityConsultation) {
          setError("Veuillez remplir tous les champs obligatoires.");
          return;
        }
        setError("");
        setLoading(true);
        try {
          const res = await fetch("/api/formNewDoctor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              userFirstname,
              userLastname,
              doctorFirstname,
              doctorLastname,
              cityConsultation,
              specialite,
              category,
              email,
              message,
            }),
          });
          if (!res.ok) throw new Error();
          setSent(true);
        } catch {
          setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
        } finally {
          setLoading(false);
        }
      }}
>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("user-firstname")} className={labelClassName}>Votre Prénom</label>
          <input
            id={fieldId("user-firstname")}
            className={inputClassName}
            type="text"
            placeholder="Jean"
            value={userFirstname}
            onChange={(e) => setuserFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={fieldId("userLastname")} className={labelClassName}>Votre Nom</label>
          <input
            id={fieldId("usserLastname")}
            className={inputClassName}
            type="text"
            placeholder="Dupont"
            value={userLastname}
            onChange={(e) => setuserLastname(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("email")} className={labelClassName}>E-mail</label>
        <input
          id={fieldId("email")}
          className={inputClassName}
          type="email"
          placeholder="jean@societe.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={fieldId(message)} className={labelClassName}>Si vous souhaitez apporter des précisions</label>
        <textarea
          id={fieldId(message)}
          className={`${inputClassName} min-h-[140px]`}
          placeholder="Décrivez-nou le contexte si vous le souhaitez"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={fieldId(doctorFirstname)} className={labelClassName}>Le prénom du docteur</label>
        <input
          id={fieldId(doctorFirstname)}
          className={inputClassName}
          type="text"
          placeholder="Le prénom du docteur"
          value={doctorFirstname}
          onChange={(e) => setDoctorFirstname(e.target.value)}
          required
          aria-label="true"
        />
      </div>
      <div>
        <label htmlFor={fieldId(doctorLastname)} className={labelClassName}>Le nom du docteur</label>
        <input
            id={fieldId("doctorLastname")}
            className={inputClassName}
            type="text"
            placeholder="Le nom du docteur"
            value={doctorLastname}
            onChange={(e) => setDoctorLastname(e.target.value)}
            required
            aria-required="true"
          />
      </div>
    </div>

      <div className="form-field">
        <label htmlFor={fieldId("specialite")} className={labelClassName}>
          Spécialité du docteur <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("specialite")}
          className={inputClassName}
          type="text"
          placeholder="Sa spécialité"
          value={specialite}
          onChange={(e) => setSpecialite(e.target.value)}
          required
          aria-required="true"
        />
      </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
         <label htmlFor={fieldId("ville")} className={labelClassName}>
          Lieu de soin <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId("ville")}
          className={inputClassName}
          type="text"
          placeholder="Son lieu de consultation"
          value={cityConsultation}
          onChange={(e) => setCityConsultation(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Sélectionner…</option>
          <option value="child">Enfant</option>
          <option value="adult">Adulte</option>
        </select>
      </div>
    </div>

      {error && (
        <p style={{ fontSize: '13px', color: '#f87171', textAlign: 'center' }}>
          {error}
        </p>
      )}

      <button
            type="submit"
            disabled={loading}
            className="rounded-sm bg-ink mb-15 px-4 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Envoi en cours...' : 'Envoyer ma proposition →'}
      </button>
</form>
</>
  )
}