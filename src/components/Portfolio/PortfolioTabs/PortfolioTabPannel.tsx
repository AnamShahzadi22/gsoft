"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { portfoliodata } from "@/json/portfolio";
import { useRouter } from "next/navigation";

export function TabPanel({ tab }: { tab: (typeof portfoliodata)[0] }) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {tab.technologies.map((tech) => (
        <div
          key={tech.name}
          className="w-full sm:w-[90%] lg:w-[30%] cursor-pointer"
          onClick={() => {
            console.log("Navigating to:", `/portfolio/${tech.slug}`);
            router.push(`/portfolio/${tech.slug}`);
          }}
        >
          <Card className="bg-transparent shadow-none border-none text-center">
            <CardBody className="flex flex-col items-center text-center px-4 pb-6">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={400}
                height={200}
                className="w-full h-auto object-cover mb-4"
              />

              <h4 className="text-3xl font-bold mb-2">{tech.name}</h4>

              <p className="text-gray-700 text-sm mb-4 line-clamp-4">{tech.description}</p>

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
        </div>
      ))}
    </div>
  );
}
