import { forwardRef } from "react"

export const H3 = forwardRef(function H3({ children, className = '' }, ref) {
  return (
    <h3
      ref={ref}
      className={` text-[1.23rem] sm:text-[1.48rem] md:text-[1.69rem]
      font-medium text-[var(--color-text-muted)]
      ${className}`}
    >
      {children}
    </h3>
  )
})
