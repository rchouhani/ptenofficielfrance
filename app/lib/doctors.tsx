import rawDoctors from "./data.json";

export type DoctorCategory = "child" | "adult";

export type Doctor = {
  nom: string;
  prenom: string;
  specialites: string;
  adresse: string;
  codePostal: string;
  ville: string;
  mail?: string;
  lien?: string;
  lienAPHP?: string;
  iframeGoogleMaps: string;
  category: DoctorCategory;
};

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllDoctors(): Doctor[] {
  return rawDoctors as Doctor[];
}

type Option = { value: string; label: string };

export function getSpecialtyOptions(): Option[] {
  const unique = new Map<string, string>();
  for (const doctor of getAllDoctors()) {
    const slug = slugify(doctor.specialites);
    if (!unique.has(slug)) unique.set(slug, doctor.specialites);
  }
  return Array.from(unique, ([value, label]) => ({ value, label })).sort((a, b) =>
    a.label.localeCompare(b.label, "fr")
  );
}

export function getCityOptions(): Option[] {
  const unique = new Map<string, string>();
  for (const doctor of getAllDoctors()) {
    const slug = slugify(doctor.ville);
    if (!unique.has(slug)) unique.set(slug, doctor.ville);
  }
  return Array.from(unique, ([value, label]) => ({ value, label })).sort((a, b) =>
    a.label.localeCompare(b.label, "fr")
  );
}

const SPECIALTY_ALIASES: Record<string, RegExp> = {
  genetique: /genetique|geneticien/,
  dermatologie: /dermatologie/,
  endocrinologie: /endocrino/,
  gynecologie: /gyneco/,
  "gastro-enterologie": /gastro-?enter/,
  nephrologie: /nephro/,
  oncologie: /oncologie|onco-/,
};

export function resolveSpecialtyQuery(rawValue: string): string[] {
  const options = getSpecialtyOptions();
  const requested = slugify(rawValue);

  const exact = options.find((option) => option.value === requested);
  if (exact) return [exact.value];

  const alias = SPECIALTY_ALIASES[requested];
  if (!alias) return [];

  return options.filter((option) => alias.test(option.value)).map((option) => option.value);
}

export function getCoordinates(doctor: Doctor): { lat: number; lng: number } | null {
  const match = /!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/.exec(doctor.iframeGoogleMaps);
  if (!match) return null;
  return { lng: Number(match[1]), lat: Number(match[2]) };
}