'use client'
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import H3 from './ui2/H3';
import P from './ui2/P';

export default function FacilitieCard() {
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    const container = containerRef.current;

    const updateCaterpillar = (forward = true) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const cards = gsap.utils.toArray(container.children);

      const state = Flip.getState(cards);

      if (forward) {
        container.append(cards[0]);
      } else {
        container.prepend(cards[cards.length - 1]);
      }

      Flip.from(state, {
        targets: cards,
        duration: 2,
         fade: true,
         scale : 0.2,
        ease: "power1.inOut",
        absoluteOnLeave: true,
        onComplete: () => {
          isAnimating.current = true;
        }
      });
    };

    const loop = setInterval(() => updateCaterpillar(true), 2000);
    return () => clearInterval(loop);
  }, []);

  const offers = [
    { id: 1, title: "Lab", desc: "State-of-the-art laboratory.", img: "/image/lab.jpg" },
    { id: 2, title: "Library", desc: "Modern digital library.", img: "/image/library.jpg" },
    { id: 3, title: "Computer Lab", desc: "Latest software & hardware.", img: "/image/computer.jpg" },
      { id: 5, title: "Lab", desc: "State-of-the-art laboratory.", img: "/image/lab.jpg" },
    { id: 6, title: "Library", desc: "Modern digital library.", img: "/image/library.jpg" },
    { id: 7, title: "Computer Lab", desc: "Latest software & hardware.", img: "/image/computer.jpg" },  { id: 8, title: "Lab", desc: "State-of-the-art laboratory.", img: "/image/lab.jpg" },
    { id: 9, title: "Library", desc: "Modern digital library.", img: "/image/library.jpg" },
    { id: 10, title: "Computer Lab", desc: "Latest software & hardware.", img: "/image/computer.jpg" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="grid grid-flow-col grid-rows-1 auto-cols-[minmax(30vw,50vw)] gap-8 px-9 py-5"
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="item border rounded-lg shadow-lg p-4 bg-[var(--color-bg-light)]"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={offer.img}
                alt={offer.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <H3  className="mt-2 text-lg font-semibold" data={offer.title} /> 
            <P className="text-sm opacity-80" data={offer.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}
