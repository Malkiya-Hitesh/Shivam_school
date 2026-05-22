'use client'
import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger)

const curriculums = [
  {
    title: 'પ્રાથમિક વિભાગ',
    buttons: ['ધોરણ : ૧ થી ૫', 'ધોરણ : ૬ થી ૮'],
    desc: 'શ્રી શિવમ વિદ્યાલયમાં પ્રાથમિક વિભાગ (ધો. ૧ થી ૮) માં ગણિત, ગુજરાતી, વિજ્ઞાન અને સામાજિક વિજ્ઞાનનો મજબૂત પાયો નાખવામાં આવે છે. સ્માર્ટ ક્લાસ અને પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા બાળકમાં શીખવાની જિજ્ઞાસા જગાડવામાં આવે છે.',
    image: '/image/1.webp',
    reverse: false,
  },
  {
    title: 'માધ્યમિક વિભાગ',
    buttons: ['ધોરણ : ૯', 'ધોરણ : ૧૦'],
    desc: 'શ્રી વજીબા વિદ્યાલયમાં માધ્યમિક વિભાગ (ધો. ૯-૧૦) માં GSEB બોર્ડની પરીક્ષા માટે સંપૂર્ણ તૈયારી કરાવવામાં આવે છે. ૨૦ અનુભવી શિક્ષકો દ્વારા દરેક વિષયની ઊંડી સમજ આપવામાં આવે છે.',
    image: '/image/1.webp',
    reverse: true,
  },
  {
    title: 'ઉચ્ચ માધ્યમિક વિભાગ',
    buttons: ['ધોરણ : ૧૧', 'ધોરણ : ૧૨ આર્ટ્સ'],
    desc: 'શ્રી વજીબા વિદ્યાલયમાં ઉચ્ચ માધ્યમિક આર્ટ્સ વિભાગ (ધો. ૧૧-૧૨) માં વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ અને કારકિર્દી માટે સક્ષમ બનાવવામાં આવે છે. વક્તૃત્વ, નેતૃત્વ અને વ્યક્તિત્વ વિકાસ પર વિશેષ ભાર મૂકવામાં આવે છે.',
    image: '/image/1.webp',
    reverse: false,
  },
]

function Curiculam() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const cardsRef = useRef([])
const pathname = usePathname()
useLayoutEffect(() => {
    const cards = cardsRef.current
    const wrapper = wrapperRef.current

    const setHeight = () => {
      const maxHeight = Math.max(...cards.map((c) => c.offsetHeight))
      wrapper.style.height = `${maxHeight}px`
    }
    setHeight()
    window.addEventListener('load', setHeight)

    const ctx = gsap.context(() => {
      gsap.set(cards[0], { y: 0, scale: 1, opacity: 1, zIndex: 1 })
      cards.forEach((card, i) => {
        if (i === 0) return
        gsap.set(card, { y: '100%', scale: 1, opacity: 1, zIndex: i + 1 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '95% bottom',
          end: `+=${cards.length * 800}`,
          scrub: 1,
          pin: true,
        
            markers: true,
        },
      })

      cards.forEach((_, i) => {
        if (i === 0) return

        tl.to(cards[i - 1], {
          scale: 0.95,
          opacity: 0.6,
          zIndex: i,
          duration: 1,
          ease: 'power2.inOut',
        })

        tl.to(
          cards[i],
          {
            y: '0%',
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
      })
    }, sectionRef)

    return () => {
      window.removeEventListener('load', setHeight)
      ctx.revert()
    }
  }, [pathname])

  return (
    <Section ref={sectionRef} className='flex flex-col gap-8 bg-[var(--bg-light)]'>
      <H2 className='text-center'>કાર્યક્ષેત્ર</H2>
      <P className='text-center mt-4 p-text'>
       શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયમાં GSEB ગુજરાતી માધ્યમ આધારિત અભ્યાસક્રમ ધોરણ ૧ થી ૧૨ સુધી વ્યવસ્થિત રીતે ગોઠવવામાં આવ્યો છે — જેમાં ગણિત, વિજ્ઞાન, ભાષા, સામાજિક વિજ્ઞાન અને કળા સહિત સર્વાંગી વિકાસ પર ભાર મૂકવામાં આવે છે.
      </P>
                                                     
      <div ref={wrapperRef} className='relative w-full overflow-hidden'>
        {curriculums.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute top-0 left-0 w-full bg-[var(--bg)] rounded-2xl shadow-lg
              border border-gray-200 grid lg:grid-cols-2 gap-12 p-8 overflow-hidden`}
          >
            <div className={`w-full flex items-center justify-center ${item.reverse ? 'lg:order-last' : ''}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className={`flex flex-col gap-5 ${item.reverse ? 'lg:order-first' : ''}`}>
              <H2 an={false}>{item.title}</H2>
              <div className='flex flex-row gap-2 mt-4'>
                {item.buttons.map((btn, i) => (
                  <Button key={i} variant='outline'>{btn}</Button>
                ))}
              </div>
              <P>{item.desc}</P>
              
              <Button className='mt-4' variant='primary'>Download Fee Structure</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Curiculam