import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/iqra_20260115_205004_0000.pdf";
    link.download = "iqra_20260115_205004_0000.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header className="text-gray-600 body-font shadow-md bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        {/* Logo + Title */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full shadow-md" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
         <span className="ml-3 text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Iqra Yasmeen
</span>

        </a>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
          <Link to="/" className="mr-8 text-blue-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Home</Link>
          <Link to ="/about"className="mr-8 text-blue-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">About</Link>
          {/* <Link to ="" className="mr-8 text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Projects</Link> */}
          <Link to ="/contact"className="mr-8 text-blue-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Contact</Link>
       
        </nav>

        {/* Download Button */}
        {/* <a
          href="/resume.pdf"
          download="Iqra.pdf"
          className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 
                     rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300"
        >
          Download Resume
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
        <button
  onClick={handleDownload}
  className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 
             rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300"
>
  Download Resume
</button>

      </div>

    </header>
  );
}

export default Navbar;
