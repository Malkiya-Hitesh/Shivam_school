'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi'
import Section from '@/app/ui/Section'
import { P } from '@/app/ui/P'
import { H2 } from '@/app/ui/H2'

gsap.registerPlugin(ScrollTrigger)





 


export default function ContactSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
        }
      )

      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.target)
    console.log('📨 CONTACT FORM →', {
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('number'),
      message: formData.get('message'),
    })

    setTimeout(() => {
      setLoading(false)
      setStatus('success')
      e.target.reset()
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  return (
    <Section className="flex flex-col  bg-[var(--bg-light)] overflow-hidden ">
     
       <H2 className=' text-center  my-5'>Contact Us</H2>
        <P className="text-center my-6 ">
          Have questions or want to schedule a visit? We&apos;d love to hear from you.
        </P>
     

      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left — Info */}
        <div ref={leftRef} className="flex flex-col gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            <ContactInfoCard icon={FiMapPin} title="Address" detail="Kamlapur, Gujarat" color="bg-blue-50 text-blue-600" />
            <ContactInfoCard icon={FiPhone} title="Phone" detail="+91 00000 00000" color="bg-green-50 text-green-600" />
            <ContactInfoCard icon={FiMail} title="Email" detail="info@sivam.edu.in" color="bg-pink-50 text-pink-600" />
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden h-48 bg-[var(--bg-primary-soft)] flex items-center justify-center">
            <div className="text-center space-y-2">
              <FiMapPin className="text-3xl text-[var(--primary)] mx-auto" />
              <p className="text-sm text-[var(--text-muted)] font-medium">Kamlapur, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div ref={rightRef}>
          <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-[0_4px_24px_rgba(42,27,127,0.1)] p-6 sm:p-8 space-y-4' >
            <h3 className="text-[1.2rem] font-bold text-[var(--primary)] mb-2">Send a Message</h3>

            <ContactInput name="name" placeholder="Your Name" type="text" />
            <ContactInput name="email" placeholder="Email Address" type="email" />
            <ContactInput name="number" placeholder="Phone Number" type="tel" />

            <textarea
              name="message"
              required
              rows={4}
              className= 'w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all duration-200 text-[0.95rem] placeholder:text-gray-400'
              placeholder="Your Message"
            />

            <button
              disabled={loading}
              type="submit"
              className={` w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${loading ? ' bg-gray-400 cursor-not-allowed ' : ' bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg '
              }`}
            >
              <FiSend className={loading ? '' : 'animate-none'} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <p className="text-green-700 font-semibold text-sm">✅ Message sent successfully! We&apos;ll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  )
}

const ContactInput = ({ name, placeholder, type = 'text' }) => (
  <input
    name={name}
    type={type}
    required
    className= 'w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all duration-200 text-[0.95rem] placeholder:text-gray-400'
    placeholder={placeholder}
  />
)

const ContactInfoCard = ({ icon: Icon, title, detail, color }) => (
  <div className='flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200' >
    <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
      <Icon className="text-xl" />
    </div>
    <div>
      <p className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">{title}</p>
      <p className="text-[0.95rem] font-semibold text-gray-800">{detail}</p>
    </div>
  </div>
)
