export function StatusBar({ title }: { title?: React.ReactNode }) {
  return (
    <div className="status-bar">
      <span>09:41</span>
      <span className="text-[10px] uppercase tracking-widest text-[#6b6658]">{title ?? "stoep"}</span>
      <span>􀛨 􀋨 􀋦</span>
    </div>
  );
}

export function PhoneFrame({
  children,
  title,
  caption,
  annot,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
  caption?: React.ReactNode;
  annot?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 w-[390px]">
      <div className="phone">
        <StatusBar title={title} />
        <div className="phone-scroll">{children}</div>
      </div>
      {caption && <div className="text-xs uppercase tracking-wider text-[#6b6658] pl-1">{caption}</div>}
      {annot && <div className="annot max-w-[380px] pl-1">{annot}</div>}
    </div>
  );
}
