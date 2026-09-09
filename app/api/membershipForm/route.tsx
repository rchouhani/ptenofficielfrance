import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_NEW_DOCTOR);

export async function POST (req: Request) {
    try {
   const { userFirstname, userLastname, whoAmI, whoAmIOther, cityLocation, category, expectations } = await req.json();

   if (
    !userFirstname || 
    !userLastname || 
    !whoAmI ||
    !whoAmIOther ||
    !cityLocation) {
    return Response.json({ error: `il manque l'un de ces champs le ${userFirstname}, le ${userLastname}, la ${whoAmI} ou la ${cityLocation} de consultation `}, { status: 400 })
   }

   await resend.emails.send({
    from: 'test <onboarding@resend.dev>',
    to: 'rchouhani@me.com',
    subject: `Demande d'adhésion de ${userFirstname} ${userLastname}`,
    text: `
    Prenom: ${userFirstname}
    Nom: ${userLastname}
    Je suis : ${whoAmI} ou ${whoAmIOther}
    J'habite à côté de  : ${cityLocation}
    Je suis ${category}
    Voici ce que j'attends de l'association : ${expectations}
    `.trim(),
   })

   return Response.json({ ok: true})
   } catch (error) {
    console.error('Erreur envoie email: ', error)
    return Response.json({ error: 'Erreur serveur' }, { status: 500 })
   }
};