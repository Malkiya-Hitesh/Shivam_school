import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import React from 'react'

function AdmissionCta() {
  return (
<Section className="text-center bg-gray-50 py-20">

<H2>Admissions Open</H2>

<P className="max-w-xl mx-auto mt-4">
Join Shree Shivam Vidhyalaya and give your child the opportunity
to learn, grow, and succeed in a supportive environment.
</P>

<div className="mt-6 flex justify-center gap-4">
<button className="px-6 py-3 bg-gradient-to-r from-[#2A1B7F] to-[#D91C6A] text-white rounded-lg">
Apply Now
</button>

<button className="px-6 py-3 border border-gray-300 rounded-lg">
Contact Us
</button>
</div>

</Section>
  )
}

export default AdmissionCta
