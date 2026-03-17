'use client'

import { H2 } from './H2'

export default function Section({

  children,
  className = '',
}) {
  return (
    <section
      className={`py-5 sm:py-8 md:py-13 lg:py-18 xl:py-20  px-3 sm:px-5 md:px-7 lg:px-10 xl:px-13  ${className} `}  >




      {children}

    </section>
  )
}
