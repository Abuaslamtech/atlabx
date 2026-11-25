import React from 'react'
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, GitBranch, UserCheck } from 'lucide-react'
import Button from '../ui/Button'

const sprintSteps = [
  {
    step: '01',
    title: 'Discovery & System Contracts',
    summary: 'API specs, schema modeling, and milestone deliverables defined before code.',
  },
  {
    step: '02',
    title: 'Sprint Architecture & Build',
    summary: 'Modular TypeScript builds with weekly staging access and test automation.',
  },
  {
    step: '03',
    title: 'Production Cutover & Hardening',
    summary: 'Zero-downtime database migrations, telemetry logging, and security verification.',
  },
  {
    step: '04',
    title: 'Observability & SLA Support',
    summary: 'Continuous uptime monitoring, error alerting, and direct architect escalation.',
  },
]

const engagementModels = [
  {
    id: 'fixed-scope',
    badge: 'Fixed-Scope Delivery',
    title: 'Fixed-Scope MVP Build',
    timeline: '6–8 Weeks to Launch',
    tagline: 'Predictable scope, fixed budget, and guaranteed milestone delivery.',
    description:
      'Engineered for venture-backed founders and product leaders launching high-stakes new platforms, fintech MVPs, or mission-critical software systems.',
    deliverables: [
      'Complete technical architecture & schema modeling',
      'Weekly milestone demos with staging access',
      'Production deployment, security & telemetry',
      '100% intellectual property ownership',
    ],
    ctaText: 'Scope an MVP Build',
    highlight: false,
  },
  {
    id: 'dedicated-squad',
    badge: 'Continuous Velocity',
    title: 'Dedicated Engineering Squad',
    timeline: 'Monthly Sprint Capacity',
    tagline: 'Senior engineering bandwidth embedded directly into your product roadmap.',
    description:
      'Engineered for scaling platforms requiring continuous senior capacity, rapid feature shipping, database optimization, and guaranteed SLA response.',
    deliverables: [
      'Direct access to senior systems architect',
      'Continuous bi-weekly sprint planning & releases',
      'Proactive performance tuning & uptime monitoring',
      'Flexible month-to-month commitment',
    ],
    ctaText: 'Reserve Engineering Squad',
    highlight: true,
  },
]

export const Process = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const offset = 76
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="methodology" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="container-xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-4">
            [ 04 / Methodology & Engagement ]
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-[-0.03em] leading-tight">
            Predictable sprints. Transparent engagement.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] leading-relaxed font-normal">
            We eliminate agency drag and budget surprises through tightly structured sprint milestones and transparent engagement models.
          </p>
        </div>

        {/* Tight 4-Step Horizontal Timeline */}
        <div className="mb-16 pb-12 border-b border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sprintSteps.map((item) => (
              <div key={item.step} className="relative">
                {/* Monospace Step Indicator */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-[#0052FF] px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200/80">
                    STAGE {item.step}
                  </span>
                  <div className="h-px bg-neutral-200 flex-1 hidden lg:block" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Clean Engagement Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className={`p-7 sm:p-10 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                model.highlight
                  ? 'bg-white border-2 border-neutral-900 shadow-md'
                  : 'bg-white border-[1.5px] border-neutral-300 shadow-xs hover:border-neutral-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                    {model.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#0052FF] bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#D9E2FF]">
                    {model.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight mb-2">
                  {model.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-neutral-800 mb-3">
                  {model.tagline}
                </p>

                <p className="text-sm text-[#525252] leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8 pt-5 border-t border-neutral-200">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Scope Guarantee
                  </span>
                  {model.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                href="#contact"
                onClick={() => handleScroll('#contact')}
                variant={model.highlight ? 'primary' : 'outline'}
                size="md"
                className="w-full justify-center"
              >
                <span>{model.ctaText}</span>
                <ArrowRight size={15} />
              </Button>
            </div>
          ))}
        </div>

        {/* Clean Single Horizontal Global Trust Bar (Collapsed from bulky 4-card grid) */}
        <div className="mt-12 pt-8 border-t border-neutral-200/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] shrink-0 mt-0.5">
                <Globe size={16} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0A] tracking-tight">
                  Timezone Overlap
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  WAT (UTC+1) — Direct overlap with UK/EU hours and US East mornings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                <ShieldCheck size={16} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0A] tracking-tight">
                  100% IP Transfer
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  Full IP transfer upon payment with mutual NDA-first scoping.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                <GitBranch size={16} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0A] tracking-tight">
                  Day-1 Repo Ownership
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  Private GitHub repository access from commit #1 with automated CI/CD.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <UserCheck size={16} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0A] tracking-tight">
                  Principal Architect Led
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  Direct partnership with lead systems engineers. No junior handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Process
