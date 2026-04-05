'use client'

import React, { forwardRef } from 'react'

const Section = forwardRef(({ children, className = '' }, ref) => {
  return (
    <section
      ref={ref}
      className={`py-8 sm:py-8 md:py-13 lg:py-18 xl:py-20 px-3 sm:px-5 md:px-7 lg:px-10 xl:px-13 ${className}`}
    >
      {children}
    </section>
  )
})

export default Section