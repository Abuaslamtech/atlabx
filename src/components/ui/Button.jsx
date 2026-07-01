import React from 'react'

const variants = {
  primary: 'bg-brand-navy text-white hover:bg-brand-navy-dark border border-brand-navy hover:border-brand-navy-dark',
  outline: 'bg-transparent text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white',
  'outline-white': 'bg-transparent text-white border border-white/50 hover:bg-white hover:text-brand-navy',
  ghost: 'bg-transparent text-brand-navy hover:bg-brand-surface border border-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
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
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

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
