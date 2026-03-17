import React from 'react'

function H3({ data, className}) {
  return (
    <h3 className={` ${className} text-[1.32rem] sm:text-[1.35rem] md:text-[1.43rem] lg:text-[1.53rem] xl:text-[1.60rem]`}>
        {data}  
    </h3>
  )
}

export default H3
