import React from 'react'

const Exp1 = ({onToggleRead, isRead, onNext, onPrevious, isNextDisabled, isPreviousDisabled }) => {
  return (
    <div className="border min-h-screen bg-gray-100 sometype-mono-normal">
      <header className="bg-blue-600 text-white py-8 text-center syncopate-regular">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
          1. Install Virtualbox/VMware/ Equivalent open source cloud Workstation with different
          flavours of Linux or Windows OS on top of windows 8 and above.
        </p>

        {/* Download Button */}
        <div className="mt-4">
          <a
            href={`${import.meta.env.BASE_URL}/cloudexp/ex1cc.pdf`} // Relative path to the PDF file
            download="ex1cc.pdf" // Suggested filename for the downloaded file
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Documentation Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Documentation</h2>

          {/* Table of Contents */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Table of Contents</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Prerequisites</li>
              <li>Setup Virtual Machine</li>
              <li>Install Ubuntu Linux</li>
              <li>Additional Resources</li>
            </ul>
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Prerequisites</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Windows 10/11</li>
              <li>8GB RAM (16GB recommended)</li>
              <li>20GB Free Disk Space</li>
              <li>Internet Connection</li>
            </ul>
          </div>

          {/* Setup Virtual Machine */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Setup Virtual Machine</h3>
            <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
              <li>
                Download VirtualBox:{" "}
                <a
                  href="https://www.virtualbox.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  VirtualBox For Windows
                </a>
              </li>
              <li>Run Install: Download and run the .exe file.</li>
              <li>Follow Prompts: Accept default settings.</li>
              <li>Restart PC: If prompted.</li>
            </ol>
          </div>

          {/* Install Ubuntu Linux */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Install Ubuntu Linux</h3>
            <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
              <li>
                Download:{" "}
                <a
                  href="https://ubuntu.com/download/desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ubuntu Desktop ISO (Ubuntu 24.04.1 LTS)
                </a>
              </li>
              <li>Create Virtual Machine:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Open VirtualBox.</li>
                  <li>Click New: Name it "Ubuntu VM".</li>
                  <li>Select Type: Linux, Ubuntu (64-bit).</li>
                  <li>RAM: Allocate 2048 MB (4096 MB recommended).</li>
                  <li>Hard Disk: Create a 20GB VDI, dynamically allocated.</li>
                </ul>
              </li>
              <li>Attach ISO: Go to Settings &gt; Storage, add Ubuntu ISO.</li>
              <li>Start VM: Boot from ISO.</li>
              <li>Install Ubuntu:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Select "Erase disk and install Ubuntu".</li>
                  <li>Choose Normal installation.</li>
                  <li>Follow on-screen instructions.</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Additional Resources</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  College Lab Manual 1st Experiment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  VirtualBox Manual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ubuntu Guide
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Video Tutorial</h2>
          <p className="text-gray-700 mb-6">
            Watch the step-by-step video guide below:
          </p>

          {/* Embedded Video */}
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/5_6qXwogcA8?si=aQ6ieOpkmTiSipDH"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>

          {/* Video Documentation */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Video Documentation</h3>
            <p className="text-gray-700 mt-2">
              This video covers the following topics:
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Setting up VirtualBox</li>
                <li>Installing Ubuntu Linux</li>
                <li>Troubleshooting common issues</li>
              </ul>
            </p>
          </div>
        </section>
      </main>
      <button 
      onClick={onToggleRead}
      className={`mt-4 px-4 py-2 rounded ${isRead ? 'bg-green-600' : 'bg-blue-600'}`}
    >
      {isRead ? 'Mark Unread' : 'Mark Read'}
    </button>
      {/* Footer Section */}
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
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-lg">🙏 Thank you for visiting!</p>
        <p className="mt-2">
          I hope this guide helps you set up your virtual machine and install Ubuntu Linux. If you found it useful,
          consider giving the repo a star ⭐ or sharing it with others. Every bit of support is appreciated! 🌟
        </p>
        <p className="mt-2">😊 Enjoy your cloud computing experiments!</p>
      </footer>
    </div>
  );
};

export default Exp1
