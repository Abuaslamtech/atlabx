import React from 'react'

const variants = {
  primary:
    'bg-[#0A0A0A] text-white hover:bg-neutral-800 border border-[#0A0A0A] shadow-sm active:scale-[0.98]',
  cobalt:
    'bg-[#0052FF] text-white hover:bg-[#0047E0] border border-transparent shadow-sm active:scale-[0.98]',
  white:
    'bg-white text-[#0A0A0A] hover:bg-neutral-100 border border-neutral-200 font-semibold shadow-sm active:scale-[0.98]',
  secondary:
    'bg-neutral-100 text-[#0A0A0A] hover:bg-neutral-200 border border-neutral-200 active:scale-[0.98]',
  outline:
    'bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white border-[1.5px] border-[#0A0A0A] font-semibold active:scale-[0.98]',
  darkOutline:
    'bg-transparent text-white hover:bg-white/10 border border-white/25 active:scale-[0.98]',
  ghost:
    'bg-transparent text-neutral-600 hover:text-[#0A0A0A] hover:bg-neutral-100/80 active:scale-[0.98]',
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
    'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed select-none'

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
