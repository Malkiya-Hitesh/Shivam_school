'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [hovBtn, setHovBtn] = useState(false)

  return (
    <section style={{
      position: 'relative',
      marginTop: 'clamp(4.2rem,7vw,7rem)',
      backgroundImage: 'url("/image/hero_4.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes ahFadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ahPulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.15)} }
        @keyframes ahFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ahShimmer {
          0%{background-position:200% center}
          100%{background-position:-200% center}
        }
        .ah-a1{animation:ahFadeUp 0.55s ease 0.05s both}
        .ah-a2{animation:ahFadeUp 0.6s  ease 0.18s both}
        .ah-a3{animation:ahFadeUp 0.6s  ease 0.32s both}
        .ah-a4{animation:ahFadeUp 0.6s  ease 0.46s both}
        .ah-a5{animation:ahFadeUp 0.6s  ease 0.60s both}
        .ah-blob{position:absolute;border-radius:50%;pointer-events:none;animation:ahFloat 8s ease-in-out infinite}
        .ah-stat{transition:transform 0.2s,box-shadow 0.2s}
        .ah-stat:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(0,0,0,0.25)!important}
      `}</style>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,15,40,0.78) 0%, rgba(5,15,40,0.65) 60%, rgba(5,15,40,0.85) 100%)',
      }} />

      {/* Decorative blobs */}
      <div className="ah-blob" style={{ width:320,height:320,background:'rgba(26,86,219,0.12)',top:-80,left:-60 }} />
      <div className="ah-blob" style={{ width:240,height:240,background:'rgba(26,86,219,0.10)',bottom:-50,right:-50,animationDelay:'4s' }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(80px,12vw,140px) 24px clamp(64px,10vw,110px)',
      }}>

        {/* Top pill */}
        <div className="ah-a1" style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)',
            color: '#bfdbfe',
            border: '1px solid rgba(255,255,255,0.22)',
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '8px 22px', borderRadius: 50,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4ade80',
              animation: 'ahPulse 2s ease-in-out infinite',
              display: 'inline-block', flexShrink: 0,
            }} />
            અમારા વિશે · Since 2008
          </span>
        </div>

        {/* Main heading */}
        <h1 className="ah-a2" style={{
          fontSize: 'clamp(28px,6vw,64px)',
          fontWeight: 900, color: '#fff',
          lineHeight: 1.12, margin: '0 0 8px',
          maxWidth: 820, letterSpacing: '-0.5px',
        }}>
          શ્રી શિવમ્ વિદ્યાલય
        </h1>
        <h2 className="ah-a2" style={{
          fontSize: 'clamp(16px,3vw,28px)',
          fontWeight: 700, margin: '0 0 28px',
          background: 'linear-gradient(90deg,#93c5fd,#e0f2fe,#93c5fd)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'ahShimmer 3.5s linear infinite',
        }}>
          જ્યાં જ્ઞાન અને સંસ્કારનો સંગમ થાય છે
        </h2>

        {/* Description */}
        <p className="ah-a3" style={{
          maxWidth: 680,
          color: 'rgba(255,255,255,0.88)',
          fontSize: 'clamp(14px,2vw,17px)',
          lineHeight: 1.9, margin: '0 0 40px',
        }}>
          ૧૬ વર્ષથી ટ્રસ્ટી શ્રી વલ્લભભાઈ રામાણી અને નિયામક શ્રી ચિરાગ
          રામાણીના માર્ગદર્શન હેઠળ અમે ૧૦૦૦ થી વધુ વિદ્યાર્થીઓને માત્ર
          ભણાવતા નથી — પણ તેમને જીવન જીવતાં શીખવીએ છીએ. જ્ઞાન, સંસ્કાર
          અને આત્મવિશ્વાસ સાથે દરેક બાળક અહીંથી ઉજ્જવળ ભવિષ્ય તરફ
          આગળ વધે છે.
        </p>

        {/* CTA buttons */}
        <div className="ah-a4" style={{ display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center', marginBottom:56 }}>
          <Link href="/result" style={{ textDecoration:'none' }}>
            <button
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
              style={{
                background: '#1a56db',
                color: '#fff', border: 'none',
                borderRadius: 13, padding: '13px 32px',
                fontSize: 15, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'inherit',
                boxShadow: '0 6px 24px rgba(26,86,219,0.45)',
                transform: hovBtn ? 'translateY(-2px) scale(1.04)' : 'none',
                transition: 'transform 0.18s, box-shadow 0.18s',
                letterSpacing: '0.02em',
              }}
            >
              📊 પરિણામ જુઓ
            </button>
          </Link>
          <Link href="/academics#admissions" style={{ textDecoration:'none' }}>
            <button style={{
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.35)',
              borderRadius: 13, padding: '13px 32px',
              fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.20)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.12)'}
            >
              🎒 પ્રવેશ અરજી
            </button>
          </Link>
        </div>

        {/* Stats row */}
        

      </div>

      {/* Bottom wave */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, overflow:'hidden', lineHeight:0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0,48 C360,0 1080,48 1440,16 L1440,48 Z" fill="#f8faff" />
        </svg>
      </div>
    </section>
  )
}