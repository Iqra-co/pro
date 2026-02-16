
import React from "react";

const Card = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-2 mx-auto">

        {/* Section Heading */}
        <h1 className="text-2xl sm:text-6xl font-bold text-center mb-2
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-transparent bg-clip-text
                       leading-snug">
          My  front-End Projects
        </h1>

        {/* Description Line */}
       {/* <p className="text-center text-gray-700 mb-2 text-lg max-w-2xl mx-auto">
  Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
</p> */}
<p className="text-center text-gray-700 mb-1 text-lg max-w-2xl mx-auto">
  These projects show how I build useful and easy-to-use websites and apps using modern web tools.
</p>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://log-in-eight-drab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-48"
            >
              <img
                alt="BooksStore"
                className="object-cover object-center w-full h-full"
                src="img3.jpeg"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                LogIN
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind with React
              </h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a className="block relative h-48">
              <img
                alt="Library Management"
                className="object-cover object-center w-full h-full"
                src="img1.jpeg"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Library Management System
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind With Next JS
              </h2>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://port-qr33.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-48"
            >
              <img
                alt="Books Store"
                className="object-cover object-center w-full h-full"
                src="img2.jpeg"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Books-Store
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bootstrap with React
              </h2>
            </div>
          </div>

         
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://portfolio-k8zj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-48"
            >
              <img
                alt="E-commerce"
                className="object-cover object-center w-full h-full"
                src="img.jpeg"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                E-commerce
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind with React
              </h2>
            </div>
          </div>

        </div>
         <h1 className="text-2xl sm:text-6xl font-bold text-center mb-2
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-transparent bg-clip-text
                       leading-snug">
          My full-stack projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a className="block relative h-48">
              <img
                alt="Ticket System"
                className="object-cover object-center w-full h-full"
                src="ssms.png"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Ticket generate System
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind With Next JS
              </h2>
            </div>
          </div>
<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a className="block relative h-48">
              <img
                alt="Ecommerce website"
                className="object-cover object-center w-full h-full"
                src="mvep.png"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Ecommerce website
              </h3>
              <h2 className="title-font text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind With Next JS
              </h2>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Card;

