export function H2({ children, className = '' }) {
  return (
    <h2
      className={`text-[2rem] sm:text-[2.4rem] md:text-[2.75rem] lg:text-[3rem]
      font-semibold tracking-tight bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] bg-clip-text text-transparent
      ${className}`}
    >
      {children}
    </h2>
  )
}
