'use client'

import React, { useEffect, useRef } from 'react'

import { Lilita_One } from 'next/font/google'
import Section from '@/app/ui/Section'
import Button from '@/app/ui/Button'



function HomeClient() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const buttonsRef = useRef(null)
  const animatedRef = useRef(false)





  // useEffect(() => {

  //   const runAnimation = () => {
  //     if (animatedRef.current) return
  //     animatedRef.current = true

  //     const ctx = gsap.context(() => {

  //       gsap.to(titleRef.current, {
  //         backgroundPosition: '200% 50%',
  //         duration: 3,
  //         ease: 'linear',
  //         repeat: -1,
  //         yoyo: true,
  //       })

  //       // Entrance animation using fromTo
  //       const tl = gsap.timeline()
  //       tl.fromTo(
  //         titleRef.current,
  //         { y: -80, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
  //       ).fromTo(
  //         buttonsRef.current,
  //         { scale: 0.4, opacity: 0 },
  //         { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
  //         '-=0.5'
  //       )
  //     }, containerRef)
  //     return () => ctx.revert()
  //   }

  //   const handler = () => requestAnimationFrame(() => runAnimation())

  //   // Listen for loaderFinished event
  //   window.addEventListener('loaderFinished', handler)

  //   // Run immediately if loader already finished
  //   if (sessionStorage.getItem('school-loader-done')) {
  //     console.log('Loader already finished → running animation immediately')
  //     handler()
  //   }

  //   return () => window.removeEventListener('loaderFinished', handler)
  // }, [])

  return (
    <main
      ref={containerRef}
      className="bg-[var(--bg)]  bg-cover bg-no-repeat xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]  "
    >
      <Section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

  {/* Left Content */}
  <div className="space-y-6">

    <h1 className="text-4xl sm:text-5xl lg:text-6xl  bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] bg-clip-text text-transparent font-[900] leading-tight capitalize">
      Shree Shivam Vidhyalaya
    </h1>

    <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
      At Shree Shivam Vidhyalaya, we nurture young minds and inspire a love for learning. Our school provides quality education with academics and activities, creating a supportive environment where every student can grow and succeed
    </p>

    {/* Admission Buttons */}
    <div className="flex flex-wrap gap-4 pt-2">
      <Button variant="outline">
        1 to 8 Admissions Open
      </Button>

      <Button variant="outline">
        9 to 12 Admissions Open
      </Button>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        Contact Us
      </Button>

      <Button variant="dark">
        Admissions
      </Button>
    </div>

  </div>

  {/* Image */}
  <div>
    <img
      className="w-full h-auto object-cover rounded-xl shadow-lg"
      src="/image/hero_4.webp"
      alt="School Building"
    />
  </div>

</Section>
    </main>
  )
}

export default HomeClient
