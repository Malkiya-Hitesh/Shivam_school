import React, { forwardRef } from 'react'

export const P = forwardRef(function P({ children, className = '' }, ref) {
  return (
    <p
      ref={ref}
      className={`text-[0.95rem] sm:text-[1rem] md:text-[1.05rem]
      leading-relaxed text-[var(--color-text-muted)]
      ${className}`}
    >
      {children}
    </p>
  )
})