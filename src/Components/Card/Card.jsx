// import React from "react";

// const Card = () => {
//   return (
    
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
//           {/* Card 1 */}
//           <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
//   <a
//     href="https://vercel.com/iqra-yasmeens-projects/log-in"
//     target="_blank" // opens in new tab
//     rel="noopener noreferrer"
//     className="block relative h-48"
//   >
//     <img
//       alt="BooksStore"
//       className="object-cover object-center w-full h-full"
//       src="img3.jpeg"
//     />
//   </a>
//   <div className="p-4">
//     <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
//       LogIN
//     </h3>
//     <h2 className="text-gray-900 title-font text-lg font-bold">
//       Tailwind with React
//     </h2>
//   </div>
// </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
//             <a className="block relative h-48">
//               <img
//                 alt="ecommerce"
//                 className="object-cover object-center w-full h-full"
//                 src="img1.jpeg"
//               />
//             </a>
//             <div className="p-4">
//               <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
//                 Library Maneagement System
//               </h3>
//               <h2 className="text-gray-900 title-font text-lg font-bold">
//                 Tailwind And next JS
//               </h2>
//               {/* <p className="mt-2 text-indigo-600 font-semibold">$21.15</p> */}
//             </div>
//           </div>

//           {/* Card 3 */}
//            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
//   <a
//     href="https://port-iqra-yasmeens-projects.vercel.app/"
//     target="_blank" // opens in new tab
//     rel="noopener noreferrer"
//     className="block relative h-48"
//   >
//     <img
//       alt="BooksStore"
//       className="object-cover object-center w-full h-full"
//       src="img2.jpeg"
//     />
//   </a>
//   <div className="p-4">
//     <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
//       Books-Store
//     </h3>
//     <h2 className="text-gray-900 title-font text-lg font-bold">
//       Bootstrap with React
//     </h2>
//   </div>
// </div>

//           {/* Card 4 */}
//           <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
//   <a
//     href="https://iqra-co.github.io/portfolio/"
//     target="_blank" // opens in new tab
//     rel="noopener noreferrer"
//     className="block relative h-48"
//   >
//     <img
//       alt="ecommerce"
//       className="object-cover object-center w-full h-full"
//       src="img.jpeg"
//     />
//   </a>
//   <div className="p-4">
//     <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
//       E-commerce
//     </h3>
//     <h2 className="text-gray-900 title-font text-lg font-bold">
//       Tailwind with React
//     </h2>
//   </div>
// </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default Card;
import React from "react";

const Card = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://vercel.com/iqra-yasmeens-projects/log-in"
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

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://port-iqra-yasmeens-projects.vercel.app/"
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

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <a
              href="https://iqra-co.github.io/portfolio/"
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
      </div>
    </section>
  );
};

export default Card;

