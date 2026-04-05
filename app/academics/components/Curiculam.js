'use client'
import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Curiculam() {
    const sectionRef = useRef(null)
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)

    useEffect(() => {
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current]

        const ctx = gsap.context(() => {
            gsap.set(cards[0], { y: 0, scale: 1, opacity: 1, zIndex: 1 })
            cards.forEach((card, i) => {
                if (i === 0) return
                gsap.set(card, { y: '100%', scale: 1, opacity: 1, zIndex: i + 1 })
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top -=150',
                    end: '+=2500',
                    scrub: 1,
                    pin: true,
                },
            })

            cards.forEach((_, i) => {
                if (i === 0) return

                tl.to(cards[i - 1], {
                    scale: 0.95,
                    opacity: 0.6,
                    duration: 1,
                    ease: 'power2.inOut',
                })

                tl.to(cards[i], {
                    y: '0%',
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                }, '<')
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <Section ref={sectionRef} className='curiculam-section flex flex-col gap-8 bg-[var(--bg-light)]'>
            <H2 className='text-center'>Curiculam</H2>
            <P className='text-center mt-4 p-text'>
                We offer a comprehensive curriculum that covers a wide range of subjects,
                including mathematics, language arts, science, literature, history, and the arts.
            </P>

            {/* This is the key fix — relative container with fixed height, cards are absolute */}
            <div className='relative w-full' style={{ height: '600px' }}>

                <div ref={card1Ref} className='absolute inset-0 curriculum-card grid grid-cols-[0.8fr_1fr] bg-[var(--bg)] rounded-2xl gap-12 p-8'>
                    <div className='w-full h-full rounded-2xl flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <H2 an={false}>Primary</H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button variant='outline'>std : 1 to 5</Button>
                            <Button variant='outline'>std : 6 to 10</Button>
                        </div>
                        <P>Our primary curriculum focuses on building a strong foundation in core subjects such as mathematics, language arts, science, and social studies.</P>
                        <Button className='mt-4' variant='primary'>Download Fee Structure</Button>
                    </div>
                </div>

                <div ref={card2Ref} className='absolute inset-0 curriculum-card grid grid-cols-[1fr_0.8fr] bg-[var(--bg)] rounded-2xl gap-12 p-8'>
                    <div className='flex flex-col gap-5'>
                        <H2 an={false}>Secondary</H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button variant='outline'>std : 6 to 9</Button>
                            <Button variant='outline'>age : 10 to 14</Button>
                        </div>
                        <P>Our secondary curriculum builds on the foundation established in primary school, offering more advanced courses in a variety of subjects.</P>
                        <Button className='mt-4' variant='primary'>Download Fee Structure</Button>
                    </div>
                    <div className='w-full h-full rounded-2xl flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto rounded-2xl' />
                    </div>
                </div>

                <div ref={card3Ref} className='absolute inset-0 curriculum-card grid grid-cols-[0.8fr_1fr] bg-[var(--bg)] rounded-2xl gap-12 p-8'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <H2 an={false}>Higher Secondary</H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button variant='outline'>std : 10 to 12</Button>
                            <Button variant='outline'>age : 14 to 17</Button>
                        </div>
                        <P>Our higher secondary curriculum prepares students for university and beyond, with a focus on critical thinking and independent learning.</P>
                        <Button className='mt-4' variant='primary'>Download Fee Structure</Button>
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default Curiculam