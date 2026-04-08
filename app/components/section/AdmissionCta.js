'use client'

import React, { useEffect, useRef } from 'react'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import { waitForFontsReady } from '@/app/lib/waitForFonts'

// Install: npm install gsap
// SplitText requires GSAP Club license — gsap.com/splittext

function AdmissionCta() {
  const headingRef  = useRef(null)
  const paraRef     = useRef(null)
  const btn1Ref     = useRef(null)
  const btn2Ref     = useRef(null)
  const sectionRef  = useRef(null)

  useEffect(() => {
    let ctx

    const init = async () => {
      await waitForFontsReady()
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const { SplitText }     = await import('gsap/SplitText')

      gsap.registerPlugin(ScrollTrigger, SplitText)

      ctx = gsap.context(() => {

        // ── Section background wipe (scrub) ────────────────────────────
        gsap.fromTo(
          sectionRef.current,
          { backgroundSize: '0% 100%' },
          {
            backgroundSize: '100% 100%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1.5,
            },
          }
        )


      

        // ── SplitText: Paragraph — words wipe up line by line ──────────
        if (paraRef.current) {
          const splitP = new SplitText(paraRef.current, {
            type: 'lines,words',
            linesClass: 'p-line',
            wordsClass: 'p-word',
          })

          // Clip-reveal: wrap lines in overflow hidden
          splitP.lines.forEach((line) => {
            line.style.overflow    = 'hidden'
            line.style.paddingBottom = '3px'
          })

          gsap.set(splitP.words, { opacity: 0, y: 30 })

          gsap.to(splitP.words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: {
              amount: 0.55,
              from: 'start',
            },
            scrollTrigger: {
              trigger: paraRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        }

        // ── Buttons — scale + fade with scrub ──────────────────────────
        gsap.set([btn1Ref.current, btn2Ref.current], {
          opacity: 0,
          scale: 0.8,
          y: 24,
        })

        gsap.to([btn1Ref.current, btn2Ref.current], {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: btn1Ref.current,
            start: 'top 90%',
            end: 'top 65%',
            scrub: 1,
          },
        })

      }) 
    }

    init()

    return () => ctx?.revert()
  }, [])

  return (
    <Section
      ref={sectionRef}
      className="text-center py-20 bg-[var(--bg-light)]  " >

      {/* overflow hidden wrapper so rotateX chars don't bleed */}
      <div style={{ overflow: 'hidden', paddingBottom: '6px' }}>
        <H2 >
          Admissions Open
        </H2>
      </div>

      <P ref={paraRef} className="max-w-xl mx-auto mt-4">
        Join Shree Shivam Vidhyalaya and give your child the opportunity
        to learn, grow, and succeed in a supportive environment.
      </P>

      <div className="mt-6 flex justify-center gap-4">
        <button
          ref={btn1Ref}
          className="px-6 py-3 bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Apply Now
        </button>

        <button
          ref={btn2Ref}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:border-[#2A1B7F] hover:text-[#2A1B7F] transition-colors"
        >
          Contact Us
        </button>
      </div>

    </Section>
  )
}

export default AdmissionCta
