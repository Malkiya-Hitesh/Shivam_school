'use client'

import React, { useState, useEffect, useRef } from 'react'

const RADIUS = 90
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const items = [
  {
    label: 'મિશન',
    labelEn: 'Mission',
    icon: '🎯',
    color: '#1a56db',
    light: '#eff6ff',
    border: '#bfdbfe',
    pct: 0.75,
    stroke: '#1a56db',
    accentStroke: '#60a5fa',
    text: '૨૦ સમર્પિત શિક્ષકો અને સ્માર્ટ ક્લાસ જેવી આધુનિક સુવિધાઓ દ્વારા ગુજરાતી માધ્યમમાં ગુણવત્તાસભર શિક્ષણ આપવું — જેથી દરેક વિદ્યાર્થી શૈક્ષણિક, સામાજિક અને વ્યક્તિગત રીતે સક્ષમ બને.',
  },
  {
    label: 'વિઝન',
    labelEn: 'Vision',
    icon: '💡',
    color: '#0f2d6e',
    light: '#eef2ff',
    border: '#c7d2fe',
    pct: 0.82,
    stroke: '#0f2d6e',
    accentStroke: '#818cf8',
    text: 'ધોરણ ૧ થી ૧૨ સુધીના દરેક વિદ્યાર્થીને એવું વાતાવરણ આપવું — જ્યાં જ્ઞાન, સર્જનાત્મકતા અને સંસ્કાર સાથે મળીને ઉજ્જવળ ભવિષ્યની નક્કર શરૂઆત થાય.',
  },
  {
    label: 'મૂલ્યો',
    labelEn: 'Values',
    icon: '🏛️',
    color: '#0369a1',
    light: '#f0f9ff',
    border: '#bae6fd',
    pct: 0.90,
    stroke: '#0369a1',
    accentStroke: '#38bdf8',
    text: 'શ્રી વલ્લભભાઈ રામાણીના પાયામાં રહેલા સિદ્ધાંતો — શિસ્ત, પ્રામાણિકતા અને સંસ્કાર — આ ત્રણ મૂલ્યો અમારી શાળાની દરેક પ્રવૃત્તિ અને શિક્ષણના કેન્દ્રમાં છે.',
  },
]

/* Animated ring — CSS stroke-dashoffset via IntersectionObserver */
function Ring({ item, visible }) {
  const primaryDash  = CIRCUMFERENCE * item.pct
  const accentDash   = CIRCUMFERENCE * (1 - item.pct)

  return (
    <svg viewBox="0 0 200 200" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
      {/* Track */}
      <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="#e2e8f0" strokeWidth="13" />

      {/* Primary arc */}
      <circle
        cx="100" cy="100" r={RADIUS} fill="none"
        stroke={item.stroke} strokeWidth="13"
        strokeLinecap="round"
        strokeDasharray={`${primaryDash} ${CIRCUMFERENCE}`}
        strokeDashoffset={visible ? 0 : primaryDash}
        transform="rotate(-90 100 100)"
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' }}
      />

      {/* Accent arc */}
      <circle
        cx="100" cy="100" r={RADIUS} fill="none"
        stroke={item.accentStroke} strokeWidth="13"
        strokeLinecap="round"
        strokeDasharray={`${accentDash} ${CIRCUMFERENCE}`}
        strokeDashoffset={visible ? -primaryDash : -CIRCUMFERENCE}
        transform="rotate(-90 100 100)"
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s' }}
      />
    </svg>
  )
}

function ValueCard({ item, index }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const size = 'clamp(160px,28vw,210px)'

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Ring + icon */}
      <div style={{
        position: 'relative',
        width: size, height: size,
        flexShrink: 0,
      }}>
        <Ring item={item} visible={visible} />

        {/* Centre circle */}
        <div style={{
          position: 'absolute', inset: 0,
          margin: 'auto',
          width: '65%', height: '65%',
          borderRadius: '50%',
          background: hovered ? item.light : '#fff',
          border: `1.5px solid ${hovered ? item.border : '#e2e8f0'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered
            ? `0 8px 28px ${item.color}22`
            : '0 4px 18px rgba(0,0,0,0.08)',
          transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
          fontSize: 'clamp(28px,5vw,40px)',
        }}>
          {item.icon}
        </div>

        {/* Percentage label */}
        <div style={{
          position: 'absolute', bottom: -6, right: 8,
          background: item.color, color: '#fff',
          fontSize: 11, fontWeight: 800,
          padding: '3px 10px', borderRadius: 50,
          boxShadow: `0 3px 10px ${item.color}50`,
        }}>
          {Math.round(item.pct * 100)}%
        </div>
      </div>

      {/* Label */}
      <div style={{ marginTop: 24 }}>
        <span style={{
          display: 'inline-block',
          background: item.light, color: item.color,
          border: `1px solid ${item.border}`,
          fontSize: 11, fontWeight: 700,
          padding: '3px 12px', borderRadius: 50,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          {item.labelEn}
        </span>

        <h3 style={{
          fontSize: 'clamp(20px,3vw,26px)', fontWeight: 900,
          color: item.color, margin: '0 0 12px', lineHeight: 1.2,
        }}>
          {item.label}
        </h3>

        {/* Divider */}
        <div style={{
          width: hovered ? 56 : 32, height: 3, borderRadius: 4,
          background: item.color, margin: '0 auto 14px',
          transition: 'width 0.3s ease',
        }} />

        <p style={{
          color: '#475569', fontSize: 'clamp(13px,1.8vw,15px)',
          lineHeight: 1.85, margin: '0 auto',
          maxWidth: 300,
        }}>
          {item.text}
        </p>
      </div>
    </div>
  )
}

export default function Value() {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,96px) 24px',
      background: '#f8faff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes valFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .val-a1{animation:valFadeUp 0.5s ease 0.05s both}
        .val-a2{animation:valFadeUp 0.5s ease 0.18s both}
      `}</style>

      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

        {/* Header */}
        <div className="val-a1" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            🌟 અમારો આધારસ્તંભ
          </span>

          <h2 style={{
            fontSize: 'clamp(26px,5vw,46px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 16px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            મિશન · વિઝન · મૂલ્યો
          </h2>

          <p className="val-a2" style={{
            maxWidth: 580, margin: '0 auto',
            color: '#475569', fontSize: 16, lineHeight: 1.85,
          }}>
            શ્રી શિવમ અને વજીબા વિદ્યાલયની દરેક પ્રવૃત્તિ, નિર્ણય અને
            શૈક્ષણિક કાર્ય — આ ત્રણ સ્તંભ ઉપર ઊભું છે.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 'clamp(32px,5vw,60px)',
        }}>
          {items.map((item, i) => (
            <ValueCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Bottom motto */}
        <div style={{
          marginTop: 60,
          background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
          borderRadius: 20, padding: '24px 32px',
          textAlign: 'center',
        }}>
          <p style={{
            color: '#fff', fontSize: 'clamp(14px,2.5vw,18px)',
            fontWeight: 700, fontStyle: 'italic', margin: 0,
            letterSpacing: '0.02em',
          }}>
            ✦ &nbsp;"જ્ઞાન, ચરિત્ર અને સેવા — આ ત્રણ અમારો આધારસ્તંભ"&nbsp; ✦
          </p>
        </div>

      </div>
    </section>
  )
}