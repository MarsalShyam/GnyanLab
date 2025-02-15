import React from 'react'
import { IIYEAR } from '../constants'
import LabCard2 from './LabCard2'

const IIyear = () => {
  return (
    <section className='container mx-auto py-10' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl border-b-2 border-gray-300 pb-4'>
            II Year Lab
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 justify-center m-2 sm:m-4 md:m-6 lg:m-10 overflow-x-auto'>
            {IIYEAR.map((project,index)=>(
                <LabCard2 key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default IIyear