import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function St() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!user.Name || !user.Email || !user.Message) {
      setStatus("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_z23u5py",
        // "YOUR_TEMPLATE_ID",
        {
          from_name: user.Name,
          from_email: user.Email,
          message: user.Message,
        },
        "4pu5HwagE95noNWe-"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setUser({ Name: "", Email: "", Message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus("Failed to send message");
        setLoading(false);
      });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>

        <form onSubmit={submitHandler} className="lg:w-1/2 mx-auto">
          <input
            name="Name"
            value={user.Name}
            onChange={changeHandler}
            placeholder="Name"
            className="w-full mb-4 p-3 border rounded"
          />

          <input
            name="Email"
            value={user.Email}
            onChange={changeHandler}
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded"
          />

          <textarea
            name="Message"
            value={user.Message}
            onChange={changeHandler}
            placeholder="Message"
            className="w-full mb-4 p-3 border rounded h-32"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-500 text-white px-6 py-2 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default St;
