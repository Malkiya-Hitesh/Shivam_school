'use client'

import { useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx4vFO4VGkHkMa1V3sisaOz2_30hWJmYHZWhOw0NTeCRSUI0ktuYI_afLqdzc9LYHFl/exec";

const initialForm = {
  fullName: "",
  email: "",
  mobileNumber: "",
  dob: "",
  gender: "",
  program: "",
  guardianName: "",
  guardianNumber: "",
  previousSchool: "",
  address: "",
};

const validators = {
  fullName: (v) =>
    v.trim().length < 3 ? "Full name must be at least 3 characters" : "",
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
  mobileNumber: (v) =>
    /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit mobile number",
  dob: (v) => {
    if (!v) return "Date of birth is required";
    const age = (new Date() - new Date(v)) / (365.25 * 24 * 3600 * 1000);
    if (age < 3) return "Student must be at least 3 years old";
    if (age > 20) return "Age seems too high — please check";
    return "";
  },
  gender: (v) => (v ? "" : "Please select a gender"),
  program: (v) => (v ? "" : "Please select a program"),
  guardianName: (v) =>
    v.trim().length < 3 ? "Guardian name must be at least 3 characters" : "",
  guardianNumber: (v) =>
    /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit guardian number",
  previousSchool: () => "",
  address: (v) =>
    v.trim().length < 10 ? "Please enter a complete address" : "",
};

function Field({ label, required, error, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 600,
          color: "#1e3a8a",
          marginBottom: 6,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#e24b4a", marginLeft: 3 }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <div
          style={{
            fontSize: 12,
            color: "#e24b4a",
            marginTop: 5,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span>⚠</span> {error}
        </div>
      )}
    </div>
  );
}

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: `1.5px solid ${hasError ? "#e24b4a" : "#c7d2fe"}`,
  fontSize: 14,
  outline: "none",
  background: "#f8faff",
  color: "#1e293b",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
});

export default function AdmissionForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = (name, value) => validators[name]?.(value) ?? "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((er) => ({ ...er, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const newErrors = Object.keys(form).reduce(
      (a, k) => ({ ...a, [k]: validate(k, form[k]) }),
      {}
    );
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus("loading");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString("en-IN"),
          fullName: form.fullName,
          email: form.email,
          mobileNumber: form.mobileNumber,
          dob: form.dob,
          gender: form.gender,
          program: form.program,
          guardianName: form.guardianName,
          guardianNumber: form.guardianNumber,
          previousSchool: form.previousSchool || "N/A",
          address: form.address,
        }),
      });
      setStatus("success");
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eef2ff 0%, #f0fdf4 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          padding: 24,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "56px 48px",
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(30,58,138,0.10)",
            border: "1px solid #e0e7ff",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#bbf7d0,#6ee7b7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 34,
            }}
          >
            ✅
          </div>
          <h2
            style={{
              color: "#1e3a8a",
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Application Submitted!
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
            Thank you! Your admission application has been received successfully.
            Our team will contact you within 2–3 working days.
          </p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              background: "#1e3a8a",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "13px 32px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div  id="admissions"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff 0%, #f8faff 60%, #f0fdf4 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        padding: "40px 16px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#1e3a8a",
              color: "#fff",
              borderRadius: 50,
              padding: "8px 22px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            🎓 School Admission 2025–26
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              fontWeight: 800,
              color: "#1e3a8a",
              margin: "0 0 10px",
              letterSpacing: "-0.5px",
            }}
          >
            Admission Form
          </h1>
          <p style={{ color: "#64748b", fontSize: 15 }}>
            Fill in all required fields carefully. Fields marked <span style={{ color: "#e24b4a" }}>*</span> are mandatory.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            boxShadow: "0 8px 40px rgba(30,58,138,0.08)",
            border: "1px solid #e0e7ff",
            overflow: "hidden",
          }}
        >
          {/* Section bar */}
          <SectionBar icon="👤" title="Student Information" color="#4f46e5" />
          <div style={{ padding: "24px 32px 8px" }}>
            <TwoCol>
              <Field label="Full Name" required error={touched.fullName && errors.fullName}>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Arjun Sharma"
                  style={inputStyle(touched.fullName && errors.fullName)}
                />
              </Field>
              <Field label="Date of Birth" required error={touched.dob && errors.dob}>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={inputStyle(touched.dob && errors.dob)}
                />
              </Field>
            </TwoCol>
            <TwoCol>
              <Field label="Gender" required error={touched.gender && errors.gender}>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={inputStyle(touched.gender && errors.gender)}
                >
                  <option value="">Select gender</option>
                  {["Male", "Female", "Other"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Program Applying For" required error={touched.program && errors.program}>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={inputStyle(touched.program && errors.program)}
                >
                  <option value="">Select program</option>
                  {["Preschool", "Primary School", "Middle School", "High School"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </TwoCol>
            <Field label="Previous School" error={false}>
              <input
                name="previousSchool"
                value={form.previousSchool}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Previous school name (optional)"
                style={inputStyle(false)}
              />
            </Field>
          </div>

          <SectionBar icon="📞" title="Contact Details" color="#0f6e56" />
          <div style={{ padding: "24px 32px 8px" }}>
            <TwoCol>
              <Field label="Email Address" required error={touched.email && errors.email}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. arjun@email.com"
                  style={inputStyle(touched.email && errors.email)}
                />
              </Field>
              <Field label="Mobile Number" required error={touched.mobileNumber && errors.mobileNumber}>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="10-digit number"
                  maxLength={10}
                  style={inputStyle(touched.mobileNumber && errors.mobileNumber)}
                />
              </Field>
            </TwoCol>
            <Field label="Address" required error={touched.address && errors.address}>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full residential address"
                rows={3}
                style={{ ...inputStyle(touched.address && errors.address), resize: "vertical" }}
              />
            </Field>
          </div>

          <SectionBar icon="👨‍👩‍👧" title="Parent / Guardian Details" color="#854f0b" />
          <div style={{ padding: "24px 32px 28px" }}>
            <TwoCol>
              <Field label="Guardian Name" required error={touched.guardianName && errors.guardianName}>
                <input
                  name="guardianName"
                  value={form.guardianName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Parent or guardian name"
                  style={inputStyle(touched.guardianName && errors.guardianName)}
                />
              </Field>
              <Field label="Guardian Number" required error={touched.guardianNumber && errors.guardianNumber}>
                <input
                  type="tel"
                  name="guardianNumber"
                  value={form.guardianNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="10-digit number"
                  maxLength={10}
                  style={inputStyle(touched.guardianNumber && errors.guardianNumber)}
                />
              </Field>
            </TwoCol>

            {/* Error Banner */}
            {status === "error" && (
              <div
                style={{
                  background: "#fff1f1",
                  border: "1px solid #fca5a5",
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: "#b91c1c",
                  fontSize: 14,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ❌ Submission failed. Please check your connection and try again.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: 14,
                border: "none",
                background:
                  status === "loading"
                    ? "#93a3d8"
                    : "linear-gradient(135deg, #1e3a8a 0%, #3b5bdb 100%)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s, transform 0.1s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {status === "loading" ? (
                <>
                  <Spinner /> Submitting Application…
                </>
              ) : (
                "🎓  Submit Application"
              )}
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
              By submitting, you confirm that all information provided is accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBar({ icon, title, color }) {
  return (
    <div
      style={{
        background: `${color}12`,
        borderLeft: `4px solid ${color}`,
        padding: "12px 32px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </span>
    </div>
  );
}

function TwoCol({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "0 20px",
      }}
    >
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 16,
        height: 16,
        border: "2px solid #ffffff55",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    >
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}