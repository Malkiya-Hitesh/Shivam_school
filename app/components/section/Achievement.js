'use client'
import React, { useRef, useState } from 'react'

// ── AchievementCard ──────────────────────────────────────────────
function AchievementCard({ cards }) {
  const scrollRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 10)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Scroll buttons */}
      {canLeft && (
        <button
          onClick={() => scroll(-1)}
          style={{
            position: 'absolute', left: -18, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            width: 42, height: 42, borderRadius: '50%',
            background: '#fff', border: '1.5px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            cursor: 'pointer', fontSize: 18, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >‹</button>
      )}
      {canRight && (
        <button
          onClick={() => scroll(1)}
          style={{
            position: 'absolute', right: -18, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            width: 42, height: 42, borderRadius: '50%',
            background: '#fff', border: '1.5px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            cursor: 'pointer', fontSize: 18, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >›</button>
      )}

      {/* Scroll track */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        style={{
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: 8,
          paddingTop: 4,
        }}
      >
        <style>{`.achiev-scroll::-webkit-scrollbar{display:none}`}</style>

        {cards.map((card, index) => (
          <AchievCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  )
}

function AchievCard({ card, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: 'clamp(240px, 28vw, 320px)',
        height: 280,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        scrollSnapAlign: 'start',
        cursor: 'pointer',
        flexShrink: 0,
        transform: hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1) translateY(0)',
        boxShadow: hovered
          ? '0 20px 48px rgba(0,0,0,0.22)'
          : '0 4px 20px rgba(0,0,0,0.10)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        animationDelay: `${index * 0.08}s`,
      }}
      className="achiev-card-fade"
    >
      {/* Image */}
      <img
        src={card.img}
        alt={card.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.5s ease',
          display: 'block',
        }}
      />

      {/* Always-visible bottom label */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)',
        padding: '40px 18px 16px',
        transform: hovered ? 'translateY(0)' : 'translateY(0)',
        transition: 'opacity 0.3s',
        opacity: hovered ? 0 : 1,
      }}>
        <h3 style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.3,
          fontFamily: "'Noto Sans Gujarati','Mukta',sans-serif",
        }}>
          {card.title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(15,23,42,0.93) 0%, rgba(15,23,42,0.55) 50%, transparent 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px 18px',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }}>
        <span style={{
          display: 'inline-block',
          background: '#f59e0b',
          color: '#fff',
          fontSize: 11,
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: 50,
          marginBottom: 8,
          alignSelf: 'flex-start',
          letterSpacing: '0.06em',
        }}>
          🏆 સિદ્ધિ
        </span>
        <h3 style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: 800,
          margin: '0 0 8px',
          lineHeight: 1.3,
          fontFamily: "'Noto Sans Gujarati','Mukta',sans-serif",
        }}>
          {card.title}
        </h3>
        {card.desc && (
          <p style={{
            color: '#cbd5e1',
            fontSize: 13,
            margin: 0,
            lineHeight: 1.65,
            fontFamily: "'Noto Sans Gujarati','Mukta',sans-serif",
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {card.desc}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Achievement (main section) ───────────────────────────────────
function Achievement({ cards }) {
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
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .achiev-card-fade{animation:fadeUp 0.45s ease both;}
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            background: '#92400e',
            color: '#fef3c7',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            🏅 ગૌરવ અને સિદ્ધિઓ
          </span>

          <h2 style={{
            fontSize: 'clamp(28px,5vw,46px)',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 20px',
            lineHeight: 1.15,
          }}>
            ગૌરવની પળો
          </h2>

          <p style={{
            maxWidth: 700,
            margin: '0 auto',
            color: '#475569',
            fontSize: 16,
            lineHeight: 1.85,
          }}>
            શ્રી શિવમ વિદ્યાલયના વિદ્યાર્થીઓએ ૧૬ વર્ષની સફરમાં અભ્યાસ, રમતગમત અને
            સાંસ્કૃતિક ક્ષેત્રે અનેક ગૌરવપ્રદ સિદ્ધિઓ હાંસલ કરી છે. ૨૦ સમર્પિત
            શિક્ષકોના માર્ગદર્શન અને ટ્રસ્ટ મેનેજમેન્ટના પ્રોત્સાહનથી અમારા
            વિદ્યાર્થીઓ દર વર્ષે નવી ઊંચાઈઓ સર કરે છે — અને આ જ અમારું સૌથી મોટું
            ગૌરવ છે.
          </p>
        </div>

       
        {/* Cards */}
        <AchievementCard cards={cards} />

       

      </div>
    </section>
  )
}

export default Achievement