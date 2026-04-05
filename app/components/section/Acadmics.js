'use client'

import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { H3 } from '@/app/ui/H3'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

function Acadmics() {

  const pRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger)

    const ctx = gsap.context(() => {

      const descS = new SplitText(pRef.current, {
        type: 'words',
      })

      const li1 = gsap.utils.toArray('.ul1 li')
      const li2 = gsap.utils.toArray('.ul2 li')

      // 🔹 Paragraph animation
      gsap.from(descS.words, {
        y: 60,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: pRef.current,
          start: 'top 80%',
        }
      })

      // 🔹 Card 1 Timeline
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.h3',
          start: 'top 80%',
        
        }
      })

      tl1
        .from('.h3', {   // ✅ FIXED
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .from('.p1', {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },"-=0.5")
        .from(li1, {
          x: -40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        },"-=0.3")
      
      // 🔹 Card 2 Timeline
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.h31',
          start: 'top 80%',
          
        }
      })

      tl2
        .from('.h31', {   // ✅ FIXED
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .from('.p2', {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },"-=0.5")
        .from(li2, {
          x: -40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        },"-=0.3")
       

    })

    return () => ctx.revert()
  }, [])

  return (
    <Section className="bg-[var(--bg)] flex flex-col gap-16">

      <H2 className='text-center'>Academics</H2>

      <div ref={pRef}>
        <P className='text-center'>
          Our academic programs inspire students to learn, think critically,
          and build strong knowledge for future success.
        </P>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2>Primary & Middle</H2>
          <H3 className='h3 text-[var(--text-primary)]'>Grade Levels 1–8</H3>

          <P className='p1 line-clamp-2'>
            Our curriculum builds strong foundations in mathematics, science, language, and social studies while encouraging creativity and hands-on learning.
          </P>

          <ul className="ul1 space-y-2 list-disc pl-5 text-gray-600">
            <li>Activity-based learning</li>
            <li>Project-based learning</li>
            <li>Skill development</li>
            <li>Expert teachers</li>
            <li>STEM education</li>
            <li>Arts and music programs</li>
          </ul>

          <Button className=" mt-4" variant="primary">
            Learn More
          </Button>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl shadow-md space-y-4 bg-[var(--bg-light)]">
          <H2>High Education</H2>
          <H3 className='h31 text-[var(--text-primary)]'>Grade Levels 9–12</H3>

          <P className='p2 line-clamp-2'>
            Our high school program prepares students for college and future  careers through advanced courses and personalized guidance.        </P>

          <ul className="ul2 space-y-2 list-disc pl-5 text-gray-600">
            <li>Advanced Placement (AP) courses</li>
            <li>College preparatory curriculum</li>
            <li>Career counseling and guidance</li>
            <li>Extracurricular activities</li>
            <li>STEM clubs and competitions</li>
            <li>Arts and sports programs</li>
          </ul>

          <Button className=" mt-4" variant="primary">
            Learn More
          </Button>
        </div>

      </div>

    </Section>
  )
}

export default Acadmics