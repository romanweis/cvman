type BadgeListProps = {
  items: string[];
};

export function BadgeList({ items }: BadgeListProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase text-slate-600">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2 whitespace-nowrap">
          {index > 0 && <span aria-hidden>•</span>}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
