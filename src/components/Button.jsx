import { Link } from 'react-router-dom'

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 px-5 py-2.5 text-white shadow-framex-soft hover:shadow-lg hover:shadow-indigo-500/40',
  subtle:
    'border border-white/15 bg-white/5 px-4 py-2 text-slate-100 backdrop-blur-md hover:bg-white/10',
  darkOnGradient:
    'bg-slate-950/90 px-5 py-2.5 text-white shadow-lg shadow-slate-950/80 backdrop-blur hover:bg-slate-900',
  outlineLight:
    'border border-indigo-100/60 bg-indigo-100/10 px-4 py-2 text-indigo-50 backdrop-blur hover:bg-indigo-100/20',
  whatsapp:
    'border border-emerald-400/70 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-100 backdrop-blur hover:bg-emerald-500/20',
}

function Button({
  to,
  href,
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  type,
  ...rest
}) {
  const variantClasses = variants[variant] ?? variants.primary
  const widthClasses = fullWidth ? 'w-full' : ''
  const composed = [baseClasses, variantClasses, widthClasses, className]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={composed} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={composed} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={composed} {...rest}>
      {children}
    </button>
  )
}

export default Button

