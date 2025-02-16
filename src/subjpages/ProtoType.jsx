import React from 'react'
import db from '../assets/db.jpg'
import { useState, useEffect, useRef } from 'react';
const ProtoType = () => {
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
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
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
                                <img src={db} className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Gnyanlab</span>
                            </a>
                        </div>
                        {/* user profile dropdown */}
                        <div className="flex items-center relative">

                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded={isDropdownOpen}>
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={db} alt="user photo" />
                            </button>

                            {/* User DropDown Menu */}
                            {isDropdownOpen && (

                                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-sm shadow-md dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Mr. Sawej Ali
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
                    } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0`}
                aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        
                        <li>
                            <div onClick={() => handleButtonClick(1)} className={`px-1 py-2 rounded ${selectedExp === 1 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                1.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat dolorum libero fuga asperiores voluptates aperiam voluptatum?
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleButtonClick(2)} className={`px-1 py-2 rounded ${selectedExp === 2 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat
                            </div></li>
                        <li>
                            <div onClick={() => handleButtonClick(3)} className={`px-1 py-2 rounded ${selectedExp === 3 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                3.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat.ram is a good boy.
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleButtonClick(4)} className={`px-1 py-2 rounded ${selectedExp === 4 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                4.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleButtonClick(5)} className={`px-1 py-2 rounded ${selectedExp === 5 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                5.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleButtonClick(6)} className={`px-1 py-2 rounded ${selectedExp === 6 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                6.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat
                            </div>
                        </li>
                        <li>
                            <div conClick={() => handleButtonClick(7)} className={`px-1 py-2 rounded ${selectedExp === 7 ? 'bg-amber-50 text-black' : 'bg-gray-800'}`}>
                                7.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum deleniti cupiditate placeat
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <h1>Subject name </h1>
                    <p>Subject Content</p>
                </div>
                {selectedExp === 1 && (
                    <div>
                        <h1>Exp1 Content</h1>
                        <p>loreme28</p>
                    </div>
                )}
                {selectedExp === 2 && (
                    <div>
                        <h1>Exp2 Content</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui laborum, similique cupiditate exercitationem officiis nemo accusamus, corrupti tenetur et veritatis perferendis, debitis ratione libero iusto aperiam repudiandae eligendi unde! Ad.</p>
                    </div>
                )}
                {selectedExp === 3 && (
                    <div>
                        <h1>Exp3 Content</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo quaerat officia voluptatum eos totam minima veniam? Atque dolorum iusto ipsam, asperiores eaque adipisci quas harum suscipit molestias pariatur error voluptas illo?</p>
                    </div>
                )}
                {selectedExp === 4 && (
                    <div>
                        <h1>Exp4 Content</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis repellendus, odio numquam rem, blanditiis culpa perferendis, rerum nihil recusandae vero dolorem nostrum exercitationem mollitia commodi itaque ipsum non neque quidem vitae!</p>
                    </div>
                )}
                {selectedExp === 5 && (
                    <div>
                        <h1>Exp5 Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, excepturi voluptatem. Magni, a. Ducimus non nobis quisquam, sapiente, accusamus facere harum voluptas laboriosam vel, minus doloribus tempore fuga nihil molestias perferendis? Quibusdam?</p>
                    </div>
                )}
                {selectedExp === 6 && (
                    <div>
                        <h1>Exp6 Content</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis expedita, possimus magnam consectetur incidunt nostrum accusamus obcaecati debitis nisi? Delectus natus officia aperiam, ut nihil quo quibusdam provident saepe dicta quas quisquam nobis optio repellat obcaecati! Placeat nulla inventore maiores provident odio.</p>
                    </div>
                )}
                {selectedExp === 7 && (
                    <div>
                        <h1>Exp7 Content</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nobis error pariatur tempore. Mollitia tempore facilis provident, molestiae nam debitis, quos voluptas facere dolorum repellendus magnam quaerat veritatis consequuntur saepe quae, ipsa cumque officia.</p>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ProtoType
