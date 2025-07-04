import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProvider";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloating from "@/components/Footer/WhatsapFloating";

const font = Montserrat({
weight: ['100','200','300','400','500','600','700','800','900' ],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Software Deveolpmemt Company for Web, Mobile, AI | USA , AU ",
  description: "gsoftconsulting.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}  antialiased`}
      >



      <ClientProviders>
        <NavBar/>

  {children}
  <Footer/>
  <WhatsAppFloating/>
      </ClientProviders>
      
      </body>
    </html>
  );
}
