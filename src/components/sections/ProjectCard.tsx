import { motion } from "framer-motion";
import type { Project } from "../../types/project";
import { useLanguage } from "../../lib/LanguageContext";
import { projectsSection } from "../../data/content";
import { ScribbleCircle } from "../sketch/ScribbleCircle";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const rotate = index % 2 === 0 ? "sm:-rotate-[0.4deg]" : "sm:rotate-[0.4deg]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-sm border-2 border-dashed border-ink-soft/50 bg-paper/60 p-6 ${rotate}`}
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
        {project.status && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
            {t(project.status)}
          </span>
        )}
      </div>

      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {t(projectsSection.labels.problem)}
          </dt>
          <dd className="mt-1 text-ink-soft">{t(project.problem)}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {t(projectsSection.labels.build)}
          </dt>
          <dd className="mt-1 text-ink-soft">{t(project.build)}</dd>
        </div>
        <div className="relative">
          <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {t(projectsSection.labels.result)}
          </dt>
          <dd className="relative mt-1 inline-block font-medium text-ink">
            {t(project.result)}
            <ScribbleCircle
              delay={0.2}
              className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 h-[calc(100%+16px)] w-[calc(100%+24px)]"
            />
          </dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-sm bg-highlight/60 px-2 py-0.5 font-mono text-[11px] text-ink"
          >
            {s}
          </li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block font-mono text-xs font-medium text-pen underline decoration-pen-soft decoration-2 underline-offset-4 hover:text-ink"
        >
          → {project.link.label}
        </a>
      )}
    </motion.article>
  );
}
