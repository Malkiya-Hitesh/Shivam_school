import React from 'react'
import Hero from './components/Hero'
import Curiculam from './components/Curiculam'
import Facilities from '../components/section/Facilities'
import Teachers from './components/Teachers'
import StatsSection from '../components/section/StatsSection'
import AdmissionForm from './components/AdmissionForm'
import FacilitiesServer from '../components/section/FacilitiesServer'
import { getTeacher } from '../lib/queries'


 async function page() {
    const teacher = await getTeacher()
  return (
    <main className='xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem]'>
     <Hero />
       <Curiculam /> 
      <FacilitiesServer />
      <StatsSection />
      
      <Teachers teachers={teacher} />
      <AdmissionForm />
    </main>
  )
}

export default page
