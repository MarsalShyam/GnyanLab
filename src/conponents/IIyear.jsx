import React from 'react'
import { IIYEAR } from '../constants'
import LabCard from './LabCard'

const IIyear = () => {
  return (
    <section className='container mx-auto py-16' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
            II Year Lab
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
            {IIYEAR.map((project,index)=>(
                <LabCard key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default IIyear