'use client'

import React, { useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import{ Span} from '@/app/ui/Span'

import { H2 } from '@/app/ui/H2'
import Section from '@/app/ui/Section'
import { usePathname } from 'next/navigation'
import { P } from '@/app/ui/P'
gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: "શ્રી શિવમ વિદ્યાલયમાં કયા ધોરણ સુધી અભ્યાસ થાય છે?",
    a: "શ્રી શિવમ વિદ્યાલયમાં ધોરણ ૧ થી ૮ સુધી અને શ્રી વજીબા વિદ્યાલયમાં ધોરણ ૯ થી ૧૨ આર્ટ્સ સુધી અભ્યાસ થાય છે.",
  },
  {
    q: "શાળાનું માધ્યમ કયું છે?",
    a: "અમારી શાળા સંપૂર્ણ ગુજરાતી માધ્યમમાં છે અને ગુજરાત બોર્ડ (GSEB) સાથે સંલગ્ન છે.",
  },
  {
    q: "શાળામાં પ્રવેશ કેવી રીતે મેળવવો?",
    a: "પ્રવેશ માટે શાળાની વેબસાઇટ પર ઓનલાઇન અરજી કરો અથવા સીધા શાળાએ આવીને સંપર્ક કરો. અમારી ટીમ તમને સંપૂર્ણ માર્ગદર્શન આપશે.",
  },
  {
    q: "શાળામાં કઈ કઈ સુવિધાઓ છે?",
    a: "અમારી શાળામાં સ્માર્ટ ક્લાસ, કોમ્પ્યુટર લેબ, વિશાળ રમતગમત મેદાન, સમૃદ્ધ પુસ્તકાલય અને સુરક્ષિત પરિવહન સેવા ઉપલબ્ધ છે.",
  },
  {
    q: "શાળાની સ્થાપના ક્યારે થઈ?",
    a: "અમારી શાળાની સ્થાપના ૧૬ વર્ષ પહેલાં થઈ હતી. ત્યારથી આજ સુધી અમે ૪૫૦ થી વધુ વિદ્યાર્થીઓને ગુણવત્તાસભર શિક્ષણ આપી રહ્યા છીએ.",
  },
  {
    q: "શાળામાં કેટલા શિક્ષકો છે?",
    a: "અમારી શાળામાં ૨૦ અનુભવી અને સમર્પિત શિક્ષકો છે જે દરેક વિદ્યાર્થીના વ્યક્તિગત વિકાસ પર ધ્યાન આપે છે.",
  },
  {
    q: "શાળા ક્યાં આવેલી છે?",
    a: "અમારી શાળા કામળૂર, જસદણ, રાજકોટ, ગુજરાતમાં આવેલી છે. વિદ્યાર્થીઓ માટે પરિવહન સુવિધા પણ ઉપલબ્ધ છે.",
  },
  {
    q: "શાળાનું સંચાલન કોણ કરે છે?",
    a: "શાળાનું સંચાલન ટ્રસ્ટી શ્રી વલ્લભભાઈ રામાણી, નિયામક શ્રી ચિરાગ રામાણી અને મેનેજમેન્ટ ટ્રસ્ટી શ્રી જયેશ ધોળારિયાના કુશળ નેતૃત્વ હેઠળ થાય છે.",
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
      <H2 className={"text-center"} > વારંવાર પૂછાતા પ્રશ્નો </H2>


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
              <Span className={"font-semibold"} >{item.q}</Span>
              <span className="">
                {active === i ? '−' : '+'}
              </span>
            </button>

            <div
              ref={el => (contentRefs.current[i] = el)}
              className="px-5 text-[13px] sm:text-[14px] md:text-[16px]  lg:text-[18px] xl:text-[20px] text-gray-600 overflow-hidden"
            >
              <P className={"pb-4"} >{item.a}</P>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
