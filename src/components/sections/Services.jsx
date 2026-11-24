import React from 'react'
import { Layout, Smartphone, Server, Sparkles } from 'lucide-react'

const capabilities = [
  {
    icon: Layout,
    tag: 'Web Platforms',
    title: 'Custom Web Applications & SaaS',
    description:
      'End-to-end web applications, client portals, and multi-tenant software built with accessible design systems, type-safe APIs, and responsive frontends.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    deliverables: [
      'Multi-tenant SaaS architectures',
      'Complex administrative dashboards & portals',
      'API-first frontend applications',
    ],
  },
  {
    icon: Smartphone,
    tag: 'Mobile Engineering',
    title: 'Mobile Applications (iOS & Android)',
    description:
      'Native and cross-platform mobile apps engineered for fluid 60fps gestures, offline-first data synchronization, biometric authentication, and rapid cold starts.',
    stack: ['React Native', 'Expo', 'SQLite', 'NativeWind'],
    deliverables: [
      'iOS & Android cross-platform codebases',
      'Offline-first local caching & persistence',
      'Secure biometrics & device integrations',
    ],
  },
  {
    icon: Server,
    tag: 'Cloud & APIs',
    title: 'Cloud Architecture & Scalable APIs',
    description:
      'Resilient backend services, microservices, and database modeling engineered for high concurrency, fault isolation, and enterprise security standards.',
    stack: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: [
      'High-throughput REST & gRPC API gateways',
      'Relational schema modeling & query optimization',
      'Automated containerized CI/CD pipelines',
    ],
  },
  {
    icon: Sparkles,
    tag: 'Intelligent Systems',
    title: 'AI & Workflow Automation',
    description:
      'Custom workflow automation, intelligent document processing, and background pipelines designed to eliminate manual bottlenecks with deterministic reliability.',
    stack: ['Python', 'OpenAI / Gemini APIs', 'Queue Workers', 'Webhooks'],
    deliverables: [
      'Automated document extraction & processing',
      'Background batch job orchestration',
      'Custom LLM-assisted workflow engines',
    ],
  },
]

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#080C14] border-t border-white/[0.08]">
      <div className="container-xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
            [ 02 / Capabilities & Disciplines ]
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            The disciplines we engineer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Direct access to senior engineers across web, mobile, cloud infrastructure, and intelligent automation. Zero junior staffing.
          </p>
        </div>

        {/* 2x2 Grid with high contrast and tech tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[#0D1526] border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-slate-300 uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.04] border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-brand-navy-dark/80 text-brand-accent-light border border-brand-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  {item.deliverables.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
