import React from 'react'
import { useState } from 'react'
// import logo from "../assets/logo.png"
import { LINKS } from "../constants"
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
// import GNYAN1 from '../assets/GNYAN1.png'
import gn from '../assets/gn.png'

const Navbar = ({ setSelectedYear }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }

    return (
        <nav className='fixed top-4 z-50 flex w-full flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
                <img src={gn} alt="GNYAN1" width={80} height={22} />
                <div className='hidden space-x-6 lg:flex'>

                    {/* {LINKS.map((link,index)=>(
                    <a key={index} href={`#${link.targetId}`} className={`text-sm ${index!==0? "border-l-2 border-neutral-300/20 pl-2":""} hover:opacity-50`} onClick={(e)=>handleScroll(e,link.targetId)}>
                        {link.text}
                    </a>
                    
                ))} */}
                    {LINKS.map((link, index) => {
                        // Extract the year number from the link text (e.g., "I year" → 1)
                        const yearMatch = link.text.match(/\b([IVX]+)\b/); // Match Roman numerals
                        const yearNumber = yearMatch ? romanToNumber(yearMatch[1]) : null;

                        return (
                            <a
                                key={index}
                                href={`#${link.targetId}`}
                                className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
                                onClick={(e) => {
                                    handleScroll(e, link.targetId);

                                    // Update the selected year if it's a year-related link
                                    if (yearNumber) {
                                        setSelectedYear(yearNumber);
                                    }
                                }}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="w-full backdrop-blur-lg lg:hidden">
                    {LINKS.map((link, index) => {
                        // Extract the year number from the link text (e.g., "I year" → 1)
                        const yearMatch = link.text.match(/\b([IVX]+)\b/); // Match Roman numerals
                        const yearNumber = yearMatch ? romanToNumber(yearMatch[1]) : null;

                        return (
                            <a
                                key={index}
                                href={`#${link.targetId}`}
                                className="block p-4 uppercase tracking-tighter"
                                onClick={(e) => {
                                    handleScroll(e, link.targetId);

                                    // Update the selected year if it's a year-related link
                                    if (yearNumber) {
                                        setSelectedYear(yearNumber);
                                    }
                                }}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};
// Helper function to convert Roman numerals to numbers
const romanToNumber = (roman) => {
    const romanNumerals = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
    };
    return romanNumerals[roman] || null;
};
export default Navbar
