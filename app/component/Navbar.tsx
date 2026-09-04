const NAVBARLINKS = [ 
    { title: "La maladie", path: '/pages/disease' },
    { title: "La communauté", path: '/pages/community' },
    { title: "Rejoindre la communauté", path: '/pages/joinCommunity' },
    { title: "Les Docteurs", path: '/pages/doctors' },
    { title: "La vie de l'association", path: '/pages/news' },
 ]

export default function Navbar() {
    return (
<nav className="bg-pink-800 p-10 inline-flex justify-around">
    <ul>
          {NAVBARLINKS.map((link, index) => (
            <a key={index} href={link.path} className="p-10"> 
                {link.title}
            </a>
          ))}
    </ul>
    </nav>
    )
}