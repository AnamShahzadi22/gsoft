"use client";

import Image from "next/image";
import Link from "next/link";

import AnimateOnView from "../HOC/Animation/MotionWrapper";
import { fadeLeft } from "../HOC/animation";
import { Button } from "@heroui/react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen  ">
      {/* Background Image */}
      <Image
        src="/images/gsoftherobanner.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover  z-0"
      />

      {/*  overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-10" />

      {/* Content on top */}
      <div className="relative  z-20 flex  items-center-safe   mx-12 lg:mx-25  h-full ">
        <div className="px-4 sm:px-6 lg:px-8 ">
  <AnimateOnView variants={fadeLeft}>
  <div className="text-left max-w-3xl mx-auto  text-white">
    
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-20">
        Software <span className="text-cyan">Development</span>
        <br />
        <span className="text-cyan">Company</span> For Your Market
        Leadership In Business
      </h1>
   

  
      <p className="text-base sm:text-lg  mt-4">
        Since 2012, we have been a trusted software development company
        that has helped businesses in all kinds of industries. We provide
        services in Web and Mobile development, UI/UX, DevOps, Cloud
        services, SEO and many more.
      </p>
 

   
      <Button
    as={Link}
    href="#"
    variant="bordered"
    radius="sm"
     className="mt-8 bg-transparent text-xl border border-cyan text-white font-semibold py-6 px-12 rounded hover:bg-cyan hover:border-white transition cursor-pointer"
  >
    {`Let's discuss your project`}
  </Button>
   
  </div>
   </AnimateOnView>
</div>

      </div>
    </div>
  );
}
