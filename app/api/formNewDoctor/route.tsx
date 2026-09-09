import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_NEW_DOCTOR);

export async function POST (req: Request) {
    try {
   const { userFirstname, userLastname, doctorFirstname, doctorLastname, specialite, cityConsultation, category } = await req.json();

   if (!doctorFirstname || !doctorLastname || !specialite || !cityConsultation) {
    return Response.json({ error: `il manque l'un de ces champs le ${doctorFirstname}, le ${doctorLastname}, la ${specialite} ou la ${cityConsultation} de consultation `}, { status: 400 })
   }

   await resend.emails.send({
    from: 'test <onboarding@resend.dev>',
    to: 'rchouhani@me.com',
    subject: `Rajout de ${doctorFirstname} ${doctorLastname}`,
    text: `Ce docteur est proposé par ${userFirstname} ${userLastname},
    Prenom: ${doctorFirstname}
    Nom: ${doctorLastname}
    Sa spécialité : ${specialite}
    Son lieu de consultation : ${cityConsultation}
    Il s'occupe principalement des  : ${category}
    `.trim(),
   })

   return Response.json({ ok: true})
   } catch (error) {
    console.error('Erreur envoie email: ', error)
    return Response.json({ error: 'Erreur serveur' }, { status: 500 })
   }
};