"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import type { CommunityCityWithMembers } from "@/app/lib/community";

const pinIcon = L.divIcon({
  className: "",
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="28" height="36">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" style="fill:var(--color-accent);stroke:var(--color-ink);stroke-width:1" />
    <circle cx="12" cy="12" r="5" style="fill:var(--color-paper)" />
  </svg>`,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -32],
});

const MAP_CENTER: [number, number] = [46, -5];

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (points.length === 0) return;
    map.fitBounds(L.latLngBounds(points), { padding: [32, 32] });
  }, [map, points]);

  return null;
}

export default function CommunityMap({ cities }: { cities: CommunityCityWithMembers[] }) {
  const points: [number, number][] = cities.map((city) => [city.lat, city.lng]);

  return (
    <div className="mb-8 overflow-hidden rounded border border-ink/10">
      <MapContainer center={MAP_CENTER} zoom={4} scrollWheelZoom={false} style={{ height: "420px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds points={points} />
        {cities.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lng]} icon={pinIcon}>
            <Tooltip permanent direction="top" offset={[0, -36]}>
              {city.name} — {city.members}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}