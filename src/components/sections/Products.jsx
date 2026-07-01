import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'
import SectionTag from '../ui/SectionTag'
import SectionHeading from '../ui/SectionHeading'
import { products } from '../../data/products'

const ProductCard = ({ product }) => {
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
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="
        group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
        hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden
      "
    >
      {/* Top accent stripe */}
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-accent/60 via-brand-accent to-transparent" />

      <div className="p-8 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          {/* Product icon placeholder */}
          <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center border border-brand-accent/30 flex-shrink-0 shadow-lg">
            <Zap size={24} className="text-brand-accent" />
          </div>

          {/* Status badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {product.status}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">{product.name}</h3>
        <p className="text-sm font-medium text-brand-accent mt-1">{product.tagline}</p>

        <p className="mt-4 text-sm text-white/60 leading-relaxed">{product.description}</p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/8 text-white/50 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={product.url}
            className="
              inline-flex items-center gap-2 text-sm font-semibold text-brand-accent
              hover:text-white transition-colors duration-200 group/link
            "
            id={`product-link-${product.id}`}
          >
            Learn More
            <ArrowUpRight
              size={15}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* Placeholder for upcoming product */
const UpcomingCard = () => (
  <div className="rounded-2xl border border-dashed border-white/15 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[280px]">
    <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-4">
      <span className="text-white/30 text-2xl font-thin">+</span>
    </div>
    <p className="text-sm font-medium text-white/30">More products coming</p>
    <p className="text-xs text-white/20 mt-1">We ship regularly</p>
  </div>
)

const Products = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <section id="products" className="bg-brand-navy-deeper section-pad relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-100" />

      <div className="container-xl relative z-10">
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
            tag={<SectionTag light>Our Products</SectionTag>}
            title="In-House Ventures"
            subtitle="Beyond client work — we build and own our own products."
            light
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          <UpcomingCard />
        </div>
      </div>
    </section>
  )
}

export default Products
