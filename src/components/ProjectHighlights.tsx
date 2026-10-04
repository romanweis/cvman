import type { ProjectHighlight } from "../types/cv";
import { BadgeList } from "./BadgeList";

type ProjectHighlightsProps = {
  projects: ProjectHighlight[];
};

export function ProjectHighlights({ projects }: ProjectHighlightsProps) {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <article
          key={project.title}
          className="border-b border-slate-200 pb-4 last:border-b-0"
        >
          <header className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="text-[12px] font-medium text-slate-600">
                {project.role}
              </p>
            </div>
            <BadgeList items={project.techStack} />
          </header>
          <div className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Kontext:</span>{" "}
              {project.context}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Outcome:</span>{" "}
              {project.outcome}
            </p>
            {project.description && (
              <p className="text-[12px] text-slate-600">
                {project.description}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
