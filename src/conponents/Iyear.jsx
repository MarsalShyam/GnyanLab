import React from 'react'
// import {DISHES} from "../constants"
// import DishCard from './DishCard'
import { IYEAR } from '../constants'
// import LabCard from './LabCard'
import LabCard2 from './LabCard2'

const Iyear = () => {
  return (
    <section className='container mx-auto py-16' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
            I Year Lab
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center m-10'>
            {IYEAR.map((project,index)=>(
                <LabCard2 key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default Iyear