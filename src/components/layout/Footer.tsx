import { useLanguage } from "../../lib/LanguageContext";
import { footer, contact } from "../../data/content";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-grid/70 py-8 pl-6 pr-6 sm:pl-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} Mateusz Baranowski — {t(footer.rights)}
        </p>
        <a href={`mailto:${contact.email}`} className="font-mono hover:text-pen">
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
