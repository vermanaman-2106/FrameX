import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            FrameX Digital
          </p>
          <p className="max-w-md text-sm text-slate-400">
            We design, build, and scale digital products and performance engines that
            move the needle for ambitious brands.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link to="/portfolio" className="hover:text-slate-200">
            Work
          </Link>
          <Link to="/about" className="hover:text-slate-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-slate-200">
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} FrameX Studio. All rights reserved.</p>
          <p className="hidden sm:block">Built with care in React & Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

