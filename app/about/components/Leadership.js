'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const leaders = [
  {
    name: 'વલ્લભભાઈ રામાણી',
    role: 'ટ્રસ્ટી',
    roleEn: 'Trustee',
    image: '/image/t1.png',
    bio: 'શ્રી વલ્લભભાઈ રામાણીની દૂરંદેશી અને સમર્પણથી ૧૬ વર્ષ પહેલાં આ શૈક્ષણિક સ્વપ્નની શરૂઆત થઈ. તેમના નેતૃત્વ હેઠળ શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલય આજે કામળૂર, જસદણ, રાજકોટ વિસ્તારમાં ૪૫૦ થી વધુ વિદ્યાર્થીઓના ઉજ્જવળ ભવિષ્ય માટે કાર્યરત છે.',
    icon: '🏛️',
    color: '#1a56db',
    light: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    name: 'ચિરાગ રામાણી',
    role: 'નિયામક',
    roleEn: 'Director',
    image: '/image/t2.png',
    bio: 'શ્રી ચિરાગ રામાણી શાળાના દૈનિક સંચાલન અને શૈક્ષણિક ગુણવત્તાની જવાબદારી સંભાળે છે. ૨૦ અનુભવી શિક્ષકોની ટીમ સાથે તેઓ દરેક વિદ્યાર્થીના સર્વાંગી વિકાસ માટે અથાક પ્રયત્નશીલ છે.',
    icon: '🎓',
    color: '#0f2d6e',
    light: '#eef2ff',
    border: '#c7d2fe',
  },
  {
    name: 'જયેશ ઢોલરિયા',
    role: 'મેનેજમેન્ટ ટ્રસ્ટી',
    roleEn: 'Management Trustee',
    image: '/image/t3.png',
    bio: 'શ્રી જયેશ ઢોલરિયા શાળાના મેનેજમેન્ટ ટ્રસ્ટી તરીકે શાળાના વિકાસ અને વ્યવસ્થાપનમાં મહત્વની ભૂમિકા ભજવે છે. તેમના પ્રયાસોથી શાળામાં સ્માર્ટ ક્લાસ, કોમ્પ્યુટર લેબ અને પરિવહન જેવી આધુનિક સુવિધાઓ શક્ય બની છે.',
    icon: '⚙️',
    color: '#0369a1',
    light: '#f0f9ff',
    border: '#bae6fd',
  },
]

export default function Leadership() {
  const [active, setActive] = useState(0)
  const leader = leaders[active]

  return (
    <section style={{
      padding: 'clamp(56px,8vw,96px) 24px',
      background: '#f8faff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');

        @keyframes ldFadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ldFadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes ldSlideIn  { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }

        .ld-panel   { animation: ldFadeUp  0.38s ease both; }
        .ld-img     { animation: ldFadeIn  0.45s ease both; }
        .ld-content { animation: ldSlideIn 0.38s ease 0.08s both; }

        .ld-tab {
          transition: all 0.22s ease;
          cursor: pointer;
        }
        .ld-tab:hover { transform: translateY(-3px); }

        .ld-divider {
          width: 48px; height: 3px;
          border-radius: 4px;
          margin: 4px 0 12px;
        }
      `}</style>

      <div style={{ maxWidth: 1060, margin: '0 auto' }}>

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
            👥 સંચાલન મંડળ
          </span>

          <h2 style={{
            fontSize: 'clamp(28px,5vw,48px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 18px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            સંચાલન
          </h2>

          <p style={{
            maxWidth: 660, margin: '0 auto',
            color: '#475569', fontSize: 16, lineHeight: 1.85,
          }}>
            શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયનું સંચાલન એવા અનુભવી અને સમર્પિત
            વ્યક્તિઓના હાથમાં છે — જેઓ માત્ર શાળા નથી ચલાવતા, પણ દરેક બાળકના
            ઉજ્જવળ ભવિષ્યનું સ્વપ્ન જુએ છે.
          </p>
        </div>

        {/* ── Tab buttons ── */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 12, marginBottom: 36, flexWrap: 'wrap',
        }}>
          {leaders.map((l, i) => (
            <button
              key={i}
              className="ld-tab"
              onClick={() => setActive(i)}
              style={{
                padding: '10px 22px',
                borderRadius: 50,
                border: active === i
                  ? `2px solid ${l.color}`
                  : '2px solid #e2e8f0',
                background: active === i ? l.color : '#fff',
                color: active === i ? '#fff' : '#475569',
                fontWeight: 700, fontSize: 14,
                fontFamily: 'inherit',
                boxShadow: active === i
                  ? `0 6px 20px ${l.color}35`
                  : '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              {l.icon} {l.name}
            </button>
          ))}
        </div>

        {/* ── Main panel ── */}
    <div
  key={active}
  className="ld-panel"
  style={{
    background: '#fff',
    border: `1.5px solid ${leader.border}`,
    borderRadius: 24,
    overflow: 'hidden',
    boxShadow: `0 8px 40px ${leader.color}12`,
  }}
>
  {/* Top accent bar */}
  <div
    style={{
      height: 5,
      background: `linear-gradient(90deg, ${leader.color}, #60a5fa)`,
    }}
  />

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    }}
  >

    {/* ── Image side ── */}
    <div
      className="ld-img"
      style={{
        position: 'relative',
        minHeight: 320,
        background: leader.light,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Image
        src={leader.image}
        alt={leader.name}
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'center',
          padding: '10px',
        }}
      />

      {/* Role badge on image */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          background: leader.color,
          color: '#fff',
          fontSize: 12,
          fontWeight: 700,
          padding: '6px 16px',
          borderRadius: 50,
          boxShadow: `0 4px 12px ${leader.color}55`,
          letterSpacing: '0.04em',
          zIndex: 2,
        }}
      >
        {leader.icon} {leader.role}
      </div>
    </div>

    {/* ── Content side ── */}
    <div
      className="ld-content"
      style={{
        padding: 'clamp(28px,4vw,48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      {/* Role pill */}
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: leader.light,
          color: leader.color,
          border: `1px solid ${leader.border}`,
          fontSize: 11,
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: 50,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {leader.roleEn}
      </span>

      <h3
        style={{
          fontSize: 'clamp(22px,3vw,32px)',
          fontWeight: 900,
          color: '#0f172a',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {leader.name}
      </h3>

      <div
        className="ld-divider"
        style={{ background: leader.color }}
      />

      <p
        style={{
          color: '#475569',
          fontSize: 15.5,
          lineHeight: 1.9,
          margin: 0,
        }}
      >
        {leader.bio}
      </p>

      {/* Quick facts */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          marginTop: 8,
        }}
      >
        {active === 0 &&
          [
            { icon: '📅', text: '૧૬+ વર્ષ અનુભવ' },
            { icon: '🏫', text: '૨ વિદ્યાલય' },
            { icon: '🧑‍🎓', text: '૪૫૦+ વિદ્યાર્થી' },
          ].map((f, i) => (
            <span
              key={i}
              style={{
                background: leader.light,
                color: leader.color,
                border: `1px solid ${leader.border}`,
                fontSize: 12,
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: 50,
              }}
            >
              {f.icon} {f.text}
            </span>
          ))}

        {active === 1 &&
          [
            { icon: '👨‍🏫', text: '૨૦ શિક્ષક ટીમ' },
            { icon: '📋', text: 'દૈનિક સંચાલન' },
            { icon: '🎯', text: 'GSEB નિષ્ણાત' },
          ].map((f, i) => (
            <span
              key={i}
              style={{
                background: leader.light,
                color: leader.color,
                border: `1px solid ${leader.border}`,
                fontSize: 12,
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: 50,
              }}
            >
              {f.icon} {f.text}
            </span>
          ))}

        {active === 2 &&
          [
            { icon: '💻', text: 'સ્માર્ટ ક્લાસ' },
            { icon: '🏗️', text: 'ઇન્ફ્રા વિકાસ' },
            { icon: '🚌', text: 'પરિવહન' },
          ].map((f, i) => (
            <span
              key={i}
              style={{
                background: leader.light,
                color: leader.color,
                border: `1px solid ${leader.border}`,
                fontSize: 12,
                fontWeight: 700,
                padding: '5px 14px',
                borderRadius: 50,
              }}
            >
              {f.icon} {f.text}
            </span>
          ))}
      </div>
    </div>
  </div>
</div>

        {/* ── All 3 mini cards below ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 16, marginTop: 28,
        }}>
          {leaders.map((l, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="ld-tab"
              style={{
                background: active === i ? l.color : '#fff',
                border: `1.5px solid ${active === i ? l.color : '#e2e8f0'}`,
                borderRadius: 16, padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 12,
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                boxShadow: active === i
                  ? `0 6px 20px ${l.color}30`
                  : '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              <span style={{
                fontSize: 22, width: 44, height: 44,
                background: active === i ? 'rgba(255,255,255,0.15)' : l.light,
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                border: `1px solid ${active === i ? 'rgba(255,255,255,0.2)' : l.border}`,
              }}>
                {l.icon}
              </span>
              <div>
                <div style={{
                  fontSize: 14, fontWeight: 800,
                  color: active === i ? '#fff' : '#0f172a',
                }}>
                  {l.name}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 600,
                  color: active === i ? 'rgba(255,255,255,0.75)' : '#94a3b8',
                  marginTop: 2,
                }}>
                  {l.role}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}