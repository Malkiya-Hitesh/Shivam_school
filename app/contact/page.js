'use client'

import React, { useState } from 'react'



const CONTACT_SHEET_URL = process.env.NEXT_PUBLIC_CONTACT_SHEET_URL
const INFO_CARDS = [
  {
    icon: '📞',
    title: 'ફોન',
    titleEn: 'Call Us',
    lines: ['+91 9601173130', '+91 9904030919'],
    sub: 'સોમ–શનિ · 9:00 AM – 3:00 PM',
    color: '#1a56db',
    light: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    icon: '✉️',
    title: 'ઈમેઈલ',
    titleEn: 'Email Us',
    lines: ['info@shivamvidyalay.com', 'vajiba@shivamvidyalay.com'],
    sub: '૨૪ કલાકમાં જવાબ',
    color: '#0369a1',
    light: '#f0f9ff',
    border: '#bae6fd',
  },
  {
    icon: '📍',
    title: 'સ્થળ',
    titleEn: 'Find Us',
    lines: ['કામળૂર, જસદણ', 'રાજકોટ, ગુજરાત'],
    sub: 'Google Maps પર જુઓ →',
    color: '#0f2d6e',
    light: '#eef2ff',
    border: '#c7d2fe',
  },
  {
    icon: '🕐',
    title: 'સમય',
    titleEn: 'Office Hours',
    lines: ['સોમ–શુક્ર: 9:00 – 3:00', 'શનિ: 9:00 – 1:00'],
    sub: 'રવિ & રજા: બંધ',
    color: '#0d9488',
    light: '#f0fdfa',
    border: '#99f6e4',
  },
]

const SCHOOLS = [
  { name: 'શ્રી શિવમ્ વિદ્યાલય', grades: 'ધો. ૧–૮', icon: '🏫' },
  { name: 'શ્રી વજીબા વિદ્યાલય', grades: 'ધો. ૯–૧૨', icon: '🎓' },
]

function Input({ label, name, type = 'text', value, onChange, onBlur, error, placeholder, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block', fontSize: 12, fontWeight: 700,
        color: '#0f2d6e', marginBottom: 6,
        textTransform: 'uppercase', letterSpacing: '0.08em',
      }}>
        {label}{required && <span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type} name={name} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); onBlur && onBlur(e) }}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '12px 16px',
          borderRadius: 12, fontFamily: 'inherit', fontSize: 14,
          border: `1.5px solid ${error ? '#ef4444' : focused ? '#1a56db' : '#dbeafe'}`,
          background: focused ? '#f8fbff' : '#fff',
          color: '#0f172a', outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s, background 0.2s',
          boxShadow: focused ? '0 0 0 3px rgba(26,86,219,0.08)' : 'none',
        }}
      />
      {error && (
        <p style={{ fontSize: 12, color: '#ef4444', margin: '5px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
          ⚠ {error}
        </p>
      )}
    </div>
  )
}

function Textarea({ label, name, value, onChange, onBlur, error, placeholder, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block', fontSize: 12, fontWeight: 700,
        color: '#0f2d6e', marginBottom: 6,
        textTransform: 'uppercase', letterSpacing: '0.08em',
      }}>
        {label}{required && <span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>}
      </label>
      <textarea
        name={name} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); onBlur && onBlur(e) }}
        placeholder={placeholder}
        rows={4}
        style={{
          width: '100%', padding: '12px 16px',
          borderRadius: 12, fontFamily: 'inherit', fontSize: 14,
          border: `1.5px solid ${error ? '#ef4444' : focused ? '#1a56db' : '#dbeafe'}`,
          background: focused ? '#f8fbff' : '#fff',
          color: '#0f172a', outline: 'none', resize: 'vertical',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s, background 0.2s',
          boxShadow: focused ? '0 0 0 3px rgba(26,86,219,0.08)' : 'none',
        }}
      />
      {error && (
        <p style={{ fontSize: 12, color: '#ef4444', margin: '5px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
          ⚠ {error}
        </p>
      )}
    </div>
  )
}

const initial = { name: '', email: '', phone: '', school: '', subject: '', message: '' }

const validators = {
  name: v => v.trim().length < 2 ? 'નામ ઓછામાં ઓછા ૨ અક્ષરનું હોવું જોઈએ' : '',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'માન્ય ઈમેઈલ દાખલ કરો',
  phone: v => /^[6-9]\d{9}$/.test(v) ? '' : '૧૦ આંકડાનો મોબાઈલ નંબર',
  school: v => v ? '' : 'વિદ્યાલય પસંદ કરો',
  subject: v => v.trim().length < 3 ? 'વિષય ભરો' : '',
  message: v => v.trim().length < 10 ? 'સંદેશ ઓછામાં ઓછો ૧૦ અક્ષરનો હોવો જોઈએ' : '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name]) setErrors(er => ({ ...er, [name]: validators[name]?.(value) ?? '' }))
  }

  const handleBlur = e => {
    const { name, value } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(er => ({ ...er, [name]: validators[name]?.(value) ?? '' }))
  }

  const handleSubmit = async () => {
    const allT = Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {})
    setTouched(allT)
    const newErrors = Object.keys(form).reduce((a, k) => ({ ...a, [k]: validators[k]?.(form[k]) ?? '' }), {})
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return

    setStatus('loading')
    try {
      await fetch(CONTACT_SHEET_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: new Date().toLocaleString('en-IN'), ...form }),
      })
      setStatus('success')
      setForm(initial)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        minHeight: '100vh', background: '#f8faff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
        padding: 24,
      }}>
        <div style={{
          background: '#fff', borderRadius: 24, padding: '56px 40px',
          maxWidth: 480, width: '100%', textAlign: 'center',
          border: '1.5px solid #bfdbfe',
          boxShadow: '0 20px 60px rgba(26,86,219,0.10)',
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg,#bbf7d0,#6ee7b7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', fontSize: 34,
          }}>✅</div>
          <h2 style={{ color: '#0f2d6e', fontSize: 26, fontWeight: 800, margin: '0 0 12px' }}>
            સંદેશ મળ્યો!
          </h2>
          <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            તમારો સંદેશ સફળતાપૂર્વક મળ્યો. અમારી ટીમ ૨૪ કલાકમાં જવાબ આપશે.
          </p>
          <button onClick={() => setStatus('idle')} style={{
            background: '#1a56db', color: '#fff', border: 'none',
            borderRadius: 12, padding: '12px 28px',
            fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
          }}>
            ← પાછા જાઓ
          </button>
        </div>
      </div>
    )
  }

  return (
    <main 
      className='xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]'
      style={{
      minHeight: '100vh',
      background: '#f8faff',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
    
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes cpFadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .cp-a1{animation:cpFadeUp 0.5s ease 0.05s both}
        .cp-a2{animation:cpFadeUp 0.5s ease 0.15s both}
        .cp-a3{animation:cpFadeUp 0.5s ease 0.25s both}
        .cp-a4{animation:cpFadeUp 0.5s ease 0.35s both}
        .cp-a5{animation:cpFadeUp 0.5s ease 0.45s both}
        .info-card { transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s; }
        .info-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(26,86,219,0.12) !important; }
        .submit-btn { transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s; }
        .submit-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 28px rgba(26,86,219,0.35) !important; }
        .cp-blob { position:absolute; border-radius:50%; pointer-events:none; animation:cpFloat 8s ease-in-out infinite; }
        select:focus { outline: none; }
      `}</style>

      {/* ── Hero banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f2d6e 0%, #1a56db 100%)',
        padding: 'clamp(64px,8vw,96px) 24px clamp(72px,10vw,110px)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="cp-blob" style={{ width:320, height:320, background:'rgba(255,255,255,0.05)', top:-80, left:-60 }} />
        <div className="cp-blob" style={{ width:220, height:220, background:'rgba(255,255,255,0.04)', bottom:-50, right:-40, animationDelay:'4s' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="cp-a1" style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)', color: '#bfdbfe',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '7px 22px', borderRadius: 50, marginBottom: 20,
          }}>
            📬 અમારો સંપર્ક કરો
          </span>

          <h1 className="cp-a2" style={{
            color: '#fff', fontSize: 'clamp(32px,6vw,60px)',
            fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1,
          }}>
            સંપર્ક
          </h1>
          <p className="cp-a3" style={{
            color: '#bfdbfe', fontSize: 'clamp(14px,2vw,17px)',
            lineHeight: 1.85, margin: '0 auto',
            maxWidth: 520,
          }}>
            પ્રવેશ, સુવિધા, અભ્યાસક્રમ અથવા અન્ય કોઈ વિષય માટે અમારો
            સંપર્ક કરો — અમે ૨૪ કલાકમાં જવાબ આપીશું.
          </p>
        </div>
      </div>

      {/* ── Info cards ── */}
      <div style={{ maxWidth: 1100, margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 5 }}>
        <div className="cp-a4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
          gap: 16, marginBottom: 56,
        }}>
          {INFO_CARDS.map((c, i) => (
            <div key={i} className="info-card" style={{
              background: '#fff', border: `1.5px solid ${c.border}`,
              borderRadius: 18, padding: '22px 20px',
              boxShadow: '0 4px 20px rgba(26,86,219,0.07)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: c.light, border: `1px solid ${c.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, marginBottom: 14,
              }}>
                {c.icon}
              </div>
              <p style={{ fontSize: 10, fontWeight: 700, color: c.color, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 3px' }}>
                {c.titleEn}
              </p>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>
                {c.title}
              </h3>
              {c.lines.map((l, j) => (
                <p key={j} style={{ fontSize: 13, color: '#334155', fontWeight: 600, margin: '2px 0' }}>{l}</p>
              ))}
              <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 6 }}>{c.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Main 2-col layout ── */}
        <div className="cp-a5" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))',
          gap: 28, marginBottom: 60,
          alignItems: 'start',
        }}>

          {/* Left — Form */}
          <div style={{
            background: '#fff', borderRadius: 22,
            border: '1.5px solid #dbeafe',
            boxShadow: '0 6px 32px rgba(26,86,219,0.07)',
            overflow: 'hidden',
          }}>
            <div style={{ height: 5, background: 'linear-gradient(90deg,#0f2d6e,#1a56db,#60a5fa)' }} />
            <div style={{ padding: '32px 28px' }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f2d6e', margin: '0 0 6px' }}>
                સંદેશ મોકલો
              </h2>
              <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 28px' }}>
                ફોર્મ ભરો — અમે ટૂંક સમયમાં જવાબ આપીશું
              </p>

              {/* Two col name + phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Input label="નામ" name="name" value={form.name}
                  onChange={handleChange} onBlur={handleBlur}
                  error={touched.name && errors.name}
                  placeholder="તમારું નામ" required />
                <Input label="ફોન" name="phone" type="tel" value={form.phone}
                  onChange={handleChange} onBlur={handleBlur}
                  error={touched.phone && errors.phone}
                  placeholder="૧૦ આંકડા" required />
              </div>

              <Input label="ઈમેઈલ" name="email" type="email" value={form.email}
                onChange={handleChange} onBlur={handleBlur}
                error={touched.email && errors.email}
                placeholder="example@gmail.com" required />

              {/* School select */}
              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block', fontSize: 12, fontWeight: 700,
                  color: '#0f2d6e', marginBottom: 6,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  વિદ્યાલય<span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>
                </label>
                <select name="school" value={form.school}
                  onChange={handleChange} onBlur={handleBlur}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    fontFamily: 'inherit', fontSize: 14,
                    border: `1.5px solid ${touched.school && errors.school ? '#ef4444' : '#dbeafe'}`,
                    background: '#fff', color: form.school ? '#0f172a' : '#94a3b8',
                    boxSizing: 'border-box',
                  }}>
                  <option value="">વિદ્યાલય પસંદ કરો</option>
                  {SCHOOLS.map(s => (
                    <option key={s.name} value={s.name}>{s.icon} {s.name} ({s.grades})</option>
                  ))}
                  <option value="બંને">🏫🎓 બંને વિદ્યાલય</option>
                </select>
                {touched.school && errors.school && (
                  <p style={{ fontSize: 12, color: '#ef4444', margin: '5px 0 0' }}>⚠ {errors.school}</p>
                )}
              </div>

              <Input label="વિષય" name="subject" value={form.subject}
                onChange={handleChange} onBlur={handleBlur}
                error={touched.subject && errors.subject}
                placeholder="દા.ત. પ્રવેશ અંગે" required />

              <Textarea label="સંદેશ" name="message" value={form.message}
                onChange={handleChange} onBlur={handleBlur}
                error={touched.message && errors.message}
                placeholder="તમારો સંદેશ અહીં લખો..." required />

              {status === 'error' && (
                <div style={{
                  background: '#fff1f1', border: '1px solid #fca5a5',
                  borderRadius: 10, padding: '12px 16px',
                  color: '#b91c1c', fontSize: 13, marginBottom: 16,
                }}>
                  ❌ સબમિટ થઈ શક્યું નહીં. ફરી પ્રયાસ કરો.
                </div>
              )}

              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{
                  width: '100%', padding: '14px',
                  background: status === 'loading' ? '#93a3d8' : 'linear-gradient(135deg,#0f2d6e,#1a56db)',
                  color: '#fff', border: 'none', borderRadius: 13,
                  fontWeight: 800, fontSize: 15, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit', letterSpacing: '0.02em',
                  boxShadow: '0 4px 18px rgba(26,86,219,0.25)',
                }}
              >
                {status === 'loading' ? '⏳ મોકલી રહ્યા છીએ...' : '📨 સંદેશ મોકલો'}
              </button>
            </div>
          </div>

          {/* Right — Map + School info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Map embed */}
            <div style={{
              background: '#fff', borderRadius: 22,
              border: '1.5px solid #dbeafe',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(26,86,219,0.07)',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d71.1924!3d22.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAyJzIyLjIiTiA3McKwMTEnMzIuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="240"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                title="School Location"
              />
              <div style={{ padding: '16px 20px', borderTop: '1px solid #dbeafe' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e', margin: '0 0 2px' }}>
                  📍 કામળૂર, જસદણ, રાજકોટ
                </p>
                <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>
                  ગુજરાત, ભારત · ૩૬૦ ૦૩૦
                </p>
              </div>
            </div>

            {/* School cards */}
            {SCHOOLS.map((s, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 18,
                border: '1.5px solid #dbeafe',
                padding: '20px 22px',
                boxShadow: '0 4px 16px rgba(26,86,219,0.06)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <span style={{
                  fontSize: 28, width: 52, height: 52,
                  background: '#eff6ff', borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid #bfdbfe', flexShrink: 0,
                }}>
                  {s.icon}
                </span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', margin: '0 0 3px' }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 12, color: '#1a56db', fontWeight: 600, margin: '0 0 2px' }}>
                    {s.grades} · GSEB ગુજરાતી માધ્યમ
                  </p>
                  <p style={{ fontSize: 11, color: '#94a3b8', margin: 0 }}>
                    📞 +91 9904030919 , +91 9601173130
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/9904030919"
              target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#25d366', borderRadius: 18,
                padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: 14,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
              >
                <span style={{ fontSize: 30 }}>💬</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', margin: '0 0 2px' }}>
                    WhatsApp પર સંપર્ક
                  </p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                    ઝડપી જવાબ · +91 9904030919
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  )
}