import Button from './Button.jsx'

function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel = 'Book a strategy call',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo = '/contact',
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-400/30 bg-gradient-to-r from-indigo-600/70 via-sky-500/70 to-fuchsia-500/70 px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:px-10 sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-100/80">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            {title}
          </h2>
          {body && <p className="max-w-xl text-sm text-indigo-100/90">{body}</p>}
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Button to={primaryTo} variant="darkOnGradient">
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button to={secondaryTo} variant="outlineLight">
                {secondaryLabel}
              </Button>
            )}
          </div>
          <p className="text-xs text-indigo-100/80 sm:ml-3">
            We reply within one business day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CTASection

