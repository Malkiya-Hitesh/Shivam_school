// 'use client'

// import { useEffect } from "react"
// import { usePathname } from "next/navigation"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// import SmoothScrollProvider from "./LenisProvider"
// import Cursor from "./Curser"
// import Footer from "./layout/Footer"
// import Navbar from "./layout/Navbar"

// gsap.registerPlugin(ScrollTrigger)

// export default function ClientLayout({ children }) {
//   const pathname = usePathname()

//   useEffect(() => {
//     // Wait for DOM + layout
//     requestAnimationFrame(() => {
//       ScrollTrigger.refresh(true)
//     })
//   }, [pathname])

//   return (
//     <>
//       <Navbar />

//       <SmoothScrollProvider>
//         <Cursor />
//         {children}
//       </SmoothScrollProvider>

//       <Footer />
//     </>
//   )
// }
