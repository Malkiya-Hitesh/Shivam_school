'use client'


import Acadmics from "./components/section/Acadmics"
import Achievement from "./components/section/Achievement"
import AdmissionCta from "./components/section/AdmissionCta"
import ContactSection from "./components/section/ContactSection"
import Facilities from "./components/section/Facilities"
import Faq from "./components/section/Fqa"
import Gallry from "./components/section/Gallry"
import Home from "./components/section/Home"
import StatsSection from "./components/section/StatsSection"



export default function PageClient() {
  return (
    <>
    

      <main id="main-content">
        <Home />
        <Achievement/>
        <Acadmics />
        <Facilities/>
    <StatsSection/>
        <Gallry />
        <AdmissionCta />
        <Faq />
        <ContactSection />
       
      </main>
    </>
  )
}
