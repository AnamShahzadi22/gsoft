import CareerBanner from '@/components/Career/CareerBanner'
import Careers from '@/components/Career/Careers'
import CareerSteps from '@/components/Career/CareerSteps'
import { DynamicBanner } from '@/components/Portfolio/DynamicBanner'
import React from 'react'

const CareerPage = () => {
  return (
   <>

   <DynamicBanner/>
   <Careers/>
   <CareerBanner/>
   < CareerSteps/>

   </>
  )
}

export default CareerPage