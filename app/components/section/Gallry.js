'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Section from '@/app/ui/Section'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function Gallery() {
    const containerRef = useRef(null)
    const subRef = useRef(null)

    const images = [
        '/image/1.webp', '/image/2.webp', '/image/3.webp', '/image/4.webp','/image/5.webp', '/image/6.webp', '/image/7.webp', '/image/8.webp', '/image/9.webp' ,      
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── SplitText for subtitle ─────────────────────
            const split = new SplitText(subRef.current, {
                type: 'lines,words',
                linesClass: 'line',
            })

            split.lines.forEach((line) => {
                line.style.overflow = 'hidden'
                line.style.paddingBottom = '4px'
            })

            gsap.from(split.words, {
                opacity: 0,
                y: 28,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.04,
                scrollTrigger: {
                    trigger: subRef.current,
                    start: 'top 90%',
                },
            })


            gsap.set('.gallery-card', { opacity: 0, scale: 0.96 })

            ScrollTrigger.batch('.gallery-card', {
                start: 'top 80%',
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        ease: 'power3.out',
                        stagger: 0.08,
                    })
                },
            })
        }, containerRef)
            setTimeout(() => ScrollTrigger.refresh(), 500)

            return () => ctx.revert()
        }, [])

        return (
            <Section ref={containerRef}>
                <H2 className="text-center mb-10">Gallery</H2>

                <P ref={subRef} className="text-center mb-12 text-gray-600">
                    Explore our vibrant gallery showcasing the diverse activities and events
                    that make our school a dynamic and engaging place for students.
                </P>

                {/* Masonry Columns */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5">
                    {images.map((src, i) => (
                        <div key={i} className="gallery-card break-inside-avoid mb-4 sm:mb-5">
                            <div className="relative group overflow-hidden rounded-xl">
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                                    priority={i < 4}
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                                    <span className="m-3 bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
                                        Sports Day {i + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        )
    }