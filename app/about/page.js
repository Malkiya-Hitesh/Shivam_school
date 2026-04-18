import React from 'react'
import Hero from './components/Hero'
import Value from './components/Value'
import Leadership from './components/Leadership'
import SchoolAchievement from './components/SchoolAchivment'
import AdmissionCta from '../components/section/AdmissionCta'


function page() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Value />
      <Leadership />
      <SchoolAchievement />
      <AdmissionCta />
    </main>
  )
}

export default page
