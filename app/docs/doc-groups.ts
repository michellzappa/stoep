export type DocGroup = { label: string; items: { slug: string; title: string }[] };

export const DOC_GROUPS: DocGroup[] = [
  {
    label: "Concept",
    items: [
      { slug: "readme", title: "README" },
      { slug: "vision", title: "Vision" },
      { slug: "concepts", title: "Concepts" },
      { slug: "governance", title: "Governance" },
    ],
  },
  {
    label: "Product proof",
    items: [
      { slug: "proof-of-concept", title: "Proof of concept" },
      { slug: "open-data", title: "Open data" },
      { slug: "adoption", title: "Adoption" },
    ],
  },
  {
    label: "Delivery",
    items: [
      { slug: "funding", title: "Funding" },
      { slug: "risks-and-next-steps", title: "Risks & next steps" },
    ],
  },
];
