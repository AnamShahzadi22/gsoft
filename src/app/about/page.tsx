import AboutPage from '@/components/About/About'
import ClientsGrid from '@/components/About/ClientsGrid'
import MissionVision from '@/components/About/MissionVision'
import SoftwareConsulting from '@/components/About/SoftwareConsulting'
import StatsSection from '@/components/About/StatsSection'
import PortfolioTabs from '@/components/Home/portfolio/Portfoliotabs'
import Testimonial from '@/components/Home/Testtominal'
import React from 'react'

const About = () => {
  return (

    
    
    <main>
    <AboutPage/>
    <SoftwareConsulting/>
 <MissionVision />
 <StatsSection/>
 <ClientsGrid/>
     <PortfolioTabs/>
             <Testimonial/>
             </main>
    
  )
}

export default About