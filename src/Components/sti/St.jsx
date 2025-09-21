import React, { useState } from "react";

function St() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  // Handle input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", user);

    // Clear the form
    setUser({
      Name: "",
      Email: "",
      Message: ""
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        </div>
        <form onSubmit={submitHandler} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="Name"
                  name="Name" // must match state key
                  value={user.Name} // controlled input
                  onChange={changeHandler}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="Email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={user.Email}
                  onChange={changeHandler}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="Message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  value={user.Message}
                  onChange={changeHandler}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default St;
