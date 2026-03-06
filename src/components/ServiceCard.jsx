function ServiceCard({ eyebrow, title, description, points, ctaLabel }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-xl transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(56,189,248,0.35)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {eyebrow}
        </p>
        <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-fuchsia-400 opacity-80 transition group-hover:opacity-100" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>

      {Array.isArray(points) && points.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[5px] inline-flex h-1.5 w-1.5 rounded-full bg-sky-400/80" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {ctaLabel && (
        <div className="mt-5 flex items-center text-xs font-semibold text-sky-300">
          <span>{ctaLabel}</span>
          <span className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      )}
    </article>
  )
}

export default ServiceCard

