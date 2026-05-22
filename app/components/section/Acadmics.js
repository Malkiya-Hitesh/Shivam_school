'use client'

import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { H3 } from '@/app/ui/H3'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/app/context/LanguageContext'
gsap.registerPlugin(SplitText, ScrollTrigger)

function Acadmics() {
  const { t } = useLanguage()
  let pathname = usePathname()
  const pRef = useRef(null)
  const containerRef = useRef(null)

  const h31Ref = useRef(null)
  const h32Ref = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const ul1Ref = useRef(null)
  const ul2Ref = useRef(null)


  useLayoutEffect(() => {
    let ctx
    const split = { current: null }
    let tl1
    let tl2

    if (pathname !== '/') return
    if (!pRef.current || !h31Ref.current || !h32Ref.current || !ul1Ref.current || !ul2Ref.current || !p1Ref.current || !p2Ref.current) return




    ctx = gsap.context(() => {


      const li1 = gsap.utils.toArray(ul1Ref.current.querySelectorAll('li'))
      const li2 = gsap.utils.toArray(ul2Ref.current.querySelectorAll('li'))



      split.current = new SplitText(pRef.current, { type: 'lines, words' })

      gsap.from(split.current.words, {
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        scrollTrigger: {
          trigger: pRef.current,
          start: 'top 85%',

        }
      })

      tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: h31Ref.current,
          start: 'top 85%',


        }
      })

      tl1
        .from(h31Ref.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .from(p1Ref.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        }, "-=0.5")
        .from(li1, {
          x: -40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        }, "-=0.3")

      tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: h32Ref.current,
          start: 'top 85%',

        }
      })

      tl2
        .from(h32Ref.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .from(p2Ref.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        }, "-=0.5")
        .from(li2, {
          x: -40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        }, "-=0.3")


    }, containerRef)




    return () => {
      ctx?.revert()
      split.current?.revert()
    }
  }, [pathname])

  return (
    <Section ref={containerRef} className="bg-[var(--bg)] flex flex-col gap-16">

      <H2 className='text-center'>અભ્યાસક્રમ</H2>


      <P ref={pRef} className='text-center'>
        શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયમાં અભ્યાસક્રમ એ માત્ર પુસ્તકીય જ્ઞાન નહીં — બાળકની સંપૂર્ણ બૌદ્ધિક, સર્જનાત્મક અને નૈતિક વિકાસ માટે ઘડવામાં આવ્યો છે.
      </P>


      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }} className=' md:text-[2.6rem] ' >પ્રાથમિક વિભાગ </H2>
          <H3 ref={h31Ref} className=' text-[var(--text-primary)]'> ધોરણ ૧ થી ૮ — શ્રી શિવમ વિદ્યાલય</H3>

          <P ref={p1Ref} className=' line-clamp-2'>
            ગુજરાત બોર્ડ (GSEB) આધારિત ગુજરાતી માધ્યમમાં ગણિત, વિજ્ઞાન, ભાષા અને સામાજિક વિજ્ઞાનનો મજબૂત પાયો નાખવામાં આવે છે — સ્માર્ટ ક્લાસ અને પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા.
          </P>

          <ul ref={ul1Ref} className=" space-y-2 list-disc pl-5 text-gray-600">
            <li>પ્રવૃત્તિ આધારિત શિક્ષણ</li>
            <li>પ્રોજેક્ટ આધારિત અભ્યાસ</li>
            <li>કૌશલ્ય વિકાસ</li>
            <li>અનુભવી અને સમર્પિત શિક્ષકો</li>
            <li>કોમ્પ્યુટર શિક્ષણ</li>
            <li>કળા અને સાંસ્કૃતિક પ્રવૃત્તિઓ</li>
          </ul>
          <Link href="/academics">
            <Button className=" mt-4" variant="primary">
              વધુ જાણો
            </Button>
          </Link>
        </div>

        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }} className='  md:text-[2.6rem] '>ઉચ્ચ માધ્યમિક વિભાગ</H2>
          <H3 ref={h32Ref} className=' text-[var(--text-primary)]'> ધોરણ ૯ થી ૧૨ આર્ટ્સ — શ્રી વજીબા વિદ્યાલય</H3>

          <P ref={p2Ref} className='line-clamp-2'>
            નિયામક શ્રી ચિરાગ રામાણીના માર્ગદર્શન હેઠળ ધોરણ ૯ થી ૧૨ આર્ટ્સ વિભાગમાં વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ અને જીવનની તૈયારી માટે સક્ષમ બનાવવામાં આવે છે.
          </P>

          <ul ref={ul2Ref} className=" space-y-2 list-disc pl-5 text-gray-600">
            <li>આર્ટ્સ પ્રવાહનો ઊંડો અભ્યાસ</li>
            <li>GSEB બોર્ડ પરીક્ષાની સંપૂર્ણ તૈયારી</li>
            <li>કારકિર્દી માર્ગદર્શન</li>
            <li>વક્તૃત્વ અને નેતૃત્વ વિકાસ</li>
            <li>રમતગમત અને સ્પર્ધાત્મક પ્રવૃત્તિઓ</li>
            <li>પુસ્તકાલય અને અભ્યાસ સહાય</li>
          </ul>
          <Link href="/academics">
            <Button className=" mt-4" variant="primary">
              વધુ જાણો
            </Button>
          </Link>
        </div>

      </div>

    </Section>
  )
}

export default Acadmics
