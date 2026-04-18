'use client'

import React from 'react'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const quickLinks = [
  { h: '/', label: 'Home' },
  { h: '/about', label: 'About Us' },
  { h: '/academics', label: 'Academics' },
  { h: '/result', label: 'Results' },
  { h: '/admission', label: 'Admissions' },
  { h: '/contact', label: 'Contact' },
]

const socials = [
  { icon: FiFacebook, href: '/', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: FiInstagram, href: '/', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: FiLinkedin, href: '/', label: 'LinkedIn', color: 'hover:text-blue-300' },
  { icon: FiYoutube, href: '/', label: 'YouTube', color: 'hover:text-red-400' },
]

export default function Footer() {
  return (
  <footer role="contentinfo" className="bg-gray-950 text-gray-400">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 pb-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* School Info */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold">Shree Shivam Vidhyalaya</h3>
          <p className="text-sm leading-relaxed">
            Empowering students with knowledge, values, and confidence for a brighter future.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center   transition-all duration-200 hover:bg-white/10 ${color}`}
              >
                <Icon className="text-[1.1rem]" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(({ h, label }) => (
              <li key={h}>
                <Link
                  href={h}
                  className="text-sm hover:text-white transition-colors duration-200  flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-0   group-hover:opacity-100 transition-opacity" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="space-y-3">
            {[
              { icon: FiMapPin, text: 'Kamlapur, Gujarat' },
              { icon: FiPhone, text: '+91 00000 00000' },
              { icon: FiMail, text: 'info@sivam.edu.in' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm">
                <Icon className="mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Admissions Open</h4>
          <p className="text-sm leading-relaxed">
            Join our school family for the 2025–26 academic year.
          </p>
          <Link href="/admission"
            className="inline-block mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold   bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Apply Now →
            
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="border-t border-gray-800 py-5 px-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Shree Shivam Vidhyalaya. All rights reserved.
      </div> */}
    </footer>
  )
}