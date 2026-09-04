const FOOTERLINKS = [ 
    { title: "Contactez-nous", path: '/pages/contactUs' },
    { title: "Mentions légales", path: '/pages/legalMentions' },
    { title: "Politique de confidentialité", path: '/pages/privacyPolicy' },
    { title: "RGPD", path: '/pages/RGPD' },
 ]

export default function Footer() {
    return (
<footer className="bg-pink-800 mt-150 p-10 inline-flex justify-around">
    <ul>
          {FOOTERLINKS.map((link, index) => (
            <a key={index} href={link.path} className="p-10"> 
                {link.title}
            </a>
          ))}
    </ul>
    </footer>
    )
}