import { useLanguage } from "../../lib/LanguageContext";
import { projectsSection } from "../../data/content";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ScribbleUnderline } from "../sketch/ScribbleUnderline";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projekty" className="pl-6 pr-6 pt-24 sm:pl-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="relative inline-block font-display text-3xl font-semibold text-ink sm:text-4xl">
            {t(projectsSection.title)}
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
          </h2>
          <p className="mt-4 font-hand text-xl text-ink-soft sm:text-2xl">
            {t(projectsSection.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
