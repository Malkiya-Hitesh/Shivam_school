import React from 'react'

function Button({ children, theme = 'dark', clt = '', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${clt} px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-[10px] transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] ${theme === 'dark' ? 'bg-[var(--primary)] text-[var(--text-w)]' : 'bg-[var(--bg-light)] text-[var(--text-p)] border '}`}
    >
      {children}
    </button>
  )
}

export default Button
