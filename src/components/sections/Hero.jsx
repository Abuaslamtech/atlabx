import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

/* Subtle geometric shape */
const Shape = ({ className }) => (
  <div className={`absolute rounded-full mix-blend-screen ${className}`} />
)

const Hero = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy-deeper"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #B0BCD6 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating geometric accents */}
      <Shape className="top-16 right-16 w-48 h-48 border border-brand-accent/10 animate-float" />
      <Shape className="bottom-24 left-10 w-24 h-24 border border-brand-accent/8" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-brand-accent/30 animate-pulse-slow" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-brand-accent/20 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 left-16 w-1 h-16 bg-gradient-to-b from-brand-accent/20 to-transparent" />

      {/* Main content */}
      <div className="container-xl relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-brand-accent/60" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent/80">
              Zaria, Nigeria
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-[1.1] tracking-tight"
          >
            Building Software &{' '}
            <span className="text-brand-accent">Fintech Infrastructure</span>{' '}
            for Africa
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl"
          >
            AtlabX is a Nigerian software development and fintech studio. We build
            products for clients and ship independent ventures that move the region forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#contact"
              onClick={() => handleScroll('#contact')}
              variant="primary"
              size="lg"
              className="shadow-xl shadow-brand-navy/40"
              id="hero-cta-contact"
            >
              Get in Touch <ArrowRight size={16} />
            </Button>
            <Button
              href="#products"
              onClick={() => handleScroll('#products')}
              variant="outline-white"
              size="lg"
              id="hero-cta-work"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/40 font-medium tracking-wide">
                Available for new projects
              </span>
            </div>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-xs text-white/40 tracking-wide">
              CAC Registered · Nigeria
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        aria-label="Scroll to About section"
        id="hero-scroll-indicator"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}

export default Hero
