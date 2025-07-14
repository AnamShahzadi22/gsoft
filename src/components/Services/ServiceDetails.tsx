
"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { serviceDetails, Section } from "@/json/servicedetails";
import AnimateOnView from "@/components/HOC/Animation/MotionWrapper";
import { fadeLeft } from "@/components/HOC/animation";
import { FiCheck } from "react-icons/fi";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function ServiceDetails({ slug }: { slug: string }) {
  const data = serviceDetails.find(service => service.slug === slug);


  if (!data) return notFound();

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {data.sections.map((section: Section, idx: number) => (
        
         <AnimateOnView key={idx} variants={fadeLeft} once={false}>
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-none"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center text-black md:text-left">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className=" text-base leading-relaxed mb-4">{section.description}</p>
            {section.bullets && (
              <ul className="list-none space-y-2   text-left inline-block">
                {section.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                     <FiCheck className="text-cyan mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Button */}
            <div className="mt-6">
              <Button  
              
               as={Link}
     href="/estimate-your-project"
              className="bg-cyan text-black shadow hover:shadow-md font-semibold px-5 py-2 rounded transition-all">
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        </AnimateOnView>
      ))}
    </div>
  );
}
