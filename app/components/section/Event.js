

'use client'
import React, { useEffect, useRef } from 'react'
import H1 from '../ui2/H1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { row: 1, col: 1, img: '/image/1.webp' },
  { row: 1, col: 3, img: '/image/2.webp' },
  { row: 1, col: 5, img: '/image/3.webp' },
  { row: 2, col: 2, img: '/image/4.webp' },
  { row: 2, col: 4, img: '/image/5.webp' },
  { row: 3, col: 1, img: '/image/6.webp' },
  { row: 3, col: 3, img: '/image/7.webp' },
  { row: 3, col: 5, img: '/image/8.webp' },
  { row: 4, col: 2, img: '/image/9.webp' },
  { row: 4, col: 4, img: '/image/10.webp' },
  { row: 5, col: 1, img: '/image/11.webp' },
  { row: 5, col: 3, img: '/image/18.webp' },
  { row: 5, col:5, img: '/image/10.webp' },
  // { row: 6, col: 2, img: '/image/11.webp' },
  // { row: 6, col: 4, img: '/image/12.webp' },
  // { row: 7, col: 1, img: '/image/13.webp' },
  // { row: 7, col: 3, img: '/image/14.webp' },
  // { row: 7, col: 5, img: '/image/15.webp' },
  // { row: 8, col: 2, img: '/image/16.webp' },
  // { row: 8, col: 4, img: '/image/17.webp' },
  // { row: 9, col: 1, img: '/image/18.webp' },
  // { row: 9, col: 3, img: '/image/19.webp' },
  // { row: 9, col: 5, img: '/image/20.webp' },
]

export default function EventSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
  

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.4,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-white py-10 flex flex-col items-center mt-3 gap-24">
      <H1 data="School Events" />

      <div
        ref={sectionRef}
        className="grid grid-cols-5 w-full max-w-7xl gap-y-10"
      >
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (cardsRef.current[index] = el)}
            style={{
              gridColumn: item.col,
              gridRow: item.row,
            }}
            className="will-change-transform"
          >
            <div
              className="aspect-square w-[80%] rounded-xl bg-cover bg-center contrast-[70%]"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
