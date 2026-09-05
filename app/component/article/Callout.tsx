// app/component/article/Callout.tsx
import type { ReactNode } from "react";

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 rounded border-l-4 border-[#E85D3D] bg-black/5 px-4 py-3 text-sm">
      <span className="sr-only">Avertissement : </span>
      {children}
    </p>
  );
}