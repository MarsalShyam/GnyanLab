import React from 'react'
import { IIYEAR } from '../constants'
import LabCard2 from './LabCard2'

const IIyear = () => {
  return (
    <section className='container mx-auto py-10' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
            II Year Lab
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center m-10'>
            {IIYEAR.map((project,index)=>(
                <LabCard2 key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default IIyear