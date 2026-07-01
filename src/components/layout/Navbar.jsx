import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

const Logo = ({ dark = false }) => (
  <a href="#" className="flex items-center gap-2.5 group" aria-label="AtlabX home">
    <img
      src="/atlabx-logo.png"
      alt="AtlabX icon"
      className="h-8 w-auto"
    />
    <span
      className={`text-xl font-extrabold tracking-tight select-none
        ${dark ? 'text-white' : 'text-brand-navy-deeper'}
      `}
    >
      atlab<span className={dark ? 'text-brand-accent' : 'text-brand-navy'}>X</span>
    </span>
  </a>
)

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
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
    <>
      <header
        id="navbar"
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-brand-navy-deeper/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'}
        `}
      >
        <div className="container-xl">
          <nav className="flex items-center justify-between h-[72px]">
            <Logo dark />

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <Button
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
                variant="outline-white"
                size="sm"
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden text-white p-2 -mr-1 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>

        {/* Mobile drawer */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            bg-brand-navy-deeper border-t border-white/10
          `}
        >
          <div className="container-xl py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="px-3 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <Button
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export { Logo }
export default Navbar
