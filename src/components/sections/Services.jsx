import React from 'react'

const capabilities = [
  {
    number: '01',
    title: 'Fintech & Payment Products',
    description:
      'Digital wallets, payment flows, and financial tools built for speed, security, and reliable transaction handling.',
  },
  {
    number: '02',
    title: 'Mobile Apps (iOS & Android)',
    description:
      'Cross-platform mobile apps that feel fast and responsive, work reliably offline, and ship cleanly to both app stores.',
  },
  {
    number: '03',
    title: 'Web Platforms & SaaS',
    description:
      'Customer-facing web apps, internal dashboards, and backend APIs designed to grow smoothly as your user base scales.',
  },
  {
    number: '04',
    title: 'AI & Workflow Automation',
    description:
      'Practical AI features, document processing, and automated background workflows that replace slow manual work.',
  },
]

export const Services = () => {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-neutral-200">
      <div className="container-xl">

        {/* Horizontal header — same two-column pattern as rest of site */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-3">
              02 / Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0A0A0A] tracking-[-0.03em] leading-tight">
              What we build.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed max-w-sm sm:text-right">
            Scope shaped around what your business needs, not a fixed menu.
          </p>
        </div>

        {/* Hairline-divided list — consistent with site's editorial voice */}
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="py-6 grid grid-cols-12 gap-4 sm:gap-8 items-start"
            >
              <span className="col-span-1 font-mono text-xs font-semibold text-[#0052FF] pt-1">
                {item.number}
              </span>
              <h3 className="col-span-11 sm:col-span-4 text-lg sm:text-xl font-bold text-[#0A0A0A] tracking-tight">
                {item.title}
              </h3>
              <p className="col-start-2 col-span-11 sm:col-start-6 sm:col-span-7 text-sm sm:text-base text-[#525252] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
