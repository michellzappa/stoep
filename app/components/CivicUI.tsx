import { T } from "../lib/i18n";

export type CivicRole = "resident" | "government" | "entrepreneur";

const roleClass: Record<CivicRole, string> = {
  resident: "bg-[var(--color-uitwijken-soft)] text-[#7a3418]",
  government: "bg-[var(--color-civic-soft)] text-[#164a72]",
  entrepreneur: "bg-[#dfe6d5] text-[#33501e]",
};

export function RoleTag({ role }: { role: CivicRole }) {
  const label = {
    resident: <T nl="Bewoner" en="Resident" />,
    government: <T nl="Overheid" en="Government" />,
    entrepreneur: <T nl="Ondernemer" en="Entrepreneur" />,
  }[role];
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${roleClass[role]}`}>
      {label}
    </span>
  );
}

export function ThemePill({
  label,
  active,
}: {
  label: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] ${
        active
          ? "border-[var(--color-uitwijken)] bg-[var(--color-uitwijken-soft)]/60 text-[#7a3418] font-semibold"
          : "border-[#e6e2d6] bg-white text-[#6b6658]"
      }`}
    >
      {label}
    </span>
  );
}

export function ScaleRail({ active }: { active: "house" | "street" | "buurt" | "city" }) {
  const scales = [
    { key: "house", nl: "Huis", en: "House" },
    { key: "street", nl: "Straat", en: "Street" },
    { key: "buurt", nl: "Buurt", en: "Neighborhood" },
    { key: "city", nl: "Stad", en: "City" },
  ] as const;

  return (
    <div className="px-4 py-3 border-b border-[#ececec]">
      <div className="flex items-center gap-2">
        {scales.map((scale, index) => (
          <div key={scale.key} className="flex items-center gap-2 flex-1">
            <div
              className={`w-full rounded-full px-2 py-1 text-center text-[10px] uppercase tracking-wider ${
                active === scale.key
                  ? "bg-[var(--color-ink)] text-white"
                  : "bg-[#efece4] text-[#6b6658]"
              }`}
            >
              <T nl={scale.nl} en={scale.en} />
            </div>
            {index < scales.length - 1 && <span className="text-[#b8b09d]">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CivicItem({
  role,
  title,
  meta,
  body,
}: {
  role: CivicRole;
  title: React.ReactNode;
  meta: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e6e2d6] bg-white p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="font-semibold text-[13px] leading-snug">{title}</div>
        <RoleTag role={role} />
      </div>
      <div className="mt-1 text-[11px] text-[#6b6658]">{meta}</div>
      {body && <div className="mt-2 text-[12.5px] leading-relaxed text-[#23251f]">{body}</div>}
    </div>
  );
}

export function MapSketch({
  activeScale,
  compact,
}: {
  activeScale: "street" | "buurt" | "city";
  compact?: boolean;
}) {
  const height = compact ? "h-56" : "h-[330px]";
  return (
    <div className={`relative ${height} overflow-hidden bg-[#f2ead8]`}>
      <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full">
        <rect width="400" height="320" fill="#f2ead8" />
        <path d="M30 42 H370 M30 112 H370 M30 184 H370 M30 252 H370" stroke="#d8cfb9" strokeWidth="2" />
        <path d="M72 18 V302 M154 18 V302 M244 18 V302 M326 18 V302" stroke="#d8cfb9" strokeWidth="2" />
        <path d="M54 142 C118 102 182 120 244 84 C288 58 330 62 370 34" fill="none" stroke="#9bb6c9" strokeWidth="16" opacity="0.45" />
        <rect x="142" y="118" width="104" height="74" rx="5" fill="#dfe6d5" />
        <text x="194" y="158" textAnchor="middle" fontSize="10" fill="#33501e">Javaplein</text>
        <path
          d={
            activeScale === "street"
              ? "M120 106 H276 V202 H120 Z"
              : activeScale === "buurt"
                ? "M54 48 H348 V266 H54 Z"
                : "M18 18 H382 V302 H18 Z"
          }
          fill="rgba(181,74,42,0.08)"
          stroke="#b54a2a"
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <circle cx="178" cy="144" r="8" fill="#b54a2a" />
        <circle cx="222" cy="180" r="8" fill="#1e5a8a" />
        <circle cx="286" cy="92" r="8" fill="#4a6b3a" />
        <circle cx="112" cy="224" r="8" fill="#1e5a8a" />
      </svg>
      <div className="absolute left-3 top-3 rounded-md border border-[#e6e2d6] bg-white/90 px-2 py-1 text-[10px] uppercase tracking-wider text-[#6b6658]">
        {activeScale === "street" && <T nl="Straat-scope" en="Street scope" />}
        {activeScale === "buurt" && <T nl="Buurt-scope" en="Neighborhood scope" />}
        {activeScale === "city" && <T nl="Stads-scope" en="City scope" />}
      </div>
      <div className="absolute bottom-3 right-3 rounded-md border border-[#e6e2d6] bg-white/90 px-2 py-1 text-[10px] text-[#6b6658]">
        OSM · data.amsterdam
      </div>
    </div>
  );
}
