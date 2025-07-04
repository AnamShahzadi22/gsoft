import TechnologyTabs from "@/components/Home/Tech/Technologytabs";
import PortfolioTabs2 from "@/components/Portfolio/PortfolioTabs/PortfolioTabs2";
import { tabsData } from "@/json/technologytabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio - See Our Success Stories   | Software Consulting",
};
export default function PortfolioPage() {
  return (
    <>
      <PortfolioTabs2 />
      <TechnologyTabs data={tabsData} />
    </>
  );
}
