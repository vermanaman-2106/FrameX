const steps = [
  {
    label: '01',
    title: 'Strategy',
    body: 'We map your growth goals, customers, and constraints so we only ship work that moves revenue, not vanity metrics.',
  },
  {
    label: '02',
    title: 'Design',
    body: 'We turn strategy into clear journeys, interfaces, and content that feel on-brand and guide visitors to act.',
  },
  {
    label: '03',
    title: 'Development',
    body: 'We build with modern, scalable front-end foundations that load fast, integrate cleanly, and are easy to extend.',
  },
  {
    label: '04',
    title: 'Launch & scale',
    body: 'We go live with tracking in place, then keep optimizing with data, experiments, and ongoing support.',
  },
]

function ProcessSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Process
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Strategy → Design → Development → Launch & scale.
          </h2>
          <p className="text-sm text-slate-300">
            We operate as your digital team — structured enough to move fast, flexible
            enough to plug into how you work today.
          </p>
        </div>

        <ol className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.label}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/60 bg-slate-900/80 text-[11px] font-semibold text-sky-200">
                  {step.label}
                </span>
                <h3 className="text-sm font-semibold text-slate-50">{step.title}</h3>
              </div>
              <p className="mt-1.5 text-xs text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection

