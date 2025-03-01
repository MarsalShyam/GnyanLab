

import React from 'react';

const Exp5 = () => {
  return (
    <div className="min-h-screen bg-gray-100 sometype-mono-normal">
      {/* Header Section */}
      
      <header className="bg-blue-600 text-white py-8 text-center syncopate-regular">
        <h1 className="text-4xl font-bold">Cloud Computing Documentation</h1>
        <p className="mt-2 text-lg">
        5. Simulate a cloud scenario using CloudSim and run a scheduling algorithm that is not present in CloudSim.
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

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Documentation Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Documentation</h2>

          {/* Table of Contents */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Table of Contents</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Requirements</li>
              <li>Procedure</li>
              <li>Additional Notes</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Requirements</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              <li>
                Java JDK:{" "}
                <a
                  href="https://download.oracle.com/java/23/latest/jdk-23_windows-x64_bin.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download JDK
                </a>
              </li>
              <li>
                Eclipse IDE:{" "}
                <a
                  href="https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2024-12/R/eclipse-inst-jre-win64.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download Eclipse
                </a>
              </li>
              <li>
                CloudSim:{" "}
                <a
                  href="https://github.com/Cloudslab/cloudsim/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download CloudSim
                </a>
              </li>
              <li>
                Additional JAR File:{" "}
                <a
                  href="https://dlcdn.apache.org//commons/math/binaries/commons-math4-4.0-beta1-bin.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Download Apache Commons Math
                </a>
              </li>
            </ul>
          </div>

          {/* Procedure */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Procedure</h3>
            <ol className="list-decimal pl-5 mt-2 text-gray-700 space-y-1">
              <li>
                Create a Project:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Go to File → New → Project.</li>
                  <li>Select Java → Java Project.</li>
                  <li>Set Project Name as "CloudSimSimulation" and click Finish.</li>
                </ul>
              </li>
              <li>
                Create a Package:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>In the Package Explorer, right-click on "src" → New → Package.</li>
                  <li>Name the package as "com.sjfs" and check "Create package-info.java".</li>
                  <li>Click Finish.</li>
                </ul>
              </li>
              <li>
                Add Java Codes:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Navigate to the project folder in System Explorer.</li>
                  <li>Paste your Java codes into the "com.sjfs" folder.</li>
                  <li>Refresh the project in Eclipse (Press F5).</li>
                </ul>
              </li>
              <li>
                Configure Build Path:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Right-click on the project → Build Path → Configure Build Path.</li>
                  <li>Add External JAR files (CloudSim and Apache Commons Math).</li>
                  <li>Apply and Close.</li>
                </ul>
              </li>
              <li>
                Run the Application:
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Comment out any unnecessary imports (e.g., utils).</li>
                  <li>Right-click on the project → Run As → Java Application.</li>
                  <li>Follow the terminal instructions to complete the simulation.</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Additional Notes</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>FCFS is the default scheduling algorithm in CloudSim.</li>
              <li>Round Robin and SJF are not available in the default CloudSim environment.</li>
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
              src="https://www.youtube.com/embed/uqsg0lLvbj0?si=i9-qDxL4K9M8liyy"
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
                <li>Setting up CloudSim in Eclipse</li>
                <li>Running a custom scheduling algorithm</li>
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
          I hope this guide helps you simulate a cloud scenario using CloudSim. If you found it useful,
          consider giving the repo a star ⭐ or sharing it with others. Every bit of support is appreciated! 🌟
        </p>
        <p className="mt-2">😊 Enjoy your cloud computing experiments!</p>
      </footer>
    </div>
  );
};

export default Exp5;