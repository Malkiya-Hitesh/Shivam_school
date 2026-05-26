'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const sections = [
  {
    id: 'primary',
    emoji: '🌱',
    school: 'શ્રી શિવમ્ વિદ્યાલય',
    title: 'પ્રાથમિક વિભાગ',
    subtitle: 'ધોરણ ૧ થી ૮',
    desc: 'ગુજરાત બોર્ડ (GSEB) આધારિત ગુજરાતી માધ્યમમાં ગણિત, વિજ્ઞાન, ભાષા અને સામાજિક વિજ્ઞાનનો મજબૂત પાયો નાખવામાં આવે છે — સ્માર્ટ ક્લાસ અને પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા.',
    accent: '#16a34a',
    light: '#f0fdf4',
    border: '#86efac',
    items: [
      { icon: '🎯', text: 'પ્રવૃત્તિ આધારિત શિક્ષણ' },
      { icon: '📋', text: 'પ્રોજેક્ટ આધારિત અભ્યાસ' },
      { icon: '💡', text: 'કૌશલ્ય વિકાસ' },
      { icon: '👨‍🏫', text: 'અનુભવી અને સમર્પિત શિક્ષકો' },
      { icon: '💻', text: 'કોમ્પ્યુટર શિક્ષણ' },
      { icon: '🎨', text: 'કળા અને સાંસ્કૃતિક પ્રવૃત્તિઓ' },
    ],
    stats: [{ v: '8', l: 'ધોરણ' }, { v: '400+', l: 'વિદ્યાર્થી' }, { v: '20+', l: 'શિક્ષક' }],
  },
  {
    id: 'higher',
    emoji: '🎓',
    school: 'શ્રી વજીબા વિદ્યાલય',
    title: 'ઉચ્ચ માધ્યમિક વિભાગ',
    subtitle: 'ધોરણ ૯ થી ૧૨ આર્ટ્સ',
    desc: 'નિયામક શ્રી ચિરાગ રામાણીના માર્ગદર્શન હેઠળ ધોરણ ૯ થી ૧૨ આર્ટ્સ વિભાગમાં વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ અને જીવનની તૈયારી માટે સક્ષમ બનાવવામાં આવે છે.',
    accent: '#7c3aed',
    light: '#faf5ff',
    border: '#c4b5fd',
    items: [
      { icon: '📚', text: 'આર્ટ્સ પ્રવાહનો ઊંડો અભ્યાસ' },
      { icon: '✍️', text: 'GSEB બોર્ડ પરીક્ષાની સંપૂર્ણ તૈયારી' },
      { icon: '🧭', text: 'કારકિર્દી માર્ગદર્શન' },
      { icon: '🗣️', text: 'વક્તૃત્વ અને નેતૃત્વ વિકાસ' },
      { icon: '🏆', text: 'રમતગમત અને સ્પર્ધાત્મક પ્રવૃત્તિઓ' },
      { icon: '📖', text: 'પુસ્તકાલય અને અભ્યાસ સહાય' },
    ],
    stats: [{ v: '4', l: 'ધોરણ' }, { v: '98%', l: 'પાસ ટકા' }, { v: '600+', l: 'વિદ્યાર્થી' }],
  },
]

export default function Acadmics() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(170deg,#f8faff 0%,#f1f5fb 100%)',
        fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .acad-card{transition:transform 0.24s ease,box-shadow 0.24s ease;}
        .acad-card:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,0,0,0.11)!important;}
        .acad-item{transition:background 0.18s,transform 0.18s;}
        .acad-item:hover{transform:translateX(4px);}
        .acad-btn{transition:opacity 0.18s,transform 0.15s;}
        .acad-btn:hover{opacity:0.88;transform:scale(1.03);}
        .fade-section{animation:fadeUp 0.5s ease both;}
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-section">
          <span style={{
            display: 'inline-block', background: '#1e3a8a', color: '#fff',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            GSEB ગુજરાતી માધ્યમ
          </span>

          <h2 style={{
            fontSize: 'clamp(30px,5vw,48px)', fontWeight: 800,
            color: '#0f172a', margin: '0 0 18px', lineHeight: 1.15,
          }}>
            અભ્યાસક્રમ
          </h2>

          <p style={{
            maxWidth: 680, margin: '0 auto', color: '#475569',
            fontSize: 16, lineHeight: 1.85,
          }}>
            શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયમાં અભ્યાસક્રમ એ માત્ર પુસ્તકીય જ્ઞાન નહીં —
            બાળકની સંપૂર્ણ બૌદ્ધિક, સર્જનાત્મક અને નૈતિક વિકાસ માટે ઘડવામાં આવ્યો છે.
          </p>
        </div>

        {/* ── Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 28,
        }}>
          {sections.map((s, idx) => (
            <div
              key={s.id}
              className="acad-card fade-section"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: '#fff',
                borderRadius: 22,
                border: `1.5px solid ${hovered === s.id ? s.border : '#e8edf5'}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                animationDelay: `${idx * 0.12}s`,
              }}
            >
              {/* top accent bar */}
              <div style={{ height: 5, background: s.accent }} />

              {/* school badge + emoji */}
              <div style={{
                background: s.light,
                padding: '22px 26px 18px',
                borderBottom: `1px solid ${s.border}`,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}>
                <span style={{
                  fontSize: 36,
                  width: 60, height: 60,
                  background: '#fff',
                  borderRadius: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1.5px solid ${s.border}`,
                  flexShrink: 0,
                  boxShadow: `0 4px 12px ${s.accent}22`,
                }}>
                  {s.emoji}
                </span>
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 700, color: s.accent,
                    textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 3px',
                  }}>
                    {s.school}
                  </p>
                  <h3 style={{
                    fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 800,
                    color: '#0f172a', margin: 0, lineHeight: 1.2,
                  }}>
                    {s.title}
                  </h3>
                </div>
              </div>

              <div style={{ padding: '22px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Grade badge */}
                <span style={{
                  display: 'inline-block',
                  background: s.accent,
                  color: '#fff',
                  fontSize: 13, fontWeight: 700,
                  padding: '5px 16px', borderRadius: 50,
                  alignSelf: 'flex-start',
                  boxShadow: `0 3px 10px ${s.accent}40`,
                }}>
                  {s.subtitle}
                </span>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: 10 }}>
                  {s.stats.map((st, i) => (
                    <div key={i} style={{
                      flex: 1,
                      background: s.light,
                      border: `1px solid ${s.border}`,
                      borderRadius: 12,
                      padding: '10px 6px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: s.accent }}>{st.v}</div>
                      <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, marginTop: 2 }}>{st.l}</div>
                    </div>
                  ))}
                </div>

                {/* Desc */}
                <p style={{ color: '#475569', fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>
                  {s.desc}
                </p>

                {/* Feature list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map((item, i) => (
                    <div
                      key={i}
                      className="acad-item"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        background: '#f8fafc',
                        border: '1px solid #e8edf5',
                        borderRadius: 10,
                        padding: '9px 13px',
                        fontSize: 14, color: '#334155',
                      }}
                    >
                      <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                  <Link href="/academics" style={{ textDecoration: 'none' }}>
                    <button
                      className="acad-btn"
                      style={{
                        width: '100%',
                        padding: '13px',
                        background: s.accent,
                        color: '#fff',
                        border: 'none',
                        borderRadius: 13,
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        boxShadow: `0 4px 16px ${s.accent}40`,
                        letterSpacing: '0.02em',
                      }}
                    >
                      વધુ જાણો →
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <div style={{
          marginTop: 48,
          background: '#1e3a8a',
          borderRadius: 20,
          padding: '28px 36px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ color: '#93c5fd', fontSize: 13, fontWeight: 600, margin: '0 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              બંને વિદ્યાલય — એક ધ્યેય
            </p>
            <h4 style={{ color: '#fff', fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 800, margin: 0 }}>
              ધો. ૧ થી ૧૨ — GSEB ગુજરાતી માધ્યમ
            </h4>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { v: '1000+', l: 'વિદ્યાર્થી' },
              { v: '40+', l: 'શિક્ષક' },
              { v: '25+', l: 'વર્ષ' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#fff', fontSize: 28, fontWeight: 800 }}>{s.v}</div>
                <div style={{ color: '#93c5fd', fontSize: 13, fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <Link href="/academics" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#fff',
              color: '#1e3a8a',
              border: 'none',
              borderRadius: 12,
              padding: '12px 28px',
              fontWeight: 800,
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}>
              સંપૂર્ણ અભ્યાસક્રમ →
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}