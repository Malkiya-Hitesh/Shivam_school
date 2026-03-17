'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function StatsSection() {
  const countersRef = useRef([])
  const sectionRef = useRef(null)

  const stats = [
    { label: 'Years of Experience', value: 25 },
    { label: 'Happy Students', value: 1500 },
    { label: 'Teachers', value: 50 },
    { label: 'Awards Won', value: 30 },
  ]

  useEffect(() => {
    // reset refs (important for Next.js strict mode)


    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: stats[i].value,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true, // ✅ play only once (no reverse bug)
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3 bg-[var(--bg-dark-b)]  text-center" >

      <div className="grid grid-cols-2 min-[1048px]:grid-cols-4 gap-8 max-[478px]:grid-cols-1">
        {stats.map((item, i) => (
          <div key={i}>
            <p className=" text-[2.25rem] sm:text-[2.3rem] md:text-[2.4rem] lg:text-[2.5rem] xl:text-[2.65rem] font-extrabold text-[var(--text-w)]  will-change-transform">
              <span
                ref={(el) => {
                  if (el) countersRef.current[i] = el
                }}
              >
                0
              </span>
              +
            </p>
            <span className=" block pt-2 text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.35rem] xl:text-[1.45rem] text-[var(--text-m)]  font-medium ">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
