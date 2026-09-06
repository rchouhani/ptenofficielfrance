import type { Metadata } from "next";
import { Suspense } from "react";
import DoctorsFilters from "./DoctorsFilters";
import { getAllDoctors, getSpecialtyOptions, getCityOptions } from "@/app/lib/doctors";

export const metadata: Metadata = {
  title: "Médecins référents — PTEN Officiel France",
  description: "Annuaire des médecins référents pour le suivi du syndrome de Cowden et des syndromes apparentés.",
};

export default function DoctorsPage() {
  const doctors = getAllDoctors();
  const specialtyOptions = getSpecialtyOptions();
  const cityOptions = getCityOptions();

  return (
    <main id="contenu-medecins" className="mx-auto max-w-5xl px-6 py-12">
      <p className="mb-3 text-sm font-medium text-accent-text">Trouver un praticien</p>
      <h1 className="mb-6 font-display text-4xl font-bold text-ink">Médecins référents</h1>
      <p className="mb-10 max-w-2xl leading-relaxed text-ink/80">
        Une liste de praticiens qui suivent le syndrome de Cowden et les syndromes apparentés, classée par région. Vous pouvez proposer un spécialiste en <a href="/pages/formNewDoctor" className="textDecoration: underline">cliquant içi</a>.
      </p>

      <Suspense fallback={<p className="text-sm text-muted">Chargement des filtres…</p>}>
        <DoctorsFilters doctors={doctors} specialtyOptions={specialtyOptions} cityOptions={cityOptions} />
      </Suspense>
    </main>
  );
}