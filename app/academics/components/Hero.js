'use client'

import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,88px) 24px clamp(48px,7vw,80px)',
      background: 'linear-gradient(160deg,#f0f4ff 0%,#fafbff 60%,#eef9ff 100%)',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes acFadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes acFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes acPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.15)} }
        .ac-a1{animation:acFadeUp 0.5s ease 0.05s both}
        .ac-a2{animation:acFadeUp 0.55s ease 0.18s both}
        .ac-a3{animation:acFadeUp 0.55s ease 0.30s both}
        .ac-a4{animation:acFadeUp 0.55s ease 0.42s both}
        .ac-a5{animation:acFadeUp 0.55s ease 0.54s both}
        .ac-blob{position:absolute;border-radius:50%;pointer-events:none;animation:acFloat 8s ease-in-out infinite}
        .ac-chip{transition:transform 0.2s,box-shadow 0.2s,background 0.2s}
        .ac-chip:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(26,86,219,0.15)!important;background:#1a56db!important;color:#fff!important}
        .ac-btn{transition:transform 0.18s,box-shadow 0.18s}
        .ac-btn:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 10px 28px rgba(26,86,219,0.32)!important}
      `}</style>

      {/* bg blobs */}
      <div className="ac-blob" style={{ width:340,height:340,background:'radial-gradient(circle,#dbeafe55,transparent 70%)',top:-80,left:-60 }} />
      <div className="ac-blob" style={{ width:260,height:260,background:'radial-gradient(circle,#c7d2fe44,transparent 70%)',bottom:-60,right:-60,animationDelay:'4s' }} />
      <div className="ac-blob" style={{ width:180,height:180,background:'radial-gradient(circle,#bbf7d040,transparent 70%)',top:'30%',right:'8%',animationDelay:'7s' }} />

      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div className="ac-a1" style={{ marginBottom: 22 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.13em', textTransform: 'uppercase',
            padding: '7px 22px', borderRadius: 50,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
              animation: 'acPulse 2s ease-in-out infinite',
            }} />
            GSEB ગુજરાતી માધ્યમ · ધો. ૧ થી ૧૨
          </span>
        </div>

        {/* Heading */}
        <h1 className="ac-a2" style={{
          fontSize: 'clamp(32px,7vw,68px)',
          fontWeight: 900, color: '#0f172a',
          lineHeight: 1.1, margin: '0 0 6px',
          letterSpacing: '-0.5px',
        }}>
          અભ્યાસક્રમ
        </h1>
        <h2 className="ac-a2" style={{
          fontSize: 'clamp(15px,3vw,24px)',
          fontWeight: 700, color: '#1a56db',
          margin: '0 0 26px',
        }}>
          Academics · Curriculum
        </h2>

        {/* Description */}
        <p className="ac-a3" style={{
          color: '#475569', fontSize: 'clamp(15px,2vw,17.5px)',
          lineHeight: 1.9, margin: '0 auto 36px', maxWidth: 680,
        }}>
          શ્રી શિવમ્ વિદ્યાલય (ધો. ૧ થી ૮) અને શ્રી વજીબા વિદ્યાલય
          (ધો. ૯ થી ૧૨ આર્ટ્સ) માં GSEB ગુજરાતી માધ્યમ આધારિત
          અભ્યાસક્રમ એ માત્ર પરીક્ષા પૂરતો સીમિત નથી — અહીં ૪૦+
          અનુભવી શિક્ષકો સ્માર્ટ ક્લાસ અને આધુનિક શિક્ષણ પદ્ધતિ
          દ્વારા દરેક બાળકની આગવી પ્રતિભાને ઓળખી, ખીલવે છે.
        </p>

        {/* Subject chips */}
        <div className="ac-a4" style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 10, marginBottom: 40,
        }}>
          {[
            { icon: '🧮', label: 'ગણિત' },
            { icon: '🔬', label: 'વિજ્ઞાન' },
            { icon: '📖', label: 'ગુજરાતી' },
            { icon: '🌍', label: 'સામાજિક વિજ્ઞાન' },
            { icon: '💻', label: 'કોમ્પ્યુટર' },
            { icon: '🎨', label: 'કળા' },
            { icon: '📚', label: 'આર્ટ્સ' },
            { icon: '🏃', label: 'P.T.' },
          ].map((s) => (
            <span
              key={s.label}
              className="ac-chip"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#fff', color: '#1a56db',
                border: '1.5px solid #bfdbfe',
                fontSize: 13, fontWeight: 700,
                padding: '7px 16px', borderRadius: 50,
                boxShadow: '0 2px 8px rgba(26,86,219,0.07)',
                cursor: 'default',
              }}
            >
              {s.icon} {s.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="ac-a5" style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
          <Link href="/academics#admissions" style={{ textDecoration: 'none' }}>
            <button className="ac-btn" style={{
              background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
              color: '#fff', border: 'none', borderRadius: 13,
              padding: '13px 32px', fontSize: 15, fontWeight: 800,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: '0 4px 18px rgba(26,86,219,0.25)',
            }}>
              🎒 પ્રવેશ અરજી
            </button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button className="ac-btn" style={{
              background: '#fff', color: '#1a56db',
              border: '1.5px solid #bfdbfe', borderRadius: 13,
              padding: '13px 32px', fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              📞 સંપર્ક
            </button>
          </Link>
        </div>

       

      </div>
    </section>
  )
}