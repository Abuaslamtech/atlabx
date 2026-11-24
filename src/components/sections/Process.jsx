import React from 'react'
import { Search, Code2, Rocket, Activity } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & System Specs',
    description:
      'We map domain logic, define API contracts, model database schemas, and establish milestone delivery targets before writing production code.',
  },
  {
    step: '02',
    icon: Code2,
    title: 'Iterative Sprint Build',
    description:
      'Weekly engineering milestones with clean, modular TypeScript code, automated testing, and direct staging access for rapid feedback.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Hardened Production Cutover',
    description:
      'Automated containerized deployments, zero-downtime database migrations, telemetry logging, and security verification.',
  },
  {
    step: '04',
    icon: Activity,
    title: 'Observability & SLA Support',
    description:
      'Continuous health monitoring, performance optimization, error alerting, and direct architect escalation post-launch.',
  },
]

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0B101D] border-t border-white/[0.08]">
      <div className="container-xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
            [ 04 / Engineering Methodology ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Predictable sprints. Zero surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A milestone-driven engineering cycle designed to eliminate communication drag and deliver production-grade software on schedule.
          </p>
        </div>

        {/* Connected Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="rounded-2xl bg-[#080C14] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-200 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-brand-electric">
                      Phase {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Milestone {index + 1} of 4</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
