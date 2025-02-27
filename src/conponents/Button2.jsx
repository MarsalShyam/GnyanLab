
import React, { useState } from 'react';

import Iyear from './Iyear';
import IIyear from './IIyear';
import IVyear from './IVyear';
import IIIyear from './IIIyear';

const Button2 = ({ selectedYear, setSelectedYear }) => {


  // Function to handle button clicks
  const handleButtonClick = (year) => {
    setSelectedYear(year); // Update the state to the clicked year
  };

  return (
    <div id="options" className="flex flex-col items-center mt-10">

      {/* Buttons for selecting years */}
      <div className="flex space-x-4 md:space-x-8 mb-4 mx-2" style={{ zIndex: 30, position: 'relative' }}>

      <button onClick={() => handleButtonClick(1)} className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-15 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white ${
            selectedYear === 1 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}>
            <span>1 Year</span>

          </button>
        {/* <button
          className={`px-15 py-2 rounded-4xl ${
            selectedYear === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick(1)}
        >
          1 Year
        </button> */}

        <button
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-15 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white ${
            selectedYear === 2 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
          onClick={() => handleButtonClick(2)}
        >
          2 Years
        </button>

        <button
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-15 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white ${
            selectedYear === 3 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
          onClick={() => handleButtonClick(3)}
        >
          3 Years
        </button>

        <button
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-15 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white ${
            selectedYear === 4 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
          onClick={() => handleButtonClick(4)}
        >
          4 Years
        </button>
        
      </div>

      {/* Content divs */}
      <div className="w-full mt-1">
        
        {selectedYear === 1 && (
          <div className="p-4 py-0 rounded">
            <Iyear/>
          </div>
          
        )}
        {selectedYear === 2 && (
          <div className="p-4 py-0 rounded">
            <IIyear/>
          </div>
        )}
        {selectedYear === 3 && (
          <div className="p-4 py-0 rounded">
            <IIIyear/>
          </div>
        )}
        {selectedYear === 4 && (
          <div className="p-4 py-0 rounded">
            <IVyear/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Button2;