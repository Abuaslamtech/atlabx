import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Calendar } from 'lucide-react'
import Button from '../ui/Button'

export const Contact = () => {
  const [submitState, setSubmitState] = useState('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      console.log('Project inquiry submitted:', data)
      setSubmitState('success')
      reset()
      setTimeout(() => setSubmitState('idle'), 6000)
    } catch {
      setSubmitState('error')
      setTimeout(() => setSubmitState('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B101D] border-t border-white/[0.08]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Studio Channels & Booking */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-accent-light block mb-4">
              [ 06 / Contact & Engagement ]
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's build your next digital product.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are architecting a custom web application, a mobile product, or scalable cloud infrastructure — speak directly with our senior software architects.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@atlabx.com"
                className="flex items-center gap-3.5 text-sm sm:text-base text-slate-200 hover:text-white transition-colors p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20"
              >
                <Mail size={18} className="text-brand-electric flex-shrink-0" />
                <span>hello@atlabx.com</span>
              </a>

              <a
                href="https://wa.me/2347035974746"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm sm:text-base text-slate-200 hover:text-white transition-colors p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20"
              >
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <span>+234 703 597 4746 (WhatsApp)</span>
              </a>

              <div className="flex items-center gap-3.5 text-sm text-slate-300 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <MapPin size={18} className="text-slate-400 flex-shrink-0" />
                <span>Zaria, Nigeria · Global Remote Delivery</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
              <span>Strict Mutual NDA honored prior to detailed project disclosure.</span>
            </div>
          </div>

          {/* Right Column: Clean, Minimal 3-Field Form (No budget pills, no pricing calculators) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#080C14] border border-white/10 p-8 sm:p-10 shadow-xl">
              
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Direct Project Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-0.5">We respond within 24 business hours.</p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.05] text-slate-300 border border-white/10">
                  Senior Review
                </span>
              </div>

              {submitState === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">Inquiry Received</h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
                    A lead architect from AtlabX will review your brief and respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-electric focus:ring-1 focus:ring-brand-electric transition-colors"
                      />
                      {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                        })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-electric focus:ring-1 focus:ring-brand-electric transition-colors"
                      />
                      {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Overview & Target Goals
                    </label>
                    <textarea
                      rows={4}
                      {...register('message', { required: 'Please describe your project' })}
                      placeholder="Tell us what you are looking to build (web app, mobile platform, backend system), your requirements, or your target timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-electric focus:ring-1 focus:ring-brand-electric transition-colors resize-none leading-relaxed"
                    />
                    {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? (
                      'Submitting Brief...'
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send size={15} />
                      </>
                    )}
                  </Button>
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
