"use client";

import { Tabs, Tab, } from "@nextui-org/react";

import { portfoliodata } from "@/json/portfolio";
import { TabPanelWithSlider } from "./TabPannelSlider";



export default function PortfolioTabs() {
  return (
    <section className="w-full px-4 py-12 text-center ">
     <h3 className="text-xl mb-3 font-semibold">Our Work</h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-14">Portfolio</h2>


      <Tabs
        aria-label="Technology Tabs"
        items={portfoliodata}
        variant="underlined"
      
        classNames={{
          base: "w-full flex justify-center",
          tabList: "flex justify-center gap-6",
          tab: "text-sm font-semibold transition-all duration-300",
          tabContent: "pb-2",
          cursor: "bg-cyan",
          panel: "pt-8 flex justify-center",
        }}
      >
        {(tab) => (
          <Tab key={tab.id} title={tab.label}>
            <TabPanelWithSlider tab={tab} />
          </Tab>
        )}
      </Tabs>
    </section>
  );
}

