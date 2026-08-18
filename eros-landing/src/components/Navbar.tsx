import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const TvaritLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Location pin outer */}
    <path
      d="M18 2C12.477 2 8 6.477 8 12C8 19.5 18 32 18 32C18 32 28 19.5 28 12C28 6.477 23.523 2 18 2Z"
      fill="#102A43"
      stroke="#102A43"
      strokeWidth="0.5"
    />
    {/* Inner circle */}
    <circle cx="18" cy="12" r="7" fill="#F8FAFC" />
    {/* Emergency cross horizontal */}
    <rect x="13.5" y="11" width="9" height="2" rx="1" fill="#E53935" />
    {/* Emergency cross vertical */}
    <rect x="17" y="7.5" width="2" height="9" rx="1" fill="#E53935" />
    {/* Route line coming out of pin bottom */}
    <path
      d="M18 32 Q24 36 30 34"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Small circle at route end */}
    <circle cx="30" cy="34" r="2" fill="#16A34A" />
  </svg>
)

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Technology', href: '#technology' },
  { label: 'Our Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="TVARIT Home">
            <TvaritLogo />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-command-navy tracking-wide font-display">
                TVARIT
              </span>
              <span className="text-[10px] text-text-secondary font-medium tracking-wider uppercase hidden sm:block">
                Emergency Response & Operational System
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-command-navy transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emergency-red group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-command-navy border border-surface-border hover:border-command-navy px-4 py-1.5 rounded-lg transition-all duration-200"
            >
              Explore System
            </a>
            <a
              href="/login"
              className="text-sm font-semibold text-white bg-emergency-red hover:bg-emergency-burgundy px-5 py-1.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Access Command Center
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-command-navy hover:bg-surface-bg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-surface-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-text-secondary hover:text-command-navy py-1.5"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-surface-border my-1" />
              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-command-navy border border-surface-border px-4 py-2 rounded-lg text-center"
              >
                Explore System
              </a>
              <a
                href="/login"
                className="text-sm font-semibold text-white bg-emergency-red px-4 py-2 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Access Command Center
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
