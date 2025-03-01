import React from 'react';
import CodeSnippet from '../../constants/CodeSnippet';
import {ex2codeString} from '../../constants/index.jsx'
const Exp2 = () => {
  
  return (
    <div className="min-h-screen bg-black sometype-mono-normal text-white ">
      {/* Header Section */}
      <header className="bg-black border-b-2 border-[#155efc69] text-white py-8 text-center syncopate-regular">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <h3 className="mt-2 text-lg">
          2. Install a C compiler in the virtual machine created using a virtual box and execute Simple
          Programs.
        </h3>
      </header>

      {/* Main Content Section */}
      <main className="bg-black text-white container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Documentation Section */}
        <section className="  p-6 shadow-md lg:w-[90%] m-2 bg-black lg:border-r border-[#155efc69]">
          <h2 className=" font-bold text-white text-5xl mb-4">Documentation</h2>

          {/* Table of Contents */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Table of Contents</h3>
            <ul className="list-disc pl-5 mt-2 text-white">
              <li>Prerequisites</li>
              <li>Setup Virtual Machine (Refer to Experiment 1)</li>
              <li>Install Ubuntu Linux (Refer to Experiment 1)</li>
              <li>Install C Compiler</li>w
              <li>Execute Simple Programs</li>
              <li>Additional Resources</li>
            </ul>
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Prerequisites</h3>
            <ul className="list-disc pl-5 mt-2 text-white space-y-1">
              <li>Windows 10/11</li>
              <li>8GB RAM (16GB recommended)</li>
              <li>20GB Free Disk Space</li>
              <li>Internet Connection</li>
            </ul>
          </div>

          {/* Setup Virtual Machine */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Setup Virtual Machine</h3>
            <p className="text-white mt-2">
              Refer to the step-by-step solution provided in <strong>Experiment 1</strong> for setting up VirtualBox and creating the virtual machine.
            </p>
          </div>

          {/* Install Ubuntu Linux */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Install Ubuntu Linux</h3>
            <p className="text-white mt-2">
              Refer to the step-by-step solution provided in <strong>Experiment 1</strong> for downloading and installing Ubuntu Linux.
            </p>
          </div>

          {/* Install C Compiler */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Install C Compiler</h3>
            <ol className="list-decimal pl-5 mt-2 text-white space-y-1">
              <li>Open Terminal: Open the Terminal application in Ubuntu.</li>
              <li>Update Package List: Run <code className="bg-black px-1 rounded">sudo apt update</code>.</li>
              <li>Install GCC Compiler: Run <code className="bg-black px-1 rounded">sudo apt install gcc</code>.</li>
              <li>Verify Installation: Run <code className="bg-black px-1 rounded">gcc --version</code> to check the installed version.</li>
            </ol>
          </div>

          {/* Execute Simple Programs */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Execute Simple Programs</h3>
            <ol className="list-decimal pl-5 mt-2 text-white space-y-1">
              <li>
                Create C Program:
                <ul className="list-disc pl-5 mt-2 text-white">
                  <li>Open a text editor and write a simple C program. Save it as <code className="bg-black px-1 rounded">hello.c</code>.</li>
                  
                  <li>
                  Example:
                  <CodeSnippet code={ex2codeString}/>
                  </li>
                </ul>
              </li>
              <li>Compile Program: Open Terminal, navigate to the directory containing <code className="bg-black px-1 rounded">hello.c</code>, and run <code className="bg-black px-1 rounded">gcc hello.c -o hello</code>.</li>
              <li>Run Program: Execute the compiled program by running <code className="bg-black px-1 rounded">./hello</code>.</li>
            </ol>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white">Additional Resources</h3>
            <ul className="list-disc pl-5 mt-2 text-white">
              <li>
                <a
                  href="#/cloud-computing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  College Lab Manual 1st Experiment
                </a>
              </li>
              <li>
                <a
                  href="https://www.virtualbox.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  VirtualBox Manual
                </a>
              </li>
              <li>
                <a
                  href="https://ubuntu.com/download/desktop"
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
        <section className=" bg-black p-6 rounded-lg shadow-md m-2">
          <h2 className="text-2xl font-bold text-[#437CF8] mb-4">REFERENCE</h2>
          <p className="text-white mb-6">
            Watch the step-by-step video guide below:
          </p>
          {/* Embedded Video */}
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/jUDiEPQSnk0?si=kDgVaYAWHzz3FBrB" // Replace with a relevant video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          {/* Video Documentation */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white">Video Documentation</h3>
            <p className="text-white mt-2">
              This video covers the following topics:
              <ul className="list-disc pl-5 mt-2 text-white">
                <li>Installing GCC Compiler on Ubuntu</li>
                <li>Writing and compiling a simple C program</li>
                <li>Troubleshooting common issues</li>
              </ul>
            </p>
          </div>
          {/* Download Button */}
        <div className="mt-4 flex justify-center items-center">
          <a
            href={`${import.meta.env.BASE_URL}/cloudexp/ex2_3.pdf`} // Relative path to the PDF file
            download="ex2_3.pdf" // Suggested filename for the downloaded file
            className="bg-[#014098] text-white px-12 py-2 rounded-full font-semibold hover:bg-[#01409890] transition duration-300"
          >
            Download PDF
          </a>
        </div>
        </section>
        
      </main>
      <div className='flex justify-around items-center m-2'>
      <button  className="group relative inline-flex items-center justify-center overflow-hidden rounded-3xl border border-blue-600 px-6 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white">
      <div className="ml-1 transition group-hover:translate-x-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span>PREVEIOUS</span>
            
            
          </button>
          <button  className="group relative inline-flex items-center justify-center overflow-hidden rounded-3xl border border-blue-600 px-6 py-2 font-medium text-neutral-200 transition duration-300 hover:bg-blue-600 hover:text-white">
            <span>NEXT</span>
            
            <div className="ml-1 transition group-hover:translate-x-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
      </div>
      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center border-t-2 border-[#155efc69]">
        <p className="text-lg">🙏 Thank you for visiting!</p>
        <p className="mt-2">
          I hope this guide helps you install a C compiler and execute simple programs. If you found it useful,
          consider giving the repo a star ⭐ or sharing it with others. Every bit of support is appreciated! 🌟
        </p>
        <p className="mt-2">😊 Enjoy your programming journey!</p>
      </footer>
    </div>
  );
};

export default Exp2;