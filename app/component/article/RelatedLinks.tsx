// app/component/article/RelatedLinks.tsx
import Link from "next/link";
import ArticleSection from "./ArticleSection";

export default function RelatedLinks({
  id,
  title = "Pour aller plus loin",
  links,
}: {
  id: string;
  title?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <ArticleSection id={id} title={title} as="nav">
      <ul className="mb-6 list-disc space-y-2 pl-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-semibold underline decoration-[#E85D3D] underline-offset-2">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </ArticleSection>
  );
}