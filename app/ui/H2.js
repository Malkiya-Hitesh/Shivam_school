'use client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from "react"


gsap.registerPlugin(SplitText , ScrollTrigger)
export function H2({ children, className = '' , an=true , style={} }) {

const h2Ref = useRef(null)
useEffect(()=>{
  if(an){
    
  const ctx = gsap.context(() => {
    gsap.from(h2Ref.current, {
      y: 60,
      opacity: 0,
    
      duration: 1,
      ease: 'power3.out',
    scrollTrigger:{

      trigger: h2Ref.current,
      start: "top 85%",
    

      
    }
    
     
   
    })
  } , h2Ref)

  return () => ctx.revert()

}else{
  return
}

}, [])
  return (
    <h2
      ref={h2Ref}
      style={style}
      className={`  text-[2rem] sm:text-[2.4rem] md:text-[2.70rem]   lg:text-[3rem]
      font-semibold tracking-tight bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] bg-clip-text text-transparent   ${className} `}
    >
      {children}
    </h2>
  )
}
