import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function DocView({ title, body }: { title: string; body: string }) {
  return (
    <article className="prose-uitwijken">
      <div className="text-xs uppercase tracking-widest text-[var(--color-uitwijken)] mb-2">
        Wiki
      </div>
      <h1 className="font-serif italic text-4xl leading-tight mb-6">
        {title.replace(/-/g, " ")}
      </h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const h = href ?? "";
            if (h.startsWith("/docs/")) {
              return (
                <Link href={h} className="text-[var(--color-uitwijken)] underline">
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={h}
                target={h.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-[var(--color-uitwijken)] underline"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </article>
  );
}
