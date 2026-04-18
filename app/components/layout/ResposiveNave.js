'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiXMark } from "react-icons/hi2"
import gsap from 'gsap'
import Link from 'next/link'
import NavButoon from '../ui2/NavButoon'
import { NavLink } from './NavbarClient'
import Button from '../ui2/Button'

function ResposiveNave() {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => setMenu(prev => !prev)

 useLayoutEffect(() => {
    if (!menu) return

    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray('.nav-item')

      gsap.fromTo(
        links,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        }
      )
    }, menuRef)

    return () => ctx.revert()
  }, [menu])

  return (
    <>
     
      <div className='navLink max-[640px]:hidden '>
        <Link href="/contact">
         <Button variant='primary'>contact</Button>
        </Link>
      </div>

     

 
      <GiHamburgerMenu
        onClick={toggleMenu}
        className='text-[1.35rem] max-[640px]:text-[1.8rem] cursor-pointer'
      />

      
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          menu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

     
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[60%] bg-[var(--bg-light)]
        flex flex-col items-center py-10 gap-6 z-50 transition-all duration-300
        ${menu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <HiXMark
          onClick={toggleMenu}
          className='nav-item text-[2.35rem] cursor-pointer absolute top-3 right-5'
        />

        <div onClick={toggleMenu} className="nav-item">
          <NavLink h="/" data="home" />
        </div>

        <div onClick={toggleMenu} className="nav-item">
          <NavLink h="/about" data="about" />
        </div>

        <div onClick={toggleMenu} className="nav-item">
          <NavLink h="/result" data="result" />
        </div>

       

        <div onClick={toggleMenu} className="nav-item">
          <NavLink h="/academics" data="academics" />
        </div>
        {/* <div onClick={toggleMenu} className="nav-item">
          <NavLink h="/faculty" data="faculty" />
        </div> */}

        <div onClick={toggleMenu} className="nav-item">
          <Link href="/contact">
             <Button variant='primary'>contact</Button>
          </Link>
        </div>

       
       
      </div>
    </>
  )
}

export default ResposiveNave
