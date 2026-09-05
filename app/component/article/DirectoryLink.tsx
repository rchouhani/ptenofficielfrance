// app/component/article/DirectoryLink.tsx (nouveau)
import Link from "next/link";

export default function DirectoryLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="mt-1 text-sm">
      <span aria-hidden="true">→ </span>
      <Link href={href} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
        {label}
      </Link>
    </p>
  );
}