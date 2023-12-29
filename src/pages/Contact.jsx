// ContactForm.js
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic, such as sending data to a server
    console.log('Form data submitted:', formData);
  };

    return (
        <section className="bg-gradient-to-tl from-blue-900 to-blue-500 w-full h-[500px] flex items-center justify-center flex-col">
            <div>
                <h1 className="text-white text-3xl font-bold mb-10">Contact Us</h1>
            </div>
    <div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
                <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
                </form>
                </div>
            </section>
  );
};


