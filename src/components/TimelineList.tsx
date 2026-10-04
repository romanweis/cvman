import type { CSSProperties } from "react";
import type { TimelineItem } from "../types/cv";

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
          style={getBreakStyle(item.allowPageBreak, item.pageBreakBefore)}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-[12px]">
            <div>
              <h3
                className="text-[13px] font-semibold"
                style={{ color: "var(--cv-accent-strong)" }}
              >
                {item.role}
              </h3>
              <p
                className="text-[11px] font-medium"
                style={{ color: "var(--cv-accent)" }}
              >
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
            </div>
            <span className="text-[10px] font-semibold text-slate-500">
              {item.period}
            </span>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[12px] text-slate-700 marker:text-slate-400">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="leading-relaxed">
                {renderHighlight(highlight)}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function renderHighlight(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function getBreakStyle(
  allowPageBreak?: boolean,
  pageBreakBefore?: boolean,
): CSSProperties {
  const style: CSSProperties = allowPageBreak
    ? { breakInside: "auto", pageBreakInside: "auto" }
    : { breakInside: "avoid", pageBreakInside: "avoid" };

  if (pageBreakBefore) {
    style.breakBefore = "page";
    style.pageBreakBefore = "always";
  }

  return style;
}
