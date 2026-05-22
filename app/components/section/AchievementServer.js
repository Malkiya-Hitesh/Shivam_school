import { getAchievements } from '@/app/lib/queries'
import React from 'react'
import Achievement from './Achievement';

 async function AchievementServer() {
     const achievement = await getAchievements()

     
  return (
    <Achievement cards={achievement} />
  )
}

export default AchievementServer
