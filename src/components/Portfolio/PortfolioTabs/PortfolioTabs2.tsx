"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { portfoliodata } from "@/json/portfolio";
import { TabPanel } from "./PortfolioTabPannel";

export default function PortfolioTabs2() {
  return (
    <section className="w-full px-4 py-12 text-center">
    
    <Tabs
  aria-label="Technology Tabs"
  items={portfoliodata}
  variant="light"
  color="danger"
  classNames={{
    base: "w-full flex justify-center ",
    tabList: "flex justify-center gap-4 ",
    tab: `
      text-sm font-semibold px-5 py-2 rounded-full transition-colors
      text-white
      data-[selected=true]:text-white
    `,
    cursor: "bg-navbg rounded-full ",
    tabContent: "py-2",
    panel: "pt-8 flex justify-center ",
  }}
>
  {(tab) => (
    <Tab key={tab.id} title={tab.label}>
      <TabPanel tab={tab} />
    </Tab>
  )}
</Tabs>



    </section>
  );
}
