'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Section from '@/app/ui/Section'
import { P } from '@/app/ui/P'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function StatsSection() {
  let pathname = usePathname()
  const countersRef = useRef([])
  const sectionERef = useRef(null)

  const stats = [
    { label: 'Years of Experience', value: 25 },
    { label: 'Happy Students', value: 1500 },
    { label: 'Teachers', value: 50 },
    { label: 'Awards Won', value: 30 },
  ]

useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, i) => {
      let obj = { val: 0 }

gsap.to(obj, {
  val: stats[i].value,
  duration: 5,
   scrollTrigger: {
              trigger: countersRef.current[i] || el,
              start: 'top 85%',

            },
  onUpdate: () => {
    el.innerText = Math.floor(obj.val)
  }
})
      })  
    }, sectionERef) 

    return () => ctx.revert()
  }, [pathname])

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
