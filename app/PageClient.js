

import Acadmics from "./components/section/Acadmics"
import Achievement from "./components/section/Achievement"
import AchievementServer from "./components/section/AchievementServer"
import AdmissionCta from "./components/section/AdmissionCta"
import ContactSection from "./components/section/ContactSection"
import Facilities from "./components/section/Facilities"
import FacilitiesServer from "./components/section/FacilitiesServer"
import Faq from "./components/section/Fqa"
import GalleryServer from "./components/section/GalleryServer"
import Gallry from "./components/section/Gallry"
import Home from "./components/section/Home"
import StatsSection from "./components/section/StatsSection"



export default function PageClient() {
  return (
    <>
    

      <main id="main-content">
        <Home />
        <AchievementServer />
        <Acadmics />
    <FacilitiesServer />
    <StatsSection/>
        <GalleryServer />
        <AdmissionCta />
        <Faq />
        {/* <ContactSection /> */}
       
      </main>
    </>
  )
}
