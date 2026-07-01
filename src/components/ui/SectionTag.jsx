import React from 'react'

const SectionTag = ({ children, light = false, className = '' }) => (
  <span
    className={`
      inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1
      ${light
        ? 'bg-white/10 text-brand-accent-light border border-white/20'
        : 'bg-brand-navy/10 text-brand-navy border border-brand-navy/20'
      }
      ${className}
    `}
  >
    {children}
  </span>
)

export default SectionTag
