import React from 'react'
import { Linkedin, Github, Mail, MessageSquare, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Selected Work',  href: '#case-studies' },
  { label: 'Capabilities',   href: '#capabilities' },
  { label: 'Architecture',   href: '#architecture' },
  { label: 'Methodology',    href: '#methodology' },
  { label: 'Scope a Build',  href: '#contact' },
]

const socialLinks = [
  { icon: Github,        href: 'https://github.com/abuaslam', label: 'GitHub' },
  { icon: Linkedin,      href: 'https://www.linkedin.com/',   label: 'LinkedIn' },
  { icon: MessageSquare, href: 'https://wa.me/2347035974746', label: 'WhatsApp' },
  { icon: Mail,          href: 'mailto:hello@atlabx.com',     label: 'Email' },
]

export const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 76
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#09090B] border-t border-white/10 pt-16 pb-12 text-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#" className="inline-block py-1 group" aria-label="AtlabX home">
              <img
                src="/atlabx-logo-horizontal-white.svg"
                alt="AtlabX — Senior Software & Fintech Studio"
                className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-85"
              />
            </a>
            
            <p className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-sm font-normal">
              Senior engineering studio partnering with founders and technical leaders globally to architect payment systems, ship mobile platforms, and scale high-reliability software.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/15 bg-white/[0.05] flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300 mb-4 font-semibold">
              Direct Channels
            </h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href="mailto:hello@atlabx.com"
                  className="text-white hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>hello@atlabx.com</span>
                  <ArrowUpRight size={13} className="text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347035974746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>+234 703 597 4746 (WhatsApp)</span>
                  <ArrowUpRight size={13} className="text-zinc-400" />
                </a>
              </li>
              <li className="text-xs text-zinc-400 pt-1 font-mono">
                Zaria, NG · Global Remote Delivery (WAT / UTC+1)
              </li>
              <li className="text-xs text-zinc-400 font-mono">
                International Invoicing: USD · GBP · EUR · 100% IP Transfer
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <span>&copy; {new Date().getFullYear()} Abuaslam Tech Lab (operating as AtlabX). All rights reserved.</span>
          <span className="font-mono text-[11px] text-zinc-300">
            Senior Software & Fintech Engineering Studio
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
