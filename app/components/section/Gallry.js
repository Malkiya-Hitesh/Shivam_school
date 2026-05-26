'use client'

import React, { useState } from 'react'

export default function Gallery({ images = [] }) {
  const [lightbox, setLightbox] = useState(null) // index or null

  return (
    <section style={{
      padding: 'clamp(56px,8vw,96px) 24px',
      background: '#fff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes glFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glZoom   { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }
        .gl-a1{animation:glFadeUp 0.5s ease 0.05s both}
        .gl-a2{animation:glFadeUp 0.5s ease 0.18s both}
        .gl-a3{animation:glFadeUp 0.5s ease 0.30s both}
        .gl-card {
          break-inside: avoid;
          margin-bottom: 16px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.26s ease, box-shadow 0.26s ease;
          animation: glFadeUp 0.5s ease both;
        }
        .gl-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 48px rgba(0,0,0,0.16); }
        .gl-card img { display:block; width:100%; height:auto; transition: transform 0.45s ease; }
        .gl-card:hover img { transform: scale(1.07); }
        .gl-overlay {
          position:absolute; inset:0;
          background: linear-gradient(to top, rgba(15,45,110,0.82) 0%, transparent 55%);
          opacity:0; transition: opacity 0.3s ease;
          display:flex; align-items:flex-end; padding:14px;
        }
        .gl-card:hover .gl-overlay { opacity:1; }
        .gl-label {
          color:#fff; font-size:13px; font-weight:700;
          background:rgba(255,255,255,0.15);
          border:1px solid rgba(255,255,255,0.25);
          padding:5px 12px; border-radius:50px;
          backdrop-filter:blur(4px);
          transform:translateY(6px); transition:transform 0.3s ease;
        }
        .gl-card:hover .gl-label { transform:translateY(0); }
        /* Lightbox */
        .gl-lightbox {
          position:fixed; inset:0; z-index:1000;
          background:rgba(0,0,0,0.92); backdrop-filter:blur(8px);
          display:flex; align-items:center; justify-content:center;
          padding:24px;
          animation: glZoom 0.25s ease both;
        }
        .gl-lb-img { max-width:90vw; max-height:85vh; border-radius:16px; object-fit:contain; box-shadow:0 20px 60px rgba(0,0,0,0.5); }
        .gl-lb-close {
          position:absolute; top:20px; right:20px;
          width:44px; height:44px; border-radius:50%;
          background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2);
          color:#fff; font-size:22px; font-weight:700;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background 0.18s;
        }
        .gl-lb-close:hover { background:rgba(255,255,255,0.22); }
        .gl-lb-nav {
          position:absolute; top:50%; transform:translateY(-50%);
          width:48px; height:48px; border-radius:50%;
          background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2);
          color:#fff; font-size:22px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background 0.18s;
        }
        .gl-lb-nav:hover { background:rgba(255,255,255,0.25); }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="gl-a1" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            📸 ફોટો ગેલેરી
          </span>

          <h2 style={{
            fontSize: 'clamp(28px,5vw,48px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 18px',
            lineHeight: 1.12, letterSpacing: '-0.5px',
          }}>
            ફોટો
          </h2>

          <p className="gl-a2" style={{
            maxWidth: 660, margin: '0 auto',
            color: '#475569', fontSize: 16, lineHeight: 1.85,
          }}>
            અમારી શાળાના વિવિધ કાર્યક્રમો, રમતગમત, સાંસ્કૃતિક ઉત્સવો અને
            વિદ્યાર્થીઓની યાદગાર પળોની ઝલક અહીં જુઓ — જે અમારી શાળાને માત્ર
            શિક્ષણનું નહીં, પણ આનંદ અને વિકાસનું કેન્દ્ર બનાવે છે.
          </p>
        </div>

    

        {/* Masonry grid */}
        <div style={{
          columns: '1',
          gap: 16,
        }}>
          <style>{`
            @media(min-width:640px)  { .gl-masonry { columns: 2 !important; } }
            @media(min-width:768px)  { .gl-masonry { columns: 3 !important; } }
            @media(min-width:1024px) { .gl-masonry { columns: 4 !important; } }
          `}</style>
          <div className="gl-masonry" style={{ columns: 1, gap: 16 }}>
            {images.map((src, index) => (
              <div
                key={src._id || index}
                className="gl-card"
                onClick={() => setLightbox(index)}
                style={{ animationDelay: `${(index % 8) * 0.07}s` }}
              >
                <img
                  src={src.img}
                  alt={src.title || `Gallery ${index + 1}`}
                  loading={index < 8 ? 'eager' : 'lazy'}
                />
                <div className="gl-overlay">
                  <span className="gl-label">{src.title || `ફોટો ${index + 1}`}</span>
                </div>
                {/* Index badge */}
                
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: 52,
          background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
          borderRadius: 20, padding: '24px 32px',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <div>
            <p style={{ color: '#93c5fd', fontSize: 12, fontWeight: 700, margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              શ્રી શિવમ & વજીબા વિદ્યાલય
            </p>
            <h4 style={{ color: '#fff', fontSize: 'clamp(15px,2.5vw,20px)', fontWeight: 800, margin: 0 }}>
              દરેક ક્ષણ — એક યાદ, એક ગૌરવ
            </h4>
          </div>
          <a href="/gallery" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#fff', color: '#1a56db',
              border: 'none', borderRadius: 12,
              padding: '11px 26px', fontWeight: 800,
              fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              બધા ફોટો →
            </button>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="gl-lightbox"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button className="gl-lb-close" onClick={() => setLightbox(null)}>✕</button>

          {/* Prev */}
          {lightbox > 0 && (
            <button className="gl-lb-nav" style={{ left: 16 }}
              onClick={e => { e.stopPropagation(); setLightbox(l => l - 1) }}>
              ‹
            </button>
          )}

          <img
            src={images[lightbox]?.img}
            alt={images[lightbox]?.title || ''}
            className="gl-lb-img"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          {lightbox < images.length - 1 && (
            <button className="gl-lb-nav" style={{ right: 16 }}
              onClick={e => { e.stopPropagation(); setLightbox(l => l + 1) }}>
              ›
            </button>
          )}

          {/* Caption */}
          <div style={{
            position: 'absolute', bottom: 24,
            left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', fontSize: 14, fontWeight: 700,
            padding: '8px 22px', borderRadius: 50,
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap',
          }}>
            {images[lightbox]?.title || `ફોટો ${lightbox + 1}`} &nbsp;·&nbsp; {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}