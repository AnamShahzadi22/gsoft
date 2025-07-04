"use client";

import { usePathname } from "next/navigation";
import React from "react";

const titleMap: Record<string, string> = {
  "/portfolio/tibbi": "Tibbi",
  "/portfolio/another-project": "Another Project",
  // Add more as needed
};

const subtitleMap: Record<string, string> = {
  "/portfolio/tibbi": "Healthcare at your fingertips",
  "/portfolio/another-project": "Innovating another domain",
};

export function DynamicBanner() {
  const pathname = usePathname();

  // Normalize path (remove trailing slashes)
  const cleanPath = pathname.replace(/\/$/, "");

  const title = titleMap[cleanPath] || "Portfolio";
   const subtitle = subtitleMap[cleanPath] || "Our Work Speaks Itself";

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-2xl mt-2 ">{subtitle}</p>
      )}
    </div>
  );
}
