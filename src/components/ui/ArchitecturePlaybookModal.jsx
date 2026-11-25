import React, { useEffect, useState } from 'react'
import { X, CheckCircle2, FileText, Download, ShieldCheck, Database, GitBranch, ArrowRight } from 'lucide-react'
import Button from './Button'

export const ArchitecturePlaybookModal = ({ onClose, onBookCall }) => {
  const [downloadRequested, setDownloadRequested] = useState(false)
  const [email, setEmail] = useState('')

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

  const handleDownload = (e) => {
    e.preventDefault()
    if (!email) return
    setDownloadRequested(true)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A0A0A] text-white rounded-3xl shadow-2xl overflow-y-auto border border-white/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close playbook"
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
            Technical Resource · Instant Inspection
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          AtlabX Architecture Playbook & Sample Technical Scope
        </h2>

        <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
          An engineering breakdown of how we structure production contracts, database isolation, idempotent webhook queues, and zero-downtime cutover procedures before a single line of production code is merged.
        </p>

        {/* Sample Scope Breakdown Cards */}
        <div className="mt-8 space-y-4">
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="flex items-start gap-3">
              <Database size={18} className="text-[#0052FF] shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  1. Double-Entry Ledger & Idempotency Pipeline
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Cryptographic transaction payload signing, Redis distributed locks with deterministic UUID idempotency keys, and row-level PostgreSQL isolation eliminating race conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="flex items-start gap-3">
              <GitBranch size={18} className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  2. Local-First Durability & SQLite CRDT Sync
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Embedded device storage, append-only transaction logs, and conflict-free delta reconciliation for seamless offline retail checkout and inventory accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  3. Zero-Downtime Blue/Green Deployments & SLA Matrix
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Dockerized staging pipelines, automated pre-flight schema migrations, health probes, rollback circuit breakers, and 99.98% uptime telemetry standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download or Request Custom Scope */}
        <div className="mt-8 pt-6 border-t border-white/10">
          {downloadRequested ? (
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <CheckCircle2 size={24} className="text-emerald-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-white">Playbook Scope Sent</h4>
              <p className="text-xs text-neutral-300 mt-1">
                We sent the complete architectural specification and sample sprint contract to <span className="text-white font-mono">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email (e.g. cto@company.com)"
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/20 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                <Download size={15} />
                <span>Get Full Playbook PDF</span>
              </button>
            </form>
          )}
          <p className="text-center font-mono text-[11px] text-neutral-400 mt-3">
            Zero sales spam · Instant PDF & Markdown technical architecture template
          </p>
        </div>

        {/* Modal Secondary CTA */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 text-xs text-neutral-400">
          <span>Ready for a real technical scoping call?</span>
          <button
            onClick={() => {
              onClose()
              if (onBookCall) onBookCall()
            }}
            className="text-white font-semibold hover:text-[#0052FF] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Book a 15-minute call directly</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArchitecturePlaybookModal