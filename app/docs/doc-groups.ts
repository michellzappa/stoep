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
      { slug: "smaller-internets", title: "Smaller internets" },
      { slug: "precedents-and-evidence", title: "Precedents & evidence" },
    ],
  },
];
