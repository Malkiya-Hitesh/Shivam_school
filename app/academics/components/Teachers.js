'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { H2 } from '@/app/ui/H2'
import Section from '@/app/ui/Section'


gsap.registerPlugin(ScrollTrigger)

const teachers = [
  { name: 'Anjali Patel', subject: 'Maths', img: '/image/t1.avif' },
  { name: 'Rahul Mehta', subject: 'Science', img: '/image/t1.avif' },
  { name: 'Kavita Shah', subject: 'English', img: '/image/t1.avif' },
  { name: 'Suresh Joshi', subject: 'Computer', img: '/image/t1.avif' },
  { name: 'Neha Desai', subject: 'Biology', img: '/image/t1.avif' },
  { name: 'Amit Trivedi', subject: 'Physics', img: '/image/t1.avif' },
  { name: 'Pooja Rana', subject: 'Gujarati', img: '/image/t1.avif' },
  { name: 'Vikas Parmar', subject: 'History', img: '/image/t1.avif' },
  { name: 'Anjali Patel', subject: 'Maths', img: '/image/t1.avif' },
  { name: 'Rahul Mehta', subject: 'Science', img: '/image/t1.avif' },
  { name: 'Kavita Shah', subject: 'English', img: '/image/t1.avif' },
  { name: 'Suresh Joshi', subject: 'Computer', img: '/image/t1.avif' },
  { name: 'Neha Desai', subject: 'Biology', img: '/image/t1.avif' },
  { name: 'Amit Trivedi', subject: 'Physics', img: '/image/t1.avif' },
  { name: 'Pooja Rana', subject: 'Gujarati', img: '/image/t1.avif' },
  { name: 'Vikas Parmar', subject: 'History', img: '/image/t1.avif' },
]

export default function Teachers() {
  const trackRef = useRef(null)
  const cardsRef = useRef([])

useLayoutEffect(() => {
    const update = () => {
      const viewportCenter = window.innerWidth / 2
      const maxDistance = window.innerWidth / 2 + 200 // off-screen buffer

      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const distance = Math.abs(viewportCenter - cardCenter)

        // 0 (far) → 1 (center)
        const progress = gsap.utils.clamp(
          0,
          1,
          1 - distance / maxDistance
        )

        const scale = gsap.utils.interpolate(0.10, 1.30, progress)
        const opacity = gsap.utils.interpolate(0.10, 1, progress)

        gsap.to(card, {
          scale,
          opacity,
          duration: 0.25,
          ease: 'power3.out',
        })
      })
    }


    gsap.ticker.add(update)
    update() // first run

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])



  return (
    <Section className=' flex flex-col  gap-12'>
     
        <H2 className='text-center'> Our Teachers </H2>
    


      <div className="w-full overflow-x-auto pt-11 pb-11 no-scrollbar">
        <div
          ref={trackRef}
          className="flex min-[1048px]:gap-8 gap-6  max-[768px]:gap-4 max-[640px]:gap-2  px-6 no-scrollbar"
          style={{ willChange: 'transform' }}
        >
          {teachers.map((t, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="min-[1048px]:w-58  w-48 max-[768px]:w-38  max-[640px]:w-50  shrink-0  p-6 text-center bg-white "
            >
              <div className=" aspect-square " >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full rounded-full object-cover border-4"
                  style={{ borderColor: 'var(--color-primary)' }}
                />
              </div>

              <h3 className="text-[20px] sm:text-[17px] md:text-[21px]  lg:text-[23px] xl:text-[25px] font-semibold" style={{ color: 'var(--color-text)' }}>
                {t.name}
              </h3>
              <p className="mt-1 font-medium text-[15px] sm:text-[12px] md:text-[14px] lg:text-[16px]  xl:text-[18px]  " style={{ color: 'var(--color-accent)' }}>
                {t.subject}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
