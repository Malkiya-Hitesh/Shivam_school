'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function AdmissionCta() {
  const [hov1, setHov1] = useState(false)
  const [hov2, setHov2] = useState(false)

  return (
    <section style={{
      padding: 'clamp(64px,9vw,104px) 24px',
      background: 'linear-gradient(135deg, #0f2d6e 0%, #1a56db 50%, #0f2d6e 100%)',
      backgroundSize: '200% 200%',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');

        @keyframes ctaFadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctaPulse  { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes ctaFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes ctaShimmer {
          0%{background-position:200% center}
          100%{background-position:-200% center}
        }

        .cta-a1 { animation: ctaFadeUp 0.55s ease 0.05s both; }
        .cta-a2 { animation: ctaFadeUp 0.55s ease 0.18s both; }
        .cta-a3 { animation: ctaFadeUp 0.55s ease 0.32s both; }
        .cta-a4 { animation: ctaFadeUp 0.55s ease 0.46s both; }
        .cta-a5 { animation: ctaFadeUp 0.55s ease 0.60s both; }

        .cta-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: ctaFloat 8s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="cta-blob" style={{ width:360, height:360, background:'rgba(255,255,255,0.04)', top:-100, left:-80, animationDelay:'0s' }} />
      <div className="cta-blob" style={{ width:260, height:260, background:'rgba(255,255,255,0.04)', bottom:-60, right:-60, animationDelay:'3s' }} />
      <div className="cta-blob" style={{ width:180, height:180, background:'rgba(255,255,255,0.03)', top:'30%', right:'10%', animationDelay:'5s' }} />

      <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div className="cta-a1" style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)',
            color: '#bfdbfe',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '7px 22px', borderRadius: 50,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4ade80',
              display: 'inline-block',
              animation: 'ctaPulse 2s ease-in-out infinite',
            }} />
            પ્રવેશ ૨૦૨૫–૨૬ · હવે ઉપલબ્ધ
          </span>
        </div>

        {/* Heading */}
        <h2
          className="cta-a2"
          style={{
            fontSize: 'clamp(32px,6vw,60px)',
            fontWeight: 900,
            lineHeight: 1.1,
            margin: '0 0 8px',
            letterSpacing: '-0.5px',
            color: '#fff',
          }}
        >
          પ્રવેશ કાર્ય શરૂ છે
        </h2>
        <h3
          className="cta-a2"
          style={{
            fontSize: 'clamp(16px,3vw,26px)',
            fontWeight: 700,
            margin: '0 0 28px',
            background: 'linear-gradient(90deg,#93c5fd,#e0f2fe,#93c5fd)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'ctaShimmer 3s linear infinite',
          }}
        >
          ધો. ૧ થી ૧૨ · GSEB ગુજરાતી માધ્યમ
        </h3>

        {/* Description */}
        <p
          className="cta-a3"
          style={{
            color: '#bfdbfe',
            fontSize: 'clamp(15px,2vw,17px)',
            lineHeight: 1.9,
            margin: '0 auto 36px',
            maxWidth: 580,
          }}
        >
          તમારા બાળકને શ્રી શિવમ વિદ્યાલય અથવા શ્રી વજીબા વિદ્યાલયમાં પ્રવેશ અપાવો
          અને ૧૬ વર્ષના અનુભવી શિક્ષણ પરિવારનો હિસ્સો બનો — જ્યાં ૨૦ સમર્પિત
          શિક્ષકો તમારા બાળકના ઉજ્જવળ ભવિષ્ય માટે દરરોજ કાર્યરત છે.
        </p>

        {/* Info pills */}
        <div
          className="cta-a4"
          style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: 10, marginBottom: 40,
          }}
        >
          {[
            { icon: '🏫', text: 'શ્રી શિવમ · ધો. ૧–૮' },
            { icon: '🎓', text: 'શ્રી વજીબા · ધો. ૯–૧૨' },
            { icon: '👨‍🏫', text: '૨૦ અનુભવી શિક્ષક' },
            { icon: '📍', text: 'રાજકોટ, ગુજરાત' },
          ].map((p, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.10)',
              color: '#e0f2fe',
              border: '1px solid rgba(255,255,255,0.18)',
              fontSize: 12, fontWeight: 600,
              padding: '6px 16px', borderRadius: 50,
            }}>
              {p.icon} {p.text}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="cta-a5"
          style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          <Link href="/admissions" style={{ textDecoration: 'none' }}>
            <button
              onMouseEnter={() => setHov1(true)}
              onMouseLeave={() => setHov1(false)}
              style={{
                background: hov1 ? '#f0f9ff' : '#fff',
                color: '#0f2d6e',
                border: 'none',
                borderRadius: 14,
                padding: '15px 40px',
                fontSize: 16, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'inherit',
                boxShadow: hov1
                  ? '0 12px 32px rgba(255,255,255,0.25)'
                  : '0 4px 16px rgba(0,0,0,0.2)',
                transform: hov1 ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
            >
              🎒 હવે અરજી કરો
            </button>
          </Link>

          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button
              onMouseEnter={() => setHov2(true)}
              onMouseLeave={() => setHov2(false)}
              style={{
                background: 'transparent',
                color: '#fff',
                border: `2px solid ${hov2 ? '#fff' : 'rgba(255,255,255,0.45)'}`,
                borderRadius: 14,
                padding: '15px 40px',
                fontSize: 16, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit',
                background: hov2 ? 'rgba(255,255,255,0.10)' : 'transparent',
                transform: hov2 ? 'translateY(-3px) scale(1.03)' : 'translateY(0) scale(1)',
                transition: 'all 0.2s ease',
              }}
            >
              📞 સંપર્ક કરો
            </button>
          </Link>
        </div>

        {/* Bottom note */}
        <p style={{
          marginTop: 36,
          color: 'rgba(191,219,254,0.65)',
          fontSize: 13, fontWeight: 500,
        }}>
          વધુ માહિતી માટે સોમ–શનિ સવારે ૯:૦૦ – સાંજે ૫:૦૦ · +91 98765 43210
        </p>

      </div>
    </section>
  )
}