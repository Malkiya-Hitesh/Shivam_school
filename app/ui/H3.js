export function H3({ children, className = '' }) {
  return (
    <h3
      className={` text-[1.23rem] sm:text-[1.48rem] md:text-[1.69rem]
      font-medium text-[var(--color-text-muted)]
      ${className}`}
    >
      {children}
    </h3>
  )
}
