// app/component/article/ArticleSection.tsx
import type { ReactNode } from "react";

export default function ArticleSection({
  id,
  title,
  children,
  as = "section",
}: {
  id: string;
  title: string;
  children: ReactNode;
  as?: "section" | "nav";
}) {
  const Wrapper = as;
  return (
    <Wrapper aria-labelledby={id}>
      <h2 id={id} className="mb-4 mt-10 scroll-mt-24 font-serif text-2xl font-bold text-[#111]">
        {title}
      </h2>
      {children}
    </Wrapper>
  );
}