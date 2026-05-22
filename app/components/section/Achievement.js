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
function Achievement({cards}) {
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
      <H2>ગૌરવની પળો</H2>
      <div ref={pref}>
        <P    > શ્રી શિવમ વિદ્યાલયના વિદ્યાર્થીઓએ ૧૬ વર્ષની સફરમાં અભ્યાસ, રમતગમત અને સાંસ્કૃતિક ક્ષેત્રે અનેક ગૌરવપ્રદ સિદ્ધિઓ હાંસલ કરી છે. ૨૦ સમર્પિત શિક્ષકોના માર્ગદર્શન અને ટ્રસ્ટ મેનેજમેન્ટના પ્રોત્સાહનથી અમારા વિદ્યાર્થીઓ દર વર્ષે નવી ઊંચાઈઓ સર કરે છે — અને આ જ અમારું સૌથી મોટું ગૌરવ છે.</P>  </div>
      <AchievementCard cards={cards} />
    </Section>
  )
}

export default Achievement
