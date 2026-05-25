'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/result',    label: 'Result' },
  { href: '/academics', label: 'Academics' },
]

function NavLink({ href, label, onClick }) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        fontSize: 15, fontWeight: 700,
        letterSpacing: '0.05em',
        textDecoration: 'none',
        color: active ? '#1a56db' : '#1e293b',
        position: 'relative',
        paddingBottom: 4,
        textTransform: 'capitalize',
        transition: 'color 0.2s',
      }}
      className="desk-navlink"
    >
      {label}
      <span style={{
        position: 'absolute', bottom: 0, left: 0,
        height: 2, borderRadius: 2, background: '#1a56db',
        width: active ? '100%' : '0%',
        transition: 'width 0.25s ease',
      }} className="nav-underline" />
    </Link>
  )
}

function MobileDrawer({ open, onClose }) {
  const pathname = usePathname()

  useEffect(() => { onClose() }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(4px)',
        zIndex: 40,
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        transition: 'opacity 0.28s ease, visibility 0.28s ease',
      }} />

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        height: '100%', width: 'min(72%, 300px)',
        background: '#fff', zIndex: 50,
        display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: open ? '8px 0 40px rgba(0,0,0,0.15)' : 'none',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px',
          background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Image src="/image/logo.png" width={80} height={80} alt="logo"
            style={{ width: 'auto', height: 50, objectFit: 'contain' }} />
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 8, width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff', fontSize: 20, fontWeight: 700,
          }}>✕</button>
        </div>

        {/* School badge */}
        <div style={{ padding: '14px 18px 6px', borderBottom: '1px solid #f1f5f9' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#1a56db', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 2px' }}>
            GSEB · ગુજ. માધ્યમ
          </p>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#64748b', margin: 0 }}>
            ધો. ૧ થી ૧૨ · રાજકોટ
          </p>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px 12px', gap: 4 }}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} onClick={onClose} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 14px', borderRadius: 11,
                textDecoration: 'none',
                fontWeight: 700, fontSize: 15,
                color: active ? '#1a56db' : '#1e293b',
                background: active ? '#eff6ff' : 'transparent',
                border: active ? '1.5px solid #bfdbfe' : '1.5px solid transparent',
                transition: 'background 0.18s, color 0.18s',
                textTransform: 'capitalize',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: active ? '#1a56db' : '#cbd5e1', flexShrink: 0,
                }} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ padding: '0 14px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/contact" onClick={onClose} style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%', padding: '12px',
              background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
              color: '#fff', border: 'none', borderRadius: 12,
              fontWeight: 800, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              📬 Contact
            </button>
          </Link>
          <Link href="/admissions" onClick={onClose} style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%', padding: '12px',
              background: '#fff', color: '#1a56db',
              border: '1.5px solid #bfdbfe', borderRadius: 12,
              fontWeight: 800, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              🎒 Admissions
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default function NavbarClient() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600;700;800&display=swap');
        .desk-navlink:hover { color:#1a56db !important; }
        .desk-navlink:hover .nav-underline { width:100% !important; }
        .nav-contact-btn { transition:transform 0.18s,box-shadow 0.18s; }
        .nav-contact-btn:hover { transform:translateY(-1px) scale(1.04); box-shadow:0 6px 18px rgba(26,86,219,0.3) !important; }
        .burger-btn { transition:background 0.18s; }
        .burger-btn:hover { background:#eff6ff !important; }
        @keyframes navSlideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        .nav-anim { animation:navSlideDown 0.45s ease both; }
        /* show/hide */
        .desktop-links { display:none; }
        @media(min-width:1024px){ .desktop-links{display:flex} .mobile-area{ } }
        .mobile-area { display:flex; }
        @media(min-width:1024px){ .mobile-area{display:none} }
      `}</style>

      <nav className="nav-anim" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(15,45,110,0.10)' : '0 1px 0 #e2e8f0',
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
        fontFamily: "'Mukta','Noto Sans Gujarati','Segoe UI',sans-serif",
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(12px,3vw,32px)',
          height: 'clamp(4.2rem,7vw,7rem)',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/image/logo.png"
              width={120} height={120}
              loading="eager" alt="logo"
              style={{ width: 'auto', height: 'clamp(3.5rem,6vw,6.5rem)', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop links */}
          <div className="desktop-links" style={{ alignItems: 'center', gap: 28 }}>
            {NAV_LINKS.map(l => <NavLink key={l.href} {...l} />)}
            <div style={{ width: 1, height: 22, background: '#e2e8f0' }} />
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="nav-contact-btn" style={{
                background: 'linear-gradient(135deg,#0f2d6e,#1a56db)',
                color: '#fff', border: 'none', borderRadius: 10,
                padding: '9px 22px', fontWeight: 800, fontSize: 14,
                cursor: 'pointer', fontFamily: 'inherit',
                boxShadow: '0 2px 10px rgba(26,86,219,0.22)',
              }}>
                📬 Contact
              </button>
            </Link>
          </div>

          {/* Mobile area */}
          <div className="mobile-area" style={{ alignItems: 'center', gap: 10 }}>
            {/* sm+ contact pill */}
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                background: '#eff6ff', color: '#1a56db',
                border: '1.5px solid #bfdbfe', borderRadius: 8,
                padding: '7px 14px', fontWeight: 700, fontSize: 12,
                cursor: 'pointer', fontFamily: 'inherit',
                display: 'none',
              }} className="sm-contact">
                Contact
              </button>
            </Link>
            <style>{`@media(min-width:640px){.sm-contact{display:block!important}}`}</style>

            {/* Burger */}
            <button
              className="burger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'transparent', border: '1.5px solid #e2e8f0',
                borderRadius: 10, width: 40, height: 40,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 5, cursor: 'pointer', padding: 0,
              }}
            >
              <span style={{ width: 18, height: 2, background: '#1e293b', borderRadius: 2, display: 'block' }} />
              <span style={{ width: 14, height: 2, background: '#1a56db', borderRadius: 2, display: 'block' }} />
              <span style={{ width: 18, height: 2, background: '#1e293b', borderRadius: 2, display: 'block' }} />
            </button>
          </div>

        </div>

        {/* Bottom accent line */}
        <div style={{
          height: 2,
          background: 'linear-gradient(90deg,#0f2d6e,#1a56db,#60a5fa,transparent)',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.3s',
        }} />
      </nav>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}