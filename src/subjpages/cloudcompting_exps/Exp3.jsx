import React from 'react'

const Exp3 = ({ onNext, onPrevious, isNextDisabled, isPreviousDisabled }) => {
  return (
    <div className="min-h-screen bg-gray-100 sometype-mono-normal">
      <header className="bg-blue-600 text-white py-8 text-center syncopate-regular">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
        3. Install Google App Engine. Create a hello world app and other simple web applications 
        using python/java.
        </p>

        {/* Download Button */}
        <div className="mt-4">
          <a
            href={`${import.meta.env.BASE_URL}/cloudexp/ex2_3.pdf`} // Relative path to the PDF file
            download="ex2_3.pdf" // Suggested filename for the downloaded file
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </header>
       {/* Navigation Buttons */}
       <div className="flex justify-between mt-4">
        <button
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          className={`px-4 py-2 rounded ${isPreviousDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`px-4 py-2 rounded ${isNextDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          Next
        </button>
      </div>
      </div>
  )
}

export default Exp3
