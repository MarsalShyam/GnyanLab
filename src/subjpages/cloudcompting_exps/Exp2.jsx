import React from 'react';

const Exp2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
        2. Install a C compiler in the virtual machine created using a virtual box and execute Simple 
              Programs.
        </p>
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
              <li>Setup Virtual Machine (Refer to Experiment 1)</li>
              <li>Install Ubuntu Linux (Refer to Experiment 1)</li>
              <li>Install C Compiler</li>
              <li>Execute Simple Programs</li>
              <li>Additional Resources</li>
            </ul>
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Prerequisites</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>Windows 10/11</li>
              <li>8GB RAM (16GB recommended)</li>
              <li>20GB Free Disk Space</li>
              <li>Internet Connection</li>
            </ul>
          </div>

          {/* Setup Virtual Machine */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Setup Virtual Machine</h3>
            <p className="text-gray-700 mt-2">
              Refer to the step-by-step solution provided in <strong>Experiment 1</strong> for setting up VirtualBox and creating the virtual machine.
            </p>
          </div>

          {/* Install Ubuntu Linux */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Install Ubuntu Linux</h3>
            <p className="text-gray-700 mt-2">
              Refer to the step-by-step solution provided in <strong>Experiment 1</strong> for downloading and installing Ubuntu Linux.
            </p>
          </div>

          {/* Install C Compiler */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Install C Compiler</h3>
            <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
              <li>Open Terminal: Open the Terminal application in Ubuntu.</li>
              <li>Update Package List: Run <code className="bg-gray-200 px-1 rounded">sudo apt update</code>.</li>
              <li>Install GCC Compiler: Run <code className="bg-gray-200 px-1 rounded">sudo apt install gcc</code>.</li>
              <li>Verify Installation: Run <code className="bg-gray-200 px-1 rounded">gcc --version</code> to check the installed version.</li>
            </ol>
          </div>

          {/* Execute Simple Programs */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Execute Simple Programs</h3>
            <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
              <li>
                Create C Program:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Open a text editor and write a simple C program. Save it as <code className="bg-gray-200 px-1 rounded">hello.c</code>.</li>
                  <li>Example:
                    <pre className="bg-gray-200 p-2 rounded overflow-auto text-sm">
                      {`#include <stdio.h>\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`}
                    </pre>
                  </li>
                </ul>
              </li>
              <li>Compile Program: Open Terminal, navigate to the directory containing <code className="bg-gray-200 px-1 rounded">hello.c</code>, and run <code className="bg-gray-200 px-1 rounded">gcc hello.c -o hello</code>.</li>
              <li>Run Program: Execute the compiled program by running <code className="bg-gray-200 px-1 rounded">./hello</code>.</li>
            </ol>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Additional Resources</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
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
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Video Tutorial</h2>
          <p className="text-gray-700 mb-6">
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
            <h3 className="text-xl font-semibold text-gray-800">Video Documentation</h3>
            <p className="text-gray-700 mt-2">
              This video covers the following topics:
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Installing GCC Compiler on Ubuntu</li>
                <li>Writing and compiling a simple C program</li>
                <li>Troubleshooting common issues</li>
              </ul>
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 text-center">
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