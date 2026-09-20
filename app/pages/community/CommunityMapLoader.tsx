"use client";

import dynamic from "next/dynamic";
import type { CommunityCityWithMembers } from "@/app/lib/community";

const CommunityMap = dynamic(() => import("./CommunityMap"), {
  ssr: false,
  loading: () => <div className="mb-8 h-[420px] animate-pulse rounded border border-ink/10 bg-ink/5" />,
});

export default function CommunityMapLoader({ cities }: { cities: CommunityCityWithMembers[] }) {
  return <CommunityMap cities={cities} />;
}
