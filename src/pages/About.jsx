function About() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          About FrameX
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          A digital product studio built for growth.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          We are a structured, cross-functional team of designers, developers, and
          marketing strategists who help brands turn digital touchpoints into measurable
          growth systems — not one-off projects.
        </p>
      </section>

      {/* Who we are / mission / vision */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Who we are
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We are a digital product studio that sits at the intersection of strategy,
            experience design, and engineering. We plug into ambitious teams as a
            focused squad that can take ideas from brief to launch — and then keep
            iterating.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Our mission
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Our mission is to help modern businesses turn their websites, apps, and
            marketing into connected systems that reliably create customers and revenue
            — not just traffic and noise.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Our vision
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We imagine a world where growth teams can see, test, and improve every
            digital touchpoint in one connected loop — and we build the product and
            performance foundations that make that possible.
          </p>
        </div>
      </section>

      {/* Our approach */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Our approach
          </h2>
          <p className="max-w-3xl text-sm text-slate-300">
            We work as an extension of your team. That means shared goals, clear
            communication, and a process that balances speed with thoughtfulness. Every
            engagement is structured around understanding your business model, your
            customers, and the constraints you&apos;re operating within.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Strategy first</p>
            <p className="mt-1.5 text-xs text-slate-300">
              We start by clarifying where growth should come from — and design every
              screen, interaction, and campaign to support that path.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Product-level craft</p>
            <p className="mt-1.5 text-xs text-slate-300">
              We bring product thinking to marketing and growth work, so what we build
              feels cohesive, robust, and ready to scale.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Measurable outcomes</p>
            <p className="mt-1.5 text-xs text-slate-300">
              We align on clear metrics up front and structure our work so you can see
              what&apos;s moving the needle — and why.
            </p>
          </div>
        </div>
      </section>

      {/* Our team */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Our team
          </h2>
          <p className="max-w-3xl text-sm text-slate-300">
            We are not a one-person shop. FrameX is a multi-disciplinary team that
            brings together designers, developers, and marketing strategists who have
            shipped products and campaigns across industries.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Design</p>
            <p className="mt-1.5 text-xs text-slate-300">
              Our designers shape the end-to-end experience — from positioning and
              information architecture to UI, motion, and design systems.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Development</p>
            <p className="mt-1.5 text-xs text-slate-300">
              Our engineers focus on performance, reliability, and clean handoffs —
              building front-ends that are fast, maintainable, and integration-ready.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Marketing strategy</p>
            <p className="mt-1.5 text-xs text-slate-300">
              Our marketing strategists connect your product, messaging, and media so
              every launch and iteration is grounded in data and business goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

