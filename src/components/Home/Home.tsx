import { tabsData } from "@/json/technologytabs";
import CompanyOverview from "./CompanyOverview";
import HeroSection from "./HeroSection";
import Services360 from "./Service360";
import TechnologyTabs from "./Tech/Technologytabs";
import WorkingProcess from "./WorkingProcess";
import PortfolioTabs from "./portfolio/Portfoliotabs";
import Testimonial from "./Testtominal";

export default function HomePage() {
  return (
    <main>
    
        <HeroSection />
        <CompanyOverview />
        <Services360/>
       
        <TechnologyTabs data={tabsData} />
         <WorkingProcess />
         <PortfolioTabs/>
         <Testimonial/>
    
      
    </main>
  );
}
