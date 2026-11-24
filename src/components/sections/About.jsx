import React from 'react'

const tenets = [
  {
    number: '01',
    title: 'Architectural Rigor',
    description:
      'Clean, modular codebases designed for high uptime, deterministic data integrity, and effortless long-term maintainability.',
  },
  {
    number: '02',
    title: 'Senior-Only Execution',
    description:
      'You work directly with lead systems architects and principal product designers — zero account management layers or junior handoffs.',
  },
  {
    number: '03',
    title: 'Product Craft',
    description:
      'Engineering grounded in user workflows, business conversion, and measurable impact, not just superficial lines of code.',
  },
]

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0B101D] border-t border-white/[0.08]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
              [ 01 / Studio Philosophy ]
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Senior architects. Direct execution. Zero agency bloat.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                AtlabX is an independent software engineering studio and product lab. 
                We partner with founders and technical leaders to build production-grade web applications, 
                mobile platforms, and scalable backend infrastructure.
              </p>
              <p>
                We operate as a focused engineering team, not an inflated agency. 
                That means every engagement gets direct technical leadership, clear communication, 
                and clean, modular code built to last.
              </p>
            </div>
          </div>

          {/* Right Column: Engineering Standards (Quiet, Editorial List) */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            {tenets.map(tenet => (
              <div
                key={tenet.number}
                className="pb-6 border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-mono text-xs text-brand-electric font-semibold">{tenet.number}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{tenet.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-8 font-normal">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
