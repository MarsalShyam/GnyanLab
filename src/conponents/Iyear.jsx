// import React from 'react'
// import { IYEAR } from '../constants'
// import LabCard2 from './LabCard2'

// const Iyear = () => {
//   return (
//     <section className='container mx-auto py-10' id="dishes">
//         <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
//             I Year Lab
//         </h2>
//         <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center m-10'>
//             {IYEAR.map((project,index)=>(
//                 <LabCard2 key={index} project={project}/>
//             ))}
//         </div>
//     </section>
//   )
// }

// export default Iyear

import React from 'react';
import { IYEAR } from '../constants';
import LabCard2 from './LabCard2';

const Iyear = () => {
  return (
    <section className=' container mx-auto py-10' id="dishes">
      <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl border-b-2 border-gray-300 pb-4'>
        I Year Lab
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 justify-center m-2 sm:m-4 md:m-6 lg:m-10 overflow-x-auto'>
        {IYEAR.map((project, index) => (
          <LabCard2 key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Iyear;