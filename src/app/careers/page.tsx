import Benefits from '@/components/Career/Benifit'
import CareerBanner from '@/components/Career/CareerBanner'
import Careers from '@/components/Career/Careers'
import CareerSteps from '@/components/Career/CareerSteps'
import JobList from '@/components/Career/JobList'
import { DynamicBanner } from '@/components/Portfolio/DynamicBanner'
import React from 'react'

const CareerPage = () => {
  return (
   <>

   <DynamicBanner/>
   <Careers/>
   <CareerBanner/>
   < CareerSteps/>
    <JobList />
    <Benefits/>

   </>
  )
}

export default CareerPage