export function P({ children, className = '' }) {
  return (
    <p
      className={`text-[0.95rem] sm:text-[1rem] md:text-[1.05rem]
      leading-relaxed text-[var(--color-text-muted)]
      ${className}`}
    >
      {children}
    </p>
  )
}
