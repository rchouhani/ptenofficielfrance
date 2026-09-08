'use client'

import { useState } from "react"

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

     if (sent) {
    return (
      <div style={{
        padding: '28px 24px',
        background: 'var(--color-muted)',
        border: '1px solid var(--color-accent-text)',
        borderRadius: '8px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '14px' }}>✅</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'red', marginBottom: '8px' }}>
          Message envoyé !
        </div>
        <p style={{ fontSize: '13px' }}>
          Par souci de conformité, nous devons vérifier ce qui est proposé par les adhérents. <strong style={{ color: 'var(--color-accent-text)' }}>{email}</strong>
        </p>
      </div>
    )
  }

    return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div>
        <div>
          <label>Votre Prénom</label>
          <input
            className="h-12"
            type="text"
            placeholder="Jean"
            value={userFirstname}
            onChange={(e) => setuserFirstname(e.target.value)}
          />
        </div>
        <div>
          <label>Votre Nom</label>
          <input
            className="h-12"
            type="text"
            placeholder="Dupont"
            value={userLastname}
            onChange={(e) => setuserLastname(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label>E-mail</label>
        <input
          className="h-12"
          type="email"
          placeholder="jean@société.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Si vous souhaitez apporter des précisions</label>
        <textarea
          className="h-12"
          style={{ height: '140px' }}
          placeholder="Décrivez-nou le contexte si vous le souhaitez"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Le prénom du docteur</label>
        <textarea
          className="h-12"
          // style={{ height: '140px' }}
          placeholder="Le prénom du docteur"
          value={doctorFirstname}
          onChange={(e) => setDoctorFirstname(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label>Le nom du docteur</label>
        <textarea
          className="h-12"
          // style={{ height: '140px' }}
          placeholder="Le nom du docteur"
          value={doctorLastname}
          onChange={(e) => setDoctorLastname(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>La spécialité de votre docteur</label>
        <textarea
          className="h-12"
          // style={{ height: '140px' }}
          placeholder="Sa spécialité"
          value={specialite}
          onChange={(e) => setSpecialite(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Sa ville ou son hôpital</label>
        <textarea
          className="h-12"
          placeholder="Son lieu de consultation"
          value={cityConsultation}
          onChange={(e) => setCityConsultation(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Enfants ou Adultes</label>
        <textarea
          className="h-12"
          placeholder="il s'occupe d'enfant ou d'adulte"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      {error && (
        <p style={{ fontSize: '13px', color: '#f87171', textAlign: 'center' }}>
          {error}
        </p>
      )}

      <button
            type="button"
            className="form-submit"
            disabled={loading}
            onClick={async () => {
              if (!doctorFirstname || !doctorLastname || !specialite || !cityConsultation){
              setError('Veuillez remplir tous les champs obligatoires.')
              return
            }
          setError('')
          setLoading(true)
          try {
            const res = await fetch('/api/formNewDoctor', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ userFirstname, userLastname, category, specialite, cityConsultation, doctorFirstname, doctorLastname, email, message }),
            })
            if (!res.ok) throw new Error()
              setSent(true)
          } catch {
            setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
          } finally {
            setLoading (false)
          }
         }}
      >
        {loading ? 'Envoi en cours...' : 'Envoyer ma proposition →'}
      </button>

      {/* <p className="form-note">
        Champs * obligatoires · Réponse sous 24h ouvrées<br />
        Ou appelez directement le{' '}
        <a href="#">lien de bas de page formulaire</a>
      </p> */}
    </div>
  )
}