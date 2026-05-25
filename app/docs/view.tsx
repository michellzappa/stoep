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
          h1: ({ children }) => (
            <h2 className="font-serif italic text-3xl leading-tight mt-10 mb-3">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2 className="font-serif italic text-3xl leading-tight mt-10 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-serif italic text-2xl leading-tight mt-7 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-serif italic text-xl leading-tight mt-6 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-3 text-[15px] leading-relaxed text-[#1f1e1a]">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-3 list-disc pl-6 text-[15px] leading-relaxed text-[#1f1e1a]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 list-decimal pl-6 text-[15px] leading-relaxed text-[#1f1e1a]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="my-1 pl-1">{children}</li>,
          table: ({ children }) => (
            <table className="my-5 w-full border-collapse text-sm">{children}</table>
          ),
          th: ({ children }) => (
            <th className="border border-[#e6e2d6] bg-[#f3efe4] px-3 py-2 text-left font-semibold align-top">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[#e6e2d6] px-3 py-2 align-top">{children}</td>
          ),
          code: ({ children }) => (
            <code className="rounded bg-[#efece4] px-1.5 py-0.5 font-mono text-[13px]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-[#efece4] p-4 text-[13px]">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-[var(--color-uitwijken)] pl-4 italic text-[#4a4840]">
              {children}
            </blockquote>
          ),
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
