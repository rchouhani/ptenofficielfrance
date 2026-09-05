// app/component/article/Sources.tsx (mise à jour : href devient optionnel)
import ArticleSection from "./ArticleSection";
import ExternalLink from "./ExternalLink";

type Source = { label: string; href?: string; note?: string };

export default function Sources({ id, sources }: { id: string; sources: Source[] }) {
  return (
    <ArticleSection id={id} title="Sources">
      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm">
        {sources.map((source, i) => (
          <li key={source.href ?? `${source.note}-${i}`}>
            {source.note && <span>{source.note} - </span>}
            {source.href ? (
              <ExternalLink href={source.href}>{source.label}</ExternalLink>
            ) : (
              <span>{source.label}</span>
            )}
          </li>
        ))}
      </ul>
    </ArticleSection>
  );
}