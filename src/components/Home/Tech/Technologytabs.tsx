"use client";

import { fadeLeft } from "@/components/HOC/animation";
import AnimateOnView from "@/components/HOC/Animation/MotionWrapper";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import Image from "next/image";

type TechItem = {
  name: string;
  logo: string;
};

type TechnologyTabsProps = {
  data: {
    id: string;
    label: string;
    technologies: TechItem[];
  }[];
};

export default function TechnologyTabs({ data }: TechnologyTabsProps) {
  return (
    <AnimateOnView variants={fadeLeft} once={false}>
      <section className="w-full py-16 px-4 md:px-12 lg:px-24 bg-white text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Technologies We Work With
        </h2>

        <div className="w-full">
          <Tabs
            aria-label="Technology Tabs"
            items={data}
            variant="underlined"
           
            classNames={{
              base: "w-full flex justify-center",
              tabList: "flex justify-center gap-8",
              tab: "text-sm font-medium transition-all duration-300",
              tabContent: "pb-2",
              cursor: "bg-cyan",
              panel: "pt-8 flex justify-center",
            }}
          >
            {(tab) => (
              <Tab key={tab.id} title={tab.label}>
                <Card shadow="none" className="border-none bg-transparent">
                  <CardBody>
                    <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
                      {tab.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex flex-col items-center justify-center w-28 md:w-32"
                        >
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={64}
                            height={64}
                            className="mb-2 object-contain"
                          />
                          <p className="text-sm lg:text-xl font-bold text-navbg">
                            {tech.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </section>
    </AnimateOnView>
  );
}
