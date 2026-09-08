'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVBARLINKS = [ 
    { title: "La maladie", path: '/pages/disease' },
    { title: "La communauté", path: '/pages/community' },
    { title: "Rejoindre la communauté", path: '/pages/joinCommunity' },
    { title: "Les Docteurs", path: '/pages/doctors' },
    { title: "Les évènements", path: '/pages/news' },
 ]

const CTA_LINK = { title: "Rejoindre la communauté", path: "/pages/joinCommunity" };

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="border-b border-ink/10 bg-paper">
            <nav
                aria-label="Navigation principale"
                className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-12">
                    <Link href="/" className="font-display text-lg font-blod tracking-tight text-link">
                     PTEN <span className="text-accent-text">officiel</span> France
                    </Link>
                <ul className="flex flex-wrap items-center gap-6">
                    {NAVBARLINKS.map((link) => {
                        const isActive = pathname === link.path || pathname.startsWith(`${link.path}/`);
                        return(
                            <li key={link.path}>
                                <Link
                                href={link.path}
                                aria-current={isActive ? "page" : undefined}
                                className={
                                    isActive
                                    ? "text-sm font-medium text-accent-text underline decoration-2 underline-offset-4"
                                    : "text-sm font-medium text-ink hover:text-accent-text"
                                }>
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link
                        href={CTA_LINK.title}>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}