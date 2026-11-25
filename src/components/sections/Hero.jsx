import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Calendar } from 'lucide-react'
import Button from '../ui/Button'

export const Hero = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const offset = 76
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle hairline background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0A0A0A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Main Typographic Authority Section */}
        <div className="max-w-5xl">
          
          {/* Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-700">
              Software Studio
            </span>
          </motion.div>

          {/* Primary High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] font-bold text-[#0A0A0A] tracking-[-0.035em] leading-[1.05]"
          >
            We design and build mobile apps, web platforms, and custom software.
          </motion.h1>

          {/* Surgical Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-[22px] text-[#525252] leading-relaxed max-w-3xl font-normal"
          >
            From first prototype to live launch, we help startups and businesses turn ideas into fast, reliable products built cleanly and shipped on time.
          </motion.p>

          {/* Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-6"
          >
            <Button
              href="#contact"
              onClick={() => handleScroll('#contact')}
              variant="primary"
              size="lg"
              className="text-base px-7 py-3.5 shadow-sm hover:shadow"
            >
              <Calendar size={17} className="text-neutral-400" />
              <span>Book a 15-Min Call</span>
            </Button>

            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('#case-studies')
              }}
              className="group inline-flex items-center gap-2 text-base font-semibold text-[#0A0A0A] hover:text-[#0052FF] transition-colors py-2 px-1"
            >
              <span>View Selected Work</span>
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
