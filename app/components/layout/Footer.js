'use client'
import React from 'react'
import { NavLink } from './NavbarClient'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* SCHOOL INFO */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            sivam school
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering students with knowledge, values, and confidence for a
            better future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 ">
            
            {/* <li className='text-sm text-gray-400' >
              <NavLink h={"/"} data={"home"} />




            </li>
            <li>
              <NavLink h={"/about"} data={"about"} />
            </li>
            <li>
              <NavLink h={"/result"} data={"result"} />
            </li>
            <li>
              <NavLink h={"/academics"} data={"academics"} />
            </li>
            <li>
              <NavLink h={"/contact"} data={"contact"} />
            </li>
            <li>
              <NavLink h={"/admission"} data={"admission"} />
            </li> */}

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>kamlapur</li>
            <li>📞 +91 0000000000</li>
            <li>✉️ info@sivam.edu.in</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Facebook</a>
            <a className="hover:text-white" href="#">Instagram</a>
            <a className="hover:text-white" href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} sivam school. All rights reserved.
      </div>
    </footer>
  )
}
