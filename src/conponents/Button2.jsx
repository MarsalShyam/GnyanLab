import React from 'react';
import Iyear from './Iyear';
import IIyear from './IIyear';
import IVyear from './IVyear';
import IIIyear from './IIIyear';

const Button2 = ({ selectedYear, setSelectedYear }) => {
  // Function to handle button clicks
  const handleButtonClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div id="options" className="flex flex-col items-center mt-10 px-4">
      {/* Buttons for selecting years in a single row */}
      <div 
        className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center mb-4"
        style={{ zIndex: 30, position: 'relative' }}
      >
        <button
          onClick={() => handleButtonClick(1)}
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-4 md:px-6 py-1 md:py-2 font-medium text-sm md:text-base text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white whitespace-nowrap ${
            selectedYear === 1 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
        >
          <span>1 Year</span>
        </button>

        <button
          onClick={() => handleButtonClick(2)}
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-4 md:px-6 py-1 md:py-2 font-medium text-sm md:text-base text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white whitespace-nowrap ${
            selectedYear === 2 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
        >
          <span>2 Years</span>
        </button>

        <button
          onClick={() => handleButtonClick(3)}
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-4 md:px-6 py-1 md:py-2 font-medium text-sm md:text-base text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white whitespace-nowrap ${
            selectedYear === 3 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
        >
          <span>3 Years</span>
        </button>

        <button
          onClick={() => handleButtonClick(4)}
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-4xl border border-blue-600 px-4 md:px-6 py-1 md:py-2 font-medium text-sm md:text-base text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white whitespace-nowrap ${
            selectedYear === 4 ? 'bg-blue-500 text-white' : 'bg-gray-900'
          }`}
        >
          <span>4 Years</span>
        </button>
      </div>

      {/* Content divs */}
      <div className=" w-full mt-1">
        {selectedYear === 1 && (
          <div className="md:p-2 lg:p-4 py-0 rounded">
            <Iyear />
          </div>
        )}
        {selectedYear === 2 && (
          <div className="md:p-2 lg:p-4 rounded">
            <IIyear />
          </div>
        )}
        {selectedYear === 3 && (
          <div className=" md:p-2 lg:p-4 py-0 rounded">
            <IIIyear />
          </div>
        )}
        {selectedYear === 4 && (
          <div className="md:p-2 lg:p-4 rounded">
            <IVyear />
          </div>
        )}
      </div>
    </div>
  );
};

export default Button2;
