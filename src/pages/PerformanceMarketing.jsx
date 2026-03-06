import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const services = [
  'Meta Ads',
  'Google Ads',
  'Funnel strategy',
  'Retargeting',
  'Conversion tracking',
]

const process = ['Strategy', 'Campaign setup', 'Optimization', 'Scaling']

function PerformanceMarketing() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-8 border-b border-white/5 pb-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Performance marketing
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
            Performance marketing that drives measurable results.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            We create data-driven advertising campaigns that generate real ROI — not just
            impressions and clicks.
          </p>
          <div>
            <Button href="#growth-contact">Launch my campaign</Button>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 shadow-framex-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Where we plug in
          </p>
          <p className="text-sm text-slate-300">
            We operate as your performance squad — from structuring campaigns and
            creative testing to helping your team understand what&apos;s actually
            working across the funnel.
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
            <li>• Clear offers and landing experiences that match your ads.</li>
            <li>• Account structures designed for learning and scale.</li>
            <li>• Transparent reporting that your team can act on.</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Services
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Full-funnel performance support — from first click to closed deal.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 backdrop-blur-xl"
            >
              <p className="font-semibold">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                Configured to match your model, margins, and sales cycle — not a generic
                playbook.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Process
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            A focused loop of learning and scale.
          </h2>
        </div>

        <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-4">
          {process.map((step, index) => (
            <div
              key={step}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/60 bg-slate-950/80 text-[11px] font-semibold text-sky-200">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-slate-50">{step}</p>
              </div>
              <p className="text-xs text-slate-300">
                {index === 0 &&
                  'We clarify goals, unit economics, and funnel gaps so we know what success actually looks like.'}
                {index === 1 &&
                  'We structure accounts, audiences, tracking, and creative to reflect your strategy and learn fast.'}
                {index === 2 &&
                  'We run experiments, refine targeting and messaging, and shift budget toward what proves out.'}
                {index === 3 &&
                  'We scale where performance holds, expand winning patterns, and protect efficiency as spend grows.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reporting & analytics */}
      <section className="py-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Reporting & analytics
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Transparent reporting you can actually make decisions with.
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              We believe every rupee spent should be traceable to meaningful outcomes.
              We design your reporting so your team can see what&apos;s working, what
              isn&apos;t, and what we&apos;re trying next.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              <li>• Dashboards built around your key metrics, not vanity stats.</li>
              <li>
                • Clear experiment notes, learnings, and next steps after every cycle.
              </li>
              <li>• Regular reviews so marketing, product, and leadership stay aligned.</li>
            </ul>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />
            <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Reporting mockup
              </p>
              <div className="relative mt-2 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:h-44">
                <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-2 py-0.5">
                    Performance overview
                  </span>
                  <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-emerald-100">
                    Last 30 days
                  </span>
                </div>
                <div className="grid grid-cols-[1.3fr,1fr] gap-3">
                  <div className="space-y-2">
                    <div className="h-20 rounded-xl bg-gradient-to-tr from-emerald-500/40 via-sky-400/30 to-transparent" />
                    <div className="flex gap-2 text-[10px] text-slate-300">
                      <span className="h-2 w-6 rounded-full bg-emerald-400/80" />
                      <span className="h-2 w-6 rounded-full bg-sky-400/80" />
                      <span className="h-2 w-6 rounded-full bg-indigo-400/80" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-4 w-20 rounded-full bg-slate-800/90" />
                    <div className="h-3 w-16 rounded-full bg-slate-800/70" />
                    <div className="mt-2 space-y-1.5">
                      <div className="h-3 rounded-full bg-slate-900/90" />
                      <div className="h-3 rounded-full bg-slate-900/90" />
                      <div className="h-3 rounded-full bg-slate-900/90" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Visual placeholder for the type of dashboards and views we set up with
                your data — tailored to your business model and acquisition channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="growth-contact" className="py-16">
        <CTASection
          eyebrow="Performance marketing"
          title="Book a free growth consultation."
          body="We’ll review your current campaigns, funnel, and metrics, then share a clear view of where performance is being left on the table — and how we’d approach improving it."
          primaryLabel="Book free growth consultation"
        />
      </section>
    </div>
  )
}

export default PerformanceMarketing

