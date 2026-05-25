'use client'

import React from 'react'
import Link from 'next/link'

function HomeClient() {
  return (
    <main
      style={{
        marginTop: 'clamp(4rem, 7vw, 7rem)',
        background: 'linear-gradient(160deg, #f0f4ff 0%, #fafbff 60%, #f5f0ff 100%)',
        fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');

        @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes float    { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) } }
        @keyframes pulse    { 0%,100% { opacity:0.6; transform:scale(1) } 50% { opacity:1; transform:scale(1.06) } }

        .hero-badge   { animation: fadeIn  0.6s ease both; }
        .hero-title   { animation: fadeUp  0.7s ease 0.15s both; }
        .hero-desc    { animation: fadeUp  0.7s ease 0.3s  both; }
        .hero-cards   { animation: fadeUp  0.7s ease 0.45s both; }
        .hero-btns    { animation: fadeUp  0.7s ease 0.6s  both; }
        .hero-stats   { animation: fadeUp  0.7s ease 0.72s both; }

        .school-card  {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
        }
        .school-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.13) !important;
        }
        .hero-btn {
          transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
        }
        .hero-btn:hover { transform: translateY(-2px) scale(1.04); opacity: 0.92; }

        /* bg decorative blobs */
        .blob1 {
          position:absolute; width:420px; height:420px; border-radius:50%;
          background:radial-gradient(circle,#c7d2fe55,transparent 70%);
          top:-80px; left:-100px; pointer-events:none;
          animation: float 7s ease-in-out infinite;
        }
        .blob2 {
          position:absolute; width:320px; height:320px; border-radius:50%;
          background:radial-gradient(circle,#ddd6fe44,transparent 70%);
          bottom:-60px; right:-60px; pointer-events:none;
          animation: float 9s ease-in-out infinite reverse;
        }
        .blob3 {
          position:absolute; width:200px; height:200px; border-radius:50%;
          background:radial-gradient(circle,#bbf7d040,transparent 70%);
          top:40%; right:15%; pointer-events:none;
          animation: pulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* Bg blobs */}
      <div className="blob1" />
      <div className="blob2" />
      <div className="blob3" />

      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: 'clamp(48px, 8vw, 96px) 24px clamp(56px, 9vw, 104px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 0,
        position: 'relative',
        zIndex: 1,
      }}>

        {/* GSEB pill */}
        <div className="hero-badge" style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#1e3a8a', color: '#e0e7ff',
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '7px 22px', borderRadius: 50,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#6ee7b7', display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            GSEB ગુજરાતી માધ્યમ · ધો. ૧ થી ૧૨
          </span>
        </div>

        {/* Main title */}
        <h1
          className="hero-title"
          style={{
            fontSize: 'clamp(34px, 7vw, 72px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.12,
            margin: '0 0 8px',
            letterSpacing: '-0.5px',
          }}
        >
          શ્રેષ્ઠ શિક્ષણ,
          <span style={{ color: '#1d4ed8', display: 'block' }}>ઉજ્જવળ ભવિષ્ય</span>
        </h1>

        {/* Desc */}
        <p
          className="hero-desc"
          style={{
            maxWidth: 640,
            color: '#475569',
            fontSize: 'clamp(15px, 2vw, 17px)',
            lineHeight: 1.85,
            margin: '20px 0 36px',
          }}
        >
          બાળકોની પ્રતિભા ખીલવવા અને શિક્ષણ પ્રત્યે પ્રેમ જગાડવા — સ્માર્ટ ક્લાસ,
          કોમ્પ્યુટર લેબ, રમતગમત મેદાન અને અનુભવી શિક્ષક ટીમ સાથે.
        </p>

        {/* ── School cards ── */}
        <div
          className="hero-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
            width: '100%',
            marginBottom: 36,
          }}
        >
          {/* Card 1 — Shivam */}
          <div
            className="school-card"
            style={{
              background: '#fff',
              border: '2px solid #bfdbfe',
              borderRadius: 20,
              padding: '26px 24px',
              textAlign: 'left',
              boxShadow: '0 4px 24px rgba(29,78,216,0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: -20, right: -20,
              width: 100, height: 100, borderRadius: '50%',
              background: '#eff6ff', opacity: 0.7,
            }} />
            <span style={{ fontSize: 36, display: 'block', marginBottom: 12 }}>🏫</span>
            <p style={{
              fontSize: 11, fontWeight: 700, color: '#1d4ed8',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              margin: '0 0 4px',
            }}>
              Primary Section
            </p>
            <h2 style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 800, color: '#0f172a',
              margin: '0 0 10px', lineHeight: 1.2,
            }}>
              શ્રી શિવમ વિદ્યાલય
            </h2>
            <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, margin: '0 0 14px' }}>
              ધોરણ ૧ થી ૮ · ગુજરાતી માધ્યમ
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['સ્માર્ટ ક્લાસ', 'પ્રવૃત્તિ શિક્ષણ', 'કોમ્પ્યુટર'].map((tag) => (
                <span key={tag} style={{
                  background: '#eff6ff', color: '#1d4ed8',
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 50,
                  border: '1px solid #bfdbfe',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 2 — Vajiba */}
          <div
            className="school-card"
            style={{
              background: '#fff',
              border: '2px solid #c4b5fd',
              borderRadius: 20,
              padding: '26px 24px',
              textAlign: 'left',
              boxShadow: '0 4px 24px rgba(124,58,237,0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: -20, right: -20,
              width: 100, height: 100, borderRadius: '50%',
              background: '#faf5ff', opacity: 0.8,
            }} />
            <span style={{ fontSize: 36, display: 'block', marginBottom: 12 }}>🎓</span>
            <p style={{
              fontSize: 11, fontWeight: 700, color: '#7c3aed',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              margin: '0 0 4px',
            }}>
              Secondary Section
            </p>
            <h2 style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 800, color: '#0f172a',
              margin: '0 0 10px', lineHeight: 1.2,
            }}>
              શ્રી વજીબા વિદ્યાલય
            </h2>
            <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, margin: '0 0 14px' }}>
              ધોરણ ૯ થી ૧૨ આર્ટ્સ · GSEB બોર્ડ
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['GSEB બોર્ડ', 'આર્ટ્સ', 'કારકિર્દી'].map((tag) => (
                <span key={tag} style={{
                  background: '#faf5ff', color: '#7c3aed',
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 50,
                  border: '1px solid #ddd6fe',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-btns"
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 52 }}
        >
          <Link href="/result" style={{ textDecoration: 'none' }}>
            <button
              className="hero-btn"
              style={{
                background: '#1e3a8a',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '14px 32px',
                fontSize: 15,
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: 'inherit',
                boxShadow: '0 6px 24px rgba(30,58,138,0.30)',
                letterSpacing: '0.02em',
              }}
            >
              📊 પરિણામ જુઓ
            </button>
          </Link>
          <Link href="/academics#admissions" style={{ textDecoration: 'none' }}>
            <button
              className="hero-btn"
              style={{
                background: '#fff',
                color: '#1e3a8a',
                border: '2px solid #1e3a8a',
                borderRadius: 14,
                padding: '14px 32px',
                fontSize: 15,
                fontWeight: 800,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              🎒 પ્રવેશ અરજી
            </button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button
              className="hero-btn"
              style={{
                background: '#f1f5f9',
                color: '#334155',
                border: '2px solid #e2e8f0',
                borderRadius: 14,
                padding: '14px 32px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              📞 સંપર્ક
            </button>
          </Link>
        </div>

        

      </div>
    </main>
  )
}

export default HomeClient