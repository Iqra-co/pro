import React from "react";
import { HiPhone, HiLocationMarker, HiOutlineLink } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 body-font">
      <div className="container mx-auto py-12 px-5 flex flex-col md:flex-row md:justify-between items-center">
        
        {/* Name & Description */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Iqra Yasmeen
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Passionate developer creating modern web experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <a 
            href="tel:+1234567890" 
            className="flex items-center space-x-2 hover:text-indigo-600 transition-colors"
          >
            <HiPhone className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700">0308 0467820</span>
          </a>
          <div className="flex items-center space-x-2">
            <HiLocationMarker className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700">Lahore, Pakistan</span>
          </div>
          <a 
            href="https://www.linkedin.com/in/iqra-ansari-a961b3304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 hover:text-indigo-600 transition-colors"
          >
            <HiOutlineLink className="w-6 h-6 text-blue-500" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-4 text-center text-gray-500 text-sm">
        {new Date().getFullYear()} Iqra Yasmeen
      </div>
    </footer>
  );
}

export default Footer;
