import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import SectionTag from '../ui/SectionTag'
import SectionHeading from '../ui/SectionHeading'

const stats = [
  { value: '2022',    label: 'Year Founded' },
  { value: '20+',     label: 'Projects Delivered' },
  { value: '3+',      label: 'Countries Reached' },
  { value: '100%',    label: 'Client Retention' },
]

const StatCard = ({ value, label, index }) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="relative bg-brand-surface rounded-2xl p-6 border border-brand-accent-light/40 hover:border-brand-navy/30 hover:shadow-md transition-all duration-300 group"
    >
      <div
        className="absolute top-0 left-0 w-1 h-10 bg-brand-navy rounded-tl-2xl rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <p className="text-3xl font-bold text-brand-navy-deeper tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-brand-mid font-medium">{label}</p>
    </motion.div>
  )
}

const About = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <section id="about" className="bg-white section-pad">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <SectionHeading
              tag={<SectionTag>About Us</SectionTag>}
              title="A Serious Studio. Not a Generic Agency."
              subtitle={null}
            />
            <div className="mt-6 space-y-4 text-brand-mid leading-relaxed">
              <p>
                AtlabX — Abuaslam Tech Lab — is a software development and fintech studio
                based in Zaria, Kaduna State, Nigeria. We build production-grade software
                for clients across finance, logistics, and consumer tech, while also shipping
                our own independent products.
              </p>
              <p>
                Our work is grounded in engineering discipline: clear architecture, clean
                code, and systems built to last. We operate as a focused team, not a bloated
                agency — which means every project gets senior-level attention from start to
                finish.
              </p>
              <p>
                From fintech payment infrastructure to mobile applications and AI-assisted
                workflows, we work where technology meaningfully changes how businesses
                operate across Africa.
              </p>
            </div>

            {/* Accent divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-brand-navy" />
              <span className="text-xs font-semibold text-brand-navy tracking-widest uppercase">
                Zaria, Kaduna State · Nigeria
              </span>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
