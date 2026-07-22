import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Sticky top navigation with blur on scroll and mobile menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when navigating to a section
  const handleNav = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-codryn-border/80 bg-codryn-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={handleNav}>
          <Logo className="h-8 w-auto sm:h-9" />
          <span className="font-display text-lg font-semibold tracking-tight text-codryn-text">
            Codryn
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-codryn-muted transition-colors hover:text-codryn-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-codryn-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-codryn-border text-codryn-text md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-codryn-border bg-codryn-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav}
                  className="block rounded-md px-3 py-3 text-base font-medium text-codryn-muted hover:bg-codryn-elevated hover:text-codryn-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleNav}
                className="block rounded-md bg-codryn-accent px-3 py-3 text-center text-base font-semibold text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
