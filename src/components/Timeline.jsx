export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <div>
              <div className="text-base font-semibold text-slate-900">
                {it.role} <span className="text-slate-500 font-normal">• {it.company}</span>
              </div>
              <div className="text-sm text-slate-600">{it.location}</div>
            </div>
            <div className="text-sm text-slate-600">{it.dates}</div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {it.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
