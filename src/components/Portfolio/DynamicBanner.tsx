"use client";

import { bannerImageMap, subtitleMap, titleMap } from "@/json/bannerdata";
import { usePathname } from "next/navigation";
import React from "react";



export function DynamicBanner() {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");

  const title = titleMap[cleanPath] || "";
  const subtitle = subtitleMap[cleanPath] || "";
  const bgImage = bannerImageMap[cleanPath];
  const hasImage = !!bgImage;

  return (
    <header
      className={`relative flex items-center justify-center text-center text-white w-full 
        ${hasImage ? "h-[600px]" : "h-[400px] bg-navbg"} 
        bg-cover bg-center`}
      style={hasImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {/* Overlay for image */}
      {hasImage && <div className="absolute inset-0 bg-navbg/50 z-10" />}

      <div className="text-center z-20 px-4 max-w-4xl">
        <h1 className= "font-bold  text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 mx-auto ${
              hasImage
                ? "text-2xl md:text-2xl leading-snug max-w-4xl"
                : "text-xl md:text-2xl"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
