import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServisesCard = ({ project }) => {
  return (
    <div className='bg-[#b9d7ee] shadow-lg rounded-xl overflow-hidden flex flex-col'>
      {/* Image Section */}
      <div className='h-52 md:h-56 lg:h-64 w-full overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content Section */}
      <div className='p-4 flex-grow'>
        {/* Title */}
        <div className='w-full h-12'>
          <h3 className='title mb-2 text-xl font-bold tracking-tighter overflow-hidden whitespace-nowrap text-ellipsis max-w-full'>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className='text-sm text-gray-700 overflow-hidden whitespace-normal line-clamp-3'>
          {project.description}
        </p>

        {/* Author Info */}
        <div className='flex justify-start items-center gap-3 my-4'>
          <div className='text-blue-900 w-10 h-10 bg-[#F2F2F2] rounded-full overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={project.authpic}
              alt='authpic'
            />
          </div>
          <span className='text-sm text-gray-400'>By {project.author}</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-auto">
          {/* Share Button */}
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 font-medium text-neutral-200 duration-500 sm:h-12 sm:px-6">
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              Share
            </div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

          {/* Read More Button */}
          {/* <NavLink to={`/project/${project.id}`} className="group relative h-10 rounded-full border border-black bg-transparent px-4 text-neutral-950 sm:h-12 sm:px-6"></NavLink> */}
          {/* <NavLink to={project.link}></NavLink> */}
          {/* <Link to={project.link}></Link> */}
          <Link to={project.link} className="flex justify-center items-center group relative h-10 rounded-full border border-black bg-transparent px-4 text-neutral-950 sm:h-12 sm:px-6 hover:text-white hover:bg-black transition-all">
            <span className=" relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                Read More
              </div>
              <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Read More
              </div>
            </span>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default ServisesCard;

// import React from 'react'

// const ServisesCard = ({ project }) => {
//   return (
//     <div className='bg-[#b9d7ee] shadow-lg rounded-xl py-0 '>
//       <img src={project.image} alt={project.title} className='rounded-t-lg h-[50%] w-full' />
//       <div className='p-4 h-[50%] '>
//         <div className='w-full h-12 border'>
//           <h3 className='title mb-2 text-2xl font-bold tracking-tighter'>{project.title}</h3>
//         </div>
//         <p className='text-md'>{project.description}</p>
        
//         <div className='flex justify-start items-center gap-3 my-4'>
//           <div className='text-blue-900 w-10 h-10 bg-[#F2F2F2] rounded-full text-[13px] font-bold overflow-hidden'><img className='w-10 h-1o' src={project.authpic} alt='authpic'/></div>
//           <span className='text-sm text-gray-400'>By {project.author}</span>
//         </div>
//         <div className="flex justify-between items-center my-4 md:my-6">
//         <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Share</div><div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
//           <button class="group relative h-12 rounded-full border border-black bg-transparent px-4 text-neutral-950"><span class="relative inline-flex overflow-hidden"><div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">Read More</div><div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">Read More</div></span></button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ServisesCard
