"use client";

import Section from "@/app/ui/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);


function FloatingLabel({ label, id, type = "text", value, onChange, textarea = false }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const shared = {
    id,
    value,
    placeholder: label,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
    onChange: (e) => onChange(id, e.target.value),
    className: `w-full bg-transparent border-b-2 pt-6 pb-2 text-[#0f172a] placeholder-transparent
      focus:outline-none text-[15px] transition-colors duration-200
      ${active ? "border-[#f43f5e]" : "border-[#0f172a]/25 focus:border-[#f43f5e]"}`,
  };

  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea rows={4} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 pointer-events-none font-medium transition-all duration-200
          ${active ? "top-0 text-[11px] text-[#f43f5e]" : "top-5 text-sm text-[#0f172a]/45"}`}
      >
        {label}
      </label>
    </div>
  );
}

/* ─── Info Card ────────────────────────────────────────────────────────────── */
function InfoCard({ icon, title, lines, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.75, delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%" },
      }
    );
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group flex gap-4 items-start p-5 rounded-2xl bg-white/70 backdrop-blur-sm
        border border-[#0f172a]/10 hover:border-[#f43f5e]/40 hover:shadow-md
        transition-all duration-300"
    >
      <div className="shrink-0 w-11 h-11 rounded-xl bg-[#f43f5e]/10 flex items-center justify-center
        text-[#f43f5e] group-hover:bg-[#f43f5e] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f43f5e] mb-1">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-[13px] text-[#0f172a]/65 leading-relaxed">{l}</p>
        ))}
      </div>
    </div>
  );
}
function ContactSection() {
  const headingRef  = useRef(null);
  const taglineRef  = useRef(null);
  const formCardRef = useRef(null);
  const blobRef     = useRef(null);
  const blob2Ref    = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, val) => setForm((p) => ({ ...p, [id]: val }));

  /* Entrance + blob float */
  useEffect(() => {
    // blobs
    gsap.to(blobRef.current,  { x: 30, y: -24, duration: 7,  yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(blob2Ref.current, { x: -20, y: 18, duration: 9,  yoyo: true, repeat: -1, ease: "sine.inOut" });

    // hero
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(headingRef.current,  { opacity: 0, y: 70, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 1.05 })
      .fromTo(taglineRef.current,  { opacity: 0, y: 28 },           { opacity: 1, y: 0, duration: 0.75 }, "-=0.55")
      .fromTo(formCardRef.current, { opacity: 0, y: 48 },           { opacity: 1, y: 0, duration: 0.85 }, "-=0.45");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    gsap.fromTo(formCardRef.current, { scale: 0.96 }, { scale: 1, duration: 0.45, ease: "back.out(2)" });
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  /* ── icons (inline svg) ── */
  const IconPin = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
  const IconPhone = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
  const IconMail = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
  const IconClock = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const chips = ["Admissions", "Curriculum", "Events", "Fee Structure", "Other"];


  return (
   <Section  className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">

        
          <div ref={formCardRef}>
            {submitted ? (
              <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-[#0f172a]/10
                p-10 flex flex-col items-center text-center shadow-xl">
                <div className="w-16 h-16 rounded-full bg-[#f43f5e]/10 flex items-center justify-center mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 className="fnt-head text-3xl font-black text-[#0f172a] mb-3">Message sent!</h2>
                <p className="text-[#0f172a]/55 max-w-sm leading-relaxed text-sm">
                  Thank you for reaching out. Someone from our team will be in touch shortly.
                </p>
                <button onClick={reset}
                  className="mt-7 px-6 py-2.5 rounded-full border-2 border-[#0f172a]/20
                    text-sm font-semibold text-[#0f172a] hover:border-[#f43f5e]
                    hover:text-[#f43f5e] transition-colors duration-200">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className=" bg-white/85 backdrop-blur-md border border-[#0f172a]/10
                  p-8 md:p-10 shadow-xl space-y-8">

                <div className="grid sm:grid-cols-2 gap-8">
                  <FloatingLabel label="Full name"      id="name"    value={form.name}    onChange={handleChange} />
                  <FloatingLabel label="Email address"  id="email"   type="email" value={form.email}   onChange={handleChange} />
                </div>
                <FloatingLabel   label="Subject"        id="subject" value={form.subject} onChange={handleChange} />
                <FloatingLabel   label="Your message"   id="message" value={form.message} onChange={handleChange} textarea />

                {/* chips */}
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <button key={c} type="button"
                      onClick={() => handleChange("subject", c)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                        ${form.subject === c
                          ? "bg-[#f43f5e] text-white border-[#f43f5e]"
                          : "border-[#0f172a]/20 text-[#0f172a]/55 hover:border-[#f43f5e] hover:text-[#f43f5e]"
                        }`}>
                      {c}
                    </button>
                  ))}
                </div>

                {/* submit */}
                <button type="submit" disabled={loading}
                  className="group relative px-10 py-4 rounded-2xl bg-[#0f172a] text-white
                    font-semibold text-sm overflow-hidden hover:bg-[#f43f5e]
                    active:scale-95 transition-all duration-300 disabled:opacity-60">
                  <span className={`flex items-center gap-2 transition-opacity duration-200 ${loading ? "opacity-0" : ""}`}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="group-hover:translate-x-1 transition-transform duration-200">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                  {loading && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

   
          <div className="space-y-3 lg:pt-1">
            <InfoCard delay={0.1} title="Address"      icon={IconPin}   lines={["14 Greenfield Road, Education District", "Mumbai — 400001, Maharashtra"]} />
            <InfoCard delay={0.2} title="Phone"        icon={IconPhone} lines={["+91 22 4567 8900", "Mon – Fri  ·  8:00 AM – 5:00 PM"]} />
            <InfoCard delay={0.3} title="Email"        icon={IconMail}  lines={["admissions@greenfield.edu", "info@greenfield.edu"]} />
            <InfoCard delay={0.4} title="Office Hours" icon={IconClock} lines={["Monday – Friday: 8 AM – 5 PM", "Saturday: 9 AM – 1 PM"]} />

            {/* map stub */}
            <div className="rounded-2xl overflow-hidden border border-[#0f172a]/10 h-44 relative
              flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#e2e8f0,#cbd5e1)" }}>
            <div className="w-full h-[260px] rounded-2xl overflow-hidden border border-[#0f172a]/10 shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=PASTE_YOUR_REAL_EMBED_ID"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
             
            </div>
          </div>
        </Section>
  )
}

export default ContactSection
