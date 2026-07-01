import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import SectionTag from '../ui/SectionTag'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
          transition: { duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="
        group relative bg-white rounded-2xl p-7 border border-brand-accent-light/50
        hover:border-brand-navy/25 hover:shadow-lg hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Left accent bar on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-brand-navy rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-navy/8 flex items-center justify-center mb-5 group-hover:bg-brand-navy/15 transition-colors duration-300">
        <Icon size={22} className="text-brand-navy" />
      </div>

      <h3 className="text-base font-semibold text-brand-navy-deeper mb-2.5">{title}</h3>
      <p className="text-sm text-brand-mid leading-relaxed">{description}</p>
    </motion.div>
  )
}

const Services = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <section id="services" className="bg-brand-surface section-pad">
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
          className="mb-12"
        >
          <SectionHeading
            tag={<SectionTag>What We Do</SectionTag>}
            title="The Work We Do Best"
            subtitle="Focused disciplines. Delivered with precision."
          />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
