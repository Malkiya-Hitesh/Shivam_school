'use client'

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Section from '@/app/ui/Section'
import Button from '@/app/ui/Button'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(SplitText, ScrollTrigger)

function HomeClient() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  let pathname = usePathname()
  const imgRef = useRef(null)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    let ctx
    let titleSplit, descSplit

    if (pathname !== '/') return
    if (!titleRef.current || !descRef.current) return

    ctx = gsap.context(() => {
      const tl = gsap.timeline()

      titleSplit = new SplitText(titleRef.current, {
        type: 'chars words',
      })

      descSplit = new SplitText(descRef.current, {
        type: 'lines, words',
      })

      gsap.from(imgRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
      })

      tl.from(titleSplit.chars, {
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
      })

      tl.from(descSplit.lines, {
        y: 60,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',

      }, '-=0.5')

      // ✅ BUTTON BACK
      gsap.from(buttonRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 85%',
          invalidateOnRefresh: true,
        },
      })

    }, containerRef)




    return () => {


      ctx?.revert()
      titleSplit?.revert()
      descSplit?.revert()
    }
  }, [pathname])

  return (
    <main
      ref={containerRef}
      className="bg-[var(--bg)]  bg-cover bg-no-repeat xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]  "
    >
      <Section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        <div className=" lg:space-y-6 md:space-y-4 space-y-3">

          <h1 ref={titleRef} className="text-5xl sm:text-5xl lg:text-6xl   text-[var(--text-primary)] font-[900] leading-tight ">
            Shree Shivam Vidhyalaya
          </h1>

          <p ref={descRef} className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
            At Shree Shivam Vidhyalaya, we nurture young minds and inspire a love for learning. Our school provides quality education with academics and activities, creating a supportive environment where every student can grow and succeed
          </p>



          {/* Action Buttons */}
          <div ref={buttonRef} className="pt-5 sm:pt-7  md:pt-9 lg:pt-12 flex flex-wrap gap-4">
            <Link href="/result">
              <Button variant="primary">
                View Results
              </Button>
            </Link>

            <Link href="/admissions">

              <Button variant="dark">
                Admissions
              </Button>
            </Link>
          </div>

        </div>

        <div ref={imgRef} className="w-full h-auto rounded-xl overflow-hidden shadow-lg hidden lg:block">
          <img
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            src="/image/hero_4.webp"
            alt="School Building"
            loading="eager"
          />
        </div>

      </Section>
    </main>
  )
}

export default HomeClient
