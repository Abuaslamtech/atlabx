import React from 'react'

const SectionHeading = ({
  tag,
  title,
  subtitle,
  light = false,
  center = false,
  className = '',
}) => (
  <div className={`${center ? 'text-center' : ''} ${className}`}>
    {tag && (
      <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
        {tag}
      </div>
    )}
    <h2
      className={`
        text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight tracking-tight
        ${light ? 'text-white' : 'text-brand-navy-deeper'}
      `}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`
          mt-4 text-base sm:text-lg leading-relaxed max-w-2xl
          ${center ? 'mx-auto' : ''}
          ${light ? 'text-brand-accent' : 'text-brand-mid'}
        `}
      >
        {subtitle}
      </p>
    )}
  </div>
)

export default SectionHeading
