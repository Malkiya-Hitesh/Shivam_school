'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const CONTACT_SHEET_URL = process.env.NEXT_PUBLIC_CONTACT_SHEET_URL
export default function HomeContact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const validators = {
    name: v => v.trim().length < 2 ? 'નામ ભરો' : '',
    phone: v => /^[6-9]\d{9}$/.test(v) ? '' : '૧૦ આંકડાનો નંબર',
    message: v => v.trim().length < 5 ? 'સંદેશ ભરો' : '',
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name]) setErrors(er => ({ ...er, [name]: validators[name]?.(value) }))
  }

  const handleBlur = e => {
    const { name, value } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(er => ({ ...er, [name]: validators[name]?.(value) }))
  }

  const handleSubmit = async () => {
    const allT = Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {})
    setTouched(allT)
    const newErr = Object.keys(form).reduce((a, k) => ({ ...a, [k]: validators[k]?.(form[k]) }), {})
    setErrors(newErr)
    if (Object.values(newErr).some(Boolean)) return
    setStatus('loading')
    try {
      await fetch(CONTACT_SHEET_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: new Date().toLocaleString('en-IN'), ...form, type: 'home-contact' }),
      })
      setStatus('success')
      setForm({ name: '', phone: '', message: '' })
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{
      background: '#fff',
      padding: 'clamp(56px,8vw,96px) 24px',
      fontFamily: "'Noto Sans Gujarati','Mukta','Segoe UI',sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800;900&family=Noto+Sans+Gujarati:wght@400;600;700;800&display=swap');
        @keyframes hcFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hcFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes hcPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.1)} }
        .hc-a1{animation:hcFadeUp 0.5s ease 0.05s both}
        .hc-a2{animation:hcFadeUp 0.5s ease 0.15s both}
        .hc-a3{animation:hcFadeUp 0.5s ease 0.25s both}
        .hc-a4{animation:hcFadeUp 0.5s ease 0.35s both}
        .hc-blob{position:absolute;border-radius:50%;pointer-events:none;animation:hcFloat 8s ease-in-out infinite}
        .hc-input{transition:border-color 0.2s,box-shadow 0.2s,background 0.2s}
        .hc-input:focus{outline:none;border-color:#1a56db !important;box-shadow:0 0 0 3px rgba(26,86,219,0.09);background:#f8fbff !important}
        .hc-contact-pill{transition:transform 0.2s,box-shadow 0.2s}
        .hc-contact-pill:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(26,86,219,0.13) !important}
        .hc-submit{transition:transform 0.18s,box-shadow 0.18s,opacity 0.18s}
        .hc-submit:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 10px 28px rgba(26,86,219,0.32) !important}
        .hc-wa{transition:transform 0.2s,box-shadow 0.2s}
        .hc-wa:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(37,211,102,0.3) !important}
      `}</style>

      {/* bg blobs */}
      <div className="hc-blob" style={{ width:380,height:380,background:'radial-gradient(circle,#dbeafe55,transparent 70%)',top:-80,right:-80 }} />
      <div className="hc-blob" style={{ width:280,height:280,background:'radial-gradient(circle,#c7d2fe44,transparent 70%)',bottom:-60,left:-60,animationDelay:'4s' }} />

      <div style={{ maxWidth: 1060, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div className="hc-a1" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-block',
            background: '#eff6ff', color: '#1a56db',
            border: '1.5px solid #bfdbfe',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: 50, marginBottom: 18,
          }}>
            📬 અમારો સંપર્ક
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900,
            color: '#0f172a', margin: '0 0 14px', lineHeight: 1.12,
          }}>
            સંપર્ક કરો
          </h2>
          <p style={{
            maxWidth: 540, margin: '0 auto',
            color: '#475569', fontSize: 16, lineHeight: 1.85,
          }}>
            કોઈ પ્રશ્ન છે? પ્રવેશ અંગે જાણવું છે? — અમે તૈયાર છીએ.
          </p>
        </div>

        {/* ── 2-col layout ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
          gap: 28, alignItems: 'start',
        }}>

          {/* ── LEFT: Quick contact info ── */}
          <div className="hc-a2" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Title card */}
            <div style={{
              background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
              borderRadius: 20, padding: '28px 26px',
              color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', width: 160, height: 160, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', top: -40, right: -40,
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'hcPulse 2s infinite',
                  display: 'inline-block',
                }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#93c5fd', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  હવે ઉપલબ્ધ
                </span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 8px' }}>
                અમારી ટીમ સ્વાગત કરે છે
              </h3>
              <p style={{ fontSize: 13, color: '#bfdbfe', lineHeight: 1.7, margin: '0 0 20px' }}>
                સોમ–શનિ · સવારે 9:00 – સાંજે 3:00
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '📞', text: '+91 9601173130', sub: 'શ્રી શિવમ્ વિદ્યાલય' },
                  { icon: '📞', text: '+91 9904030919', sub: 'શ્રી વજીબા વિદ્યાલય' },
                  { icon: '📍', text: 'કમળાપુર, જસદણ, રાજકોટ', sub: 'ગુજરાત, ભારત' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: 15, width: 32, height: 32, flexShrink: 0,
                      background: 'rgba(255,255,255,0.1)', borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{c.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: 0 }}>{c.text}</p>
                      <p style={{ fontSize: 11, color: '#93c5fd', margin: '2px 0 0' }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action pills */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <a href="https://wa.me/9904030919" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="hc-wa" style={{
                  background: '#25d366', borderRadius: 14,
                  padding: '14px 16px', textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.2)',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>💬</div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 13 }}>WhatsApp</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, marginTop: 2 }}>ઝડપી જવાબ</div>
                </div>
              </a>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <div className="hc-contact-pill" style={{
                  background: '#fff', border: '1.5px solid #bfdbfe',
                  borderRadius: 14, padding: '14px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(26,86,219,0.07)',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>📋</div>
                  <div style={{ color: '#0f2d6e', fontWeight: 800, fontSize: 13 }}>સંપૂર્ણ ફોર્મ</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>વિગતવાર</div>
                </div>
              </Link>
              <Link href="/admissions" style={{ textDecoration: 'none' }}>
                <div className="hc-contact-pill" style={{
                  background: '#fff', border: '1.5px solid #bfdbfe',
                  borderRadius: 14, padding: '14px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(26,86,219,0.07)',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>🎒</div>
                  <div style={{ color: '#0f2d6e', fontWeight: 800, fontSize: 13 }}>પ્રવેશ</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>અરજી કરો</div>
                </div>
              </Link>
              <a href="tel:+919904030919" style={{ textDecoration: 'none' }}>
                <div className="hc-contact-pill" style={{
                  background: '#fff', border: '1.5px solid #bfdbfe',
                  borderRadius: 14, padding: '14px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 14px rgba(26,86,219,0.07)',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>📞</div>
                  <div style={{ color: '#0f2d6e', fontWeight: 800, fontSize: 13 }}>કૉલ કરો</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>સીધો</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Quick form ── */}
          <div className="hc-a3">
            {status === 'success' ? (
              <div style={{
                background: '#fff', border: '1.5px solid #bbf7d0',
                borderRadius: 22, padding: '48px 32px',
                textAlign: 'center',
                boxShadow: '0 6px 32px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#bbf7d0,#6ee7b7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: 30,
                }}>✅</div>
                <h3 style={{ color: '#0f2d6e', fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
                  સંદેશ મળ્યો!
                </h3>
                <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  અમે ૨૪ કલાકમાં જવાબ આપીશું.
                </p>
                <button onClick={() => setStatus('idle')} style={{
                  background: '#1a56db', color: '#fff', border: 'none',
                  borderRadius: 10, padding: '10px 24px',
                  fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  ← ફરી મોકલો
                </button>
              </div>
            ) : (
              <div style={{
                background: '#fff', borderRadius: 22,
                border: '1.5px solid #dbeafe',
                boxShadow: '0 6px 32px rgba(26,86,219,0.07)',
                overflow: 'hidden',
              }}>
                <div style={{ height: 5, background: 'linear-gradient(90deg,#0f2d6e,#1a56db,#60a5fa)' }} />
                <div style={{ padding: '28px 26px' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f2d6e', margin: '0 0 5px' }}>
                    ઝડપી સંદેશ
                  </h3>
                  <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 24px' }}>
                    ૨-૩ ક્ષેત્ર ભરો — અમે સંપર્ક કરીશું
                  </p>

                  {/* Name */}
                  {[
                    { label: 'નામ', name: 'name', type: 'text', placeholder: 'તમારું નામ' },
                    { label: 'ફોન', name: 'phone', type: 'tel', placeholder: '૧૦ આંકડાનો નંબર' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: 18 }}>
                      <label style={{
                        display: 'block', fontSize: 11, fontWeight: 700,
                        color: '#0f2d6e', marginBottom: 5,
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}>
                        {f.label}<span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>
                      </label>
                      <input
                        className="hc-input"
                        type={f.type} name={f.name} value={form[f.name]}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder={f.placeholder}
                        style={{
                          width: '100%', padding: '11px 14px',
                          borderRadius: 11, fontFamily: 'inherit', fontSize: 14,
                          border: `1.5px solid ${touched[f.name] && errors[f.name] ? '#ef4444' : '#dbeafe'}`,
                          background: '#fff', color: '#0f172a',
                          boxSizing: 'border-box',
                        }}
                      />
                      {touched[f.name] && errors[f.name] && (
                        <p style={{ fontSize: 11, color: '#ef4444', margin: '4px 0 0' }}>⚠ {errors[f.name]}</p>
                      )}
                    </div>
                  ))}

                  {/* Message */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{
                      display: 'block', fontSize: 11, fontWeight: 700,
                      color: '#0f2d6e', marginBottom: 5,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>
                      સંદેશ<span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>
                    </label>
                    <textarea
                      className="hc-input"
                      name="message" value={form.message}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="તમારો સવાલ અહીં લખો..."
                      rows={4}
                      style={{
                        width: '100%', padding: '11px 14px',
                        borderRadius: 11, fontFamily: 'inherit', fontSize: 14,
                        border: `1.5px solid ${touched.message && errors.message ? '#ef4444' : '#dbeafe'}`,
                        background: '#fff', color: '#0f172a',
                        boxSizing: 'border-box', resize: 'vertical',
                      }}
                    />
                    {touched.message && errors.message && (
                      <p style={{ fontSize: 11, color: '#ef4444', margin: '4px 0 0' }}>⚠ {errors.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div style={{
                      background: '#fff1f1', border: '1px solid #fca5a5',
                      borderRadius: 9, padding: '10px 14px',
                      color: '#b91c1c', fontSize: 13, marginBottom: 14,
                    }}>
                      ❌ ફરી પ્રયાસ કરો.
                    </div>
                  )}

                  <button
                    className="hc-submit"
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    style={{
                      width: '100%', padding: '13px',
                      background: status === 'loading' ? '#93a3d8' : 'linear-gradient(135deg,#0f2d6e,#1a56db)',
                      color: '#fff', border: 'none', borderRadius: 12,
                      fontWeight: 800, fontSize: 15,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                      boxShadow: '0 4px 16px rgba(26,86,219,0.22)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {status === 'loading' ? '⏳ મોકલી રહ્યા...' : '📨 સંદેશ મોકલો'}
                  </button>

                  <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 12 }}>
                    અથવા{' '}
                    <Link href="/contact" style={{ color: '#1a56db', fontWeight: 700, textDecoration: 'none' }}>
                      સંપૂર્ણ ફોર્મ →
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}