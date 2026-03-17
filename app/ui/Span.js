export function Span({ children, className = '' }) {
  return (
    <span
      className={`inline-block mt-2 text-[0.85rem] sm:text-[0.9rem]
      font-medium text-[var(--color-primary)]
      ${className}`}
    >
      {children}
    </span>
  )
}
