// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const ServisesCard = ({ project }) => {
//   return (
//     <div className='bg-[#b9d7ee] shadow-lg rounded-xl overflow-hidden flex flex-col'>
//       {/* Image Section */}
//       <div className='h-52 md:h-56 lg:h-64 w-full overflow-hidden'>
//         <img
//           src={project.image}
//           alt={project.title}
//           className='w-full h-full object-cover'
//         />
//       </div>

//       {/* Content Section */}
//       <div className='p-4 flex-grow'>
//         {/* Title */}
//         <div className='w-full h-12'>
//           <h3 className='title mb-2 text-xl font-bold tracking-tighter overflow-hidden whitespace-nowrap text-ellipsis max-w-full'>
//             {project.title}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className='text-sm text-gray-700 overflow-hidden whitespace-normal line-clamp-3'>
//           {project.description}
//         </p>

//         {/* Author Info */}
//         <div className='flex justify-start items-center gap-3 my-4'>
//           <div className='text-blue-900 w-10 h-10 bg-[#F2F2F2] rounded-full overflow-hidden'>
//             <img
//               className='w-full h-full object-cover'
//               src={project.authpic}
//               alt='authpic'
//             />
//           </div>
//           <span className='text-sm text-gray-400'>By {project.author}</span>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between items-center mt-auto">
//           {/* Share Button */}
//           <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 font-medium text-neutral-200 duration-500 sm:h-12 sm:px-6">
//             <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
//               Share
//             </div>
//             <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//               >
//                 <path
//                   d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
//                   fill="currentColor"
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </button>

//           {/* Read More Button */}
//           {/* <NavLink to={`/project/${project.id}`} className="group relative h-10 rounded-full border border-black bg-transparent px-4 text-neutral-950 sm:h-12 sm:px-6"></NavLink> */}
//           {/* <NavLink to={project.link}></NavLink> */}
//           {/* <Link to={project.link}></Link> */}
//           <Link to={project.link} className="flex justify-center items-center group relative h-10 rounded-full border border-black bg-transparent px-4 text-neutral-950 sm:h-12 sm:px-6 hover:text-white hover:bg-black transition-all">
//             <span className=" relative inline-flex overflow-hidden">
//               <div className="translate-y-0 skew-y-0 transition duration-50
//               0 group-hover:-translate-y-[110%] group-hover:skew-y-12">
//                 Read More
//               </div>
//               <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
//                 Read More
//               </div>
//             </span>
//           </Link>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServisesCard;

import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { NavLink } from 'react-router-dom';
const ServisesCard = ({ project }) => {

  const [progress, setProgress] = useState(0);
  const totalExperiments = project.experiment?.length || 0;

  useEffect(() => {
    const storedProgress = localStorage.getItem(`progress_${project.id}`);
    const readStatus = storedProgress ? JSON.parse(storedProgress) : {};
    
    const completed = Object.values(readStatus).filter(Boolean).length;
    const calculatedProgress = totalExperiments 
      ? Math.round((completed / totalExperiments) * 100)
      : 0;
    
    setProgress(calculatedProgress);
  }, [project.id, project.experiment]);

  
  return (
    <div className="bg-[#000A40] text-white shadow-lg rounded-4xl relative flex flex-row">
      {/* Image Section */}
      <div className="w-[40%] px-4 py-4 flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-[-6%] left-4 rounded-3xl h-[220px] w-[160px] object-cover border-[#080928] z-10"
        />
      </div>

      {/* Content Section */}
      <div className="w-[60%] p-4 flex flex-col justify-between">
        {/* Title and Author Info */}
        <div>
          <h3 className="syncopate-regular text-xl md:text-2xl font-bold tracking-tighter mb-2">
            {project.title}
          </h3>

          <div className="flex items-center gap-3 my-4">
            <div className="w-10 h-10 bg-[#F2F2F2] rounded-full overflow-hidden">
              <img
                src={project.authpic}
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-400">By {project.author}</span>
          </div>

          {/* Description */}
          <p className="sometype-mono-normal text-sm md:text-md text-gray-300 line-clamp-3">
            {project.description}
          </p>
        </div>
        {/* Progress Bar */}
      <div className="mb-2">
        <div className="bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-1">
          {progress}% completed ({progress/20} experiments)
        </p>
      </div>
        <div className="flex justify-end mt-4">
        <NavLink to={project.link}>
        <button  className="syncopate-regular group relative inline-flex items-center justify-center overflow-hidden rounded-3xl border border-blue-600 px-6 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white">
            <span>8 CHAPTERS</span>
            
            <div className="ml-1 transition group-hover:translate-x-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default ServisesCard;