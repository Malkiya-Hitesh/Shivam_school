import React from 'react'
import Main from './components/Main'
import { getResults } from '../lib/queries'

 async function page() {
   const results = await getResults()
  return (
    <main className=" "  style={{
      marginTop: "clamp(4.2rem,7vw,7rem)"
    }}>
 <Main results={results} />
 </main>
  )
}

export default page
