import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Philosophy',   href: '#about' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Selected Work', href: '#case-studies' },
  { label: 'Methodology',  href: '#process' },
  { label: 'Leadership',   href: '#leadership' },
  { label: 'Contact',      href: '#contact' },
]

export const Logo = () => (
  <a href="#" className="flex items-center group py-1" aria-label="AtlabX home">
    <img
      src="/atlabx-logo-horizontal-dark.svg"
      alt="AtlabX — Software Engineering Studio & Product Lab"
      className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-85"
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
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${scrolled
          ? 'bg-[#080C14]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-6">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              variant="primary"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-slate-300 hover:text-white p-2 -mr-1 rounded-md"
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
        <div className="md:hidden bg-[#080C14] border-b border-white/10 px-5 py-5 flex flex-col gap-3.5">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              variant="primary"
              size="sm"
              className="w-full justify-center"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
