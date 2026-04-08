import H1 from '@/app/components/ui2/H1'
import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import React from 'react'

function Hero() {
  return (
  <section className='  relative xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]   r bg-[url("/image/hero_4.webp")]  bg-cover bg-center  '>
    <div className="absolute inset-0 bg-black/70" />

     
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 lg:py-44 text-white">
        
       <Button variant='outline'> what we are </Button>

        
        <H2 style={{ color: 'var(--text-w)' }} className="mt-6 max-w-4xl">
          shivam school - Where Learning Meets Excellence
        </H2>

        {/* Supporting Line */}
        <P className="mt-6 max-w-2xl text-white/90 ">
          We are committed to providing holistic education that empowers students with knowledge, character, and confidence to succeed in life.
        </P>

        <Button variant='primary' className='mt-8'>
          view Results
        </Button>
      </div>
  </section>
  )
}

export default Hero
