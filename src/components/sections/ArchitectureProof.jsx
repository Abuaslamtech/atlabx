import React from 'react'

const architecturePillars = [
  {
    number: '01',
    stat: '99.98%',
    statLabel: 'Switch Availability',
    title: 'Idempotent Multi-Rail Payment Rails',
    description:
      'Redis distributed locking with PostgreSQL ACID ledger transactions. Eliminates race conditions and double debits, guarantees sub-500ms settlement, and fails over across banking switches in under 200ms.',
    specs: ['Distributed Redis Locks', 'ACID Ledger Locking', 'Sub-500ms Settlement'],
  },
  {
    number: '02',
    stat: '100%',
    statLabel: 'Local-First Durability',
    title: 'Offline Edge & Embedded SQLite',
    description:
      'Embedded SQLite on device with append-only event logs. Eliminates checkout freezes during cellular or power outages, executes sub-450ms scans, and synchronizes via CRDTs on reconnect.',
    specs: ['Embedded SQLite DB', 'Zero Stock Drift', 'Deterministic CRDT Sync'],
  },
  {
    number: '03',
    stat: '< 0.5s',
    statLabel: 'P99 Routing Latency',
    title: 'Type-Safe Microservices & Cutovers',
    description:
      'End-to-end TypeScript contracts across client, edge, and backend services. Blue/green containerized cutovers with automated schema migrations, automated rollback safeguards, and direct architect PR review.',
    specs: ['End-to-End TypeScript', 'Dockerized CI/CD', 'Direct Architect Review'],
  },
]

export const ArchitectureProof = () => {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#09090B] text-white relative overflow-hidden">
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-blue-400 block mb-4">
              [ 03 / High-Reliability Architecture Standards ]
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-tight">
              How we architect for zero downtime and deterministic reliability.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              When software handles payments, inventory, or mission-critical workflows, failure is not an option. Here is the engineering doctrine behind every system we ship.
            </p>
          </div>
        </div>

        {/* Clean 3-Column Typographic Layout (No Heavy Bordered Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 pt-8 border-t border-white/15">
          {architecturePillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Protocol Header & Prominent Stat */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="font-mono text-xs font-bold text-blue-400">
                    PROTOCOL // {pillar.number}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {pillar.stat}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      {pillar.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed font-normal mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Spec Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {pillar.specs.map((spec) => (
                  <span
                    key={spec}
                    className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.06] text-zinc-200 border border-white/10"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Unified Verification Proof Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">
              99.98%
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1 block">
              Production Switch Uptime
            </span>
          </div>

          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">
              &lt; 0.5s
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1 block">
              P99 Payment Routing Latency
            </span>
          </div>

          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">
              100%
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1 block">
              Senior Architect Executed
            </span>
          </div>

          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">
              Zero
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1 block">
              Junior Handoffs or Bloat
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ArchitectureProof
