'use client'
import Image from "next/image";
import Section from "@/app/ui/Section";
import { H2 } from "@/app/ui/H2";
import { P } from "@/app/ui/P";
import { H3 } from "@/app/ui/H3";
import { Span } from "@/app/ui/Span";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Harsh Vandamna Sharma",
    role: "Founder",
    image: "/image/1.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
  {
    name: "Harsh Vandamna Sharma",
    role: "Principal",
    image: "/image/1.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
  {
    name: "Harsh Vandamna Sharma",
    role: "Trustee",
    image: "/image/1.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
];

function Leadership() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

 useEffect(() => {
  const cards = cardsRef.current;

  const ctx = gsap.context(() => {
    // પહેલા બધા cards ને hidden કરો
    gsap.set(cards, { opacity: 1, y: "400" });
    // પહેલો card visible કરો
    gsap.set(cards[0], { opacity: 1, y: 0, zIndex: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -=150",
        end: "+=2500",
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((_, i) => {
      if (i === 0) return;

      // Previous card — scale down અને fade out
      tl.fromTo(
        cards[i - 1],
        { scale: 1, opacity: 1 },
        { scale: 0.90, opacity: 0, duration: 1, ease: "power2.inOut" }
      );

      // Current card — y: 100% થી 0% અને opacity 0 થી 1
      tl.fromTo(
        cards[i],
        { y: "100%", opacity: 0, zIndex: i + 1 },
        { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
        "<"
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <Section ref={sectionRef} className="flex flex-col gap-8 bg-[var(--bg-light)]">
      <H2 className="text-center">Leadership & Management</H2>
      <P className="text-center max-w-2xl mx-auto p-text">
        Our institution is guided by experienced educators and trustees
        who are committed to shaping the future of our students.
      </P>

      <div className="relative w-full" style={{ height: "560px" }}>
        {leaders.map((leader, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute inset-0 bg-[var(--bg)] rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center overflow-hidden"
            >
              {/* Image — flips side based on index */}
              <div
                className={`relative w-full h-[260px] md:h-[400px] rounded-2xl overflow-hidden ${
                  isReverse ? "md:order-last" : ""
                }`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                {/* Role badge over image */}
                <div className="absolute bottom-4 left-4 bg-[var(--primary)] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  {leader.role}
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-5 ${isReverse ? "md:order-first" : ""}`}>
                {/* Index number */}
                <span className="text-6xl font-bold text-[var(--primary)] opacity-15 leading-none select-none">
                  0{index + 1}
                </span>
                <H3>{leader.name}</H3>
                <Span className="text-[var(--primary)] font-medium tracking-wide uppercase text-sm">
                  {leader.role}
                </Span>
                <div className="w-12 h-0.5 bg-[var(--primary)] rounded-full" />
                <P>{leader.bio}</P>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Leadership;