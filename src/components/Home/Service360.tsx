'use client';
import { Card, CardBody } from "@heroui/react";
import { fadeLeft } from "../HOC/animation";
import AnimateOnView from "../HOC/Animation/MotionWrapper";
import { serviceGroups } from "@/json/servicegroup";
import Link from "next/link";

export default function Services360() {
  return (
    <AnimateOnView once={false} variants={fadeLeft}>
      <div className="py-10 bg-[#6cdcf4] px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-center text-5xl text-navbg font-bold tracking-tight mb-10">
            Our 360° Services
          </h1>

          <div className="space-y-8">
            {serviceGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`grid   justify-center
                  ${
                    group.length === 4
                      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-10'
                      : group.length === 3
                      ? 'grid-cols-1 sm:grid-cols-2  lg:grid-cols-3   lg:mx-30 '
                      : ''
                  }`}
              >
                {group.map((service, index) => (
                  <Card
                    key={index}
                    className="group bg-transparent hover:bg-navbg duration-300 shadow-none w-full max-w-xs mx-auto"
                  >
                     <Link href={`/services/${service.slug}`}>
                    <CardBody className="p-4">
                      <div className="mb-4 flex items-center justify-center group-hover:text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-navbg group-hover:text-white text-center leading-snug">
                        {service.title.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="text-base text-navbg group-hover:text-white leading-relaxed pt-0 p-4 text-center"> {service.description}</p>
                    </CardBody>
                    </Link>
                   
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimateOnView>
  );
}
