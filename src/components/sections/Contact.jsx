import React, { useState } from 'react'
import { Calendar, ArrowRight, CheckCircle2, MessageSquare, Mail } from 'lucide-react'

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#09090B] text-white border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-10">

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-medium text-emerald-300 tracking-wide uppercase">
                Booking Q1/Q2 — 1–2 wk lead time
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1]">
                Let's talk<br />
                <span className="text-zinc-500">about your project.</span>
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
                Book a 15-minute architecture call with the principal engineer, or drop a brief and expect a same-day reply.
              </p>
            </div>

            {/* Primary CTA — booking */}
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 p-5 rounded-2xl bg-white text-[#09090B] hover:bg-neutral-100 active:scale-[0.99] transition-all duration-150 w-full sm:w-fit"
            >
              <div className="w-9 h-9 rounded-xl bg-black/[0.07] flex items-center justify-center shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <span className="text-sm font-semibold block">Book a 15-min call</span>
                <span className="text-xs text-neutral-500">Architecture discussion via Cal.com</span>
              </div>
              <ArrowRight
                size={15}
                className="text-neutral-400 ml-auto group-hover:translate-x-0.5 transition-transform duration-150"
              />
            </a>

            {/* Secondary channels */}
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/2347035974746"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors duration-150"
              >
                <MessageSquare size={15} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <span className="w-px h-4 bg-white/[0.1]" />
              <a
                href="mailto:hello@atlabx.com"
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors duration-150"
              >
                <Mail size={15} className="text-zinc-400" />
                <span>hello@atlabx.com</span>
              </a>
            </div>

            {/* Trust signals */}
            <p className="text-xs font-mono text-zinc-600 leading-relaxed">
              Principal-led, senior-only execution · Day-1 GitHub ownership<br />
              Zaria, NG — global remote delivery · USD / GBP / EUR · NDA on request
            </p>
          </div>

          {/* ── Right — form ── */}
          <div>
            <div className="rounded-3xl bg-[#111115] border border-white/[0.08] overflow-hidden">
              {submitted ? (
                <div className="p-10 sm:p-12 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-5">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    Brief received.
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
                    Expect a reply with concrete technical feedback within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-mono text-zinc-600 hover:text-white transition-colors cursor-pointer"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-7 sm:p-10 space-y-5">

                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      Send a brief
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      No forms to navigate. Tell us what you're building.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-zinc-500 mb-1.5">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-150"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-500 mb-1.5">Work email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-150"
                        />
                      </div>
                    </div>

                    {/* Brief */}
                    <div>
                      <label className="block text-xs text-zinc-500 mb-1.5">What are you building?</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project — what it does, who uses it, the technical complexity, and your rough timeline. The more context, the better our initial feedback."
                        className="w-full px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-150 resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="pt-1 space-y-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-white text-[#09090B] font-semibold text-sm hover:bg-neutral-100 active:scale-[0.99] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="text-neutral-400">Sending…</span>
                      ) : (
                        <>
                          <span>Send brief</span>
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-zinc-700">
                      Direct engineer review · NDA on request
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
