import React from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    id: 'eivia',
    tag: 'Flagship In-House Product',
    title: 'Eivia — Instant Utility & Digital Services Platform',
    client: 'Proprietary Lab Venture',
    description:
      'A high-reliability digital platform engineered to process instant service settlements, bill payments, and automated dispatch across high-volume daily transactions.',
    challenge:
      'Third-party regional switch timeouts and unpredictable network failures causing dropped consumer transactions and reconciliation balance mismatches.',
    architecture:
      'Built an asynchronous multi-provider failover switch with local idempotency caching, double-entry ledger verification, and automated webhook retries.',
    outcome:
      'Achieved 99.98% fulfillment reliability, reduced median latency to < 650ms, and eliminated reconciliation balance drift across thousands of daily operations.',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    link: 'https://eivia.atlabx.com',
    metrics: [
      { label: 'Switch Fulfillment Rate', value: '99.98%' },
      { label: 'Median Latency', value: '< 650ms' },
      { label: 'Reconciliation Drift', value: '0.00%' },
    ],
  },
  {
    id: 'scath',
    tag: 'Client Platform Architecture',
    title: 'Scath — High-Concurrency Commerce Engine',
    client: 'Scath',
    description:
      'A custom headless e-commerce platform architected for rapid inventory synchronization, instant product filtering, and high-volume promotional drop spikes.',
    challenge:
      'Legacy monolithic storefront suffered from slow catalog indexing, inventory sync lags during peak product drops, and high mobile cart abandonment.',
    architecture:
      'Architected an API-first headless commerce system with edge caching, automated multi-channel inventory sync, and optimized relational database queries.',
    outcome:
      'Delivered sub-second page loads globally, zero downtime during high-traffic sales drops, and reduced mobile cart abandonment by 38%.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
    metrics: [
      { label: 'Global Page Load', value: '0.42s' },
      { label: 'Mobile Drop-Off', value: '-38%' },
      { label: 'Peak Sales Uptime', value: '100%' },
    ],
  },
  {
    id: 'eimaan-maison',
    tag: 'Client Brand Flagship',
    title: 'Eimaan Maison — Luxury Digital Commerce & Storefront',
    client: 'Eimaan Maison',
    description:
      'A bespoke digital flagship store engineered with fluid 60fps micro-interactions, responsive high-resolution asset delivery, and unified payment routing.',
    challenge:
      'High-end fashion house needed an editorial digital atelier that matched their physical craft without standard template compromises.',
    architecture:
      'Engineered a custom headless storefront with responsive media optimization, fluid gesture animations, and multi-currency checkout.',
    outcome:
      'Drove a 3.4x lift in mobile checkout conversion, sub-second checkout initiation, and seamless multi-currency cart transactions.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    link: '#',
    metrics: [
      { label: 'Mobile Checkout Lift', value: '+340%' },
      { label: 'Animation Frame Budget', value: '60 FPS' },
      { label: 'Checkout Initiation', value: '< 1s' },
    ],
  },
]

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-[#080C14] border-t border-white/[0.08]">
      <div className="container-xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
            [ 03 / Selected Work & Case Studies ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Proof of execution. Real systems shipped.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A selection of platforms engineered by AtlabX across proprietary ventures and client engagements.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className={`rounded-2xl border p-8 sm:p-12 transition-all duration-200 ${
                idx === 0
                  ? 'bg-[#0D1526] border-white/20 shadow-2xl relative'
                  : 'bg-[#0B101D] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Context, Challenge, Architecture */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-white border border-white/15">
                      {study.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Client: {study.client}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {study.title}
                  </h3>

                  <p className="text-base text-slate-200 leading-relaxed mb-6 font-normal">
                    {study.description}
                  </p>

                  <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <div>
                      <strong className="text-white font-semibold">The Challenge: </strong>
                      <span>{study.challenge}</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">The Architecture: </strong>
                      <span>{study.architecture}</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">The Outcome: </strong>
                      <span>{study.outcome}</span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Stack:</span>
                    {study.stack.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Verified Outcome Metrics */}
                <div className="lg:col-span-5 bg-[#080C14] p-6 sm:p-8 rounded-xl border border-white/10 space-y-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block pb-2 border-b border-white/10">
                    Verified Outcomes
                  </span>

                  <div className="space-y-5">
                    {study.metrics.map(metric => (
                      <div key={metric.label}>
                        <p className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                          {metric.value}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {study.link !== '#' && (
                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-accent-light transition-colors"
                      >
                        <span>Visit Live Platform</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies