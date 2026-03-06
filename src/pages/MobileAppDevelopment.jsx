import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const benefits = [
  {
    title: 'Higher retention',
    body: 'Stay present on your customers’ home screens with value-driven experiences that bring them back, not just one-time visits.',
  },
  {
    title: 'Push notifications that matter',
    body: 'Reach the right users at the right moment with personalized, opt-in notifications tied to meaningful actions and events.',
  },
  {
    title: 'Deeper brand loyalty',
    body: 'Create an experience that feels tailored, convenient, and trustworthy — strengthening the relationship beyond a website.',
  },
]

const features = [
  'Secure payments',
  'Push notifications',
  'User authentication',
  'Admin dashboard',
  'E-commerce flows',
]

const process = ['Strategy', 'UI design', 'Development', 'Testing', 'Launch']

function MobileAppDevelopment() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-8 border-b border-white/5 pb-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Mobile app development
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
            Custom iOS &amp; Android app development.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Turn your business into a powerful mobile experience that fits naturally into
            your customers’ lives — from first download to long-term loyalty.
          </p>
          <div>
            <Button href="#app-contact">Start your app project</Button>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 shadow-framex-soft backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Why mobile apps matter
          </p>
          <p className="text-sm text-slate-300">
            Mobile apps let you build an always-on relationship with your customers —
            with richer data, more touchpoints, and experiences designed for repeat
            engagement.
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
            <li>• Retention through convenience and habit.</li>
            <li>• Push notifications that bring users back at the right moment.</li>
            <li>• Branded, on-device experiences that deepen trust.</li>
          </ul>
        </div>
      </section>

      {/* Why mobile apps matter (expanded) */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Why mobile apps matter
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Mobile is where retention, loyalty, and repeat revenue live.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 backdrop-blur-xl"
            >
              <p className="font-semibold text-slate-50">{item.title}</p>
              <p className="mt-1.5 text-xs text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Core capabilities
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Everything your app needs to ship with confidence.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-100 backdrop-blur-xl"
            >
              <p className="font-semibold">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                Designed and implemented with security, performance, and scalability in
                mind.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case study: BogSila app */}
      {/* <section className="py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Case study
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              BogSila – fashion e‑commerce app.
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              We worked with BogSila to turn their online store into a mobile-first,
              app-led experience. The result: a smooth catalog, intuitive cart, and
              secure checkout that feels native to iOS and Android.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              <li>• Scrollable product catalog with filters and wishlists.</li>
              <li>• Cart and checkout built for speed and clarity.</li>
              <li>• Secure payments with order history and status tracking.</li>
            </ul>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.4),_transparent_60%)]" />
            <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                BogSila app preview
              </p>
              <div className="relative mt-2 flex justify-center">
                <div className="h-60 w-32 rounded-[1.8rem] border border-white/15 bg-slate-950/95 p-2 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:h-72 sm:w-36">
                  <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-slate-700/80" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-20 rounded-full bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300" />
                    <div className="h-2 w-18 rounded-full bg-slate-700/90" />
                    <div className="mt-1 grid grid-cols-2 gap-1.5">
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                      <div className="h-10 rounded-xl bg-slate-900/90" />
                    </div>
                    <div className="mt-1 h-7 rounded-xl bg-slate-900/90" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Mocked phone preview to represent how we think about catalog, cart, and
                checkout flows in a single, cohesive mobile experience.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process */}
      <section className="py-20">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Process
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            A clear path from idea to shipped app.
          </h2>
        </div>

        <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-5">
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
                  'We align on goals, users, and use cases so we design the right app — not just any app.'}
                {index === 1 &&
                  'We define flows, states, and screens so the interface feels intuitive and on-brand.'}
                {index === 2 &&
                  'We implement with modern tooling, clean architecture, and scalable patterns.'}
                {index === 3 &&
                  'We test across devices, edge cases, and integrations before we ever hit publish.'}
                {index === 4 &&
                  'We support launch, app store setup, and post-launch improvements as data comes in.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="app-contact" className="py-16">
        <CTASection
          eyebrow="Mobile app development"
          title="Get a free app strategy call."
          body="Tell us about your idea, audience, and timelines. We’ll share a realistic approach to getting your app into people’s hands — and what to prioritize first."
          primaryLabel="Get a free app strategy call"
        />
      </section>
    </div>
  )
}

export default MobileAppDevelopment

