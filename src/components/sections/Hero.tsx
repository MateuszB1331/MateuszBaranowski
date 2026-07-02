import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import { hero } from "../../data/content";
import { ScribbleArrow } from "../sketch/ScribbleArrow";

function DiagramBox({
  children,
  filled = false,
  delay = 0,
}: {
  children: string;
  filled?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={
        "flex items-center justify-center rounded-sm border-2 border-dashed px-4 py-3 text-center font-mono text-xs font-medium tracking-wide sm:text-sm " +
        (filled
          ? "border-ink bg-ink text-paper"
          : "border-ink-soft/60 text-ink-soft")
      }
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pl-6 pr-6 pt-16 sm:pl-20 sm:pt-24">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-sm bg-highlight/70 px-2 py-1 font-mono text-xs font-medium uppercase tracking-widest text-ink"
        >
          {t(hero.eyebrow)}
        </motion.p>

        {/* Sketch diagram — the thesis */}
        <div className="mb-10 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-1">
          <DiagramBox delay={0.05}>{t(hero.diagram.problem)}</DiagramBox>
          <div className="flex justify-center py-1 sm:rotate-0 sm:py-0">
            <ScribbleArrow direction="down" className="h-8 w-4 sm:hidden" delay={0.4} />
            <ScribbleArrow direction="right" className="hidden h-4 w-14 sm:block" delay={0.4} />
          </div>
          <DiagramBox filled delay={0.15}>
            {t(hero.diagram.me)}
          </DiagramBox>
          <div className="flex justify-center py-1 sm:py-0">
            <ScribbleArrow direction="down" className="h-8 w-4 sm:hidden" delay={0.7} />
            <ScribbleArrow direction="right" className="hidden h-4 w-14 sm:block" delay={0.7} />
          </div>
          <DiagramBox delay={0.25}>{t(hero.diagram.result)}</DiagramBox>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl"
        >
          {t(hero.headline)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 max-w-lg -rotate-1 font-hand text-2xl text-marker sm:text-[1.75rem]"
        >
          {t(hero.subhead)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projekty"
            className="rounded-sm bg-ink px-5 py-3 font-mono text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {t(hero.ctaPrimary)}
          </a>
          <a
            href="#kontakt"
            className="font-mono text-sm font-medium text-pen underline decoration-pen-soft decoration-2 underline-offset-4 transition-colors hover:text-ink"
          >
            {t(hero.ctaSecondary)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
