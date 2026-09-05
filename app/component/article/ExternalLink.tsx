// app/component/article/ExternalLink.tsx
import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function ExternalLink({
  href,
  children,
  className = "font-semibold underline decoration-[#E85D3D] underline-offset-2",
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only"> (site externe, nouvel onglet)</span>
    </a>
  );
}