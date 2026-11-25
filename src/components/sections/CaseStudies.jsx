import React, { useState } from 'react'
import { ArrowUpRight, ArrowRight, FileText, Calendar } from 'lucide-react'
import CaseStudyModal from '../ui/CaseStudyModal'
import ArchitecturePlaybookModal from '../ui/ArchitecturePlaybookModal'

const caseStudies = [
  {
    id: 'scath',
    client: 'Scath Financial Inc.',
    badge: '01 // CLIENT PLATFORM',
    eyebrow: 'FINTECH · MOBILE & PAYMENT SWITCH RAILS',
    title: 'Scath — Digital Banking & Mobile Wallet Platform',
    hook: 'High-concurrency mobile wallet and multi-rail payment switch engineered to eliminate settlement latency and double-debit reconciliation disputes.',
    metrics: [
      { value: '0.42s', label: 'P99 Settlement' },
      { value: '99.98%', label: 'Switch Uptime' },
      { value: '-38%', label: 'Drop-Off Rate' },
    ],
    image: '/case-studies/scath.jpg',
    canvasBg: 'bg-[#EEF2FF]',
    borderColor: 'border-[#D9E2FF]',
    stack: ['React Native', 'Expo', 'Go & Node.js', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'deftaro',
    client: 'Proprietary Lab Venture (AtlabX)',
    badge: '02 // IN-HOUSE LAB VENTURE',
    eyebrow: 'RETAIL SYSTEMS · LOCAL-FIRST & OFFLINE POS',
    title: 'Deftaro — Retail Operations, Inventory & Offline POS Engine',
    hook: 'Offline-first retail operating system and checkout engine with embedded SQLite persistence for uninterrupted merchant sales during power and network outages.',
    metrics: [
      { value: '< 450ms', label: 'Barcode Scan' },
      { value: '100%', label: 'Offline Durability' },
      { value: '0.00%', label: 'Stock Drift' },
    ],
    image: '/case-studies/deftaro.png',
    canvasBg: 'bg-[#F4F4F5]',
    borderColor: 'border-[#E4E4E7]',
    stack: ['React Native', 'Expo', 'SQLite', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'eimaan-maison',
    client: 'Eimaan Maison Atelier',
    badge: '03 // CLIENT FLAGSHIP',
    eyebrow: 'LUXURY COMMERCE · HEADLESS STOREFRONT',
    title: 'Eimaan Maison — Luxury Skincare & Fragrance Storefront',
    hook: 'Headless luxury storefront engineered with 60fps micro-interactions, edge CDN caching, and sub-second multi-currency checkout.',
    metrics: [
      { value: '+340%', label: 'Mobile Conversion' },
      { value: '60 FPS', label: 'Micro-Interactions' },
      { value: '< 1.0s', label: 'Cart Init' },
    ],
    image: '/case-studies/eimaan-maison.jpg',
    canvasBg: 'bg-[#FAF5EF]',
    borderColor: 'border-[#EFE7DC]',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
  },
]

export const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null)
  const [showPlaybook, setShowPlaybook] = useState(false)

  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const offset = 76
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="container-xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-4">
            [ 01 / Selected Work & Proof of Execution ]
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-[-0.03em] leading-tight">
            Proof of execution. Real systems shipped.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] leading-relaxed font-normal">
            We don't rely on generic mockups or unbacked claims. Every project represents production-grade architecture deployed to commercial environments.
          </p>
        </div>

        {/* 2-Column Alternating Case Study Showcases */}
        <div className="space-y-20 sm:space-y-28">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 1
            return (
              <div
                key={study.id}
                id={`case-study-${study.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                
                {/* Visual Canvas (55% on lg screens = 7 cols) - Standardized Aspect Ratio & Symmetrical Padding */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    className={`relative rounded-3xl ${study.canvasBg} border ${study.borderColor} p-6 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[480px] flex items-center justify-center overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] group transition-all duration-300 hover:shadow-lg`}
                  >
                    {/* Symmetrical Top Metadata Pill */}
                    <div className="absolute top-5 left-5">
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/95 text-neutral-800 border border-neutral-200/90 shadow-2xs backdrop-blur-xs font-semibold">
                        {study.badge}
                      </span>
                    </div>

                    {/* Standardized Phone Canvas Frame */}
                    <div className="w-[240px] sm:w-[270px] rounded-[38px] p-2.5 bg-neutral-900 border-2 border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.02] flex flex-col justify-between">
                      {/* Notch / Dynamic Island */}
                      <div className="w-20 h-3.5 bg-neutral-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                      </div>
                      
                      {/* High-Res Screen with Standardized Aspect Ratio */}
                      <div className="rounded-[28px] overflow-hidden bg-neutral-950 aspect-[9/18] w-full flex items-center justify-center">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="w-24 h-1 bg-neutral-700 rounded-full mx-auto mt-2.5" />
                    </div>
                  </div>
                </div>

                {/* Surgical Punchy Showcase Copy (45% on lg screens = 5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0052FF]">
                      {study.eyebrow}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight leading-snug">
                    {study.title}
                  </h3>

                  {/* One-Sentence Hook (Max 2 lines) */}
                  <p className="mt-3 text-sm sm:text-base text-[#525252] leading-relaxed">
                    {study.hook}
                  </p>

                  {/* 2-3 Big Metrics Stat Strip */}
                  <div className="grid grid-cols-3 gap-3 my-6 py-4 border-y border-neutral-200/80">
                    {study.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="font-mono text-lg sm:text-xl font-bold text-[#0A0A0A] block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* High-Intent Action Button: Deep Architecture Case Study */}
                  <div>
                    <button
                      onClick={() => setSelectedStudy(study.id)}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#0052FF] transition-all cursor-pointer py-1 active:scale-[0.98]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        {/* Mid-Page Conversion Strip */}
        <div className="mt-16 p-7 sm:p-10 rounded-2xl bg-[#09090B] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Have a project in mind?
            </h3>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-lg leading-relaxed">
              Book a quick 15-minute call to talk through your product, or browse our build playbook.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <button
              onClick={() => handleScroll('#contact')}
              className="px-5 py-3 rounded-xl bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-neutral-100 transition-colors flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Book a 15-Min Call</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setShowPlaybook(true)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText size={14} />
              <span>View Playbook</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Case Study Deep-Dive Modal */}
      {selectedStudy && (
        <CaseStudyModal
          studyId={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}

      {/* Low-Friction Architecture Playbook Lead Magnet Modal */}
      {showPlaybook && (
        <ArchitecturePlaybookModal
          onClose={() => setShowPlaybook(false)}
          onBookCall={() => handleScroll('#contact')}
        />
      )}
    </section>
  )
}

export default CaseStudies
