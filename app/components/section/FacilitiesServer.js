import { getFacilities } from '@/app/lib/queries'
import React from 'react'
import Facilities from './Facilities'

 async  function FacilitiesServer() {
     const facilitie = await getFacilities()
  
     
  return (
   <Facilities facilities={facilitie} />
  )
}

export default FacilitiesServer
