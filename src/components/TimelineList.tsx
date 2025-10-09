import type { TimelineItem } from "../data/recruitingDeCv";

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.company}-${item.period}`}
          className="border-b border-slate-200 pb-3 last:border-b-0"
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
          <ul className="mt-3 space-y-1.5 text-[13px] text-slate-700">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
