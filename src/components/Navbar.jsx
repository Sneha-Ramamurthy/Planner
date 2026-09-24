import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'

const links = [
  { label: 'Weddings', to: '/real-weddings' },
  { label: 'Vendors', to: '/vendors' },
  { label: 'Packages', to: '/packages' },
  { label: 'Real Weddings', to: '/real-weddings' },
  { label: 'How It Works', to: '/#how-it-works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // On interior pages (not the transparent-hero landing page) the navbar
  // should always read as scrolled, since there is no dark hero beneath it.
  const forceSolid = location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isSolid = scrolled || forceSolid || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-editorial ${
        isSolid ? 'bg-ivory/95 backdrop-blur border-b border-charcoal/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={isSolid ? 'text-burgundy' : 'text-warmwhite'}
          >
            <path
              d="M15 4c-2 4-6 6-6 11a6 6 0 0012 0c0-5-4-7-6-11z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M9 22h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span
            className={`font-display text-2xl tracking-wide ${
              isSolid ? 'text-charcoal' : 'text-warmwhite'
            }`}
          >
            WedPlan
          </span>
        </Link>

        <ul
          className={`hidden md:flex items-center gap-9 font-body text-[15px] ${
            isSolid ? 'text-charcoal/80' : 'text-warmwhite/90'
          }`}
        >
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="relative transition-opacity hover:opacity-70">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button
            aria-label="Search"
            className={`transition-opacity hover:opacity-70 ${
              isSolid ? 'text-charcoal' : 'text-warmwhite'
            }`}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <Link
            to="/login"
            className={`font-body text-[15px] transition-opacity hover:opacity-70 ${
              isSolid ? 'text-charcoal' : 'text-warmwhite'
            }`}
          >
            Login
          </Link>
          <Link
            to="/start-planning"
            className="rounded-none border border-burgundy bg-burgundy px-5 py-2.5 font-body text-[14px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
          >
            Start Planning
          </Link>
        </div>

        <button
          className={`md:hidden ${isSolid ? 'text-charcoal' : 'text-warmwhite'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-ivory border-b border-charcoal/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="block py-3 font-display text-2xl text-charcoal border-b border-charcoal/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-6 pt-5">
                <Link to="/login" className="font-body text-charcoal/80">
                  Login
                </Link>
                <Link
                  to="/start-planning"
                  className="bg-burgundy px-5 py-2.5 font-body text-sm text-warmwhite"
                >
                  Start Planning
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
