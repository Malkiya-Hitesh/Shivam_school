'use client'

import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Years of Experience', labelGu: 'વર્ષ અનુભવ',  value: 16,   icon: '📅', suffix: '+' },
  { label: 'Happy Students',      labelGu: 'વિદ્યાર્થીઓ', value: 8000, icon: '🧑‍🎓', suffix: '+' },
  { label: 'Expert Teachers',     labelGu: 'શિક્ષકો',      value: 25,   icon: '👨‍🏫', suffix: '+' },
  { label: 'Board Pass Rate',     labelGu: 'પ્રભાવ',       value: 98,   icon: '🏆', suffix: '%' },
]

function StatCard({ item, index }) {
  const [visible, setVisible]   = useState(false)
  const [hovered, setHovered]   = useState(false)
  const [count,   setCount]     = useState(0)
  const ref = useRef(null)

  // IntersectionObserver — trigger once
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Count-up with rAF — starts when visible
  useEffect(() => {
    if (!visible) return
    const duration = 2200
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * item.value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(item.value)
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [visible, item.value])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'linear-gradient(135deg,#0f2d6e,#1a56db)' : '#fff',
        border: `1.5px solid ${hovered ? '#1a56db' : '#dbeafe'}`,
        borderRadius: 20,
        padding: 'clamp(24px,4vw,36px) clamp(16px,3vw,28px)',
        textAlign: 'center',
        boxShadow: hovered
          ? '0 20px 48px rgba(26,86,219,0.22)'
          : '0 4px 20px rgba(26,86,219,0.07)',
        transform: hovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
        opacity: visible ? 1 : 0,
        transition: [
          `opacity 0.5s ease ${index * 0.1}s`,
          'transform 0.28s ease',
          'background 0.28s ease',
          'border-color 0.28s ease',
          'box-shadow 0.28s ease',
        ].join(', '),
      }}
    >
      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hovered ? 'rgba(255,255,255,0.15)' : '#eff6ff',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : '#bfdbfe'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24, margin: '0 auto 16px',
        transition: 'background 0.28s, border-color 0.28s',
      }}>
        {item.icon}
      </div>

      {/* Number */}
      <div style={{
        fontSize: 'clamp(36px,6vw,54px)',
        fontWeight: 900, lineHeight: 1,
        color: hovered ? '#fff' : '#1a56db',
        transition: 'color 0.28s',
        marginBottom: 6,
      }}>
        {count}{item.suffix}
      </div>

      {/* Gujarati label */}
      <div style={{
        fontSize: 'clamp(13px,2vw,16px)', fontWeight: 700,
        color: hovered ? 'rgba(255,255,255,0.92)' : '#0f172a',
        transition: 'color 0.28s', marginBottom: 3,
      }}>
        {item.labelGu}
      </div>

      {/* English label */}
      <div style={{
        fontSize: 11, fontWeight: 600,
        color: hovered ? 'rgba(255,255,255,0.6)' : '#94a3b8',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        transition: 'color 0.28s',
      }}>
        {item.label}
      </div>

      {/* Accent line */}
      <div style={{
        height: 3, borderRadius: 4,
        background: hovered ? 'rgba(255,255,255,0.35)' : '#1a56db',
        width: hovered ? '80%' : '40%',
        margin: '16px auto 0',
        transition: 'width 0.35s ease, background 0.28s',
      }} />
    </div>
  )
}

export default function StatsSection() {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,88px) 24px',
      background: 'linear-gradient(160deg,#f0f4ff 0%,#fafbff 100%)',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes stFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes stFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .st-a1{animation:stFadeUp 0.5s ease 0.05s both}
        .st-a2{animation:stFadeUp 0.5s ease 0.18s both}
        .st-blob{position:absolute;border-radius:50%;pointer-events:none;animation:stFloat 9s ease-in-out infinite}
      `}</style>

      <div className="st-blob" style={{ width:300,height:300,background:'radial-gradient(circle,#dbeafe55,transparent 70%)',top:-60,left:-60 }} />
      <div className="st-blob" style={{ width:240,height:240,background:'radial-gradient(circle,#c7d2fe44,transparent 70%)',bottom:-50,right:-50,animationDelay:'4s' }} />

      <div style={{ maxWidth: 1060, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="st-a1" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            📊 અમારી સિદ્ધિ
          </span>
          <h2 className="st-a2" style={{
            fontSize: 'clamp(26px,5vw,44px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 14px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            સંખ્યામાં અમારી ઓળખ
          </h2>
          <p className="st-a2" style={{
            maxWidth: 500, margin: '0 auto',
            color: '#475569', fontSize: 15, lineHeight: 1.8,
          }}>
            ૧૬ વર્ષની સફર — હજારો વિદ્યાર્થીઓ, અનુભવી શિક્ષકો અને અગણિત સ્મૃતિઓ.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 20,
        }}>
          {stats.map((item, i) => (
            <StatCard key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}