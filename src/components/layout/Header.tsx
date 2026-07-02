import { useLanguage } from "../../lib/LanguageContext";
import { nav } from "../../data/content";

const links: { key: keyof typeof nav; href: string }[] = [
  { key: "projects", href: "#projekty" },
  { key: "about", href: "#o-mnie" },
  { key: "stack", href: "#stack" },
  { key: "contact", href: "#kontakt" },
];

export function Header() {
  const { lang, toggle, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-grid/70 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4 pl-6 pr-6 sm:pl-20">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-ink"
        >
          Mateusz Baranowski
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-pen"
            >
              {t(nav[key])}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle language"
          className="font-mono text-xs font-medium tracking-wide text-ink-soft transition-colors hover:text-pen"
        >
          <span className={lang === "pl" ? "text-pen" : ""}>PL</span>
          <span className="mx-1 text-grid">/</span>
          <span className={lang === "en" ? "text-pen" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
}
