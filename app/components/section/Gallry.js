'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Section from '@/app/ui/Section'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { usePathname } from 'next/navigation'
gsap.registerPlugin(SplitText, ScrollTrigger)



export default function Gallery() {
    let pathname = usePathname()
    const containerRef = useRef(null)
    const subRef = useRef(null)

    const images = [
        '/image/1.webp', '/image/2.webp', '/image/3.webp',
        '/image/4.webp', '/image/5.webp', '/image/6.webp',
        '/image/7.webp', '/image/8.webp', '/image/9.webp',
    ]


   useLayoutEffect(() => {
        let ctx
let split
       
            ctx = gsap.context(() => {
         split = new SplitText(subRef.current, {
                    type: 'words',
                    linesClass: 'line',
                })

                
                gsap.from(split.words, {
                    opacity: 0,
                    y: 28,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: 0.04,
                    scrollTrigger: {
                        trigger: subRef.current,
                        start: 'top 85%',
                    },
                })


                const cards = containerRef.current.querySelectorAll('.gallery-card')
                gsap.set(cards, { opacity: 0, scale: 0.95, filter: 'blur(10px)' })




                ScrollTrigger.batch(cards, {
                    start: 'top 85%',
                   
                    onEnter: (batch) => {
                        gsap.to(batch, {
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)',
                            stagger: 0.15,
                            duration: 0.7,
                            ease: 'power3.out',
                        })
                    },
                })
            }, containerRef)

            setTimeout(() => ScrollTrigger.refresh(), 500)
       

          return () => {
     
        ctx?.revert()
        split?.revert()
    }
    }, [pathname])

    const renderCard = ({ src, originalIndex }) => (
        <div key={src} className="gallery-card mb-4 sm:mb-5" onMouseMove={(e) => {
  const el = e.currentTarget
  const { offsetX, offsetY } = e.nativeEvent

  // create once
  if (!el._xTo) {
    el._xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3.out" })
    el._yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3.out" })
  }

  // update values (no gsap.to spam)
  el._xTo((offsetX - el.offsetWidth / 2) / 10)
  el._yTo((offsetY - el.offsetHeight / 2) / 10)
}}


          onMouseLeave={(e) => {
  const el = e.currentTarget
  el._xTo && el._xTo(0)
  el._yTo && el._yTo(0)
}}
            >
            <div className="relative group overflow-hidden rounded-xl">
                <Image
                    src={src}
                    alt={`Gallery image ${originalIndex + 1}`}
                    width={500}
                    height={500}
                    className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                    priority={originalIndex < 4}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <span className="m-3 bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
                        Sports Day {originalIndex + 1}
                    </span>
                </div>
            </div>
        </div>
    )

    return (
        <Section ref={containerRef}>
            <H2 className="text-center mb-10">Gallery</H2>

            <P ref={subRef} className="text-center mb-12 text-gray-600">
                Explore our vibrant gallery showcasing the diverse activities and events
                that make our school a dynamic and engaging place for students.
            </P>



            <div className=" columns-1  sm:columns-2 md:columns-3  lg:columns-4 gap-4">
                {images.map((src, index) => (
                    renderCard({ src, originalIndex: index })
                ))}
            </div>
        </Section>
    )
}