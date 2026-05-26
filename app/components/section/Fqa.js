'use client'

import React, { useState } from 'react'

const faqs = [
  {
    q: "શ્રી શિવમ્ વિદ્યાલયમાં કયા ધોરણ સુધી અભ્યાસ થાય છે?",
    a: "શ્રી શિવમ્ વિદ્યાલયમાં ધોરણ ૧ થી ૮ સુધી અને શ્રી વજીબા વિદ્યાલયમાં ધોરણ ૯ થી ૧૨ આર્ટ્સ સુધી અભ્યાસ થાય છે.",
    icon: '🏫',
  },
  {
    q: "શાળાનું માધ્યમ કયું છે?",
    a: "અમારી શાળા સંપૂર્ણ ગુજરાતી માધ્યમમાં છે અને ગુજરાત બોર્ડ (GSEB) સાથે સંલગ્ન છે.",
    icon: '📚',
  },
  {
    q: "શાળામાં પ્રવેશ કેવી રીતે મેળવવો?",
    a: "પ્રવેશ માટે શાળાની વેબસાઇટ પર ઓનલાઇન અરજી કરો અથવા સીધા શાળાએ આવીને સંપર્ક કરો. અમારી ટીમ તમને સંપૂર્ણ માર્ગદર્શન આપશે.",
    icon: '🎒',
  },
  {
    q: "શાળામાં કઈ કઈ સુવિધાઓ છે?",
    a: "અમારી શાળામાં સ્માર્ટ ક્લાસ, કોમ્પ્યુટર લેબ, વિશાળ રમતગમત મેદાન, સમૃદ્ધ પુસ્તકાલય અને સુરક્ષિત પરિવહન સેવા ઉપલબ્ધ છે.",
    icon: '🏛️',
  },
  {
    q: "શાળાની સ્થાપના ક્યારે થઈ?",
    a: "અમારી શાળાની સ્થાપના ૧૬ વર્ષ પહેલાં થઈ હતી. ત્યારથી આજ સુધી અમે ૧૦૦૦ થી વધુ વિદ્યાર્થીઓને ગુણવત્તાસભર શિક્ષણ આપી રહ્યા છીએ.",
    icon: '📅',
  },
  {
    q: "શાળામાં કેટલા શિક્ષકો છે?",
    a: "અમારી શાળામાં ૪૦ અનુભવી અને સમર્પિત શિક્ષકો છે જે દરેક વિદ્યાર્થીના વ્યક્તિગત વિકાસ પર ધ્યાન આપે છે.",
    icon: '👨‍🏫',
  },
  {
    q: "શાળા ક્યાં આવેલી છે?",
    a: "અમારી શાળા કામળૂર, જસદણ, રાજકોટ, ગુજરાતમાં આવેલી છે. વિદ્યાર્થીઓ માટે પરિવહન સુવિધા પણ ઉપલબ્ધ છે.",
    icon: '📍',
  },
  {
    q: "શાળાનું સંચાલન કોણ કરે છે?",
    a: "શાળાનું સંચાલન ટ્રસ્ટી શ્રી વલ્લભભાઈ રામાણી, નિયામક શ્રી ચિરાગ રામાણી અને મેનેજમેન્ટ ટ્રસ્ટી શ્રી જયેશ ઢોલરિયાના કુશળ નેતૃત્વ હેઠળ થાય છે.",
    icon: '👥',
  },
]

export default function Faq() {
  const [active, setActive] = useState(null)

  const toggle = (i) => setActive(prev => prev === i ? null : i)

  return (
    <section style={{
      padding: 'clamp(56px,8vw,96px) 24px',
      background: '#f8faff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes faqFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .faq-a1{animation:faqFadeUp 0.5s ease 0.05s both}
        .faq-a2{animation:faqFadeUp 0.5s ease 0.18s both}
        .faq-item-wrap{animation:faqFadeUp 0.5s ease both}
        .faq-btn { transition: background 0.2s; }
        .faq-btn:hover { background: #f1f5ff !important; }
        .faq-content {
          overflow: hidden;
          transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.28s ease,
                      padding 0.28s ease;
        }
        .faq-icon-wrap { transition: transform 0.28s ease, background 0.2s; }
      `}</style>

      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* Header */}
        <div className="faq-a1" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            ❓ વારંવાર પૂછાતા પ્રશ્નો
          </span>

          <h2 style={{
            fontSize: 'clamp(26px,5vw,46px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 16px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            વારંવાર પૂછાતા પ્રશ્નો
          </h2>

          <p className="faq-a2" style={{
            maxWidth: 540, margin: '0 auto',
            color: '#475569', fontSize: 15.5, lineHeight: 1.85,
          }}>
            શાળા વિશે સૌથી વધુ પૂછાતા પ્રશ્નો અને તેના જવાબ — એક જ જગ્યાએ.
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((item, i) => {
            const isOpen = active === i
            return (
              <div
                key={i}
                className="faq-item-wrap"
                style={{
                  background: '#fff',
                  border: `1.5px solid ${isOpen ? '#bfdbfe' : '#e2e8f0'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(26,86,219,0.10)'
                    : '0 2px 10px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                {/* Top accent bar — only when open */}
                <div style={{
                  height: 3,
                  background: 'linear-gradient(90deg,#0f2d6e,#1a56db,#60a5fa)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'opacity 0.25s',
                }} />

                {/* Question button */}
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '18px 20px',
                    background: isOpen ? '#f8fbff' : '#fff',
                    border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'inherit',
                  }}
                >
                  {/* Icon */}
                  <span style={{
                    fontSize: 18,
                    width: 40, height: 40, flexShrink: 0,
                    background: isOpen ? '#eff6ff' : '#f8fafc',
                    border: `1px solid ${isOpen ? '#bfdbfe' : '#e2e8f0'}`,
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}>
                    {item.icon}
                  </span>

                  {/* Question text */}
                  <span style={{
                    flex: 1,
                    fontSize: 'clamp(14px,2vw,16px)',
                    fontWeight: 700,
                    color: isOpen ? '#1a56db' : '#0f172a',
                    lineHeight: 1.5,
                    transition: 'color 0.2s',
                  }}>
                    {item.q}
                  </span>

                  {/* Plus/Minus */}
                  <span
                    className="faq-icon-wrap"
                    style={{
                      width: 32, height: 32, flexShrink: 0,
                      borderRadius: '50%',
                      background: isOpen ? '#1a56db' : '#f1f5f9',
                      color: isOpen ? '#fff' : '#64748b',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, fontWeight: 700,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="faq-content"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '0 20px 18px 74px' : '0 20px 0 74px',
                  }}
                >
                  <p style={{
                    color: '#475569',
                    fontSize: 'clamp(13px,1.8vw,15.5px)',
                    lineHeight: 1.85,
                    margin: 0,
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 44,
          background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
          borderRadius: 18, padding: '24px 28px',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 16,
          textAlign: 'left',
        }}>
          <div>
            <p style={{ color: '#93c5fd', fontSize: 12, fontWeight: 700, margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              બીજો કોઈ સવાલ?
            </p>
            <h4 style={{ color: '#fff', fontSize: 'clamp(14px,2.5vw,19px)', fontWeight: 800, margin: 0 }}>
              અમે ૨૪ કલાકમાં જવાબ આપીશું
            </h4>
          </div>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#fff', color: '#1a56db',
              border: 'none', borderRadius: 11,
              padding: '11px 24px', fontWeight: 800,
              fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}>
              📬 સંપર્ક કરો →
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}