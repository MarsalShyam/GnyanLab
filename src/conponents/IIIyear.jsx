import React from 'react'
import { IIIYEAR } from '../constants'
import LabCard2 from './LabCard2'

const IIIyear = () => {
  return (
    <section className='text-white container mx-auto py-10' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl border-b-2 border-gray-300 pb-1'>
            III Year Lab
        </h2>

        <div className=' py-7 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 justify-centerm-2 sm:m-4 md:m-6 lg:m-10  overflow-x-auto'>
            {IIIYEAR.map((project,index)=>(
                <LabCard2 key={index} project={project}/>
            ))}
        </div>
    </section>
  );
};

export default IIIyear;