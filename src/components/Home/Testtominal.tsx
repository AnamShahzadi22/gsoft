"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/json/testominal";

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.children[0].clientWidth;
    el.scrollTo({
      left: cardWidth * 1,
      behavior: "auto",
    });

    const handleScroll = () => {
      if (!el) return;

      const scrollX = el.scrollLeft;
      const containerWidth = el.offsetWidth;

      const containerCenter = scrollX + containerWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < el.children.length; i++) {
        const card = el.children[i] as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      setCenterIndex(closestIndex);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden py-20 bg-navbg text-white text-center px-4 md:px-20">
      <h3 className="text-xl mb-3 font-semibold">Testimonials</h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-14">
        What Our Clients Say
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 pr-6 lg:pl-[50%] lg:pr-[50%] no-scrollbar"
      >
        {testimonials.map((t, i) => {
          const isCenter = i === centerIndex;

          return (
            <div
              key={i}
              className={`flex-shrink-0 snap-center transition-all duration-500 
    w-[90%] sm:w-[70%] md:w-[600px] 
    ${
      isCenter
        ? "scale-100 opacity-100 z-10"
        : "scale-80 opacity-50 blur-[1.5px] z-0"
    }
    mx-auto
  `}
            >
              <div className="bg-[#0f5368] rounded-xl px-6 md:px-8 py-6 md:py-8 min-h-[260px] w-full shadow-lg flex items-center">
                <p className="text-left text-base md:text-lg leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* Dots */}
              <div
                className={`my-4 flex flex-col items-center gap-2 transition-all duration-500
  ${isCenter ? "opacity-100 scale-100 blur-0" : "opacity-50 scale-90 blur-sm"}
`}
              >
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Logo + Name */}
              <div
                className={`flex flex-col items-center mt-4 transition-all duration-500
  ${isCenter ? "opacity-100 scale-100 blur-0" : "opacity-50 scale-90 blur-sm"}
`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-cyan overflow-hidden">
                  <Image
                    src={t.logo}
                    alt={t.company}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-2xl font-bold">{t.company}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
