import Student from "./Student"

export default function ResultBlock({ title, topper, students }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--primary)] text-white px-5 py-3">
        <span className="text-xl font-semibold">{title}</span>
        <span className="text-lg font-semibold">100% Result</span>
        <span className="text-sm underline cursor-pointer">⬇ Download complete result</span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0">

       
        <div className="flex justify-center items-center  bg-purple-50 sm:border-r border-b sm:border-b-0 border-gray-200">
          <Student {...topper} isTopper />
        </div>

        {/* Other students */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {students.map((s, i) => (
            <Student key={i} {...s} />
          ))}
        </div>

      </div>
    </div>
  )
}