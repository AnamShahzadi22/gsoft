"use client";

import { usePathname } from "next/navigation";
import React from "react";

const titleMap: Record<string, string> = {
  "/portfolio": "Portfolio",
  "/portfolio/tibbi-app": "Tibbi",
  "/portfolio/omid-app": "Omid Life",
  "/portfolio/careers-kitchen": "Career Kitchen",
  "/portfolio/blend-menu": "Blend Menu",
  "/services": "Our Services",
};

const subtitleMap: Record<string, string> = {
  "/portfolio": "Our Work Speaks Itself",
  "/services": "Fast, secure, stunning websites & Web Apps at unbeatable prices",
};

const bannerImageMap: Record<string, string | null> = {
  "/services": "/images/services/bgservice.png",
};

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
                ? "text-2xl md:text-3xl leading-snug max-w-3xl"
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
