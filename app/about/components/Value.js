"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/app/ui/Section";
import { H3 } from "@/app/ui/H3";
import { P } from "@/app/ui/P";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Value() {
  const sectionRef = useRef(null);
  const ringRefs = useRef([]);
  const cardRefs = useRef([]);
  const h3Refs = useRef([]);
  const pRefs = useRef([]);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1.2,
      },
    });

    // All cards
    tl.from(cardRefs.current, {
      y: 60,
      opacity: 0,
      ease: "power3.out",
    }, 0);

    // All rings draw
    tl.to(ringRefs.current, {
      strokeDashoffset: 0,
      ease: "none",
    }, 0);

   
     gsap.utils.toArray(h3Refs.current).forEach((h3, i) => {
      gsap.from(h3, {
        y: 80,
        opacity: 0,
        duration:0.8,
        ease: "power3.out",
        scrollTrigger:{
          trigger: h3,
          start: "top 80%",
        }
      });
    });

    gsap.utils.toArray(pRefs.current).forEach((p, i) => {
      gsap.from(p, {
        y: 80,
        opacity: 0,
        duration:0.8,
        ease: "power3.out",
        scrollTrigger:{
          trigger: p,
          start: "top 80%",
        }
      });  
    })
  }, sectionRef);

  return () => ctx.revert();
}, []);

  const items = [
    {
      label: "Mission",
      text: "To provide quality education through dedicated teachers and modern learning methods that help students grow.",
      icon: <TbTargetArrow className="w-10 h-10 md:w-12 md:h-12 text-[#2A1B7F]" />,
    },
    {
      label: "Vision",
      text: "A nurturing environment where students develop knowledge, creativity, and strong values for lifelong success.",
      icon: <HiOutlineLightBulb className="w-10 h-10 md:w-12 md:h-12 text-[#2A1B7F]" />,
    },
    {
      label: "Values",
      text: "Founded on discipline, character, and a strong foundation for knowledge development and personal growth.",
      icon: <FaUniversity className="w-10 h-10 md:w-12 md:h-12 text-[#2A1B7F]" />,
    },
  ];

  return (
    <Section ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {items.map((item, i) => {
          const primaryDash = CIRCUMFERENCE * 0.75;
          const accentDash = CIRCUMFERENCE * 0.25;

          return (
            <div
              key={item.label}
              ref={(el) => (cardRefs.current[i] = el)}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-[clamp(160px,28vw,220px)] h-[clamp(160px,28vw,220px)]">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r={RADIUS}
                    fill="none"
                    stroke="#e8ebf7"
                    strokeWidth="14"
                  />

                  <circle
                    ref={(el) => (ringRefs.current[i] = el)}
                    cx="100"
                    cy="100"
                    r={RADIUS}
                    fill="none"
                    stroke="#2A1B7F"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${primaryDash} ${CIRCUMFERENCE}`}
                    strokeDashoffset={primaryDash}
                    transform="rotate(-90 100 100)"
                  />

                  <circle
                    cx="100"
                    cy="100"
                    r={RADIUS}
                    fill="none"
                    stroke="#D91C6A"
                    strokeWidth="14"
                    strokeDasharray={`${accentDash} ${CIRCUMFERENCE}`}
                    strokeDashoffset={-primaryDash}
                    transform="rotate(-90 100 100)"
                  />
                </svg>

                <div className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(42,27,127,0.12)]">
                  {item.icon}
                </div>
              </div>

              <H3
                ref={(el) => (h3Refs.current[i] = el)}
                className="mt-6 text-[#2A1B7F]"
              >
                {item.label}
              </H3>

              <P
                ref={(el) => (pRefs.current[i] = el)}
                className="mt-3 max-w-[280px] md:max-w-[320px] text-[#333]"
              >
                {item.text}
              </P>
            </div>
          );
        })}
      </div>
    </Section>
  );
}