import React from 'react'

const Exp3 = () => {
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
      </div>
  )
}

export default Exp3
