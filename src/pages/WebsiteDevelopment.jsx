import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const problems = ['Low conversions', 'Slow loading', 'Poor UX', 'Outdated design']

const builds = [
  'Corporate websites',
  'E-commerce platforms',
  'Booking systems',
  'Landing pages',
]

const features = [
  'SEO optimized',
  'Mobile responsive',
  'Fast performance',
  'Admin dashboard',
]

const processSteps = [
  {
    title: 'Strategy & goals',
    body: 'We clarify your audience, offers, and success metrics so we know exactly what the site needs to achieve.',
  },
  {
    title: 'UX & content architecture',
    body: 'We map journeys, page structures, and content so visitors can quickly understand what you do and why it matters.',
  },
  {
    title: 'Interface & visual design',
    body: 'We design a modern, on-brand interface that feels premium, trustworthy, and conversion-focused across devices.',
  },
  {
    title: 'Development & integrations',
    body: 'We implement with modern front-end tech, connect your tools, and ensure performance, security, and accessibility.',
  },
  {
    title: 'Launch, measure & iterate',
    body: 'We go live with analytics connected, monitor key metrics, and support ongoing improvements as you grow.',
  },
]

function WebsiteDevelopment() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-8 border-b border-white/5 pb-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Website development
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
            High-converting website development for growing businesses.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            We build fast, scalable, and conversion-focused websites designed to
            generate leads and sales — not just clicks and page views.
          </p>
          <div>
            <Button href="#website-contact">Start your website project</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 shadow-framex-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            When we&apos;re a good fit
          </p>
          <p className="mt-2 text-sm text-slate-300">
            We work best with teams who see their website as a growth channel, not just
            a brochure — and want a partner that thinks about the full funnel.
          </p>
        </div>
      </section>

      {/* Section 1: Business problems */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Business problems
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            We fix the reasons your current site isn&apos;t converting.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Before we talk about new pages or redesigns, we get clear on what&apos;s
            currently blocking conversions and trust — then design to remove that
            friction.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 backdrop-blur-xl"
            >
              <div className="mb-3 h-6 w-6 rounded-2xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-fuchsia-400 opacity-90" />
              <p className="font-semibold">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                We diagnose why this is happening and design the site to directly
                address it.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: What we build */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            What we build
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Websites tailored to how your business sells.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {builds.map((item) => (
            <div
              key={item}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 backdrop-blur-xl"
            >
              <p className="font-semibold text-slate-50">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                We scope, design, and build these end-to-end — from first wireframe to
                launch and beyond.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Key features */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Key features
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Every build includes the fundamentals you need from day one.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 backdrop-blur-xl"
            >
              <p className="font-semibold">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                Baked into how we architect, design, and ship your site — not optional
                add-ons.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Development process */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Development process
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            A transparent, collaborative build — from kickoff to launch.
          </h2>
        </div>

        <ol className="relative space-y-5 border-l border-slate-700/70 pl-5">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative pl-1">
              <div className="absolute -left-[0.78rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-sky-400/70 bg-slate-950">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Step {index + 1}
              </p>
              <h3 className="text-sm font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-1.5 text-xs text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 5: Pricing anchor */}
      <section className="py-12">
        <div className="rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-6 text-sm text-emerald-50 backdrop-blur-xl sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/80">
            Pricing anchor
          </p>
          <p className="mt-2 text-lg font-semibold text-emerald-50">
            Projects starting from ₹9,999
          </p>
          <p className="mt-1.5 text-xs text-emerald-100/90">
            Final investment depends on scope, integrations, and timelines. We&apos;ll
            walk through options and a clear breakdown on your consultation call.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="website-contact" className="py-16">
        <CTASection
          eyebrow="Website development"
          title="Book a free consultation to scope your website project."
          body="We’ll review your current site, goals, and constraints, then share a clear recommendation — whether or not we end up working together."
          primaryLabel="Book free consultation"
        />
      </section>
    </div>
  )
}

export default WebsiteDevelopment

