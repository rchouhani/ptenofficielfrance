import Link from "next/link";

const FOOTERLINKS = [
  { title: "Contactez-nous", path: "/pages/contactUs" },
  { title: "Mentions légales", path: "/pages/legalMentions" },
  { title: "Politique de confidentialité", path: "/pages/privacyPolicy" },
  { title: "RGPD", path: "/pages/RGPD" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-9 text-sm text-muted sm:px-12">
        <p>© {new Date().getFullYear()} PTEN Officiel France</p>
        <nav aria-label="Liens de pied de page">
          <ul className="flex flex-wrap gap-6">
            {FOOTERLINKS.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-accent-text">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}   