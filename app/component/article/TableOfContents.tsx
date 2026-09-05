// app/component/article/TableOfContents.tsx
type TocItem = { id: string; label: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Sommaire de la page" className="mb-10 rounded border border-black/10 bg-black/[0.03] p-5">
      <p className="mb-2 font-serif font-semibold">Sur cette page</p>
      <ol className="space-y-1 pl-5 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="underline decoration-[#E85D3D] underline-offset-2">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}