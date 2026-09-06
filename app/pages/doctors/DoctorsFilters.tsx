"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import DoctorCard from "./DoctorCard";
import Modal from "@/app/component/Modal";
import { resolveSpecialtyQuery, slugify, type Doctor } from "@/app/lib/doctors";

const DoctorsMap = dynamic(() => import("./DoctorsMap"), {
  ssr: false,
  loading: () => <div className="mb-8 h-[420px] animate-pulse rounded border border-ink/10 bg-ink/5" />,
});

const SELECTED_DOCTOR_TITLE_ID = "selected-doctor-title";

type Option = { value: string; label: string };

const CATEGORY_OPTIONS: Option[] = [
  { value: "child", label: "Enfant" },
  { value: "adult", label: "Adulte" },
];

export default function DoctorsFilters({
  doctors,
  specialtyOptions,
  cityOptions,
}: {
  doctors: Doctor[];
  specialtyOptions: Option[];
  cityOptions: Option[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    const specialiteParam = searchParams.get("specialite");
    if (specialiteParam) setSpecialties(resolveSpecialtyQuery(specialiteParam));

    const categorieParam = searchParams.get("categorie");
    if (categorieParam) {
      setCategories(categorieParam.split(",").filter((v) => v === "child" || v === "adult"));
    }

    const villeParam = searchParams.get("ville");
    if (villeParam) setCities(villeParam.split(","));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (categories.length) params.set("categorie", categories.join(","));
    if (cities.length) params.set("ville", cities.join(","));
    if (specialties.length) params.set("specialite", specialties.join(","));
    const query = params.toString();
    router.replace(query ? `?${query}` : "?", { scroll: false });
  }, [categories, cities, specialties, router]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesCategory = categories.length === 0 || categories.includes(doctor.category);
      const matchesCity = cities.length === 0 || cities.includes(slugify(doctor.ville));
      const matchesSpecialty = specialties.length === 0 || specialties.includes(slugify(doctor.specialites));
      return matchesCategory && matchesCity && matchesSpecialty;
    });
  }, [doctors, categories, cities, specialties]);

  function toggle(value: string, list: string[], setList: (next: string[]) => void) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  const hasActiveFilters = categories.length > 0 || cities.length > 0 || specialties.length > 0;

  return (
    <div className="grid gap-10 md:grid-cols-[240px_1fr]">
      <aside aria-label="Filtrer les médecins">
        <fieldset className="mb-8">
          <legend className="mb-3 font-display text-sm font-semibold text-ink">Âge suivi</legend>
          <ul className="space-y-2">
            {CATEGORY_OPTIONS.map((option) => (
              <li key={option.value}>
                <label className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={categories.includes(option.value)}
                    onChange={() => toggle(option.value, categories, setCategories)}
                    className="h-4 w-4 accent-accent"
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        <fieldset className="mb-8">
          <legend className="mb-3 font-display text-sm font-semibold text-ink">Ville</legend>
          <ul className="space-y-2">
            {cityOptions.map((option) => (
              <li key={option.value}>
                <label className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={cities.includes(option.value)}
                    onChange={() => toggle(option.value, cities, setCities)}
                    className="h-4 w-4 accent-accent"
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        <fieldset className="mb-8">
          <legend className="mb-3 font-display text-sm font-semibold text-ink">Spécialité</legend>
          <ul className="space-y-2">
            {specialtyOptions.map((option) => (
              <li key={option.value}>
                <label className="flex items-center gap-2 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={specialties.includes(option.value)}
                    onChange={() => toggle(option.value, specialties, setSpecialties)}
                    className="h-4 w-4 accent-accent"
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => {
              setCategories([]);
              setCities([]);
              setSpecialties([]);
            }}
            className="text-sm font-semibold text-accent-text underline decoration-accent underline-offset-2"
          >
            Réinitialiser les filtres
          </button>
        )}
      </aside>

      <div>
        <DoctorsMap doctors={filteredDoctors} onSelectDoctor={setSelectedDoctor} />

        <p role="status" className="mb-4 text-sm text-muted">
          {filteredDoctors.length} médecin{filteredDoctors.length > 1 ? "s" : ""} trouvé
          {filteredDoctors.length > 1 ? "s" : ""}
        </p>
        {filteredDoctors.length === 0 ? (
          <p className="rounded border border-ink/10 bg-ink/[0.03] p-6 text-sm text-muted">
            Aucun médecin ne correspond à ces critères. Essayez de retirer un filtre.
          </p>
        ) : (
          <ul className="space-y-6">
            {filteredDoctors.map((doctor, index) => (
              <li key={`${doctor.nom}-${doctor.prenom}-${index}`}>
                <DoctorCard doctor={doctor} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <Modal
        open={selectedDoctor !== null}
        onClose={() => setSelectedDoctor(null)}
        titleId={SELECTED_DOCTOR_TITLE_ID}
      >
        {selectedDoctor && <DoctorCard doctor={selectedDoctor} headingId={SELECTED_DOCTOR_TITLE_ID} />}
      </Modal>
    </div>
  );
}