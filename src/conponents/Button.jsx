
import React, { useState } from 'react';
import Iyear from './Iyear'
import IIyear from './IIyear';
import IIIyear from './IIIyear';
import IVyear from './IVyear';

const YearSelector = () => {
  // State to track the currently selected year
  const [selectedYear, setSelectedYear] = useState(1);

  // Function to handle button clicks
  const handleButtonClick = (year) => {
    setSelectedYear(year); // Update the state to the clicked year
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Buttons for selecting years */}
      <div className="flex space-x-8 mb-4" style={{ zIndex: 30, position: 'relative' }}>
        <button
          className={`px-4 py-2 rounded ${
            selectedYear === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick(1)}
        >
          1 Year
        </button>

        <button
          className={`px-4 py-2 rounded ${
            selectedYear === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick(2)}
        >
          2 Years
        </button>

        <button
          className={`px-4 py-2 rounded ${
            selectedYear === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick(3)}
        >
          3 Years
        </button>

        <button
          className={`px-4 py-2 rounded ${
            selectedYear === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200'
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

export default YearSelector;