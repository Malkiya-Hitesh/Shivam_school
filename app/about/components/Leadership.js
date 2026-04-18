'use client'
import Image from "next/image";
import Section from "@/app/ui/Section";
import { H2 } from "@/app/ui/H2";
import { P } from "@/app/ui/P";
import { H3 } from "@/app/ui/H3";
import { Span } from "@/app/ui/Span";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Harsh Vandamna Sharma",
    role: "Founder",
    image: "/image/3.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
  {
    name: "Harsh Vandamna Sharma",
    role: "Principal",
    image: "/image/2.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
  {
    name: "Harsh Vandamna Sharma",
    role: "Trustee",
    image: "/image/4.webp",
    bio: `Our institution is guided by experienced educators and trustees
    who are committed to shaping the future of our students. Our institution
    is guided by experienced educators and trustees who are committed to
    shaping the future of our students.`,
  },
];

function Leadership() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
let pathname = usePathname()
useLayoutEffect(() => {
    const cards = cardsRef.current;
    const wrapper = wrapperRef.current;

  
    const maxHeight = Math.max(...cards.map((c) => c.offsetHeight));
    wrapper.style.height = `${maxHeight }px`;

    const ctx = gsap.context(() => {
      
      gsap.set(cards, { opacity: 0, y: "100%" });
      gsap.set(cards[0], { opacity: 1, y: "0%", zIndex: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
             
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: `+=${cards.length * 800}`,
          scrub: 1,
          pin: true,
       anticipatePin: 1,
          pinSpacing: true,
        },
      });

      cards.forEach((_, i) => {
        if (i === 0) return;

        tl.fromTo(
          cards[i - 1],
          { scale: 1, opacity: 1 },
          { scale: 0.92, opacity: 1, duration: 1, ease: "power2.inOut" }
        );

        tl.fromTo(
          cards[i],
          { y: "100%", opacity: 1, zIndex: i + 1 },
          { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
          "<"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <Section ref={sectionRef} className="flex flex-col gap-8 bg-[var(--bg-light)] overflow-x-hidden ">
      <H2 className="text-center">Leadership & Management</H2>
      <P className="text-center max-w-2xl mx-auto p-text">
        Our institution is guided by experienced educators and trustees
        who are committed to shaping the future of our students.
      </P>

     
      <div ref={wrapperRef} className="relative  overflow-hidden ">
        {leaders.map((leader, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              // ✅ absolute + w-full — height content પ્રમાણે automatic
              className={`absolute top-0 left-0 w-full bg-[var(--bg)] rounded-2xl shadow-lg border border-gray-200 grid lg:grid-cols-2 gap-0 overflow-hidden  overflow-hidden`}
            >
              {/* ✅ Image — aspect-ratio થી height automatic */}
              <div
                className={`relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[350px] overflow-hidden ${isReverse ? "lg:order-last" : ""
                  }`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 bg-[var(--primary)] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  {leader.role}
                </div>
              </div>

              {/* ✅ Content — padding થી height natural રહે */}
              <div
                className={`flex flex-col justify-center gap-5 p-8 lg:p-10 ${isReverse ? "lg:order-first" : ""
                  }`}
              >
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