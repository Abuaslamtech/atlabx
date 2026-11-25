import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Selected Work',  href: '#case-studies' },
  { label: 'Capabilities',   href: '#capabilities' },
  { label: 'Architecture',   href: '#architecture' },
  { label: 'Methodology',    href: '#methodology' },
]

export const Logo = () => (
  <a href="#" className="flex items-center group py-1" aria-label="AtlabX home">
    <img
      src="/atlabx-logo-horizontal-black.svg"
      alt="AtlabX — Senior Software & Fintech Studio"
      className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-80"
    />
  </a>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 76
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${scrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAFAFA]/70 backdrop-blur-sm border-b border-neutral-200/40'}
      `}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm text-neutral-600 hover:text-black transition-colors duration-150 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
              <Button
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
                variant="primary"
                size="sm"
                className="gap-2 text-xs font-semibold px-4 py-2"
              >
                <Calendar size={13} className="text-neutral-400" />
                <span>Book a Call</span>
              </Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-neutral-800 hover:text-black p-2 -mr-1 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-b border-neutral-200 px-6 py-6 flex flex-col gap-4 shadow-lg animate-fade-in">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-base font-medium text-neutral-700 hover:text-black py-1.5 transition-colors border-b border-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              variant="primary"
              size="md"
              className="w-full justify-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 15-Min Architecture Call</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
