import React from 'react'

const variants = {
  primary:
    'bg-brand-electric text-white hover:bg-brand-electric-hover border border-blue-400/30 shadow-sm active:scale-[0.98]',
  secondary:
    'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/15 hover:border-white/30 active:scale-[0.98]',
  outline:
    'bg-transparent text-white hover:bg-white/[0.06] border border-white/20 hover:border-white/40 active:scale-[0.98]',
  ghost:
    'bg-transparent text-slate-300 hover:text-white active:scale-[0.98]',
}

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs font-medium',
  md: 'px-5 py-2.5 text-sm font-semibold',
  lg: 'px-6 py-3.5 text-sm sm:text-base font-semibold',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
