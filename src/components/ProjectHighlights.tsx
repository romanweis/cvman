import type { ProjectHighlight } from "../data/recruitingDeCv";
import { BadgeList } from "./BadgeList";

type ProjectHighlightsProps = {
  projects: ProjectHighlight[];
};

export function ProjectHighlights({ projects }: ProjectHighlightsProps) {
  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-100"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />
          <header className="mt-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-emerald-600">
                {project.role}
              </p>
            </div>
            <BadgeList items={project.techStack} variant="outline" />
          </header>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Kontext:</span>{" "}
              {project.context}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Outcome:</span>{" "}
              {project.outcome}
            </p>
            {project.description && <p>{project.description}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
