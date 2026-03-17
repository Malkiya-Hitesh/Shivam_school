'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Baloo_2 } from "next/font/google"

gsap.registerPlugin(ScrollTrigger)

const baloo = Baloo_2({ subsets: ["latin"], weight: "700" })

function H1({ data, className }) {
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )
    }, headingRef)

    return () => ctx.revert()
  }, [])

  return (
    <h2
      ref={headingRef}
      className={`${baloo.className} ${className} text-[36px] sm:text-[38px]  md:text-[43px]  lg:text-[48px] xl:text-[50px] font-bold  bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-center`}
    >
      {data}
    </h2>
  )
}

export default H1
