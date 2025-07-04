"use client";
import { portfoliodata } from "@/json/portfolio";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

 export  function TabPanelWithSlider({ tab }: { tab: (typeof portfoliodata)[0] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel);
    },
    slides: { perView: 1, spacing: 20 },
    drag: true,

    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1.1, spacing: 1 },
      },
    },
  });

  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === tab.technologies.length - 1;

  return (
    <Card shadow="none" className="border-none bg-transparent w-110 md:w-200">
      <CardBody>
        <div className="relative  max-w-6xl mx-auto w-80 md:w-180">
          <div ref={sliderRef} className="keen-slider">
            {tab.technologies.map((tech, i) => {
              const isCenter = i === selectedIndex;

              return (
                <div
                  key={tech.name}
                  className={`keen-slider__slide px-3 py-6 transition-all duration-100 flex flex-col text-left 
                    ${
                      isCenter
                        ? "  opacity-100 blur-0"
                        : "  opacity-40 blur-[1px]  "
                    }`}
                >
                  {/* Image */}
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={350}
                    height={200}
                    className="w-80 md:w-180 md:h-60 object-cover mb-4"
                  />

                 {/* Title + Arrows */}
{isCenter && (
  <div className="flex items-center justify-between gap-4 mb-2">
    <h4 className="text-2xl font-bold text-black">{tech.name}</h4>
    <div className="flex gap-2">
      {/* Left Arrow - show if not first */}
      {!isFirst && (
        <button
          onClick={() => instanceRef.current?.prev()}
          className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
      )}

      {/* Right Arrow - show if not last */}
      {!isLast && (
        <button
          onClick={() => instanceRef.current?.next()}
          className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  </div>
)}

                  {/* Description */}
                  {isCenter && (
                    <p className="text-sm text-gray-600 mb-4 max-w-md">
                      {tech.description}
                    </p>
                  )}

                  {/* Tech Chips */}
                  {isCenter && (
                    <div className="flex flex-wrap   gap-2">
                      {tech.techStack.map((stack) => (
                        <span
                          key={stack}
                          className="bg-black text-white text-sm px-3 py-2"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}