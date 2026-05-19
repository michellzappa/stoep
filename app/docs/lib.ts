import fs from "node:fs/promises";
import path from "node:path";

const VAULT = path.join(process.cwd(), "content", "wiki");

export function slugify(name: string): string {
  return name
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export async function listDocs(): Promise<string[]> {
  const entries = await fs.readdir(VAULT);
  return entries
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

async function resolveFile(slug: string): Promise<string | null> {
  const files = await fs.readdir(VAULT);
  const match = files.find(
    (f) => f.endsWith(".md") && slugify(f) === slug.toLowerCase(),
  );
  return match ? path.join(VAULT, match) : null;
}

export async function readDoc(
  slug: string,
): Promise<{ title: string; body: string } | null> {
  const file = await resolveFile(slug);
  if (!file) return null;
  const raw = await fs.readFile(file, "utf-8");
  const title = path.basename(file, ".md");
  return { title, body: rewriteWikilinks(raw) };
}

export function rewriteWikilinks(src: string): string {
  return src.replace(
    /\[\[([^\]]+)\]\]/g,
    (_full, inner: string) => {
      const [targetRaw, aliasRaw] = inner.split("|").map((s) => s.trim());
      const [namePart, hashPart] = targetRaw.split("#").map((s) => s.trim());
      const label = aliasRaw ?? (hashPart ? `${namePart} § ${hashPart}` : namePart);
      const slug = slugify(namePart);
      const hash = hashPart ? `#${slugify(hashPart)}` : "";
      if (!KNOWN_SLUGS.has(slug)) {
        return `**${label}**`;
      }
      return `[${label}](/docs/${slug}${hash})`;
    },
  );
}

const KNOWN_SLUGS = new Set([
  "readme",
  "vision",
  "concepts",
  "personas",
  "funding",
  "adoption",
  "timeline",
  "post-pilot",
  "risks-and-next-steps",
  "technical-stack",
  "open-data",
  "governance",
  "resident-rights",
  "identity-edge-cases",
  "precedents-and-evidence",
]);

export type DocGroup = { label: string; items: { slug: string; title: string }[] };

export const DOC_GROUPS: DocGroup[] = [
  {
    label: "Core",
    items: [
      { slug: "readme", title: "README" },
      { slug: "vision", title: "Vision" },
      { slug: "concepts", title: "Concepts" },
      { slug: "personas", title: "Personas" },
    ],
  },
  {
    label: "Strategy & execution",
    items: [
      { slug: "funding", title: "Funding" },
      { slug: "adoption", title: "Adoption" },
      { slug: "timeline", title: "Timeline" },
      { slug: "post-pilot", title: "Post-pilot" },
      { slug: "risks-and-next-steps", title: "Risks & next steps" },
    ],
  },
  {
    label: "Technical & data",
    items: [
      { slug: "technical-stack", title: "Technical stack" },
      { slug: "open-data", title: "Open data" },
    ],
  },
  {
    label: "Governance & rights",
    items: [
      { slug: "governance", title: "Governance" },
      { slug: "resident-rights", title: "Resident rights" },
      { slug: "identity-edge-cases", title: "Identity edge cases" },
    ],
  },
  {
    label: "Research & precedent",
    items: [
      { slug: "precedents-and-evidence", title: "Precedents & evidence" },
    ],
  },
];
