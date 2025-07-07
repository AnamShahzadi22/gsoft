'use client';
import { Card, CardBody } from "@heroui/react";
import { serviceGroups } from "@/json/servicegroup";
import AnimateOnView from "@/components/HOC/Animation/MotionWrapper";
import { fadeLeft } from "@/components/HOC/animation";
import Link from "next/link";

export default function Services() {
  return (
    <AnimateOnView once={false} variants={fadeLeft}>
      <div className="py-10 bg-navbg px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">

          <div className="space-y-8">
            {serviceGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`grid justify-center
                  ${
                    group.length === 4
                      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-10'
                      : group.length === 3
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0 lg:mx-30'
                      : ''
                  }`}
              >
                {group.map((service, index) => (
                  <Card
  key={index}
  className="group relative bg-bg-navbg hover:bg-navbg duration-300 shadow-none w-full max-w-xs mx-auto border-x-2 border-transparent rounded-none hover:border-cyan overflow-hidden"
>
  {/* Cyan overlay on hover */}
  <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
 <Link href={`/services/${service.slug}`}>
                    <CardBody className="p-6">
                      <div className="mb-4 flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white text-center leading-snug">
                        {service.title.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="text-base text-white leading-relaxed pt-0 p-4 text-center">
                        {service.description}
                      </p>
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