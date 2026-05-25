"use client"
import { H3 } from "@/app/ui/H3"
import { useState } from "react"




// ─── Stat Card ───────────────────────────────────────────────
function StatCard({ label, value, color }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl p-4 gap-1"
      style={{ background: color + "18", border: `1.5px solid ${color}33` }}
    >
      <span className="text-2xl sm:text-3xl font-bold" style={{ color }}>
        {value}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 text-center font-medium">
        {label}
      </span>
    </div>
  )
}

// ─── Single Result Card ───────────────────────────────────────
function ResultCard({ result, year }) {

  const classLabel = {
    "10": "Class 10",
    "12-science": "Class 12 — Science",
    "12-commerce": "Class 12 — Commerce",
    "12-arts": "Class 12 — Arts",
  }

  const classColor = {
    "10": "#3b82f6",
    "12-science": "#10b981",
    "12-commerce": "#f59e0b",
    "12-arts": "#ec4899",
  }

  const color = classColor[result.class] || "#6366f1"

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">

      {/* Header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: color + "15", borderBottom: `2px solid ${color}30` }}
      >
        <div>
          <H3 className="   px-3 py-1 rounded-full"
       
            style={{ background: color, color: "#fff" }}
          >
            {classLabel[result.class]   || result.class}
            
          </H3>
        </div>
        {/* <div className="flex items-center gap-3">
          <H3 className="   px-3 py-1 rounded-full"
       
            style={{ background: color, color: "#fff" }}
          >
            
             {year}
          </H3>
          </div> */}
        {result.posterUrl && (
          <a
            href={result.posterUrl + "?dl="}
            download
            className="text-xs font-medium px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5"
            style={{ borderColor: color, color }}
          >
            Download 
          </a>
        )}
      </div>

      {/* Stats Grid */}
      <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard
          label="Total Students"
          value={result.totalStudents ?? "—"}
          color={color}
        />
        <StatCard
          label="Pass Students"
          value={result.passStudents ?? "—"}
          color="#10b981"
        />
        <StatCard
          label="Pass Rate"
          value={result.passRate ? `${result.passRate}%` : "—"}
          color="#f59e0b"
        />
        <StatCard
          label="Distinction"
          value={result.distinction ?? "—"}
          color="#6366f1"
        />
      </div>

      {/* Extra Stats */}
      {result.firstClass && (
        <div className="px-5 pb-5">
          <div className="rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-500">First Class Students</span>
            <span className="font-bold text-gray-800">{result.firstClass}</span>
          </div>
        </div>
      )}

      {/* Poster — stats ni niche */}
      {result.posterUrl && (
        <div className="px-5 pb-5">
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <img
              src={result.posterUrl}
              alt={result.posterAlt || "Result Poster"}
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Result Component ────────────────────────────────────
export default function Main({ results = [] }) {

  // Group by year
  const grouped = results.reduce((acc, r) => {
    if (!acc[r.year]) acc[r.year] = []
    acc[r.year].push(r)
    return acc
  }, {})

  const years = Object.keys(grouped).sort((a, b) => b - a)
  const [activeYear, setActiveYear] = useState(years[0] || "")

  if (!results.length) {
    return (
      <div className="text-center py-20 text-gray-400 text-sm">
        No results available yet.
      </div>
    )
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8 ">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Exam Results
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Select a year to view results
        </p>
      </div>

      {/* Year Tabs */}
      <div className="flex gap-2 flex-wrap justify-center">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeYear === year
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Result Cards */}
      {activeYear && (
        <div className="flex flex-col gap-5">
          {grouped[activeYear].map((result) => (
            <ResultCard key={result._id} result={result} year={activeYear} />
          ))}
        </div>
      )}

    </section>
  )
}