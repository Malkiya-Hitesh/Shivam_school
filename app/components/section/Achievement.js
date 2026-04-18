'use client'
import Section from '@/app/ui/Section'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import AchievementCard from './AchievementCard'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { usePathname } from 'next/navigation'


gsap.registerPlugin(SplitText, ScrollTrigger)
function Achievement() {
  const pathname = usePathname()
  const pref = useRef(null)
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    let ctx
    let descS
    if (pathname !== '/') return

    if (!pref.current) return
 
    ctx = gsap.context(() => {
      descS = new SplitText(pref.current, {
        type: 'words',
      })
      gsap.from(descS.words, {
        y: 60,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: pref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'

        }
      })
    }, containerRef)
 

    return () => {
      ctx?.revert(),
        descS?.revert()
    }
  }, [pathname])

  return (
    <Section ref={containerRef} className='bg-[var(--bg-light)] text-center flex flex-col xl:gap-16 lg:gap-12 md:gap-10 gap-8  '>
      <H2>Achievements</H2>
      <div ref={pref}>
        <P    > Our students have achieved remarkable success in various fields, including academics, sports, and arts. We take pride in their accomplishments and celebrate their hard work and dedication.</P>  </div>
      <AchievementCard />
    </Section>
  )
}

export default Achievement
