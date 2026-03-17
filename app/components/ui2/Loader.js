'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Loading from '@/app/loading'
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({ subsets: ['latin'], weight: '400' })

export default function SchoolLoader() {
  const loaderRef = useRef(null)
  const progressBarRef = useRef(null)
  const contentRef = useRef(null)
  const hasFiredRef = useRef(false)

  const [phase, setPhase] = useState('waiting')


  const fireLoaderFinished = () => {

    if (hasFiredRef.current) {
      return
    }
    hasFiredRef.current = true
    window.dispatchEvent(new Event('loaderFinished'))
  }

  /* ----------------------------------------
     1️⃣ ASSET WAIT
  ---------------------------------------- */
  useEffect(() => {

    if (sessionStorage.getItem('school-loader-done')) {
      fireLoaderFinished()
      setPhase('done')
      return
    }

    const waitForAssets = async () => {
      if (document.fonts) {
        await document.fonts.ready
      }

      const images = Array.from(document.images)

      await Promise.all(
        images.map((img, i) =>
          img.complete
            ? Promise.resolve()
            : new Promise(res => {
              img.onload = img.onerror = () => {
                res()
              }
            })
        )
      )

      setPhase('progress')
    }

    waitForAssets()
  }, [])

  /* ----------------------------------------
     2️⃣ PROGRESS BAR
  ---------------------------------------- */
  useEffect(() => {
    if (phase !== 'progress') return
    if (!progressBarRef.current) {
      return
    }


    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressBarRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 2,
          ease: 'power1.inOut',
          onComplete: () => {

            setPhase('video')
          },
        }
      )
    }, loaderRef)

    return () => {
      ctx.revert()
    }
  }, [phase])

  /* ----------------------------------------
     3️⃣ VIDEO / INTRO
  ---------------------------------------- */
  useEffect(() => {
    if (phase !== 'video') return
    if (!contentRef.current) {
      return
    }


    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
         sessionStorage.setItem('school-loader-done', 'true')
fireLoaderFinished()

          setPhase('done')
        },
      })

      tl.from('[data-line="1"]', { y: 60, opacity: 0, duration: 0.9 })
        .from('[data-line="2"]', { y: 80, opacity: 0, duration: 1.1 }, '-=0.5')
        .from('[data-line="3"]', { opacity: 0, duration: 0.8 }, '-=0.6')
        .to(contentRef.current, { scale: 1.1, duration: 1.2 })
        .to(loaderRef.current, {
          y: '-100%',
          duration: 1.2,
          ease: 'power4.inOut',
        })
    }, loaderRef)

    return () => {
      ctx.revert()
    }
  }, [phase])

  /* ----------------------------------------
     4️⃣ RENDER
  ---------------------------------------- */


  if (phase === 'waiting') {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <Loading />
      </div>
    )
  }

  if (phase === 'done') {
    return null
  }

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08192b] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#08192b] via-[#0f2c4d] to-[#08192b]" />

      {phase === 'progress' && (
        <div className="relative w-[65%] max-w-lg text-center">
          <p className="mb-6 text-white tracking-widest text-sm opacity-80">
            Preparing Your Learning Experience
          </p>
          <div className="h-[3px] w-full bg-white/20 overflow-hidden">
            <div ref={progressBarRef} className="h-full bg-white" />
          </div>
        </div>
      )}

      {phase === 'video' && (
        <div ref={contentRef} className="relative text-center text-white py-36">
          <h1 data-line="1" className="text-sm tracking-[0.35em] opacity-90">
            WELCOME TO
          </h1>

          <h1
            data-line="2"
            className={`${lilita.className} mt-4 text-6xl font-bold tracking-wide`}
          >
            GNANA GANGOTHRI
            <span className="block text-3xl mt-2">SCHOOL</span>
          </h1>

          <p data-line="3" className="mt-6 text-sm tracking-widest opacity-70">
            Knowledge • Discipline • Success
          </p>
        </div>
      )}
    </div>
  )
}
