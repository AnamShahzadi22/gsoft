import { DynamicBanner } from "@/components/Portfolio/DynamicBanner";
import React from "react";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
     
      <header className="bg-navbg py-10  flex items-center justify-center text-center text-white  w-full h-[400px]">
        <DynamicBanner />
      </header>

      
      <main>{children}</main>
    </div>
  );
}
