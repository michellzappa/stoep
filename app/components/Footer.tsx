const REPO_URL = "https://github.com/michellzappa/stoep";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6e2d6] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[#6b6658]">
        <span>Stoep wireframes · pilot mock screens</span>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--color-stoep)] hover:underline"
        >
          github.com/michellzappa/stoep
        </a>
      </div>
    </footer>
  );
}
