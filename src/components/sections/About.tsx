import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import { about } from "../../data/content";
import { ScribbleUnderline } from "../sketch/ScribbleUnderline";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="o-mnie" className="pl-6 pr-6 pt-24 sm:pl-20">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="max-w-2xl">
          <h2 className="relative inline-block font-display text-3xl font-semibold text-ink sm:text-4xl">
            {t(about.title)}
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
          </h2>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base leading-relaxed text-ink-soft sm:text-lg"
              >
                {t(p)}
              </motion.p>
            ))}
          </div>
        </div>

        <p className="-rotate-2 self-center font-hand text-2xl text-marker sm:mt-2">
          ↳ {t(about.note)}
        </p>
      </div>
    </section>
  );
}
