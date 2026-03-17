import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { H3 } from '@/app/ui/H3'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import React from 'react'

function Acadmics() {
  return (
    <Section className="bg-[var(--bg-light)]  flex flex-col gap-16">

     
        <H2 className=' text-center'>Academics</H2>
        <P className='text-center ' >
          Our academic programs inspire students to learn, think critically,
          and build strong knowledge for future success.
        </P>
     

      <div className="grid md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="p-6 rounded-xl shadow-md space-y-4 bg-white">
          <H2>Primary & Middle </H2>
          <H3 className='text-[var(--text-primary)]'>Grade Levels 1–8</H3>

          <P className='line-clamp-2' >
            Our curriculum builds strong foundations in mathematics, science,
            language, and social studies while encouraging creativity and
            hands-on learning.
          </P>

          <ul className="space-y-2 list-disc pl-5 text-gray-600">
            <li>Activity-based learning</li>
            <li>Project-based learning</li>
            <li>Skill development</li>
            <li>Expert teachers</li>
            <li>STEM education</li>
            <li>Arts and music programs</li>
          </ul>

          <Button className="mt-4" variant="primary">
            Learn More
          </Button>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl shadow-md space-y-4 bg-white">
          <H2>High Education</H2>
          <H3 className='text-[var(--text-primary)]'>Grade Levels 9–12</H3>

          <P>
            Our high school program prepares students for college and future
            careers through advanced courses and personalized guidance.
          </P>

          <ul className="space-y-2 list-disc pl-5 text-gray-600">
            <li>Advanced Placement (AP) courses</li>
            <li>College preparatory curriculum</li>
            <li>Career counseling and guidance</li>
            <li>Extracurricular activities</li>
            <li>STEM clubs and competitions</li>
            <li>Arts and sports programs</li>
          </ul>

          <Button className="mt-4" variant="primary">
            Learn More
          </Button>
        </div>

      </div>

    </Section>
  )
}

export default Acadmics