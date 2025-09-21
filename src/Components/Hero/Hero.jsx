import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        
        
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 
                        flex flex-col md:items-start md:text-left 
                        mb-16 md:mb-0 items-center text-center animate-fadeIn">
          
          
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-extrabold 
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent">
            Hi, I am 
            <br className="hidden lg:inline-block" />
            Front-End Developer
          </h1>

         
          <p className="mb-8 leading-relaxed text-gray-700 max-w-lg">
            I am particularly interested in roles that allow me to leverage my 
            <span className="font-semibold text-indigo-500"> front-end development </span> 
            skills. I enjoy working on projects that involve creating intuitive, 
            user-friendly interfaces and collaborating with clients to bring 
            their vision to life.
          </p>

          {/* Buttons */}
          {/* <div className="flex justify-center gap-4">
            <button className="inline-flex text-white bg-indigo-600 border-0 
                               py-2 px-6 focus:outline-none hover:bg-indigo-700 
                               rounded-lg text-lg shadow-md transition-all duration-300">
              Hire Me
            </button>
            <button className="inline-flex text-gray-800 bg-gray-200 border-0 
                               py-2 px-6 focus:outline-none hover:bg-gray-300 
                               rounded-lg text-lg shadow-md transition-all duration-300">
              Projects
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 flex justify-center">
          <img
            className="w-72 h-72 object-cover object-center rounded-full 
                       shadow-2xl border-4 border-indigo-200 animate-bounce"
            alt="hero"
            src="img.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
