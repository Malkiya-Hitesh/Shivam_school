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
        
       <Button   variant='outline'> what we are </Button>

        
        <H2  style={{ color: 'var(--text-w)' }} className="mt-6 max-w-4xl">
          shivam school - Where Learning Meets Excellence
        </H2>

        {/* Supporting Line */}
        <P  ref={descRef} className="mt-6 max-w-2xl text-white/90 ">
          We are committed to providing holistic education that empowers students with knowledge, character, and confidence to succeed in life.
        </P>

        <Button  ref={ctaRef}   variant='primary' className='mt-8'>
          view Results
        </Button>
      </div>
  </section>
  )
}

export default Hero
