'use client'

import React, { useState } from 'react'

function FacilityCard({ facility, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? '#93c5fd' : '#e0eaff'}`,
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 24px 56px rgba(26,86,219,0.13)'
          : '0 4px 20px rgba(26,86,219,0.06)',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease',
        animationDelay: `${index * 0.07}s`,
      }}
      className="fac-card-anim"
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden',
        background: '#eff6ff',
      }}>
        <img
          src={facility.img}
          alt={facility.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Hover desc overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,45,110,0.78) 0%, transparent 55%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex', alignItems: 'flex-end',
          padding: '16px 18px',
        }}>
          <p style={{ color: '#fff', fontSize: 13, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
            {facility.desc}
          </p>
        </div>

        {/* Number badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          width: 30, height: 30, borderRadius: '50%',
          background: '#1a56db', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 800,
          boxShadow: '0 2px 8px rgba(26,86,219,0.4)',
        }}>
          {index + 1}
        </div>
      </div>

      {/* Text content */}
      <div style={{ padding: '20px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontSize: 18, fontWeight: 800,
          color: '#0f172a', margin: 0, lineHeight: 1.3,
        }}>
          {facility.title}
        </h3>

        <p style={{
          color: '#64748b', fontSize: 14, lineHeight: 1.75, margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {facility.desc}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: 10 }}>
          <span style={{
            display: 'inline-block',
            background: hovered ? '#1a56db' : '#eff6ff',
            color: hovered ? '#fff' : '#1a56db',
            border: '1px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            padding: '4px 12px', borderRadius: 50,
            transition: 'background 0.2s, color 0.2s',
            letterSpacing: '0.05em',
          }}>
            🏫 ઉપલબ્ધ સુવિધા
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Facilities({ facilities = [] }) {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,96px) 24px',
      background: '#fff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes facFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fac-card-anim { animation: facFadeUp 0.5s ease both; }
        .fac-strip-btn { transition: transform 0.18s, opacity 0.18s; }
        .fac-strip-btn:hover { transform: scale(1.04); opacity: 0.9; }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            🏛️ આધુનિક સુવિધાઓ
          </span>

          <h2 style={{
            fontSize: 'clamp(28px,5vw,48px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 18px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            સુવિધાઓ
          </h2>

          <p style={{
            maxWidth: 660, margin: '0 auto',
            color: '#475569', fontSize: 16, lineHeight: 1.85,
          }}>
            શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયમાં વિદ્યાર્થીઓના સર્વાંગી વિકાસ
            માટે આધુનિક સ્માર્ટ ક્લાસ, કોમ્પ્યુટર લેબ, વિશાળ રમતગમત મેદાન,
            સમૃદ્ધ પુસ્તકાલય અને સુરક્ષિત પરિવહન સેવા ઉપલબ્ધ છે.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 52,
        }}>
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>

      

      </div>
    </section>
  )
}