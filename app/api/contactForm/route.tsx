import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_NEW_DOCTOR);

const SUBJECT_LABELS: Record<string, string> = {
  "rgpd-rights": "Droit RGPD",
  "content-update": "Modification de contenu",
  "data-deletion": "Suppression de données",
  other: "Autre demande",
};

export async function POST(req: Request) {
  try {
    const { contactFirstname, contactLastname, subject, subjectOther, message } = await req.json();

    if (!contactFirstname || !contactLastname || !subject || !message) {
      return Response.json({ error: "Il manque l'un des champs obligatoires." }, { status: 400 });
    }

    const subjectLabel = subject === "other" ? subjectOther : SUBJECT_LABELS[subject] ?? subject;

    await resend.emails.send({
      from: 'test <onboarding@resend.dev>',
      to: 'rchouhani@me.com',
      subject: `${subjectLabel} — ${contactFirstname} ${contactLastname}`,
      text: `
      Prénom: ${contactFirstname}
      Nom: ${contactLastname}
      Sujet: ${subjectLabel}
      Message:
      ${message}
      `.trim(),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Erreur envoie email: ', error);
    return Response.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}