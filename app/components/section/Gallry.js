'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Section from '@/app/ui/Section'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForFontsReady } from '@/app/lib/waitForFonts'

gsap.registerPlugin(SplitText, ScrollTrigger)

// Distribute images into N columns in a round-robin fashion
function distributeIntoColumns(images, numCols) {
    const cols = Array.from({ length: numCols }, () => [])
    images.forEach((src, i) => {
        cols[i % numCols].push({ src, originalIndex: i })
    })
    return cols
}

export default function Gallery() {
    const containerRef = useRef(null)
    const subRef = useRef(null)

    const images = [
        '/image/1.webp', '/image/2.webp', '/image/3.webp',
        '/image/4.webp', '/image/5.webp', '/image/6.webp',
        '/image/7.webp', '/image/8.webp', '/image/9.webp',
    ]

    // 3 columns on md+, 2 on sm, 1 on mobile
    const col1 = distributeIntoColumns(images, 1)
    const col2 = distributeIntoColumns(images, 2)
    const col3 = distributeIntoColumns(images, 3)
    const col4 = distributeIntoColumns(images, 4)

    useEffect(() => {
        let ctx

        const init = async () => {
            await waitForFontsReady()

            ctx = gsap.context(() => {
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
                        markers: true
                    },
                })

                gsap.set('.gallery-card', { opacity: 0 })

                ScrollTrigger.batch('.gallery-card', {
                    start: 'top 85%',
                    marker: true,
                    onEnter: (batch) => {
                        gsap.to(batch, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.7,
                            ease: 'power3.out',
                        })
                    },
                })
            }, containerRef)

            setTimeout(() => ScrollTrigger.refresh(), 500)
        }

        init()

        return () => ctx?.revert()
    }, [])

    const renderCard = ({ src, originalIndex }) => (
        <div key={src} className="gallery-card mb-4 sm:mb-5">
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

            {/* Mobile: 1 col */}
            <div className="flex gap-4 sm:hidden">
                {col1.map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col">
                        {col.map(renderCard)}
                    </div>
                ))}
            </div>

            {/* Tablet: 2 cols */}
            <div className="hidden sm:flex md:hidden gap-4 sm:gap-5">
                {col2.map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col">
                        {col.map(renderCard)}
                    </div>
                ))}
            </div>

            {/* Desktop: 3 cols */}
            <div className="hidden md:flex lg:hidden gap-4 md:gap-5">
                {col3.map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col">
                        {col.map(renderCard)}
                    </div>
                ))}
            </div>

            <div className="hidden lg:flex gap-4 lg:gap-5">
                {col4.map((col, ci) => (
                    <div key={ci} className="flex-1 flex flex-col">
                        {col.map(renderCard)}
                    </div>
                ))}
            </div>
        </Section>
    )
}