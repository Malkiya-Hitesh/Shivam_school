'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Section from '@/app/ui/Section'
import { P } from '@/app/ui/P'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function StatsSection() {
  const countersRef = useRef([])
  const sectionERef = useRef(null)

  const stats = [
    { label: 'Years of Experience', value: 25 },
    { label: 'Happy Students', value: 1500 },
    { label: 'Teachers', value: 50 },
    { label: 'Awards Won', value: 30 },
  ]

  useEffect(() => {


    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: stats[i].value,
            duration: 3,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: sectionERef.current,
              start: 'top 90%',
              markers: true,

            }
          }
        )
      })
    }, sectionERef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionERef} className="bg-[var(--bg-light)] flex justify-center items-center ">


      <div className="grid grid-cols-2 min-[1048px]:grid-cols-4 gap-8 max-[478px]:grid-cols-1 ">
        {stats.map((item, i) => (
          <div className=' flex flex-col justify-center items-center' key={i}>
            <P className=" text-[2.25rem] sm:text-[2.3rem] md:text-[2.4rem] lg:text-[2.5rem] xl:text-[2.65rem] font-extrabold text-[var(--text-w)]  will-change-transform">
              <span
                ref={(el) => {
                  if (el) countersRef.current[i] = el
                }}
              >
                0
              </span>
              +
            </P>
            <span className=" block pt-2 text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.35rem] xl:text-[1.45rem] text-[var(--text-m)]  font-medium ">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
