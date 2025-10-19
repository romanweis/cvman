import type { CSSProperties } from "react";
import type { TimelineItem } from "../data/smgEnCv";

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="space-y-3">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.company}-${item.period}`}
          className="border-b border-slate-200 pb-2 last:border-b-0"
          style={getBreakStyle(item.allowPageBreak)}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-[13px]">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {item.role}
              </h3>
              <p className="text-[12px] font-medium text-slate-600">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              {item.period}
            </span>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[13px] text-slate-700 marker:text-slate-400">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function getBreakStyle(allowPageBreak?: boolean): CSSProperties {
  if (allowPageBreak) {
    return { breakInside: "auto", pageBreakInside: "auto" };
  }

  return { breakInside: "avoid", pageBreakInside: "avoid" };
}
