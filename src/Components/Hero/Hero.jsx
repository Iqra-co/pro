import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        
        {/* Left Content */}
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
                     flex flex-col md:items-start md:text-left 
                     mb-16 md:mb-0 items-center text-center animate-fadeIn"
        >
          {/* Welcome Note (Large) */}
          {/* <p className="text-indigo-500 font-bold mb-4 text-3xl sm:text-4xl">
            Welcome to my portfolio!
          </p> */}

          {/* Title (Smaller than Welcome) */}
          <h1
            className="title-font sm:text-4xl text-3xl mb-6 font-extrabold 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent"
          >
            Hi, I am 
            <br className="hidden lg:inline-block" />
            MERN-Stack Developer
          </h1>

          {/* Description */}
          <p className="mb-1 leading-relaxed text-gray-700 max-w-lg">
            I am particularly interested in roles that allow me to leverage my{" "}
            <span className="font-semibold text-indigo-500">MERN-stack development</span>{" "}
            skills. I enjoy building full-stack applications using MongoDB, Express, 
            React, and Node.js, creating scalable backends, responsive frontends, and 
            delivering complete, user-friendly solutions that bring ideas to life.
          </p>

        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 flex justify-center">
          <img
            className="w-72 h-72 object-cover object-center rounded-full shadow-2xl border-4 border-indigo-200"
            alt="hero"
            src="img.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
