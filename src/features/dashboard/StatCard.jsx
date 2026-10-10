
export default function StatCard({
  title,
  value,
  icon: Icon,
  accent = 'orange',
}) {
  const accents = {
    orange: 'bg-orange-50 text-orange-500',
    blue: 'bg-sky-50 text-sky-500',
    green: 'bg-emerald-50 text-emerald-500',
    red: 'bg-red-50 text-red-500',
  }

  return (
    <article className="relative min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-3xl font-bold text-slate-700">{value}</p>

        <div className={`rounded-full p-2 ${accents[accent]}`}>
          {Icon && <Icon size={21} />}
        </div>
      </div>
    </article>
  )
}
