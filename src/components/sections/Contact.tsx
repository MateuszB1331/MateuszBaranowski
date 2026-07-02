import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import { contact } from "../../data/content";
import { ScribbleArrow } from "../sketch/ScribbleArrow";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="pl-6 pr-6 py-24 sm:pl-20">
      <div className="mx-auto max-w-3xl text-center sm:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          {t(contact.headline)}
        </motion.h2>

        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-sm bg-ink px-6 py-3 font-mono text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {t(contact.cta)} → {contact.email}
          </a>

          <div className="hidden sm:block">
            <ScribbleArrow direction="right" className="h-4 w-14" delay={0.2} />
          </div>

          <div className="flex gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border-2 border-ink px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border-2 border-ink px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
