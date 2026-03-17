'use client'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  /* Base styles (never change) */
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200'

  /* Size system (responsive & readable) */
  const sizes = {
    sm: 'px-4 py-2 text-[0.875rem]',
    md: 'px-6 py-3 text-[0.95rem] sm:px-7 sm:py-3.5 sm:text-[1rem]',
    lg: 'px-8 py-4 text-[1rem] sm:text-[1.05rem]',
  }

  const variants = {
    primary:
      'bg-[var(--primary)] text-[var(--text-light)] hover:bg-[var(--bg-light)] hover:text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--primary)] border',

    outline:
      'border bg-[var(--bg)] border-[var(--primary)] text-[var(--primary)] hover:bg-blue-50',

    ghost:
      'text-[var(--primary)] hover:bg-blue-50 bg-transparent focus:ring-blue-300',

    dark:
      'bg-gray-900 text-[var(--text-light)] hover:bg-gray-800 focus:ring-gray-300',
  }

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
