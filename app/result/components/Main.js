'use client'

import { useState } from 'react'

const CLASS_LABELS = {
  '1':'Class 1','2':'Class 2','3':'Class 3','4':'Class 4',
  '5':'Class 5','6':'Class 6','7':'Class 7','8':'Class 8',
  '9':'Class 9','10':'Class 10','11':'Class 11','12':'Class 12',
}

const CLASS_COLORS = {
  '1':'#1a56db','2':'#059669','3':'#d97706','4':'#db2777',
  '5':'#7c3aed','6':'#0891b2','7':'#059669','8':'#d97706',
  '9':'#db2777','10':'#1a56db','11':'#059669','12':'#7c3aed',
}

const GRADE_GROUPS = {

    'બોર્ડ પરિણામ' : ['10','12'],
  'પ્રાથ. (૧–૫)':      ['1','2','3','4','5'],
  'ઉ. પ્રાથ. (૬–૮)':  ['6','7','8'],
  'માધ્ય. (૯–૧૦)':    ['9','10'],
  'ઉ. માધ્ય. (૧૧–૧૨)':['11','12'],

}

// ── Stat Box ─────────────────────────────────────────────────
function StatBox({ label, value, color, icon }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 14, padding: '14px 10px', textAlign: 'center',
        background: hov ? color : color + '14',
        border: `1.5px solid ${color}35`,
        transition: 'background 0.22s, transform 0.22s, box-shadow 0.22s',
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? `0 8px 24px ${color}30` : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
      <div style={{
        fontSize: 'clamp(20px,3vw,26px)', fontWeight: 900,
        color: hov ? '#fff' : color, lineHeight: 1,
        transition: 'color 0.22s',
      }}>
        {value ?? '—'}
      </div>
      <div style={{
        fontSize: 11, fontWeight: 600, marginTop: 4,
        color: hov ? 'rgba(255,255,255,0.8)' : '#64748b',
        transition: 'color 0.22s',
      }}>
        {label}
      </div>
    </div>
  )
}

// ── Result Card ───────────────────────────────────────────────
function ResultCard({ result }) {
  const color = CLASS_COLORS[result.class] || '#6366f1'
  const label = CLASS_LABELS[result.class] || `Class ${result.class}`

  return (
    <div
      style={{
        background: '#fff', borderRadius: 22, overflow: 'hidden',
        border: `1.5px solid ${color}22`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.25s',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${color}18`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'}
    >
      {/* Top accent bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg,${color},${color}88)` }} />

      {/* Header */}
      <div style={{
        padding: '18px 22px',
        background: color + '0d',
        borderBottom: `1.5px solid ${color}22`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            background: color, color: '#fff',
            fontSize: 13, fontWeight: 800,
            padding: '6px 18px', borderRadius: 50,
            boxShadow: `0 3px 10px ${color}45`,
          }}>
            {label}
          </span>
          {result.year && (
            <span style={{
              background: '#f1f5f9', color: '#475569',
              fontSize: 12, fontWeight: 700,
              padding: '4px 12px', borderRadius: 50,
              border: '1px solid #e2e8f0',
            }}>
              📅 {result.year}
            </span>
          )}
        </div>

        {result.pdfUrl && (
          <a href={result.pdfUrl} download style={{ textDecoration: 'none' }}>
            <button style={{
              fontSize: 12, fontWeight: 700,
              padding: '7px 16px', borderRadius: 10,
              border: `1.5px solid ${color}`,
              background: color, color: '#fff',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              ⬇️ PDF Download
            </button>
          </a>
        )}
      </div>

      {/* Stats Grid */}
      <div style={{
        padding: '20px 22px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))',
        gap: 12,
      }}>
        <StatBox icon="🧑‍🎓" label="Total Students" value={result.totalStudents} color={color} />
        <StatBox icon="✅"    label="Pass Students"  value={result.passStudents}  color="#059669" />
        <StatBox icon="📊"    label="Pass Rate"
          value={result.passRate ? `${result.passRate}%` : '—'} color="#d97706" />
      </div>

      {/* Poster — always visible */}
      {result.posterUrl && (
        <div style={{ padding: '0 22px 22px' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: `1.5px solid ${color}22` }}>
            <img
              src={result.posterUrl}
              alt={result.posterAlt || 'Result Poster'}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────
export default function Main({ results = [] }) {
  const grouped = results.reduce((acc, r) => {
    if (!acc[r.year]) acc[r.year] = []
    acc[r.year].push(r)
    return acc
  }, {})

  const years = Object.keys(grouped).sort((a, b) => b - a)
  const [activeYear,  setActiveYear]  = useState(years[0] || '')
  const [activeGroup, setActiveGroup] = useState('બોર્ડ પરિણામ')

  if (!results.length) {
    return (
      <div style={{
        textAlign: 'center', padding: '80px 24px',
        fontFamily: "'Noto Sans Gujarati','Mukta',sans-serif",
        color: '#94a3b8', fontSize: 15,
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
        No results available yet.
      </div>
    )
  }

  const yearData    = grouped[activeYear] || []
  const totalS      = yearData.reduce((a, r) => a + (r.totalStudents || 0), 0)
  const passS       = yearData.reduce((a, r) => a + (r.passStudents  || 0), 0)
  const ratedCards  = yearData.filter(r => r.passRate)
  const avgRate     = ratedCards.length
    ? Math.round(ratedCards.reduce((a, r) => a + r.passRate, 0) / ratedCards.length)
    : null

  const filteredData = activeGroup === 'all'
    ? yearData
    : yearData.filter(r => (GRADE_GROUPS[activeGroup] || []).includes(r.class))

  return (
    <section style={{
      maxWidth: 900, margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) 20px',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes rmFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .rm-a1{animation:rmFadeUp 0.5s ease 0.05s both}
        .rm-a2{animation:rmFadeUp 0.5s ease 0.15s both}
        .rm-a3{animation:rmFadeUp 0.5s ease 0.25s both}
        .rm-a4{animation:rmFadeUp 0.5s ease 0.35s both}
        .year-btn{transition:all 0.2s ease}
        .year-btn:hover{transform:translateY(-2px)}
        .grp-btn{transition:all 0.18s ease}
        .grp-btn:hover{transform:translateY(-1px)}
      `}</style>

      {/* Header */}
      <div className="rm-a1" style={{ textAlign: 'center' }}>
        <span style={{
          display: 'inline-block',
          background: '#eff6ff', color: '#1a56db',
          border: '1.5px solid #bfdbfe',
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          padding: '6px 20px', borderRadius: 50, marginBottom: 16,
        }}>
          📊 વાર્ષિક પરિણામ
        </span>
        <h2 style={{
          fontSize: 'clamp(26px,5vw,44px)', fontWeight: 900,
          color: '#0f172a', margin: '0 0 10px',
          lineHeight: 1.12, letterSpacing: '-0.5px',
        }}>
          Exam Results
        </h2>
        <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>
          Select a year and section to view results
        </p>
      </div>

      {/* Year tabs */}
      <div className="rm-a2" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {years.map(year => (
          <button key={year} className="year-btn"
            onClick={() => { setActiveYear(year); setActiveGroup('બોર્ડ પરિણામ') }}
            style={{
              padding: '10px 26px', borderRadius: 50,
              fontWeight: 800, fontSize: 14,
              fontFamily: 'inherit', cursor: 'pointer',
              border: activeYear === year ? '2px solid #1a56db' : '2px solid #e2e8f0',
              background: activeYear === year ? '#1a56db' : '#fff',
              color: activeYear === year ? '#fff' : '#475569',
              boxShadow: activeYear === year ? '0 6px 20px rgba(26,86,219,0.28)' : '0 1px 4px rgba(0,0,0,0.05)',
            }}>
            {year}
          </button>
        ))}
      </div>

     

      {/* Group filter */}
      {activeYear && (
        <div className="rm-a4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['all', ...Object.keys(GRADE_GROUPS)].map(g => (
            <button key={g} className="grp-btn"
              onClick={() => setActiveGroup(g)}
              style={{
                padding: '7px 18px', borderRadius: 50,
                fontWeight: 700, fontSize: 12,
                fontFamily: 'inherit', cursor: 'pointer',
                border: activeGroup === g ? '1.5px solid #1a56db' : '1.5px solid #e2e8f0',
                background: activeGroup === g ? '#eff6ff' : '#fff',
                color: activeGroup === g ? '#1a56db' : '#64748b',
              }}>
              {g === 'all' ? '🏫 All Classes' : g}
            </button>
          ))}
        </div>
      )}

      {/* Cards */}
      {activeYear && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {filteredData.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0', fontSize: 14 }}>
              No results for this section.
            </div>
          ) : (
            filteredData
              .sort((a, b) => Number(a.class) - Number(b.class))
              .map(result => <ResultCard key={result._id} result={result} />)
          )}
        </div>
      )}
    </section>
  )
}