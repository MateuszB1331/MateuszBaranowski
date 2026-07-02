import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import { stackSection } from "../../data/content";
import { ScribbleUnderline } from "../sketch/ScribbleUnderline";

export function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="pl-6 pr-6 pt-24 sm:pl-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative inline-block font-display text-3xl font-semibold text-ink sm:text-4xl">
          {t(stackSection.title)}
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stackSection.groups.map((group, i) => (
            <motion.div
              key={group.label.pl}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                {t(group.label)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-grid bg-paper px-3 py-1.5 font-mono text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
