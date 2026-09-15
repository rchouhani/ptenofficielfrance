export default function AboutUS() {
  const resources = [
    { src: "/assets/actu-pten-officiel-france.png", alt: "Actualités PTEN Officiel France" },
    { src: "/assets/gralon-pten-officiel-france.png", alt: "Gralon" },
    { src: "/assets/ma-patho-pten-officiel-france.png", alt: "Ma Pathologie" },
    { src: "/assets/genturis-pten-officiel-france.png", alt: "GENTURIS" },
    { src: "/assets/wap-pten-officiel-france.png", alt: "WAP" },
    // { src: "/assets/ma-patho-youtube-pten-officiel-france.png", alt: "Ma Pathologie — chaîne YouTube" },
  ];

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 px-6 py-12">
      {resources.map((item) => (
        <div
          key={item.src}
          className="h-[250px] overflow-hidden rounded-lg border border-ink/10 bg-paper"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}