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



  const facilities = [
    {

      title: 'Smart Classrooms',
      desc: 'Digitally enabled classrooms for interactive and effective learning.',
    },
    {

      title: 'Science & Computer Labs',
      desc: 'Well-equipped labs encouraging experimentation and innovation.',
    },
    {

      title: 'Library',
      desc: 'A rich collection of academic and reference resources.',
    },
    {

      title: 'Sports Facilities',
      desc: 'Indoor and outdoor sports for physical development.',
    },
    {

      title: 'Transport',
      desc: 'Safe and reliable transportation with trained staff.',
    },
    {

      title: 'Safety & Security',
      desc: 'CCTV surveillance and disciplined campus environment.',
    },
  ]

  // useEffect(() => {

  //   const ctx = gsap.context(() => {
  //     gsap.from(cardsRef.current, {
  //       opacity: 0,
  //       y: 80,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 90%',
  //         end: 'bottom 60%',
  //         scrub :true,
  //       },
  //     })
  //   }, sectionRef)

  //   return () => ctx.revert()
  // }, [])

  return (

    <Section >
      <H2 className="text-center mb-10">Our Facilities</H2>
      <P className="text-center mb-12 text-gray-600">
        We provide state-of-the-art facilities to support our students' academic and extracurricular growth.
      </P>

      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-8' >



        {facilities.map((facility, index) => {
          return <div className='' key={index} >
            <div className='bg-white rounded-lg shadow-md p-5 h-full flex flex-col items-center text-center' >
              <Image
                src={'/image/hero_4.webp'}
                alt={facility.title}
                width={100}
                height={100}
                className='w-full h-auto rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{facility.title}</h3>
              <p className='text-gray-600'>{facility.desc}</p>
            </div>
            
          </div>
        })
        }
      </div>


    </Section>
  )
}
