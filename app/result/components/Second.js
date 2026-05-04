import { H2 } from "@/app/ui/H2"
import React from "react"
import ResultBlock from "./ResultBlock"

function Second({ year }) {
  const std10 = {
    topper: { name: "Hardik Gabu", pr: 89, img: "/image/1.webp" },
    students: [
      { name: "Student 2", pr: 85, img: "/image/2.webp" },
      { name: "Student 3", pr: 84, img: "/image/3.webp" },
      { name: "Student 4", pr: 83, img: "/image/4.webp" },
      { name: "Student 5", pr: 82, img: "/image/5.webp" },
      { name: "Student 6", pr: 81, img: "/image/6.webp" },
      { name: "Student 7", pr: 80, img: "/image/7.webp" },
    ],
  }

  const std12Arts = {
    topper: { name: "Hardik Gabu", pr: 90, img: "/image/1.webp" },
    students: [
      { name: "Student 2", pr: 88, img: "/image/3.webp" },
      { name: "Student 3", pr: 86, img: "/image/3.webp" },
      { name: "Student 4", pr: 84, img: "/image/3.webp" },
      { name: "Student 5", pr: 83, img: "/image/3.webp" },
      { name: "Student 6", pr: 82, img: "/image/3.webp" },
      { name: "Student 7", pr: 80, img: "/image/3.webp" },
    ],
  }

  return (
    <div className="flex flex-col gap-12">
      <H2 className="text-center">{year}</H2>
      <ResultBlock title="Std 10" {...std10} />
      <ResultBlock title="Std 12 Arts" {...std12Arts} />
    </div>
  )
}

export default Second