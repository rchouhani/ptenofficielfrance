// app/component/article/ChapterPager.tsx
import Link from "next/link";

type ChapterLink = { href: string; title: string } | null;

export default function ChapterPager({ previous, next }: { previous: ChapterLink; next: ChapterLink }) {
  return (
    <nav
      aria-label="Navigation entre les pages de la rubrique"
      className="mt-16 flex items-start justify-between gap-6 border-t border-black/10 pt-8 text-sm"
    >
      <span>
        {previous && (
          <Link href={previous.href} className="underline decoration-[#E85D3D] underline-offset-2">
            ← {previous.title}
          </Link>
        )}
      </span>
      <span className="text-right">
        {next && (
          <Link href={next.href} className="underline decoration-[#E85D3D] underline-offset-2">
            {next.title} →
          </Link>
        )}
      </span>
    </nav>
  );
}