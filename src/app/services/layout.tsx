import { DynamicBanner } from "@/components/Portfolio/DynamicBanner";
import React from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
     
   <DynamicBanner />

      
      <main>{children}</main>
    </div>
  );
}
