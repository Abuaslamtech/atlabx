import React, { useEffect, useState } from 'react'
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, GitBranch, Terminal, Server } from 'lucide-react'
import Button from './Button'

const modalData = {
  scath: {
    title: 'Scath — Digital Banking & Mobile Wallet Platform',
    category: 'Fintech & Mobile Banking',
    client: 'Scath Financial Inc.',
    metric: '0.42s Median P99 Settlement · -38% Drop-Off · 99.98% Switch Availability',
    executiveSummary:
      'Engineered a high-concurrency mobile banking application and multi-rail payment routing switch designed to handle high-frequency peer-to-peer transfers, biometric authorization, and dynamic bill payments with zero downtime.',
    problem:
      'The client was relying on legacy payment switches that suffered 3–5 second latency spikes during peak transaction hours, leading to a 42% user abandonment rate, frequent double-debit reconciliation disputes, and high support overhead.',
    architecturalSolution: [
      'Engineered an idempotent transaction routing pipeline that verifies ledger locks in memory via Redis before committing to PostgreSQL.',
      'Implemented biometric hardware authentication (FaceID / Fingerprint) with cryptographic payload signing on device before API transmission.',
      'Designed a multi-rail fallback mechanism that automatically retries failed settlements through alternative switch providers within 200ms.',
      'Optimized React Native rendering pipelines for 60fps balance animations, instant card freezing, and sub-second statement lookups.',
    ],
    diagramSteps: [
      { step: '01', node: 'Mobile Client (Expo / RN)', role: 'Biometric Payload Signing & Idempotency Key' },
      { step: '02', node: 'Edge API Gateway', role: 'Rate Limiting & Token Verification (< 25ms)' },
      { step: '03', node: 'Redis Distributed Lock', role: 'In-Memory Atomic Debit Reservation (Sub-5ms)' },
      { step: '04', node: 'PostgreSQL Core Ledger', role: 'ACID Double-Entry Commit & Audit Log' },
      { step: '05', node: 'Multi-Rail Switch Router', role: 'Dynamic Banking Rail Failover (< 200ms)' },
    ],
    tradeOffs: [
      {
        decision: 'Redis In-Memory Locking + PostgreSQL ACID Ledger vs. DynamoDB',
        rationale: 'In high-concurrency payment transfers, duplicate debits destroy trust. We prioritized strict serializability and sub-500ms settlement over eventual consistency.',
      },
      {
        decision: 'Device-Level Biometric Payload Signing vs. Server-Only Auth',
        rationale: 'Ensures cryptographic proof of origin on every outgoing transfer, eliminating SIM-swap fraud vectors without degrading UX speed.',
      },
    ],
    technicalHighlights: [
      { label: 'P99 Transaction Latency', value: '0.42s' },
      { label: 'Checkout Abandonment', value: '-38%' },
      { label: 'Switch Availability', value: '99.98%' },
      { label: 'Settled Transfers', value: '250,000+' },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    liveStatus: 'Active Commercial Production · iOS & Android',
  },
  deftaro: {
    title: 'Deftaro — Retail Operations, Inventory & Offline POS Engine',
    category: 'Proprietary Lab Venture (AtlabX)',
    client: 'In-House Product Lab',
    metric: '< 450ms Barcode Checkout · 100% Local-First Durability · 0.00% Stock Drift',
    executiveSummary:
      'A proprietary local-first retail operating system and point-of-sale platform built to solve frequent power and internet instability for high-throughput merchants in emerging markets.',
    problem:
      'Retail merchants face 20–35 daily network dropouts during peak business hours. Cloud-dependent POS systems freeze queues, create manual bookkeeping errors, and cause costly inventory stock drift.',
    architecturalSolution: [
      'Built a true local-first architecture using embedded SQLite on device with a deterministic append-only event log.',
      'Implemented conflict-free replicated data types (CRDTs) for inventory state reconciliation during background cloud synchronizations.',
      'Engineered camera-based barcode scanning with sub-450ms hardware acceleration and instant item caching.',
      'Created an automatic debt and ledger tracking module with instant SMS/WhatsApp receipt generation.',
    ],
    diagramSteps: [
      { step: '01', node: 'Hardware Scanner / Camera', role: 'Sub-450ms Barcode Parsing & Cache Lookup' },
      { step: '02', node: 'Embedded SQLite Ledger', role: 'Local Write-Ahead Transaction Log (0ms Latency)' },
      { step: '03', node: 'Offline State Machine', role: 'Atomic Stock Decrement & Receipt Generation' },
      { step: '04', node: 'CRDT Sync Engine', role: 'Deterministic Asynchronous Cloud Delta Merge' },
      { step: '05', node: 'Central PostgreSQL', role: 'Multi-Branch Consolidation & Telemetry' },
    ],
    tradeOffs: [
      {
        decision: 'Embedded SQLite + CRDT Event Log vs. Cloud Firebase Sync',
        rationale: 'Firebase or pure cloud backends fail during total cellular blackouts. Local SQLite guarantees 100% checkout uptime with mathematical convergence upon reconnect.',
      },
      {
        decision: 'Hardware-Accelerated Frame Parsing vs. Native SDK Wrapper',
        rationale: 'Cut scan-to-cart latency by 62% on budget Android devices commonly used in emerging market retail.',
      },
    ],
    technicalHighlights: [
      { label: 'Barcode Scan-to-Cart', value: '< 450ms' },
      { label: 'Offline Durability', value: '100% Local-First' },
      { label: 'Stock Reconciliation Drift', value: '0.00%' },
      { label: 'Background Cloud Sync', value: '< 1.2s on reconnect' },
    ],
    stack: ['React Native', 'Expo', 'SQLite', 'TypeScript', 'Node.js', 'PostgreSQL', 'NativeWind'],
    liveStatus: 'Private Beta / Commercial Pilot Deployment',
  },
  'eimaan-maison': {
    title: 'Eimaan Maison — Luxury Skincare & Fragrance Storefront',
    category: 'Luxury Commerce & Digital Flagship',
    client: 'Eimaan Maison Atelier',
    metric: '+340% Mobile Conversion · 60 FPS Micro-Interactions · < 1s Cart Initialization',
    executiveSummary:
      'Designed and engineered a custom headless digital storefront for a luxury perfume atelier, combining editorial brand aesthetics with lightning-fast mobile commerce performance.',
    problem:
      'The client was using a slow, generic e-commerce template with poor mobile performance, 4.2s First Contentful Paint, high bounce rates, and a disconnect between their physical luxury in-store experience and digital presence.',
    architecturalSolution: [
      'Engineered a custom headless Next.js storefront utilizing edge CDN caching and responsive multi-tier image transcoding.',
      'Designed fluid spring-physics transitions (Framer Motion) constrained to GPU compositor properties for rock-solid 60fps navigation.',
      'Implemented multi-currency localization and localized payment flows including Stripe and direct WhatsApp checkout.',
      'Built an interactive fragrance consultation concierge that guides buyers through scent profile discovery.',
    ],
    diagramSteps: [
      { step: '01', node: 'Global Edge CDN', role: 'Global Multi-Tier Asset & Page Caching (< 80ms TTFB)' },
      { step: '02', node: 'Headless Next.js Engine', role: 'Server-Side Rendering & Streaming Hydration' },
      { step: '03', node: 'GPU Motion Compositor', role: 'Hardware-Accelerated 60fps Micro-Interactions' },
      { step: '04', node: 'Localized Cart State', role: 'Multi-Currency Real-Time FX Conversion' },
      { step: '05', node: 'Stripe Global Rails', role: 'Direct Apple Pay, Google Pay & Card Checkout' },
    ],
    tradeOffs: [
      {
        decision: 'Headless Next.js on Edge vs. Monolithic Shopify Theme',
        rationale: 'Liquid templates could not support custom editorial micro-interactions and sub-second page loads across North America, Europe, and the Gulf.',
      },
      {
        decision: 'GPU-Only Transform & Opacity Animations vs. Layout Transitions',
        rationale: 'Maintains strict 60fps frame rates on mobile screens without triggering costly browser repaints or layout reflows.',
      },
    ],
    technicalHighlights: [
      { label: 'Mobile Conversion Lift', value: '+340%' },
      { label: 'Animation Budget', value: '60 FPS stable' },
      { label: 'First Contentful Paint', value: '0.7s global' },
      { label: 'Cart Initialization', value: '< 1s' },
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    liveStatus: 'Active Production Flagship Storefront',
  },
}

export const CaseStudyModal = ({ studyId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const data = modalData[studyId]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!data) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-neutral-200 text-[#0A0A0A] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Eyebrow & Category */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0052FF]">
            {data.category}
          </span>
          <span className="text-neutral-300">·</span>
          <span className="text-xs font-mono text-neutral-500">{data.client}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
          {data.title}
        </h2>

        {/* Metric Bar */}
        <div className="mt-4 p-3.5 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-between flex-wrap gap-2">
          <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 block">
            {data.metric}
          </span>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-medium">
            {data.liveStatus}
          </span>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 border-b border-neutral-200 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-neutral-900 text-white font-semibold'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            01 // Overview & Outcomes
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-neutral-900 text-white font-semibold'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            02 // Architecture Diagram
          </button>
          <button
            onClick={() => setActiveTab('tradeoffs')}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'tradeoffs'
                ? 'bg-neutral-900 text-white font-semibold'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            03 // Architectural Trade-Offs
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 pt-4 animate-fade-in">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                Executive Summary
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                {data.executiveSummary}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-rose-600 font-semibold mb-2">
                The Technical & Commercial Challenge
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {data.problem}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#0052FF] font-semibold mb-3">
                Architectural Execution & Key Decisions
              </h3>
              <ul className="space-y-2.5">
                {data.architecturalSolution.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700">
                    <CheckCircle2 size={18} className="text-[#0052FF] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: System Architecture Diagram */}
        {activeTab === 'architecture' && (
          <div className="pt-4 space-y-5 animate-fade-in">
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
              End-to-End System Data Flow Pipeline
            </h3>
            <p className="text-xs text-neutral-600">
              Synchronous execution flow and durability boundaries designed for deterministic performance:
            </p>

            <div className="space-y-3 font-mono text-xs">
              {data.diagramSteps.map((node) => (
                <div key={node.step} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-neutral-200 text-neutral-800 font-bold shrink-0">
                    {node.step}
                  </span>
                  <div className="flex-1">
                    <span className="font-bold text-neutral-900 block">{node.node}</span>
                    <span className="text-neutral-600 text-[11px] font-sans mt-0.5 block">{node.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Trade-Offs & Rationale */}
        {activeTab === 'tradeoffs' && (
          <div className="pt-4 space-y-4 animate-fade-in">
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
              Key Engineering Trade-Offs
            </h3>
            <p className="text-xs text-neutral-600">
              Senior engineering means making deliberate trade-offs to protect system integrity:
            </p>

            <div className="space-y-4">
              {data.tradeOffs.map((t, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="font-mono text-xs font-bold text-neutral-900 block mb-1.5">
                    {t.decision}
                  </span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {t.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.technicalHighlights.map((stat) => (
            <div key={stat.label} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
              <span className="font-mono text-lg sm:text-xl font-bold text-neutral-900 block">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-500 block mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stack Tags */}
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-3">
            Production Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {data.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal CTA */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            Need similar architecture for your platform?
          </p>
          <Button
            href="#contact"
            onClick={() => {
              onClose()
              const target = document.querySelector('#contact')
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 76
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            variant="primary"
            size="sm"
          >
            <span>Discuss This Architecture</span>
          </Button>
        </div>

      </div>
    </div>
  )
}

export default CaseStudyModal