import React from "react";
import {Link} from "react-router-dom";
import homeImage from "../assets/home2.png"; // Ensure the correct path to your image
import logo from "../assets/icon.jpg"; // Example logo for your brand
import fireExtinguisherImg from "../assets/fire-ex.jpeg"; // Example product image
import suppressionImg from "../assets/img8.jpg"; // Example product image
import hydrantImg from "../assets/img7.jpg"; // Example product image

const Home = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-14 max-w-7xl">
        {/* Top Section with Text on Left and Image on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-6 border-b-4 border-gray-200 dark:border-gray-700 pb-12 mb-12">
          {/* Left Div - Text */}
          <div className="flex-1 text-center lg:text-left lg:mr-0 lg:ml-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Our Store
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-lg lg:text-xl">
              Best Quality of Fire Extinguishers and Fire Fighting Equipment
            </p>
            <Link to="/contact-us">
            <button className="px-6 py-3 mt-6 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 hover:shadow-lg hover:animate-pulse focus:bg-blue-700 sm:px-8 sm:py-4 lg:text-lg">
              Explore Now
            </button>
            </Link>
          </div>

          {/* Right Div - Flip Card with Image */}
          <div className="flip-card flex-1 w-full min-w-[448px] h-full min-h-[250px] max-w-md lg:max-w-lg relative group">
            <div className="flip-card-inner w-full min-w-[448px] h-full min-h-[250px] relative transition-transform duration-700 transform-gpu group-hover:rotate-y-180">
              {/* Front of Card */}
              <div className="flip-card-front w-full min-w-[448px] h-full min-h-[250px] absolute inset-0 rounded-lg bg-transparent">
                <img
                  src={homeImage}
                  alt="Home Banner"
                  className="w-full h-full rounded-lg object-cover bg-white dark:bg-gray-900"
                />
              </div>

              {/* Back of Card */}
              <div className="flip-card-back w-full min-w-[448px] h-full min-h-[250px] absolute inset-0 bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-center transform rotate-y-180 rounded-lg">
                <div className="items-center">
                  <h1 className="text-xl font-bold text-center">Our Store</h1>
                  <p className="text-center mb-4">Best products crafted for your needs</p>
                  <div className="text-center">
                  <strong className="">Shop Name:</strong> Bihar Fire Protection <br />
                  <strong>Address:</strong> Maa Tetar Niwas Opposite H.No. C/11
                  Prahalad Singh Lane “C", Gandhi Nagar, Ashiana Nagar, Patna,
                  Bihar 800025
                  <br />
                  <strong>Phone:</strong>{" "}
                  <a href="tel:6204749642">+91 6204749642 </a>,
                  <a href="tel:7903900603"> +91 7903900603 </a>
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:biharfireprotection@yahoo.com">
                    biharfireprotection@yahoo.com
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mt-16 text-center border-4 p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 sm:text-3xl">
            ⊰══ About Us ══⊱
          </h2>
          <img
            src={logo}
            alt="Bihar Fire Protection Logo"
            className="mx-auto mb-4 transition-all duration-300 hover:scale-110 w-20 sm:w-24 lg:w-32"
          />
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 text-left">
            We, Bihar Fire Protection, are Bihar's biggest and fastest emerging
            Fire Fighting Company. Our brand, Bihar Fire Protection, is one of
            the trusted brands in the market, known for quality and service.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-left">
            We specialize in Fire Extinguishers, from portable models to higher
            capacity. Serving since 2019 across Bihar, we cater to industries of
            all sizes.
          </p>
        </div>

        {/* Products Section */}
        <div className="mt-16 border-4 p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6">
            ⊰══ Products ══⊱
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 border-dashed">
              <img
                src={fireExtinguisherImg}
                alt="Fire Extinguisher"
                className="mx-auto mb-4 transition-all duration-300 hover:scale-110 w-32 sm:w-40 lg:w-48"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:text-xl">
                Fire Extinguisher
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Fight a fire with a portable fire extinguisher
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 border-dashed">
              <img
                src={suppressionImg}
                alt="Suppression Systems"
                className="mx-auto mb-4 transition-all duration-300 hover:scale-110 w-32 sm:w-40 lg:w-48"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:text-xl">
                Suppression Systems
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Fire Alarm / Detection CO2 / Clean Agent / Water / Powder / Foam
                Bladder System
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-2 border-dashed">
              <img
                src={hydrantImg}
                alt="Hydrant Systems"
                className="mx-auto mb-4 transition-all duration-300 hover:scale-110 w-32 sm:w-40 lg:w-48"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:text-xl">
                Hydrant Systems
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Sprinklers / Hydrant / Hose Boxes / Fire Hose Reels /
                Accessories
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-16 text-center border-4 p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            ⊰══ Get in Touch ══⊱
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 text-left">
            If you are in need of any safety equipment for site work, feel free
            to contact us. We offer a wide range of products including fire
            extinguishers, safety helmets, reflective jackets, safety shoes
            (Karam), safety goggles (Karam), and more.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 text-left">
            Our goal is to provide high-quality safety equipment to ensure the
            well-being of workers on site. Don’t hesitate to reach out to us for
            more information or to place an order. Your safety is our priority!
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Opening Hours
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-center">
            <b>Monday to Saturday:</b> 9:00 am – 5:00 pm <br />
            <b>Sunday:</b> Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
