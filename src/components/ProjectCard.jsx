function ProjectCard({ name, industry, problem, solution, features, children }) {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-xl transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(56,189,248,0.35)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Case study
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            {name}
          </h3>
          {industry && (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              {industry}
            </p>
          )}
        </div>
        {children && <div className="w-full max-w-xs sm:w-auto">{children}</div>}
      </div>

      <div className="grid gap-4 text-xs text-slate-300 md:grid-cols-3">
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Problem
          </p>
          <p>{problem}</p>
        </div>
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Solution
          </p>
          <p>{solution}</p>
        </div>
        {Array.isArray(features) && features.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Features
            </p>
            <ul className="space-y-1">
              {features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-[5px] inline-flex h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

