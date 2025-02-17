import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Content = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_fhcdndj", // Replace with your EmailJS service ID
        "template_uzydIyp", // Replace with your EmailJS template ID
        formRef.current,
        "H8VIMX90Z4kw6X3JO" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#9CC1DE] font-sans">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-[#FFA1AD] to-[#FFC8D4] text-white py-12 text-center rounded-b-3xl shadow-lg"
      >
        <h1 className="text-4xl font-bold">Join Us and Contribute</h1>
        <p className="mt-2 text-lg">
          We'd love to hear from you! Join our community and make an impact.
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.main className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Description */}
          <motion.div className="text-center md:text-left p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <h2 className="text-3xl font-bold text-[#FFA1AD] mb-4">Why Join Us?</h2>
            <p className="text-gray-700 mb-6">
              Become part of a growing community that values innovation, collaboration, and creativity. Whether you're a developer, designer, or just passionate about technology, there's a place for you here.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Collaborate with like-minded individuals</li>
              <li>Work on exciting open-source projects</li>
              <li>Learn and grow your skills</li>
              <li>Make a real-world impact</li>
            </ul>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <h2 className="text-2xl font-bold text-[#FFA1AD] mb-6 text-center">Get in Touch</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FFA1AD] focus:border-[#FFA1AD] sm:text-sm cursor-text"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FFA1AD] focus:border-[#FFA1AD] sm:text-sm cursor-text"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us why you want to join..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FFA1AD] focus:border-[#FFA1AD] sm:text-sm cursor-text"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="submit"
                className="w-full bg-[#FFA1AD] text-white py-2 px-4 rounded-md hover:bg-[#FFC8D4] transition duration-300 ease-in-out cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>
      </motion.main>

      {/* Footer Section */}
      <motion.footer className="bg-gradient-to-r from-[#FFA1AD] to-[#FFC8D4] text-white py-8 text-center rounded-t-3xl shadow-lg">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <p className="text-sm mb-6">
            Follow us on social media and stay updated with the latest news and updates.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-black transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-red-500 transition duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:to-blue-400 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </motion.a>
          </div>
          <p className="text-sm">
            © 2025 Your Organization. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Content;