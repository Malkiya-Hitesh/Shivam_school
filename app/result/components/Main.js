import Section from '@/app/ui/Section'
import React from 'react'
import Second from './Second'

import { P } from '@/app/ui/P'
import { H2 } from '@/app/ui/H2'

function Main() {
  return (
    <main className='xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem] '>


      <Section className=' flex flex-col gap-10'>
        <H2 className='text-center'>Results</H2>
        <P className='text-center text-[var(--color-text-muted)]'>Our students have consistently achieved outstanding results in various examinations and competitions. We take pride in their hard work and dedication, which has led to remarkable achievements in academics, sports, and extracurricular activities. Our commitment to providing a supportive and enriching learning environment has played a crucial role in fostering their success.</P>
        <Second year="2023 - 2024" />
        <Second year="2022 - 2023" />
      </Section>
    </main>
  )
}

export default Main
