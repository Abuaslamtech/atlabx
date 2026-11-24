import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Terminal, Layers, Cpu, ShieldCheck } from 'lucide-react'
import Button from '../ui/Button'

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('architecture')

  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080C14]">
      {/* Subtle, restrained ambient depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-navy/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Engineering grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(rgba(176, 188, 214, 0.5) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 20%, transparent 80%)',
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct Studio Value Proposition */}
          <div className="lg:col-span-7">
            {/* Studio Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-300">
                Software Engineering Studio & Product Lab
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              Custom software, mobile apps, and digital platforms.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              AtlabX partners with ambitious founders and engineering teams to design, architect, 
              and ship production-grade software. Direct collaboration with senior systems architects, 
              zero account management layers, and clean code built to scale.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26, ease: 'easeOut' }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button
                href="#contact"
                onClick={() => handleScroll('#contact')}
                variant="primary"
                size="lg"
                id="hero-cta-call"
              >
                <span>Schedule an Architecture Call</span>
                <ArrowRight size={16} />
              </Button>

              <Button
                href="#case-studies"
                onClick={() => handleScroll('#case-studies')}
                variant="secondary"
                size="lg"
              >
                <span>Explore Selected Work ↓</span>
              </Button>
            </motion.div>

            {/* Verified Studio Benchmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-12 pt-7 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-extrabold text-white">20+</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Systems Delivered</p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">99.98%</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Production Uptime</p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Senior-Led Delivery</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Architectural Spec & Engineering Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0B101D] border border-white/10 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#0D1526] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">atlabx-spec.json</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`font-mono text-xs px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    System
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`font-mono text-xs px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'stack'
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-4">
                {activeTab === 'architecture' ? (
                  <>
                    <div className="pb-3 border-b border-white/[0.06]">
                      <span className="text-slate-500">// Studio Engagement Model</span>
                      <div className="text-white font-semibold mt-1">
                        "architecture_tier": "Senior Systems Architect",
                      </div>
                      <div className="text-slate-400">
                        "delivery_mode": "Milestone-Driven Sprints",
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-slate-500">// Core Engineering Pillars</span>
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="text-brand-accent">01. Web Applications</span>
                        <span className="text-emerald-400">SaaS & Portals</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="text-brand-accent">02. Mobile Platforms</span>
                        <span className="text-emerald-400">iOS & Android</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="text-brand-accent">03. Cloud Backend</span>
                        <span className="text-emerald-400">Distributed APIs</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="text-brand-accent">04. In-House Labs</span>
                        <span className="text-emerald-400">Eivia Platform</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                      <span>status: production-ready</span>
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        zero_agency_bloat: true
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pb-3 border-b border-white/[0.06]">
                      <span className="text-slate-500">// Modern Production Technologies</span>
                      <div className="text-white font-semibold mt-1">
                        "standard_stack": "TypeScript-First & Cloud-Native"
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-slate-300">
                      <div>
                        <span className="text-slate-500 block mb-1 text-[11px]">Frontend & Mobile</span>
                        <div className="text-white">React, Next.js</div>
                        <div className="text-white">React Native, Expo</div>
                        <div className="text-white">Tailwind CSS</div>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1 text-[11px]">Backend & Data</span>
                        <div className="text-white">Node.js, Go</div>
                        <div className="text-white">PostgreSQL, Redis</div>
                        <div className="text-white">Docker, AWS, Cloudflare</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400">
                      <span>Strict type safety, automated test coverage, and continuous deployment.</span>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Console Status Bar */}
              <div className="px-6 py-2.5 bg-[#090D18] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-brand-electric" />
                  <span>atlabx-core // v2.4</span>
                </span>
                <span>Zaria, NG · Global Delivery</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero