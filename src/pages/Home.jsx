import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import CTASection from '../components/CTASection.jsx'

function Home() {
  return (
    <div className="space-y-20">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services overview */}
      <section className="py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Services
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Complete digital growth solutions.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            We connect strategy, product, and performance so your website, apps, and
            campaigns work together as one growth system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard
            eyebrow="Website development"
            title="Conversion-focused sites"
            description="Conversion-focused, fast, SEO-optimized websites built to tell your story clearly and capture demand."
          />
          <ServiceCard
            eyebrow="Mobile app development"
            title="Product-grade mobile apps"
            description="iOS & Android apps with payments, authentication, and push notifications baked in from day one."
          />
          <ServiceCard
            eyebrow="Performance marketing"
            title="Measurable acquisition engines"
            description="Data-driven Meta and Google Ads campaigns paired with landing journeys designed to convert."
          />
        </div>
      </section>

      <div className="mt-10 flex justify-center">
  <a
    href="/start-project"
    className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition"
  >
    Start Your Project
  </a>
</div>

      {/* 3. Why choose FrameX */}
      <section className="py-20">
        <div className="mb-8 space-y-3 text-left sm:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Why choose FrameX
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            We think in systems, not single assets.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300">
            We partner with teams who care about how each touchpoint fits together —
            from first impression through to long-term customer value.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            'Strategy-first approach',
            'Conversion-focused design',
            'Scalable architecture',
            'Ongoing support',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 backdrop-blur-xl"
            >
              <div className="mb-3 h-7 w-7 rounded-2xl bg-gradient-to-tr from-indigo-400 via-sky-400 to-fuchsia-400 opacity-90" />
              <p className="font-semibold text-slate-50">{item}</p>
              <p className="mt-1.5 text-xs text-slate-300">
                We design your stack so this principle shows up in day-to-day decisions,
                not just in a slide deck.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process section */}
      <section className="py-20">
        <ProcessSection />
      </section>

      {/* 5. Featured case study */}
      <section className="py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Featured case study
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              BogSila — fashion e‑commerce, rebuilt for growth.
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              We partnered with BogSila, a fashion e-commerce brand, to design and
              launch a mobile-first shopping experience and companion app. Together, we
              streamlined discovery, simplified checkout, and set up a performance
              engine that connects campaigns directly to high-intent product views.
            </p>
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-medium text-slate-400">Platform</p>
                <p className="mt-1 font-semibold text-slate-50">
                  Web + iOS + Android
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-medium text-slate-400">Focus</p>
                <p className="mt-1 font-semibold text-slate-50">
                  Conversion & retention
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-medium text-slate-400">What we owned</p>
                <p className="mt-1 font-semibold text-slate-50">UX, UI, build, growth</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.4),_transparent_60%)]" />
            <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                BogSila device preview
              </p>
              <div className="relative mt-2 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:h-64">
                <div className="absolute inset-x-5 top-4 rounded-2xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur">
                  <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/90 px-2 py-0.5 text-[10px] text-slate-200">
                      bogsila.shop
                    </span>
                  </div>
                  <div className="grid grid-cols-[1.3fr,1fr] gap-3">
                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded-full bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300" />
                      <div className="h-3 w-24 rounded-full bg-slate-700/90" />
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-xl bg-slate-900/90" />
                        <div className="h-12 rounded-xl bg-slate-900/90" />
                        <div className="h-12 rounded-xl bg-slate-900/90" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-xl bg-slate-900/95" />
                      <div className="h-3 w-20 rounded-full bg-slate-800/90" />
                      <div className="h-3 w-16 rounded-full bg-slate-800/80" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-6 h-32 w-20 rounded-2xl border border-white/15 bg-slate-950/95 p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                  <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-slate-700/80" />
                  <div className="space-y-1">
                    <div className="h-2 w-14 rounded-full bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300" />
                    <div className="h-1.5 w-12 rounded-full bg-slate-700/90" />
                    <div className="mt-1 space-y-1">
                      <div className="h-7 rounded-xl bg-slate-900/90" />
                      <div className="h-7 rounded-xl bg-slate-900/90" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Mocked desktop and mobile layouts to illustrate how we think about the
                full journey across devices. Actual creative is tailored to each brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20">
        <CTASection
          eyebrow="Next step"
          title="Ready to build your digital growth system?"
          body="Share where you want to be in the next 6–12 months. We’ll map a pragmatic, phased approach across web, app, and performance."
          primaryLabel="Book strategy call"
          secondaryLabel="Get custom quote"
        />
      </section>
    </div>
  )
}

export default Home

