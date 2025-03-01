import React from 'react'
// import db from '../assets/db.jpg'
import logonew from '../assets/logonew.svg'
import kksir from '../assets/contributorImg/kksir.png'
import { useState, useEffect, useRef } from 'react';
import Exp1 from './cloudcompting_exps/Exp1'
import Exp2 from './cloudcompting_exps/Exp2'
import Exp3 from './cloudcompting_exps/Exp3'
import Exp4 from './cloudcompting_exps/Exp4'
import Exp5 from './cloudcompting_exps/Exp5'
import Exp6 from './cloudcompting_exps/Exp6'
import Exp7 from './cloudcompting_exps/Exp7'
import Exp8 from './cloudcompting_exps/Exp8'
import Exp9 from './cloudcompting_exps/Exp9'

const CloudComputing = () => {
  const [selectedExp, setSelectedExp] = useState(1);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  //handle click outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (Exp) => {
    setSelectedExp(Exp);
  }

  return (
    <div className='bg-black'>
      <div className="check text-white">ganesh</div>
      <nav className="fixed top-0 z-50 w-full bg-[#000000a6] border-b border-[#155efc25]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 border">
          <div className="flex items-center justify-between">

            {/* sidebar toggle Button */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={logonew} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Gnyanlab</span>
              </a>
            </div>
            {/* user profile dropdown */}
            <div className="flex items-center relative">

              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded={isDropdownOpen}>
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={kksir} alt="user photo" />
              </button>

              {/* User DropDown Menu */}
              {isDropdownOpen && (

                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-sm shadow-md dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Mr.R.KrishnaKumar, BE/CSE
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      sawejkumar@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Home</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">About Me</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Setting</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Contact Me</a>
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </nav>

      {/* sidebar */}

      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-black border-r border-[#ffffff30] sm:translate-x-0 sometype-mono-normal`}
        aria-label="Sidebar">

        <div className="h-full px-3 pb-4 overflow-y-auto  bg-black border-l-amber-200">
          <ul className="space-y-3 font-medium">

            <li>
              <div onClick={() => handleButtonClick(1)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 1 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                1. Install Virtualbox/VMware/ Equivalent open source cloud Workstation with different
                flavours of Linux or Windows OS on top of windows 8 and above.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(2)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 2 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                2. Install a C compiler in the virtual machine created using a virtual box and execute Simple
                Programs.
              </div></li>
            <li>
              <div onClick={() => handleButtonClick(3)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 3 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                3. Install Google App Engine. Create a hello world app and other simple web applications
                using python/java.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(4)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 4 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                4. Use the GAE launcher to launch the web applications.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(5)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 5 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                5. Simulate a cloud scenario using CloudSim and run a scheduling algorithm that is not
                present in CloudSim.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(6)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 6 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                6. Find a procedure to transfer the files from one virtual machine to another virtual machine.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(7)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 7 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                7. Install Hadoop single node cluster and run simple applications like wordcount.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(8)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 8 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                8. Creating and Executing Your First Container Using Docker.
              </div>
            </li>
            <li>
              <div onClick={() => handleButtonClick(9)} className={`px-1 py-2 rounded border border-[#3d6fda] ${selectedExp === 9 ? 'bg-[#3d6fda39] text-[#FFFFFF]' : 'bg-black text-white'}`}>
                9. Run a Container from Docker Hub
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sometype-mono-normal bg-black text-white p-4 sm:ml-64 mt-10">
        {selectedExp === 1 && (

          <Exp1 />
        )}
        {selectedExp === 2 && (
          <Exp2 />
        )}
        {selectedExp === 3 && (
          <Exp3 />
        )}
        {selectedExp === 4 && (
          <Exp4 />
        )}
        {selectedExp === 5 && (
          <Exp5 />
        )}
        {selectedExp === 6 && (
          <Exp6 />
        )}
        {selectedExp === 7 && (
          <Exp7 />
        )}
        {selectedExp === 7 && (
          <Exp8 />
        )}
        {selectedExp === 7 && (
          <Exp9 />
        )}

      </div>

    </div>
  )
}

export default CloudComputing
