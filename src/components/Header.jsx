import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <>
      <header className="bg-gray-50 dark:bg-gray-800 pb-6 lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full dark:filter dark:brightness-90"
                  src={icon}
                  alt="Logo"
                />
                <div className="flex flex-col leading-tight">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Bihar Fire Protection
                  </h1>
                  <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Provide Best Services to Our Customer
                  </h6>
                </div>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex p-2 text-black dark:text-white lg:hidden focus:bg-gray-100 dark:focus:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/"
                className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
              >
                Gallery
              </Link>
              <Link
                to="/contact-us"
                className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
              >
                Contact Us
              </Link>
              <Link
                to="/about-us"
                className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
              >
                About Us
              </Link>
              <Link
                to="/disclaimer"
                className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
              >
                Disclaimer
              </Link>
              <Link
                to="/login"
                className="text-white text-sm font-semibold bg-[#25D366] px-4 py-2 rounded-full hover:bg-[#1DA851] transition duration-200"
              >
                WhatsApp
              </Link>
            </div>

            {/* Mobile Menu Links */}
            {menuOpen && (
              <div className=" lg:hidden absolute z-10 top-16 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg ">
                <div className="flex flex-col space-y-4 px-6 py-4">
                  <Link
                    to="/"
                    className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Home
                  </Link>
                  <Link
                    to="/gallery"
                    className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about-us"
                    className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/disclaimer"
                    className="text-base font-medium text-black dark:text-white transition-all duration-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Disclaimer
                  </Link>
                  <Link
                    to="/login"
                    className="text-white text-center font-semibold bg-[#25D366] px-4 py-2 rounded-full hover:bg-[#1DA851] transition duration-200"
                  >
                    WhatsApp
                  </Link>

                  {/* <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="checkbox-mobile"
                    className="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                  <label htmlFor="checkbox-mobile" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                  </label>
                </div> */}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Floating Dark Mode Toggle */}
      <div
        className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        onClick={toggleDarkMode}
        title="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <i className="fas fa-sun text-yellow-500 text-lg"></i>
        ) : (
          <i className="fas fa-moon text-gray-800 dark:text-gray-200 text-lg"></i>
        )}
      </div>
    </>
  );
}

export default Header;
