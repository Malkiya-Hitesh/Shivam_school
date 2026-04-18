'use client'
import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger)

const curriculums = [
  {
    title: 'Primary',
    buttons: ['std : 1 to 5', 'std : 6 to 10'],
    desc: 'Our primary curriculum focuses on building a strong foundation in core subjects such as mathematics, language arts, science, and social studies.',
    image: '/image/1.webp',
    reverse: false,
  },
  {
    title: 'Secondary',
    buttons: ['std : 6 to 9', 'age : 10 to 14'],
    desc: 'Our secondary curriculum builds on the foundation established in primary school, offering more advanced courses in a variety of subjects.',
    image: '/image/1.webp',
    reverse: true,
  },
  {
    title: 'Higher Secondary',
    buttons: ['std : 10 to 12', 'age : 14 to 17'],
    desc: 'Our higher secondary curriculum prepares students for university and beyond, with a focus on critical thinking and independent learning.',
    image: '/image/1.webp',
    reverse: false,
  },
]

function Curiculam() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const cardsRef = useRef([])
const pathname = usePathname()
useLayoutEffect(() => {
    const cards = cardsRef.current
    const wrapper = wrapperRef.current

    const setHeight = () => {
      const maxHeight = Math.max(...cards.map((c) => c.offsetHeight))
      wrapper.style.height = `${maxHeight}px`
    }
    setHeight()
    window.addEventListener('load', setHeight)

    const ctx = gsap.context(() => {
      gsap.set(cards[0], { y: 0, scale: 1, opacity: 1, zIndex: 1 })
      cards.forEach((card, i) => {
        if (i === 0) return
        gsap.set(card, { y: '100%', scale: 1, opacity: 1, zIndex: i + 1 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '95% bottom',
          end: `+=${cards.length * 800}`,
          scrub: 1,
          pin: true,
        
            markers: true,
        },
      })

      cards.forEach((_, i) => {
        if (i === 0) return

        tl.to(cards[i - 1], {
          scale: 0.95,
          opacity: 0.6,
          zIndex: i,
          duration: 1,
          ease: 'power2.inOut',
        })

        tl.to(
          cards[i],
          {
            y: '0%',
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
      })
    }, sectionRef)

    return () => {
      window.removeEventListener('load', setHeight)
      ctx.revert()
    }
  }, [pathname])

  return (
    <Section ref={sectionRef} className='flex flex-col gap-8 bg-[var(--bg-light)]'>
      <H2 className='text-center'>Curiculam</H2>
      <P className='text-center mt-4 p-text'>
        We offer a comprehensive curriculum that covers a wide range of subjects,
        including mathematics, language arts, science, literature, history, and the arts.
      </P>

      <div ref={wrapperRef} className='relative w-full overflow-hidden'>
        {curriculums.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute top-0 left-0 w-full bg-[var(--bg)] rounded-2xl shadow-lg
              border border-gray-200 grid lg:grid-cols-2 gap-12 p-8 overflow-hidden`}
          >
            <div className={`w-full flex items-center justify-center ${item.reverse ? 'lg:order-last' : ''}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className={`flex flex-col gap-5 ${item.reverse ? 'lg:order-first' : ''}`}>
              <H2 an={false}>{item.title}</H2>
              <div className='flex flex-row gap-2 mt-4'>
                {item.buttons.map((btn, i) => (
                  <Button key={i} variant='outline'>{btn}</Button>
                ))}
              </div>
              <P>{item.desc}</P>
              
              <Button className='mt-4' variant='primary'>Download Fee Structure</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Curiculam