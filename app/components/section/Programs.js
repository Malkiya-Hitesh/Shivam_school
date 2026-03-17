'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import H1 from '../ui2/H1'
import H3 from '../ui2/H3'
import P from '../ui2/P'

gsap.registerPlugin(ScrollTrigger)

export default function Programs() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      
      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',

            scrub: true,
            toggleActions: undefined
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const programs = [
    {
      title: 'AI & Robotics Program',
      desc: 'Hands-on learning with Artificial Intelligence, robotics kits, and logical thinking.',
    },
    {
      title: 'Coding for Kids',
      desc: 'Scratch, basic programming, and problem-solving skills from an early age.',
    },
    {
      title: 'STEM Innovation Lab',
      desc: 'Science, Technology, Engineering, and Math through experiments and projects.',
    },
    {
      title: 'Digital Skills Program',
      desc: 'Computer fundamentals, internet safety, and creative digital tools.',
    },
    {
      title: 'Spoken English & Communication',
      desc: 'Confidence building through spoken English, presentations, and debates.',
    },
    {
      title: 'Career Guidance & Skill Development',
      desc: 'Career awareness, aptitude building, and real-world skill exposure.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className=" flex flex-col  gap-8  lg:py-18 xl:py-20 md:py-13 sm:py-8  py-5 xl:px-13 lg:px-10 md:px-7 sm:px-5 px-3 bg-white text-slate-900 ">
      <div className="text-center">
        <H1 data={'Upcoming Programs'} />
     
      </div>
      

      <div className="relative">
        <div className="  max-[640px]:hidden absolute left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2" />

        {programs.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`relative mb-10 flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Circle marker */}
            <div className="  max-[640px]:hidden absolute left-1/2 top-6 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 z-10" />

            {/* Program card */}
            <div className=" will-change-transform w-[45%] max-[640px]:w-[99%] bg-slate-50 p-8 rounded-2xl shadow-md">
              <H3  className="text-lg sm:text-[19px] md:text-[21px]  lg:text-[23px] xl:text-[25px] font-semibold text-blue-600"
                data={item.title} />
              <P className="mt-3 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px]  xl:text-[18px] leading-relaxed line-clamp-2 text-slate-600" 
                data={item.desc} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
