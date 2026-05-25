import { readDoc } from "./lib";
import { DocView } from "./view";

export default async function DocsIndex() {
  const doc = await readDoc("readme");
  if (!doc) {
    return (
      <div className="prose-uitwijken">
        <p>README.md not found in vault.</p>
      </div>
    );
  }
  return <DocView title={doc.title} body={doc.body} />;
}
