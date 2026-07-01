import React from 'react'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

const socialLinks = [
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github,   href: '#', label: 'GitHub' },
  { icon: Mail,     href: 'mailto:hello.atlabx@gmail.com', label: 'Email' },
]

const FooterLogo = () => (
  <div className="flex items-center gap-2.5">
    <img src="/atlabx-logo.png" alt="AtlabX icon" className="h-8 w-auto opacity-90" />
    <span className="text-xl font-extrabold tracking-tight text-white select-none">
      atlab<span className="text-brand-accent">X</span>
    </span>
  </div>
)

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-navy-deeper border-t border-white/10">
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <FooterLogo />
            <p className="mt-4 text-sm text-brand-accent leading-relaxed max-w-xs">
              Software and fintech studio building products and infrastructure for Africa.
              Based in Zaria, Nigeria.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:hello.atlabx@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  hello.atlabx@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2340000000000" className="hover:text-white transition-colors">
                  +234 000 000 0000
                </a>
              </li>
              <li>Zaria, Kaduna State, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} AtlabX (Abuaslam Tech Lab). All rights reserved.</span>
          <span>Registered with the Corporate Affairs Commission of Nigeria</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
