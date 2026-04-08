'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '@/app/ui/Section'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Facilities() {
  const cardsRef = useRef([])  // ✅ Array of refs instead of single ref
  const sectionRef = useRef(null)
  const facilities = [
    { title: 'Smart Classrooms', desc: 'Digitally enabled classrooms for interactive and effective learning.' },
    { title: 'Science & Computer Labs', desc: 'Well-equipped labs encouraging experimentation and innovation.' },
    { title: 'Library', desc: 'A rich collection of academic and reference resources.' },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports for physical development.' },
    { title: 'Transport', desc: 'Safe and reliable transportation with trained staff.' },
    { title: 'Safety & Security', desc: 'CCTV surveillance and disciplined campus environment.' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          duration: 0.6,
          y: 30,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,          // 🔥 individual trigger
            start: 'top 85%',
           end: 'top 30%',
           

            scrub: true,

            markers: true,
          },
        })
      })


    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section className="">
      <H2 className="text-center mb-10">Our Facilities</H2>
      <P className="text-center mb-12 text-gray-600">
        We provide state-of-the-art facilities to support our students&apos; academic and extracurricular growth.
      </P>

      <div ref={sectionRef} className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}  // ✅ Assign each card to its index
          >
            <div className=" rounded-lg shadow-md p-5 h-full flex flex-col items-center text-center bg-[var(--bg-light)]">
              <div className="relative w-full aspect-[4/3] mb-4">
                <Image
                  src="/image/hero_4.webp"
                  alt={facility.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}