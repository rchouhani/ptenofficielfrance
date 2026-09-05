export type ChapterKind = "chapter" | "glossary";

export type ChapterMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
  kind: ChapterKind;
};

const CHAPTERS: ChapterMeta[] = [
  { slug: "qu-est-ce-que-pten", title: "Qu'est-ce que PTEN ?", description: "Le gène PTEN, son rôle de frein cellulaire, et la différence entre mutation somatique et mutation héréditaire.", order: 1, kind: "chapter" },
  { slug: "portes-entree", title: "Les portes d'entrée du diagnostic", description: "Les situations cliniques qui amènent à évoquer une mutation PTEN, de l'enfance à l'âge adulte.", order: 2, kind: "chapter" },
  { slug: "heredite-conseil-genetique", title: "Hérédité et conseil génétique", description: "Comment se transmet une mutation PTEN dans une famille, et comment se déroule une consultation de génétique.", order: 3, kind: "chapter" },
  { slug: "symptomes-syndromes", title: "Symptômes et syndromes associés", description: "Le syndrome de Cowden, le syndrome de Bannayan-Riley-Ruvalcaba, et les risques de cancer associés au PHTS.", order: 4, kind: "chapter" },
  { slug: "suivi-medical", title: "Propositions de suivi", description: "Les spécialités mobilisées pour une surveillance coordonnée, et vers qui se tourner pour chacune.", order: 5, kind: "chapter" },
  { slug: "demarches-administratives", title: "Démarches administratives", description: "ALD 31, carte d'urgence maladies rares et reconnaissance du handicap : les repères pour alléger le suivi.", order: 6, kind: "chapter" },
  { slug: "recherche-essais-cliniques", title: "Recherche en cours et essais cliniques", description: "Où en est la recherche sur le PHTS, et comment un patient peut y contribuer.", order: 7, kind: "chapter" },
  { slug: "approches-internationales-francaises", title: "Approches internationales et françaises", description: "Les recommandations des sociétés savantes internationales, et la situation du syndrome de Cowden en France.", order: 8, kind: "chapter" },
  { slug: "glossaire", title: "Glossaire", description: "Les termes techniques rencontrés dans cette rubrique, expliqués simplement.", order: 9, kind: "glossary" },
];

export function getAllChapters(): ChapterMeta[] {
  return CHAPTERS;
}

export function getChapterMeta(slug: string): ChapterMeta | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = CHAPTERS.findIndex((c) => c.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? CHAPTERS[index - 1] : null,
    next: index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null,
  };
}

export function chapterHref(slug: string): string {
  return `/pages/disease/${slug}`;
}