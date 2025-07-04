
"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="relative w-full h-[450px]">
      {/* Background Image */}
      <Image
        src="/images/about/aboutbanner.png"
        alt="About Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-navbg/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="px-6 lg:px-50 text-white">
          <h1 className="text-5xl font-bold">About</h1>
          <h2 className="text-3xl mt-6 pr-40 md:pr-0 leading-snug ">
            Software Development Company | Global Software Consulting
          </h2>

          
           <Button
              as={Link}
              href="#"
              variant="bordered"
              radius="none"
              className="mt-8 border-white text-white text-lg font-semibold py-6 px-30 hover:bg-white/10 transition rounded"
            >
               {`Let's discuss your project`}
            </Button>
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
