import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionTag from '../ui/SectionTag'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello.atlabx@gmail.com',
    href: 'mailto:hello.atlabx@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '07035974746',
    href: 'tel:07035974746',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '12 Tsallaken Dogo, Galma, Zaria 810282, Kaduna, Nigeria',
    href: null,
  },
]

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-brand-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon size={18} className="text-brand-navy" />
    </div>
    <div>
      <p className="text-xs font-semibold text-brand-navy tracking-wider uppercase mb-0.5">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-sm text-brand-mid hover:text-brand-navy transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-brand-mid">{value}</p>
      )}
    </div>
  </div>
)

const Contact = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [submitState, setSubmitState] = useState('idle') // idle | success | error

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      // Simulate submission — replace with real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Contact form data:', data)
      setSubmitState('success')
      reset()
      setTimeout(() => setSubmitState('idle'), 5000)
    } catch {
      setSubmitState('error')
      setTimeout(() => setSubmitState('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="bg-brand-surface section-pad">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: info */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <SectionHeading
              tag={<SectionTag>Contact</SectionTag>}
              title="Let's Build Something Together"
              subtitle="Have a project in mind? Reach out and we'll get back to you within one business day."
            />

            <div className="mt-10 space-y-6">
              {contactDetails.map(detail => (
                <ContactInfo key={detail.label} {...detail} />
              ))}
            </div>

            {/* Availability note */}
            <div className="mt-8 p-4 bg-white rounded-xl border border-brand-accent-light/50">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-brand-navy">Currently Available</span>
              </div>
              <p className="text-xs text-brand-mid leading-relaxed">
                We are accepting new client projects for Q3 2025. Response time is typically within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-brand-accent-light/40 shadow-sm">
              {submitState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={48} className="text-emerald-500" />
                  <h3 className="text-lg font-semibold text-brand-navy-deeper">Message sent!</h3>
                  <p className="text-sm text-brand-mid max-w-xs">
                    Thank you for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="contact-form"
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-brand-navy-deeper mb-2 tracking-wide"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Jane Okonkwo"
                        {...register('name', { required: 'Name is required' })}
                        className={`
                          w-full px-4 py-3 text-sm rounded-xl border bg-brand-surface
                          text-brand-navy-deeper placeholder-brand-light
                          focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy
                          transition-all duration-200
                          ${errors.name ? 'border-red-400' : 'border-brand-accent-light'}
                        `}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-brand-navy-deeper mb-2 tracking-wide"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="jane@company.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                        })}
                        className={`
                          w-full px-4 py-3 text-sm rounded-xl border bg-brand-surface
                          text-brand-navy-deeper placeholder-brand-light
                          focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy
                          transition-all duration-200
                          ${errors.email ? 'border-red-400' : 'border-brand-accent-light'}
                        `}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-brand-navy-deeper mb-2 tracking-wide"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="New project enquiry"
                      {...register('subject')}
                      className="
                        w-full px-4 py-3 text-sm rounded-xl border border-brand-accent-light bg-brand-surface
                        text-brand-navy-deeper placeholder-brand-light
                        focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy
                        transition-all duration-200
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-brand-navy-deeper mb-2 tracking-wide"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project or what you need help with…"
                      {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please tell us a bit more (min 20 characters)' } })}
                      className={`
                        w-full px-4 py-3 text-sm rounded-xl border bg-brand-surface
                        text-brand-navy-deeper placeholder-brand-light
                        focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy
                        transition-all duration-200 resize-none
                        ${errors.message ? 'border-red-400' : 'border-brand-accent-light'}
                      `}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitState === 'error' && (
                    <div className="text-xs text-red-500 flex items-center gap-1.5 bg-red-50 px-3 py-2 rounded-lg">
                      <AlertCircle size={13} /> Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? 'Sending…' : (
                      <>Send Message <Send size={15} /></>
                    )}
                  </Button>

                  <p className="text-center text-xs text-brand-light">
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
