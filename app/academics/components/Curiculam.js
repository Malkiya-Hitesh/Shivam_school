'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const curriculums = [
  {
    id: 0,
    label: 'પ્રાથમિક',
    emoji: '🌱',
    title: 'પ્રાથમિક વિભાગ',
    subtitle: 'Primary Section',
    grades: ['ધોરણ : ૧ થી ૫', 'ધોરણ : ૬ થી ૮'],
    desc: 'શ્રી શિવમ્ વિદ્યાલયમાં પ્રાથમિક વિભાગ (ધો. ૧ થી ૮) માં ગણિત, ગુજરાતી, વિજ્ઞાન અને સામાજિક વિજ્ઞાનનો મજબૂત પાયો નાખવામાં આવે છે. સ્માર્ટ ક્લાસ અને પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા બાળકમાં શીખવાની જિજ્ઞાસા જગાડવામાં આવે છે.',
    image: '/image/1a.png',
    accentColor: '#16a34a',
    lightColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    stats: [
      { value: '8', label: 'ધોરણ' },
      { value: '15+', label: 'શિક્ષકો' },
      { value: '300+', label: 'વિદ્યાર્થીઓ' },
    ],
    features: [
      '📚 સ્માર્ટ ક્લાસ ટેકનોલોજી',
      '🎨 કળા અને સર્જનાત્મક શિક્ષણ',
      '🏃 રમત-ગમત અને યોગ',
      '🔬 પ્રયોગ આધારિત વિજ્ઞાન',
      '📖 ગ્રંથાલય સુવિધા',
      '🎵 સંગીત અને સાંસ્કૃતિક પ્રવૃત્તિ',
    ],
  },
  {
    id: 1,
    label: 'માધ્યમિક',
    emoji: '📘',
    title: 'માધ્યમિક વિભાગ',
    subtitle: 'Secondary Section',
    grades: ['ધોરણ : ૯', 'ધોરણ : ૧૦'],
    desc: 'શ્રી વજીબા વિદ્યાલયમાં માધ્યમિક વિભાગ (ધો. ૯-૧૦) માં GSEB બોર્ડની પરીક્ષા માટે સંપૂર્ણ તૈયારી કરાવવામાં આવે છે. ૨૦ અનુભવી શિક્ષકો દ્વારા દરેક વિષયની ઊંડી સમજ આપવામાં આવે છે.',
    image: '/image/2a.png',
    accentColor: '#1d4ed8',
    lightColor: '#eff6ff',
    borderColor: '#bfdbfe',
    stats: [
      { value: '2', label: 'ધોરણ' },
      { value: '10+', label: 'અનુભવી શિક્ષકો' },
      { value: '98%', label: 'પાસ ટકાવારી' },
    ],
    features: [
      '📝 GSEB બોર્ડ સ્પેશ્યલ તૈયારી',
      '🧪 વિજ્ઞાન પ્રયોગ શાળા',
      '🧮 ગણિત વિશેષ વર્ગ',
      '📊 ટેસ્ટ સિરીઝ અને મૂલ્યાંકન',
      '👨‍🏫 વ્યક્તિગત માર્ગદર્શન',
      '📱 ડિજિટલ અભ્યાસ સામગ્રી',
    ],
  },
  {
    id: 2,
    label: 'ઉચ્ચ માધ્ય.',
    emoji: '🎓',
    title: 'ઉચ્ચ માધ્યમિક વિભાગ',
    subtitle: 'Higher Secondary Section',
    grades: ['ધોરણ : ૧૧', 'ધોરણ : ૧૨ આર્ટ્સ'],
    desc: 'શ્રી વજીબા વિદ્યાલયમાં ઉચ્ચ માધ્યમિક આર્ટ્સ વિભાગ (ધો. ૧૧-૧૨) માં વિદ્યાર્થીઓને ઉચ્ચ શિક્ષણ અને કારકિર્દી માટે સક્ષમ બનાવવામાં આવે છે. વક્તૃત્વ, નેતૃત્વ અને વ્યક્તિત્વ વિકાસ પર વિશેષ ભાર મૂકવામાં આવે છે.',
    image: '/image/3a.png',
    accentColor: '#7c3aed',
    lightColor: '#faf5ff',
    borderColor: '#ddd6fe',
    stats: [
      { value: '2', label: 'ધોરણ' },
      { value: 'આર્ટ્સ', label: 'પ્રવાહ' },
      { value: '100%', label: 'કારકિર્દી માર્ગ.' },
    ],
    features: [
      '🗣️ વક્તૃત્વ અને ચર્ચા',
      '👑 નેતૃત્વ વિકાસ',
      '🎭 સાંસ્કૃતિક પ્રવૃત્તિ',
      '📰 સ્પર્ધાત્મક પરીક્ષા માર્ગ.',
      '🤝 વ્યક્તિત્વ વિકાસ',
      '🏛️ ઉચ્ચ શિક્ષણ માર્ગ.',
    ],
  },
]

export default function Curiculam() {
  const [active, setActive] = useState(0)
  const curr = curriculums[active]

  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #f8faff 0%, #f1f5fb 100%)',
        padding: '80px 24px',
        fontFamily: "'Mukta', 'Noto Sans Gujarati', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700&display=swap');
        .curr-tab { transition: all 0.22s ease; }
        .curr-tab:hover { transform: translateY(-2px); }
        .curr-feature { transition: background 0.18s; }
        .curr-feature:hover { background: #f1f5ff !important; }
        .curr-card-inner { transition: opacity 0.28s ease, transform 0.28s ease; }
        .curr-stat { transition: transform 0.18s; }
        .curr-stat:hover { transform: translateY(-3px); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.35s ease both; }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span
            style={{
              display: 'inline-block',
              background: '#1e3a8a',
              color: '#fff',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '6px 20px',
              borderRadius: 50,
              marginBottom: 18,
            }}
          >
            GSEB ગુજરાતી માધ્યમ
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 46px)',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 16px',
              lineHeight: 1.2,
              fontFamily: "'Noto Sans Gujarati', sans-serif",
            }}
          >
            કાર્યક્ષેત્ર
          </h2>
          <p
            style={{
              maxWidth: 680,
              margin: '0 auto',
              color: '#475569',
              fontSize: 16,
              lineHeight: 1.75,
              fontFamily: "'Noto Sans Gujarati', sans-serif",
            }}
          >
            શ્રી શિવમ અને શ્રી વજીબા વિદ્યાલયમાં GSEB ગુજરાતી માધ્યમ આધારિત અભ્યાસક્રમ
            ધોરણ ૧ થી ૧૨ સુધી વ્યવસ્થિત રીતે ગોઠવવામાં આવ્યો છે — સર્વાંગી વિકાસ પર ભાર.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}
        >
          {curriculums.map((c) => (
            <button
              key={c.id}
              className="curr-tab"
              onClick={() => setActive(c.id)}
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                border: active === c.id ? `2px solid ${c.accentColor}` : '2px solid #e2e8f0',
                background: active === c.id ? c.accentColor : '#fff',
                color: active === c.id ? '#fff' : '#334155',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                fontFamily: "'Noto Sans Gujarati', sans-serif",
                boxShadow: active === c.id ? `0 4px 16px ${c.accentColor}40` : '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div
          key={active}
          className="fade-up"
          style={{
            background: '#fff',
            borderRadius: 24,
            boxShadow: '0 8px 48px rgba(15,23,42,0.08)',
            border: `1px solid ${curr.borderColor}`,
            overflow: 'hidden',
          }}
        >
          {/* Accent bar */}
          <div style={{ height: 5, background: curr.accentColor, width: '100%' }} />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 0,
            }}
          >
            {/* Image side */}
            <div
              style={{
                position: 'relative',
                background: curr.lightColor,
                minHeight: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 32,
              }}
            >
              {/* Grade badges */}
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  zIndex: 2,
                }}
              >
                {curr.grades.map((g, i) => (
                  <span
                    key={i}
                    style={{
                      background: curr.accentColor,
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '5px 14px',
                      borderRadius: 50,
                      fontFamily: "'Noto Sans Gujarati', sans-serif",
                      boxShadow: `0 2px 8px ${curr.accentColor}50`,
                    }}
                  >
                    {g}
                  </span>
                ))}
              </div>

              <Image
                src={curr.image}
                alt={curr.title}
                width={460}
                height={340}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 16,
                  objectFit: 'cover',
                  maxHeight: 320,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                }}
              />
            </div>

            {/* Content side */}
            <div style={{ padding: '36px 36px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: curr.accentColor, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px' }}>
                  {curr.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 3vw, 30px)',
                    fontWeight: 800,
                    color: '#0f172a',
                    margin: 0,
                    fontFamily: "'Noto Sans Gujarati', sans-serif",
                  }}
                >
                  {curr.title}
                </h3>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {curr.stats.map((s, i) => (
                  <div
                    key={i}
                    className="curr-stat"
                    style={{
                      background: curr.lightColor,
                      border: `1px solid ${curr.borderColor}`,
                      borderRadius: 12,
                      padding: '12px 18px',
                      textAlign: 'center',
                      minWidth: 80,
                      flex: '1 1 80px',
                    }}
                  >
                    <div style={{ fontSize: 22, fontWeight: 800, color: curr.accentColor }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, marginTop: 2, fontFamily: "'Noto Sans Gujarati', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  color: '#475569',
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                  fontFamily: "'Noto Sans Gujarati', sans-serif",
                }}
              >
                {curr.desc}
              </p>

              {/* Features */}
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>
                  વિશેષ સુવિધાઓ
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {curr.features.map((f, i) => (
                    <div
                      key={i}
                      className="curr-feature"
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: 10,
                        padding: '8px 12px',
                        fontSize: 13,
                        color: '#334155',
                        fontFamily: "'Noto Sans Gujarati', sans-serif",
                        cursor: 'default',
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
               
                <a
                  href="/academics#admissions"
                  style={{
                    background: '#fff',
                    color: curr.accentColor,
                    padding: '12px 28px',
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                    border: `2px solid ${curr.accentColor}`,
                    fontFamily: "'Noto Sans Gujarati', sans-serif",
                  }}
                >
                  🎒 અરજી કરો
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom overview strip */}
        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {[
            { icon: '🏫', label: 'GSEB માન્ય', sub: 'ગુજરાત સ્ટેટ બોર્ડ' },
            { icon: '👨‍🏫', label: '20+ શિક્ષકો', sub: 'અનુભવી અને પ્રશિક્ષિત' },
            { icon: '📅', label: '16+ વર્ષ', sub: 'શૈક્ષણિક અનુભવ' },
            { icon: '🌟', label: '1000+ વિદ્યાર્થી', sub: 'સક્રિય નોંધણી' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <span style={{ fontSize: 30 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#0f172a' }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#64748b', fontFamily: "'Noto Sans Gujarati', sans-serif" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}