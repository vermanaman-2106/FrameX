import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/website-development', label: 'Website Development' },
  { to: '/mobile-app-development', label: 'Mobile Apps' },
  { to: '/performance-marketing', label: 'Performance Marketing' },
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-fuchsia-500 shadow-framex-soft">
            <span className="text-lg font-semibold tracking-tight text-white">FX</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-slate-50">
              FrameX
            </span>
            <span className="text-xs font-medium text-slate-400">
              Digital Product Studio
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 shadow-sm transition hover:bg-white/10 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-3.5 rounded-full bg-current" />
          </div>
        </button>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'transition-colors hover:text-white',
                  isActive ? 'text-white' : 'text-slate-300',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="px-4 py-2">
            Book a call
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-2 transition-colors hover:bg-white/5',
                    isActive ? 'bg-white/5 text-white' : 'text-slate-300',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-2 text-center text-sm"
            >
              Book a call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

