import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/process'

const StepCard = ({ icon: Icon, title, description, id, index, isLast }) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="relative flex flex-col items-start"
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-0 h-px border-t-2 border-dashed border-brand-accent-light" />
      )}

      {/* Step number + icon */}
      <div className="relative z-10 flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shadow-md shadow-brand-navy/20">
          <Icon size={20} className="text-white" />
        </div>
        <span className="text-xs font-bold text-brand-navy tracking-widest uppercase">
          Step {String(id).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-base font-semibold text-brand-navy-deeper mb-2">{title}</h3>
      <p className="text-sm text-brand-mid leading-relaxed">{description}</p>
    </motion.div>
  )
}

const Process = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <section id="process" className="bg-white section-pad">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="mb-14 text-center"
        >
          <SectionHeading
            tag={<SectionTag>How We Work</SectionTag>}
            title="Our Approach"
            subtitle="A clear process keeps projects on track, on budget, and on brief."
            center
          />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, i) => (
            <StepCard
              key={step.id}
              {...step}
              index={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-brand-accent-light/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-mid">
            Every engagement is different. We adapt the process to fit your constraints.
          </p>
          <a
            href="#contact"
            className="text-sm font-semibold text-brand-navy hover:text-brand-navy-dark transition-colors flex items-center gap-1.5 flex-shrink-0"
            id="process-cta-link"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
