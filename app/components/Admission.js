'use client'
import React from 'react'
import AdmissionCard from './AdmissionCard'
import H1 from './ui2/H1'

function Admission() {
  return (
    <section className="py-10 flex flex-col items-center mt-6 gap-8">
      
      {/* Heading */}
      <div>
        <H1 data={'Admission Form'} />
      </div>

      {/* Admission Card */}
      <AdmissionCard />

    </section>
  )
}

export default Admission
