// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import jsPDF from "jspdf";

// // ─── Install karva ───────────────────────────────────────────────
// // npm install gsap jspdf
// // ─────────────────────────────────────────────────────────────────

// const REQUIRED = [
//   "schoolName","schoolCity","stuName","dob","gender",
//   "lastSchool","lastStd","fatherName","fatherMobile",
//   "address","city","stuMobile",
// ];

// const initialState = {
//   schoolName:"", schoolCity:"",
//   stuName:"", dob:"", gender:"", lastSchool:"", lastStd:"", percent:"", admStd:"",
//   fatherName:"", fatherMobile:"", motherName:"", motherMobile:"", occ:"",
//   address:"", city:"", state:"", pin:"",
//   stuMobile:"", email:"",
// };

// export default function AdmissionForm() {
//   const [form, setForm] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

// //   // Refs for GSAP
// //   const wrapRef   = useRef(null);
// //   const titleRef  = useRef(null);
// //   const secRefs   = useRef([]);
// //   const btnRef    = useRef(null);
// //   const successRef= useRef(null);

//   // ── Input change ─────────────────────────────────────────────
//   function onChange(e) {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//     if (errors[name]) setErrors(er => ({ ...er, [name]: false }));
//   }

  
//   function shakeField(id) {
//     const el = document.getElementById("field_" + id);
//     if (!el) return;
//     gsap.fromTo(el,
//       { x: -6 },
//       { x: 0, duration: 0.4, ease: "elastic.out(1,0.3)",
//         keyframes: [{ x: -6 }, { x: 6 }, { x: -4 }, { x: 4 }, { x: 0 }] }
//     );
//   }

//   // ── Validate ─────────────────────────────────────────────────
//   function validate() {
//     const errs = {};
//     REQUIRED.forEach(k => { if (!form[k]?.trim()) errs[k] = true; });
//     setErrors(errs);
//     Object.keys(errs).forEach(k => shakeField(k));
//     return Object.keys(errs).length === 0;
//   }

//   // ── Format date ──────────────────────────────────────────────
//   function fmtDate(d) {
//     if (!d) return "____ / ____ / ______";
//     const [y, m, day] = d.split("-");
//     return `${day} / ${m} / ${y}`;
//   }

//   function todayStr() {
//     const n = new Date();
//     return `${String(n.getDate()).padStart(2,"0")} / ${String(n.getMonth()+1).padStart(2,"0")} / ${n.getFullYear()}`;
//   }

//   // ── Generate PDF ─────────────────────────────────────────────
//   function generatePDF() {
//     const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
//     const W = 210, M = 20, CW = W - 2 * M;
//     let y = M;

//     function ln(n = 1) { y += n; }
//     function chk(n) { if (y + n > 277) { doc.addPage(); y = M; } }

//     // ── Letter header ──
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(11); doc.setTextColor(40, 40, 40);
//     doc.text("To,", M, y); ln(6);
//     doc.text("The Principal,", M, y); ln(6);
//     doc.text(`${form.schoolName} School,`, M, y); ln(6);
//     doc.text(form.schoolCity, M, y); ln(10);

//     doc.setFont("helvetica", "bold");
//     doc.text("Subject: Application for Admission", M, y);
//     doc.setFont("helvetica", "normal"); ln(8);
//     doc.text("Respected Sir/Madam,", M, y); ln(7);

//     const intro = `I respectfully state that I want to take admission in your esteemed school${form.admStd ? " for " + form.admStd : ""}. My personal details are as follows:`;
//     const iLines = doc.splitTextToSize(intro, CW);
//     doc.text(iLines, M, y); y += iLines.length * 6 + 4;

//     // ── Table section helper ──
//     function tableSection(title, rows) {
//       chk(14 + rows.length * 9);
//       doc.setFillColor(230, 241, 251);
//       doc.rect(M, y, CW, 8, "F");
//       doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(12, 68, 124);
//       doc.text(title, M + 3, y + 5.5);
//       doc.setTextColor(40, 40, 40); doc.setFont("helvetica", "normal");
//       y += 9;
//       doc.setFontSize(10);
//       rows.forEach(([label, val]) => {
//         doc.setFillColor(250, 250, 250);
//         doc.rect(M, y, CW / 2, 8, "F");
//         doc.rect(M + CW / 2, y, CW / 2, 8, "F");
//         doc.setDrawColor(210, 210, 210);
//         doc.rect(M, y, CW / 2, 8);
//         doc.rect(M + CW / 2, y, CW / 2, 8);
//         doc.setTextColor(100, 100, 100); doc.setFontSize(9);
//         doc.text(label, M + 2, y + 3.2);
//         doc.setTextColor(30, 30, 30); doc.setFontSize(10); doc.setFont("helvetica", "bold");
//         doc.text(val || "—", M + CW / 2 + 3, y + 5.8);
//         doc.setFont("helvetica", "normal");
//         y += 9;
//       });
//       y += 4;
//     }

//     tableSection("Student Details", [
//       ["Student Full Name", form.stuName],
//       ["Date of Birth", fmtDate(form.dob)],
//       ["Gender", form.gender],
//       ["Last School Name", form.lastSchool],
//       ["Last Standard Passed", form.lastStd],
//       ["Percentage / Grade", form.percent || "—"],
//     ]);

//     tableSection("Parent / Guardian Details", [
//       ["Father's Name", form.fatherName],
//       ["Father's Mobile Number", form.fatherMobile],
//       ["Mother's Name", form.motherName || "—"],
//       ["Mother's Mobile Number", form.motherMobile || "—"],
//       ["Occupation", form.occ || "—"],
//     ]);

//     // ── Address block ──
//     chk(30);
//     doc.setFillColor(230, 241, 251);
//     doc.rect(M, y, CW, 8, "F");
//     doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(12, 68, 124);
//     doc.text("Address Details", M + 3, y + 5.5);
//     doc.setTextColor(40, 40, 40); doc.setFont("helvetica", "normal");
//     y += 10;
//     doc.setFontSize(10);
//     const addrLines = doc.splitTextToSize("Full Address: " + (form.address || "—"), CW);
//     doc.text(addrLines, M, y); y += addrLines.length * 5 + 3;
//     doc.text(`City: ${form.city || "—"}     State: ${form.state || "—"}     PIN Code: ${form.pin || "—"}`, M, y);
//     y += 10;

//     tableSection("Contact Details", [
//       ["Student Mobile Number", form.stuMobile],
//       ["Email ID", form.email || "—"],
//     ]);

//     // ── Closing ──
//     chk(50);
//     const closing = "I request you to kindly grant admission in your school. I assure you that I will follow all school rules and regulations sincerely.";
//     const cLines = doc.splitTextToSize(closing, CW);
//     doc.text(cLines, M, y); y += cLines.length * 6 + 6;
//     doc.text("Thanking You.", M, y); ln(6);
//     doc.text("Yours Obediently,", M, y); ln(16);
//     doc.setDrawColor(60, 60, 60);
//     doc.line(M, y, M + 70, y);
//     doc.setFontSize(9); doc.setTextColor(100, 100, 100);
//     doc.text("Signature of Student", M, y + 4); ln(10);
//     doc.setFontSize(10); doc.setTextColor(40, 40, 40);
//     doc.text("Date: " + todayStr(), M, y); ln(6);
//     doc.text("Place: " + (form.city || "______________"), M, y);

//     const filename = `Admission_Application_${form.stuName.replace(/\s+/g, "_")}.pdf`;
//     doc.save(filename);
//   }

//   // ── Submit handler ────────────────────────────────────────────
//   async function handleSubmit() {
//     if (!validate()) return;
//     setLoading(true);

//     // Button loading animation
//     gsap.to(btnRef.current, { scale: 0.97, duration: 0.1 });

//     await new Promise(r => setTimeout(r, 300));
//     generatePDF();
//     setLoading(false);
//     setSuccess(true);

//     // Success banner animation
//     gsap.fromTo(successRef.current,
//       { y: 10, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
//     );
//     gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "back.out(1.5)" });
//   }

//   // ── Reusable field components ─────────────────────────────────
//   function Field({ label, name, type = "text", placeholder, required, children }) {
//     const hasErr = errors[name];
//     return (
//       <div id={`field_${name}`} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//         <label style={{ fontSize: 13, color: "var(--color-text-secondary, #666)" }}>
//           {label} {required && <span style={{ color: "#E24B4A" }}>*</span>}
//         </label>
//         {children || (
//           <input
//             type={type}
//             name={name}
//             value={form[name]}
//             onChange={onChange}
//             placeholder={placeholder}
//             style={{
//               fontSize: 14,
//               padding: "8px 10px",
//               borderRadius: 8,
//               border: `1px solid ${hasErr ? "#E24B4A" : "#d1d5db"}`,
//               outline: "none",
//               background: "#fff",
//               color: "#111",
//               transition: "border-color 0.2s",
//               width: "100%",
//             }}
//             onFocus={e => { e.target.style.borderColor = "#378ADD"; e.target.style.boxShadow = "0 0 0 3px rgba(55,138,221,0.15)"; }}
//             onBlur={e => { e.target.style.borderColor = hasErr ? "#E24B4A" : "#d1d5db"; e.target.style.boxShadow = "none"; }}
//           />
//         )}
//         {hasErr && <span style={{ fontSize: 12, color: "#E24B4A" }}>Aa field bharvu jaruri chhe</span>}
//       </div>
//     );
//   }

//   function Select({ label, name, required, options }) {
//     const hasErr = errors[name];
//     return (
//       <div id={`field_${name}`} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//         <label style={{ fontSize: 13, color: "var(--color-text-secondary, #666)" }}>
//           {label} {required && <span style={{ color: "#E24B4A" }}>*</span>}
//         </label>
//         <select
//           name={name}
//           value={form[name]}
//           onChange={onChange}
//           style={{
//             fontSize: 14, padding: "8px 10px", borderRadius: 8,
//             border: `1px solid ${hasErr ? "#E24B4A" : "#d1d5db"}`,
//             background: "#fff", color: form[name] ? "#111" : "#9ca3af", outline: "none", width: "100%",
//           }}
//         >
//           <option value="">Pasand karo</option>
//           {options.map(o => <option key={o}>{o}</option>)}
//         </select>
//         {hasErr && <span style={{ fontSize: 12, color: "#E24B4A" }}>Aa field bharvu jaruri chhe</span>}
//       </div>
//     );
//   }

//   function SectionHead({ children, idx }) {
//     return (
//       <div
//         ref={el => { secRefs.current[idx] = el; }}
//         style={{
//           fontSize: 13, fontWeight: 500, textTransform: "uppercase",
//           letterSpacing: "0.07em", color: "#185FA5",
//           margin: "1.75rem 0 0.75rem",
//           paddingBottom: 6,
//           borderBottom: "2px solid #B5D4F4",
//         }}
//       >
//         {children}
//       </div>
//     );
//   }

//   const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
//   const grid3 = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };

//   // ── Render ────────────────────────────────────────────────────
//   return (
//     <div
//       ref={wrapRef}
//       style={{
//         maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem",
//         fontFamily: "system-ui, -apple-system, sans-serif",
//       }}
//     >
//       {/* Title */}
//       <div ref={titleRef}>
//         <h1 style={{ fontSize: 26, fontWeight: 600, color: "#0C447C", marginBottom: 4 }}>
//           School Admission Application
//         </h1>
//         <p style={{ fontSize: 14, color: "#6b7280", marginBottom: "1.5rem" }}>
//           Badha <span style={{ color: "#E24B4A" }}>*</span> fields bharva jaruri che.
//           Submit karta PDF download thase.
//         </p>
//       </div>

//       {/* ── School Info ── */}
//       <SectionHead idx={0}>School ni Mahiti</SectionHead>
//       <div style={grid2}>
//         <Field label="School nu Naam" name="schoolName" placeholder="Shree Saraswati Vidyalaya" required />
//         <Field label="School City / Shaher" name="schoolCity" placeholder="Rajkot" required />
//       </div>

//       {/* ── Student ── */}
//       <SectionHead idx={1}>Student Details</SectionHead>
//       <div style={grid2}>
//         <Field label="Vidyarthi nu Puru Naam" name="stuName" placeholder="Full Name" required />
//         <Field label="Janam Tarikh" name="dob" type="date" required />
//       </div>
//       <div style={{ ...grid3, marginTop: 12 }}>
//         <Select label="Jaati (Gender)" name="gender" required options={["Male","Female","Other"]} />
//         <Field label="Chhedlu School" name="lastSchool" placeholder="School nu naam" required />
//         <Select label="Chhedlu Dhoran" name="lastStd" required
//           options={["Std 5","Std 6","Std 7","Std 8","Std 9","Std 10 (SSC)","Std 12 (HSC)"]} />
//       </div>
//       <div style={{ ...grid2, marginTop: 12 }}>
//         <Field label="Percentage / Grade" name="percent" placeholder="e.g. 87% or A+" />
//         <Field label="Jema Pravesh Joiye (Admission for)" name="admStd" placeholder="e.g. Std 11 Science" />
//       </div>

//       {/* ── Parent ── */}
//       <SectionHead idx={2}>Parent / Guardian Details</SectionHead>
//       <div style={grid2}>
//         <Field label="Pita nu Naam (Father's Name)" name="fatherName" placeholder="Father's full name" required />
//         <Field label="Pita no Mobile" name="fatherMobile" type="tel" placeholder="98765 43210" required />
//       </div>
//       <div style={{ ...grid2, marginTop: 12 }}>
//         <Field label="Mata nu Naam (Mother's Name)" name="motherName" placeholder="Mother's full name" />
//         <Field label="Mata no Mobile" name="motherMobile" type="tel" placeholder="98765 43210" />
//       </div>
//       <div style={{ marginTop: 12 }}>
//         <Field label="Vyavsay (Occupation)" name="occ" placeholder="e.g. Business, Service, Farmer" />
//       </div>

//       {/* ── Address ── */}
//       <SectionHead idx={3}>Address Details</SectionHead>
//       <Field label="Puru Sarnamu (Full Address)" name="address" required>
//         <textarea
//           name="address"
//           value={form.address}
//           onChange={onChange}
//           placeholder="Ghar no, Street, Mohalla..."
//           rows={3}
//           style={{
//             fontSize: 14, padding: "8px 10px", borderRadius: 8,
//             border: `1px solid ${errors.address ? "#E24B4A" : "#d1d5db"}`,
//             resize: "vertical", width: "100%", outline: "none",
//             background: "#fff", color: "#111",
//           }}
//           onFocus={e => { e.target.style.borderColor = "#378ADD"; e.target.style.boxShadow = "0 0 0 3px rgba(55,138,221,0.15)"; }}
//           onBlur={e => { e.target.style.borderColor = errors.address ? "#E24B4A" : "#d1d5db"; e.target.style.boxShadow = "none"; }}
//         />
//         {errors.address && <span style={{ fontSize: 12, color: "#E24B4A" }}>Aa field bharvu jaruri chhe</span>}
//       </Field>
//       <div style={{ ...grid3, marginTop: 12 }}>
//         <Field label="Shaher (City)" name="city" placeholder="Rajkot" required />
//         <Field label="Rajya (State)" name="state" placeholder="Gujarat" />
//         <Field label="PIN Code" name="pin" placeholder="360001" />
//       </div>

//       {/* ── Contact ── */}
//       <SectionHead idx={4}>Contact Details</SectionHead>
//       <div style={grid2}>
//         <Field label="Vidyarthi no Mobile" name="stuMobile" type="tel" placeholder="98765 43210" required />
//         <Field label="Email ID" name="email" type="email" placeholder="example@email.com" />
//       </div>

//       {/* ── Submit Button ── */}
//       <button
//         ref={btnRef}
//         onClick={handleSubmit}
//         disabled={loading}
//         style={{
//           marginTop: "2rem", width: "100%", padding: "14px",
//           fontSize: 15, fontWeight: 600,
//           background: loading ? "#93c5fd" : "#185FA5",
//           color: "#fff", border: "none", borderRadius: 10,
//           cursor: loading ? "not-allowed" : "pointer",
//           letterSpacing: "0.01em", transition: "background 0.2s",
//         }}
//         onMouseEnter={e => { if (!loading) e.target.style.background = "#0C447C"; }}
//         onMouseLeave={e => { if (!loading) e.target.style.background = "#185FA5"; }}
//       >
//         {loading ? "PDF banaay chhe..." : "Application Letter PDF Download Karo"}
//       </button>

//       {/* ── Success Banner ── */}
//       {success && (
//         <div
//           ref={successRef}
//           style={{
//             marginTop: "1rem", padding: "14px 16px",
//             background: "#f0fdf4", border: "1px solid #86efac",
//             borderRadius: 10, color: "#166534", fontSize: 14, textAlign: "center",
//           }}
//         >
//           PDF successfully download thai! Application Letter taiyar chhe.
//         </div>
//       )}
//     </div>
//   );
// }