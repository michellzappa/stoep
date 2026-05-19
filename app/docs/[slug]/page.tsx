import { notFound } from "next/navigation";
import { readDoc } from "../lib";
import { DocView } from "../view";

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = await readDoc(slug);
  if (!doc) notFound();
  return <DocView title={doc.title} body={doc.body} />;
}
