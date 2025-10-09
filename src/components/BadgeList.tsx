type BadgeListProps = {
  items: string[];
  variant?: "solid" | "outline";
};

export function BadgeList({ items, variant = "solid" }: BadgeListProps) {
  const base =
    variant === "solid"
      ? "bg-slate-900 text-slate-100"
      : "border border-slate-300 text-slate-600";

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${base}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
