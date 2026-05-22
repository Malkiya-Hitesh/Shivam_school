'use client'
import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import gsap from 'gsap'

import React, { useLayoutEffect, useRef } from 'react'

function Hero() {

let sectionRef =useRef(null)

let descRef = useRef(null)
let ctaRef = useRef(null)


  useLayoutEffect(() => {
let ctx = gsap.context(() => {
let tl =  gsap.timeline()

tl.fromTo( descRef.current ,{y: 50, opacity: 0},{y: 0, opacity: 1.5, duration: 0.8, ease: 'power3.out'},'>0.2')
.fromTo( ctaRef.current ,{y: 50, opacity: 0},{y: 0, opacity: 1.5, duration: 0.8, ease: 'power3.out'},'-=0.5')
},sectionRef)


return () => ctx.revert()
  }, [])
  return (
  <section  ref={sectionRef} className='  relative xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]   r bg-[url("/image/hero_4.webp")]  bg-cover bg-center  '>
    <div className="absolute inset-0 bg-black/70" />

     
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 lg:py-44 text-white">
        
       <Button   variant='outline'> અમારા વિશે </Button>

        
        <H2  style={{ color: 'var(--text-w)' }} className="mt-6 max-w-4xl">
         શ્રી શિવમ વિદ્યાલય — જ્યાં જ્ઞાન અને સંસ્કારનો સંગમ થાય છે
        </H2>

        {/* Supporting Line */}
        <P  ref={descRef} className="mt-6 max-w-2xl text-white/90 ">
          ૧૬ વર્ષથી ટ્રસ્ટી શ્રી વલ્લભભાઈ રામાણી અને નિયામક શ્રી ચિરાગ રામાણીના માર્ગદર્શન હેઠળ અમે ૪૫૦ થી વધુ વિદ્યાર્થીઓને માત્ર ભણાવતા નથી — પણ તેમને જીવન જીવતાં શીખવીએ છીએ. જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસ સાથે દરેક બાળક અહીંથી ઉજ્જવળ ભવિષ્ય તરફ આગળ વધે છે.
        </P>

        <Button  ref={ctaRef}   variant='primary' className='mt-8'>
          view Results
        </Button>
      </div>
  </section>
  )
}

export default Hero
