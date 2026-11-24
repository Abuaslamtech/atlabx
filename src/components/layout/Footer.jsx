import React from 'react'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Philosophy',   href: '#about' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Selected Work', href: '#case-studies' },
  { label: 'Methodology',  href: '#process' },
  { label: 'Leadership',   href: '#leadership' },
  { label: 'Contact',      href: '#contact' },
]

const socialLinks = [
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: Github,   href: 'https://github.com/abuaslam', label: 'GitHub' },
  { icon: Mail,     href: 'mailto:hello@atlabx.com', label: 'Email' },
]

const FooterLogo = () => (
  <a href="#" className="inline-block py-1 group" aria-label="AtlabX home">
    <img
      src="/atlabx-logo-horizontal-dark.svg"
      alt="AtlabX — Software Engineering Studio & Product Lab"
      className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-85"
    />
  </a>
)

export const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#060910] border-t border-white/10 py-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <FooterLogo />
            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Independent software engineering studio and product lab. We build high-performance web applications, mobile platforms, and scalable backend infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="mailto:hello@atlabx.com" className="text-white hover:text-slate-300 transition-colors">
                  hello@atlabx.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347035974746" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +234 703 597 4746 (WhatsApp)
                </a>
              </li>
              <li className="text-slate-400">Zaria, Nigeria · Global Remote Delivery</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} Abuaslam Tech Lab (operating as AtlabX). All rights reserved.</span>
          <span className="font-mono text-[11px] text-slate-400">Software Studio & Product Lab</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
