import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProvider";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloating from "@/components/Footer/WhatsapFloating";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
  <ToastContainer position="top-right" autoClose={3000} />
  <Footer/>

  <WhatsAppFloating/>
      </ClientProviders>
      
      </body>
    </html>
  );
}
