'use client'

import Image from 'next/image'
import { useRef } from 'react'

function AchievementCard() {

  const containerRef = useRef(null)

  const cards = [
    {
      img: "/image/hero_4.webp",
      title: "Best in Class Teachers",
      desc: "Awarded as best teachers from the prestigious KAMS organization."
    },
    {
      img: "/image/hero_4.webp",
      title: "Robotics & Automation",
      desc: "Hands-on experience for interdisciplinary robotics learning."
    },
    {
      img: "/image/hero_4.webp",
      title: "Unity in Diversity",
      desc: "We grow stronger together through diversity and collaboration."
    },
    {
      img: "/image/hero_4.webp",
      title: "Best in Class Teachers",
      desc: "Recognized teaching excellence across the region."
    },
    {
      img: "/image/hero_4.webp",
      title: "Robotics & Automation",
      desc: "Students explore real-world robotics applications."
    },
    {
      img: "/image/hero_4.webp",
      title: "Unity in Diversity",
      desc: "A school culture that celebrates every student."
    }
  ]

  return (

    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth"
    >

      {cards.map((card, index) => (

        <div
          key={index}
          // style={{ marginTop: `${index * 2}rem` }}

          className={`group relative min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]
            h-[260px]
            rounded-2xl overflow-hidden 
            shadow-lg cursor-pointer 
            snap-start
            ${index % 2 !== 0 ? 'lg:mt-16' : ''}
          `}
        >

          <Image
            src={card.img}
            fill
            alt={card.title}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">

            <h3 className="text-lg font-semibold leading-tight">
              {card.title}
            </h3>

            <p className="text-sm leading-relaxed">
              {card.desc}
            </p>

          </div>

        </div>

      ))}

    </div>
  )
}

export default AchievementCard