import React from 'react'

const Exp4 = () => {
  return (
    <div className="min-h-screen bg-gray-100 sometype-mono-normal">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center syncopate-regular">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
        4. Use the GAE launcher to launch the web applications.
        </p>

        {/* Download Button */}
        <div className="mt-4">
          <a
            href={`${import.meta.env.BASE_URL}/cloudexp/ex4_5.pdf`} // Relative path to the PDF file
            download="ex4_5.pdf" // Suggested filename for the downloaded file
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </header>
      </div>
  )
}

export default Exp4
