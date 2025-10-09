import type { PropsWithChildren } from "react";

type CVSectionProps = PropsWithChildren<{
  title: string;
  accent?: boolean;
}>;

export function CVSection({ title, children, accent = false }: CVSectionProps) {
  return (
    <section className="space-y-4">
      <header className="flex items-center gap-3">
        <div
          className={`h-px w-10 ${accent ? "bg-slate-800" : "bg-slate-300"}`}
        />
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          {title}
        </h2>
      </header>
      <div className="space-y-2 text-[13px] text-slate-700 [&>p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
