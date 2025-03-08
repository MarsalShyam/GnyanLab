import React from 'react'

const Exp9 = ({onToggleRead, isRead, onNext, onPrevious, isNextDisabled, isPreviousDisabled }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
        9. Run a Container from Docker Hub 
        </p>
      </header>
      <button 
      onClick={onToggleRead}
      className={`mt-4 px-4 py-2 rounded ${isRead ? 'bg-green-600' : 'bg-blue-600'}`}
    >
      {isRead ? 'Mark Unread' : 'Mark Read'}
    </button>
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

export default Exp9
