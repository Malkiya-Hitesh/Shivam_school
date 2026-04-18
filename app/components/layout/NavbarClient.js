

'use client'
import Image from 'next/image'
import Link from 'next/link'

import ResposiveNave from './ResposiveNave';
import {  useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Rubik } from "next/font/google"
import Button from '@/app/ui/Button';


const rubik = Rubik({ subsets: ["latin"], weight: ["500", "600", "700"] })
export default function NavbarClient() {
  const navRef = useRef(null)


useLayoutEffect(() => {
   

      const ctx = gsap.context(() => {
        const links = gsap.utils.toArray('.nav-link a')
        const logo = navRef.current.querySelector('.logo-img')

        gsap.fromTo(
          links,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
          }
        )

        gsap.from(logo, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: 'power3.out',
        })
      }, navRef)

      return () => ctx.revert()
    

    
  }, [])




  return (
    <nav ref={navRef} className='z-5 grid grid-cols-[0.5fr_1.8fr] w-[100vw] items-center bg-[var(--bg-light)] fixed top-0 xl:h-[7rem] lg:h-[6.7rem] sm:h-[6.2rem] h-[4.2rem]  xl:px-8 lg:px-6 sm:px-4 px-3'>

      <div className='flex justify-start items-center  '>
        <Image
          className='logo-img w-auto xl:h-[6.5rem] md:h-[5.5rem] sm:h-[4.5rem] h-[3.5rem] object-contain  cursor-pointer '
          src='/image/logo.png'
          width={100}
          height={100}
         loading="eager"
          alt='logo'
        />

      </div>
      <div className='lg:flex nav-link items-center gap-6 justify-end  hidden' >
        <NavLink h={"/"} data={"home"} />
        <NavLink h={"/about"} data={"about"} />
        <NavLink h={"/result"} data={"result"} />
        <NavLink h={"/academics"} data={"academics"} />
        <Link href={"/contact"}>
         <Button variant='primary'>contact</Button>
        </Link>
      

      </div>
      <div className=' lg:hidden flex  justify-end  items-center gap-5 ' >

        <ResposiveNave />

      </div>
    </nav>
  )
}




export const NavLink = ({ data, h }) => {
  return (
    <Link className={`${rubik.className} text-[1.35rem] tracking-[1.5px]
 hover:text-[var(---primary)] font-semibold capitalize `} href={h} >{data}</Link>
  )
}