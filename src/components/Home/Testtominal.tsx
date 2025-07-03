"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const testimonials = [
  {
    text: "They Delivered A High-Quality Product And Their Customer Service Was Excellent.",
    logo: "/images/logo.png",
    company: "Omid",
  },
  {
    text: "Great to work with them. They exceeded expectations, resulting in a smooth project.",
    logo: "/images/logo.png",
    company: "Blend Menu",
  },
  {
    text: "Quick understanding of our needs. Excellent communication and delivery.",
    logo: "/images/logo.png",
    company: "Vita",
  },
];

export default function TestimonialCarousel() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1, spacing: 16 },
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <div className="w-full overflow-hidden py-16 bg-[#001f21] text-white text-center px-4">
      <h3 className="text-lg text-white font-semibold">Testimonials</h3>
      <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

      <div ref={sliderRef} className="keen-slider max-w-[900px] mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="keen-slider__slide bg-[#05465c] rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-lg font-medium mb-6">{t.text}</p>
            <Image src={t.logo} alt={t.company} width={60} height={60} className="rounded-full border-4 border-white mb-2" />
            <span className="text-sm font-medium">{t.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
