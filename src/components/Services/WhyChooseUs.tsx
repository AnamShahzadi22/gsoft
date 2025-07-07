'use client';

import { servicecorevalues } from "@/json/servicecorevalues";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";



export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Our Core Values</h3>
        <h2 className="text-5xl font-bold mt-2">Why Choose Us?</h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch md:justify-center max-w-screen-xl mx-auto gap-8">
        {/* Left side cards */}
        <div className="flex flex-col gap-6 flex-1">
          {servicecorevalues.left.map((item, index) => (
            <Card key={index} className="rounded-none shadow-none border bg-transparent border-gray-300">
              <CardBody className="text-center">
                <div className="mb-2 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Center image (perfectly centered & larger) */}
        <div className="hidden md:flex justify-center items-center flex-shrink-0 px-6">
          <Image
            src="/images/services/center.png"
            alt="Why Choose Us"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Right side cards */}
        <div className="flex flex-col gap-6 flex-1">
          {servicecorevalues.right.map((item, index) => (
            <Card key={index} className="rounded-none shadow-none border bg-transparent border-gray-300">
              <CardBody className="text-center">
                <div className="mb-2 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}