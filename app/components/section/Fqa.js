'use client'

import React, { useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Span from '../ui2/Span'
import P from '../ui2/P'

import { H2 } from '@/app/ui/H2'
import Section from '@/app/ui/Section'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'What is the admission process?',
    a: 'Parents can apply online or visit the school campus. Our team will guide you through the complete admission process.',
  },
  {
    q: 'Which curriculum does the school follow?',
    a: 'We follow a well-structured curriculum focusing on academics, discipline, and overall student development.',
  },
  {
    q: 'Are transport facilities available?',
    a: 'Yes, safe and reliable transport facilities are available with GPS-enabled buses.',
  },
  {
    q: 'Does the school provide extracurricular activities?',
    a: 'Yes, we encourage sports, cultural activities, and skill-based learning.',
  },
]

export default function Faq() {
  const sectionRef = useRef(null)
  const contentRefs = useRef([])
  const divRef = useRef(null)
  const [active, setActive] = useState(null)
  let pathname = usePathname()

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      
     gsap.set(
  sectionRef.current.querySelectorAll('.faq-item'),
  {
    opacity: 0,
    y: 60,
  }
)

      ScrollTrigger.batch(sectionRef.current.querySelectorAll('.faq-item'), {
        start: 'top 85%',

        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            
          })
        }
      })

 

      contentRefs.current.forEach(el => {
        gsap.set(el, { height: 0, opacity: 0 })
      })


    }, sectionRef)

    return () => ctx.revert()
  }, [pathname])


  const toggleItem = index => {
    if (active === index) {

      gsap.to(contentRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => ScrollTrigger.refresh(),
      })
      setActive(null)
      return
    }

    // Close previous
    if (active !== null) {
      gsap.to(contentRefs.current[active], {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      })
    }


    const el = contentRefs.current[index]

    gsap.to(el, {
      height: el.scrollHeight,
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out',
        onComplete: () => ScrollTrigger.refresh(),
    })

    setActive(index)
  }

  return (

    <Section ref={sectionRef} className='flex flex-col items-center  gap-8'>
      <H2 className={"text-center"} > Frequently Asked Questions </H2>


      <div
        ref={divRef}
        className="    flex flex-col gap-3 "
      >
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden bg-white faq-item"
          >
            <button
              onClick={() => toggleItem(i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <Span className={"font-semibold"} data={item.q} />
              <span className="">
                {active === i ? '−' : '+'}
              </span>
            </button>

            <div
              ref={el => (contentRefs.current[i] = el)}
              className="px-5 text-[13px] sm:text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[20px] text-gray-600 overflow-hidden"
            >
              <P className={"pb-4"} data={item.a} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
