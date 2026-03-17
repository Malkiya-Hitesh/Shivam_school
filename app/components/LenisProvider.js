'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({
  children,
  options = { smooth: true, lerp: 0.8, syncTouch: false, duration: 1.2 }
}) {
  const lenisRef = useRef(null)
  const rafId = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis(options)
    lenisRef.current = lenis

    // GSAP <-> Lenis proxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    })

    // Optimized RAF loop
    const raf = (time) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    // Auto-update GSAP on scroll
    lenis.on('scroll', ScrollTrigger.update)

    // Refresh triggers after initial load
    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 300)

    // Optional: refresh on window resize
    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)

    return () => {
      // Cleanup
      cancelAnimationFrame(rafId.current)
      lenis.destroy()
      ScrollTrigger.killAll(false)
      clearTimeout(refreshTimeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [options])

  return children
}
