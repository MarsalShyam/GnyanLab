import React from 'react'

const Content = () =>  {
  return (
    <div>extra content</div>
    // <div className="min-h-screen bg-gray-100 font-sans">
    //   {/* Header Section */}
    //   <header className="bg-blue-600 text-white py-8 text-center">
    //     <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
    //     <p className="mt-2 text-lg">
    //       Learn how to set up virtual machines and explore cloud computing experiments.
    //     </p>
    //   </header>

    //   {/* Main Content Section */}
    //   <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    //     {/* Documentation Section */}
    //     <section className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-2xl font-bold text-blue-600 mb-4">Documentation</h2>

    //       {/* Table of Contents */}
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold text-gray-800">Table of Contents</h3>
    //         <ul className="list-disc pl-5 mt-2 text-gray-700">
    //           <li>Prerequisites</li>
    //           <li>Setup Virtual Machine</li>
    //           <li>Install Ubuntu Linux</li>
    //           <li>Additional Resources</li>
    //         </ul>
    //       </div>

    //       {/* Prerequisites */}
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold text-gray-800">Prerequisites</h3>
    //         <ul className="list-disc pl-5 mt-2 text-gray-700">
    //           <li>Windows 10/11</li>
    //           <li>8GB RAM (16GB recommended)</li>
    //           <li>20GB Free Disk Space</li>
    //           <li>Internet Connection</li>
    //         </ul>
    //       </div>

    //       {/* Setup Virtual Machine */}
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold text-gray-800">Setup Virtual Machine</h3>
    //         <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
    //           <li>
    //             Download VirtualBox:{" "}
    //             <a
    //               href="https://www.virtualbox.org/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-500 hover:underline"
    //             >
    //               VirtualBox For Windows
    //             </a>
    //           </li>
    //           <li>Run Install: Download and run the .exe file.</li>
    //           <li>Follow Prompts: Accept default settings.</li>
    //           <li>Restart PC: If prompted.</li>
    //         </ol>
    //       </div>

    //       {/* Install Ubuntu Linux */}
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold text-gray-800">Install Ubuntu Linux</h3>
    //         <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
    //           <li>
    //             Download:{" "}
    //             <a
    //               href="https://ubuntu.com/download/desktop"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-500 hover:underline"
    //             >
    //               Ubuntu Desktop ISO (Ubuntu 24.04.1 LTS)
    //             </a>
    //           </li>
    //           <li>Create Virtual Machine:
    //             <ul className="list-disc pl-5 mt-2 text-gray-700">
    //               <li>Open VirtualBox.</li>
    //               <li>Click New: Name it "Ubuntu VM".</li>
    //               <li>Select Type: Linux, Ubuntu (64-bit).</li>
    //               <li>RAM: Allocate 2048 MB (4096 MB recommended).</li>
    //               <li>Hard Disk: Create a 20GB VDI, dynamically allocated.</li>
    //             </ul>
    //           </li>
    //           <li>Attach ISO: Go to Settings &gt; Storage, add Ubuntu ISO.</li>
    //           <li>Start VM: Boot from ISO.</li>
    //           <li>Install Ubuntu:
    //             <ul className="list-disc pl-5 mt-2 text-gray-700">
    //               <li>Select "Erase disk and install Ubuntu".</li>
    //               <li>Choose Normal installation.</li>
    //               <li>Follow on-screen instructions.</li>
    //             </ul>
    //           </li>
    //         </ol>
    //       </div>

    //       {/* Additional Resources */}
    //       <div>
    //         <h3 className="text-xl font-semibold text-gray-800">Additional Resources</h3>
    //         <ul className="list-disc pl-5 mt-2 text-gray-700">
    //           <li>
    //             <a
    //               href="#"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-500 hover:underline"
    //             >
    //               College Lab Manual 1st Experiment
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-500 hover:underline"
    //             >
    //               VirtualBox Manual
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-500 hover:underline"
    //             >
    //               Ubuntu Guide
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </section>

    //     {/* Video Section */}
    //     <section className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-2xl font-bold text-blue-600 mb-4">Video Tutorial</h2>
    //       <p className="text-gray-700 mb-6">
    //         Watch the step-by-step video guide below:
    //       </p>

    //       {/* Embedded Video */}
    //       <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
    //         <iframe
    //           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    //           title="YouTube video player"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //           className="absolute top-0 left-0 w-full h-full"
    //         ></iframe>
    //       </div>

    //       {/* Video Documentation */}
    //       <div className="mt-6">
    //         <h3 className="text-xl font-semibold text-gray-800">Video Documentation</h3>
    //         <p className="text-gray-700 mt-2">
    //           This video covers the following topics:
    //           <ul className="list-disc pl-5 mt-2 text-gray-700">
    //             <li>Setting up VirtualBox</li>
    //             <li>Installing Ubuntu Linux</li>
    //             <li>Troubleshooting common issues</li>
    //           </ul>
    //         </p>
    //       </div>
    //     </section>
    //   </main>

    //   {/* Footer Section */}
    //   <footer className="bg-blue-600 text-white py-6 text-center">
    //     <p className="text-lg">🙏 Thank you for visiting!</p>
    //     <p className="mt-2">
    //       I hope this guide helps you set up your virtual machine and install Ubuntu Linux. If you found it useful,
    //       consider giving the repo a star ⭐ or sharing it with others. Every bit of support is appreciated! 🌟
    //     </p>
    //     <p className="mt-2">😊 Enjoy your cloud computing experiments!</p>
    //   </footer>
    // </div>
  );
};

export default Content
