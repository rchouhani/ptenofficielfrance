export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination des médecins" className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border border-ink/15 px-3 py-1.5 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span aria-hidden="true">←</span>
        <span className="sr-only">Page précédente</span>
      </button>

      <ul className="flex items-center gap-1">
        {pages.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              type="button"
              onClick={() => onPageChange(pageNumber)}
              aria-current={pageNumber === currentPage ? "page" : undefined}
              className={
                pageNumber === currentPage
                  ? "rounded bg-ink px-3 py-1.5 text-sm font-semibold text-paper"
                  : "rounded px-3 py-1.5 text-sm text-ink hover:bg-ink/5"
              }
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border border-ink/15 px-3 py-1.5 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span aria-hidden="true">→</span>
        <span className="sr-only">Page suivante</span>
      </button>
    </nav>
  );
}