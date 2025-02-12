import React from 'react'

const ServisesCard = ({ project }) => {
  return (
    <div className='bg-white shadow-lg rounded-xl py-0 '>
      <img src={project.image} alt={project.title} className='rounded-t-lg h-[50%] w-full' />
      <div className='p-4 h-[50%] '>
        <div className='w-full h-16 '>
          <h3 className='mb-2 text-2xl font-bold tracking-tighter line-clamp-2'>{project.title}</h3>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <div className='text-blue-900 bg-[#F2F2F2] rounded-full p-1 text-[13px] font-bold'>{project.authpic}</div>
          <span className='text-sm text-gray-400'>By {project.author}</span>
        </div>
        

        

        <div className="flex justify-between items-center my-4 md:my-6">

          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Share</button>

          <button type="button" className="text-white bg-gradient-to-br from-yellow-500 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>

      </div>
    </div>
  )
}

export default ServisesCard
