'use client'

import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { H3 } from '@/app/ui/H3'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 gsap.registerPlugin(SplitText, ScrollTrigger)

function Acadmics() {
  let pathname = usePathname()
  const pRef = useRef(null)
  const containerRef = useRef(null)

  const h31Ref = useRef(null)
  const h32Ref = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const ul1Ref = useRef(null)
  const ul2Ref = useRef(null)


  useLayoutEffect(() => {
    let ctx
    const split = {current: null}
    let tl1
    let tl2

    if (pathname !== '/') return
    if (!pRef.current || !h31Ref.current || !h32Ref.current || !ul1Ref.current || !ul2Ref.current || !p1Ref.current || !p2Ref.current) return
  

     

      ctx = gsap.context(() => {


        const li1 = gsap.utils.toArray(ul1Ref.current.querySelectorAll('li'))
        const li2 = gsap.utils.toArray(ul2Ref.current.querySelectorAll('li'))


       
        split.current = new SplitText(pRef.current, { type: 'lines, words' })

        gsap.from(split.current.words, {
          y: 60,
          opacity: 0,
          stagger: 0.04,
          duration: 0.8,
          scrollTrigger: {
            trigger: pRef.current,
            start: 'top 85%',

          }
        })

        tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: h31Ref.current,
            start: 'top 85%',
          

          }
        })

        tl1
          .from(h31Ref.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
          })
          .from(p1Ref.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
          }, "-=0.5")
          .from(li1, {
            x: -40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          }, "-=0.3")

         tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: h32Ref.current,
            start: 'top 85%',

          }
        })

        tl2
          .from(h32Ref.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
          })
          .from(p2Ref.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
          }, "-=0.5")
          .from(li2, {
            x: -40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          }, "-=0.3")
     
    
      }, containerRef)
   

    

    return () => {
      ctx?.revert()
      split.current?.revert()
    }
  }, [pathname])

  return (
    <Section ref={containerRef} className="bg-[var(--bg)] flex flex-col gap-16">

      <H2 className='text-center'>Academics</H2>


      <P ref={pRef} className='text-center'>
        Our academic programs inspire students to learn, think critically,
        and build strong knowledge for future success.
      </P>


      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }} className=' md:text-[2.6rem] ' >Primary </H2>
          <H3 ref={h31Ref} className=' text-[var(--text-primary)]'>Grade Levels 1 to 8 </H3>

          <P ref={p1Ref} className=' line-clamp-2'>
            Our curriculum builds strong foundations in mathematics, science, language, and social studies while encouraging creativity and hands-on learning.
          </P>

          <ul ref={ul1Ref} className=" space-y-2 list-disc pl-5 text-gray-600">
            <li>Activity-based learning</li>
            <li>Project-based learning</li>
            <li>Skill development</li>
            <li>Expert teachers</li>
            <li>STEM education</li>
            <li>Arts and music programs</li>
          </ul>
<Link href="/academics">
          <Button className=" mt-4" variant="primary">
            Learn More
          </Button>
          </Link>
        </div>

        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }} className='  md:text-[2.6rem] '>High Education</H2>
          <H3 ref={h32Ref} className=' text-[var(--text-primary)]'>Grade Levels 9 to 12</H3>

          <P ref={p2Ref} className='line-clamp-2'>
            Our high school program prepares students for college and future  careers through advanced courses and personalized guidance.
          </P>

          <ul ref={ul2Ref} className=" space-y-2 list-disc pl-5 text-gray-600">
            <li>Advanced Placement (AP) courses</li>
            <li>College preparatory curriculum</li>
            <li>Career counseling and guidance</li>
            <li>Extracurricular activities</li>
            <li>STEM clubs and competitions</li>
            <li>Arts and sports programs</li>
          </ul>
<Link href="/academics">
          <Button className=" mt-4" variant="primary">
            Learn More
          </Button>
          </Link>
        </div>

      </div>

    </Section>
  )
}

export default Acadmics
