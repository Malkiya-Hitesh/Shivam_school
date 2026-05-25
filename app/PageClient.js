

import Acadmics from "./components/section/Acadmics"

import AchievementServer from "./components/section/AchievementServer"
import AdmissionCta from "./components/section/AdmissionCta"
import HomeContact from "./components/section/ContactSection"

import FacilitiesServer from "./components/section/FacilitiesServer"
import Faq from "./components/section/Fqa"
import GalleryServer from "./components/section/GalleryServer"

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
      <HomeContact />
       
      </main>
    </>
  )
}
