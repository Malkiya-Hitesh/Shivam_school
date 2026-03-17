import React from 'react'
import Image from "next/image"
import Section from '@/app/ui/Section'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
function Gallry() {
    const images = [
        "/image/1.webp",
        "/image/2.webp",
        "/image/3.webp",
        "/image/4.webp",
        "/image/5.webp",
        "/image/6.webp",
        "/image/7.webp",
        "/image/8.webp",
        "/image/9.webp",
        "/image/10.webp",
        "/image/11.webp",
        "/image/12.webp",
        "/image/13.webp",
        "/image/2.webp",
        "/image/3.webp",

        "/image/5.webp",
        "/image/6.webp",

        "/image/1.webp",
        "/image/7.webp",
        "/image/8.webp",
        "/image/9.webp",
        "/image/10.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
        "/image/4.webp",
    ]
    return (

        <Section >

            <H2 className="text-center mb-10">Gallery</H2>
            <P className="text-center mb-12 text-gray-600">
                Explore our vibrant gallery showcasing the diverse activities and events that make our school a dynamic and engaging place for students.
            </P>



            <div className="columns-3 gap-5 ">
                {images.map((src, i) => (
                    <div key={i} className="break-inside-avoid  overflow-hidden ">
                        <div className="relative group overflow-hidden rounded-lg">
                            <Image src={src} alt="gallery" height={400} width={400} className="w-full transition-transform duration-300 hover:scale-105 p-4 border-4 rounded-lg" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                                <span className="absolute bottom-3 left-3 bg-white text-black px-3 py-1 text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
                                    Sports Day
                                </span>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </Section>
    )
}

export default Gallry
