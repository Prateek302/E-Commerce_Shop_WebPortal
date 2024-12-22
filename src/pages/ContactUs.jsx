import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock sending message to the owner
    console.log("Message Sent:", formData);
    setStatus("Thank you for contacting us. We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Contact Us
        </h1>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-3 block w-full h-10 rounded-md bg-gray-50 border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 block w-full h-10 bg-gray-50 border rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full bg-gray-50 border rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
          {status && <p className="text-green-600 mt-4">{status}</p>}
        </div>

        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Our Address
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Shop Name:</strong> Bihar Fire Protection <br />
              <strong>Address:</strong> Maa Tetar Niwas Opposite H.No. C/11 Prahalad Singh Lane “C", Gandhi Nagar, Ashiana Nagar, Patna, Bihar 800025<br />
              <strong>Phone:</strong> <a href="tel:6204749642">+91 6204749642 </a>,<a href="tel:7903900603"> +91 7903900603 </a><br />
              <strong>Email:</strong> <a href="mailto:biharfireprotection@yahoo.com">biharfireprotection@yahoo.com</a>
            </p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8441302265864!2d90.39445661543187!3d23.75087539436705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c4c06d77d%3A0x52dc18e02168b8f3!2sYour%20Shop!5e0!3m2!1sen!2sin!4v1604958656018!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Shop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
