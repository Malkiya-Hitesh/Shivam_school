import Section from '@/app/ui/Section'
import React from 'react'
import AchievementCard from './AchievementCard'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'

function Achievement() {
  return (
   <Section className='bg-[var(--bg-light)] text-center flex flex-col gap-16'>
  <H2>Achievements</H2>
  <P> Our students have achieved remarkable success in various fields, including academics, sports, and arts. We take pride in their accomplishments and celebrate their hard work and dedication.</P>
    <AchievementCard />
   </Section>
  )
}

export default Achievement
