import Button from './Button.jsx'

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-12 shadow-framex-soft backdrop-blur-xl sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.5),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.4),_transparent_55%)] opacity-90" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
            FrameX · Digital Growth Studio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Building digital systems that generate customers,
            <span className="block bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              not just code.
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            We design high-converting websites, scalable mobile apps, and performance
            marketing systems for modern businesses that care about revenue, not vanity
            metrics.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button to="/contact">Book free strategy call</Button>
            <Button to="/portfolio" variant="subtle">
              View our work
            </Button>
          </div>

          <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-300 sm:text-[13px]">
            <div className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 backdrop-blur">
              <span className="font-medium text-slate-100">120+ launches</span>
              <span className="mx-2 text-slate-500">·</span>
              <span>websites, apps & growth engines</span>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-emerald-100">
              <span className="font-medium">Strategy → Design → Development → Launch</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.4),_transparent_60%)]" />
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Device mockups
            </p>

            <div className="relative mt-2 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:h-64">
              <div className="absolute inset-x-4 top-4 rounded-2xl border border-white/10 bg-slate-900/80 p-3 backdrop-blur">
                <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
                    framex.site
                  </span>
                </div>
                <div className="grid grid-cols-[2fr,1.1fr] gap-3">
                  <div className="space-y-2">
                    <div className="h-4 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400" />
                    <div className="h-3 w-32 rounded-full bg-slate-700/80" />
                    <div className="h-3 w-40 rounded-full bg-slate-800/80" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-indigo-400/40 bg-gradient-to-b from-indigo-500/30 via-sky-500/20 to-transparent" />
                </div>
              </div>

              <div className="absolute bottom-4 right-6 h-32 w-20 rounded-2xl border border-white/15 bg-slate-950/90 p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-slate-700/80" />
                <div className="space-y-1">
                  <div className="h-2 w-14 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400" />
                  <div className="h-1.5 w-12 rounded-full bg-slate-700/90" />
                  <div className="mt-1 space-y-1">
                    <div className="h-7 rounded-xl bg-slate-900/90" />
                    <div className="h-7 rounded-xl bg-slate-900/90" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Visual placeholders for desktop and mobile views — we plug in your actual
              product and campaign screens once we work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

