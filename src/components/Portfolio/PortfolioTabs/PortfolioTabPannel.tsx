"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { portfoliodata } from "@/json/portfolio";

export function TabPanel({ tab }: { tab: (typeof portfoliodata)[0] }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {tab.technologies.map((tech) => (
        <Card
          key={tech.name}
          className="w-full sm:w-[90%] lg:w-[30%] bg-transparent shadow-none border-none text-center"
        >
          <CardBody className="flex flex-col items-center text-center px-4 pb-6">
            {/* Image */}
            <Image
              src={tech.logo}
              alt={tech.name}
              width={400}
              height={200}
              className="w-full h-auto object-cover mb-4"
            />

            {/* Title */}
            <h4 className="text-3xl font-bold mb-2">{tech.name}</h4>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-4">{tech.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {tech.techStack.map((stack) => (
                <span
                  key={stack}
                  className="bg-black text-white text-sm px-3 py-1"
                >
                  {stack}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}