import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          About Us
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Welcome to our shop, your trusted partner in fire protection
            solutions. We specialize in providing high-quality fire protection
            equipment to ensure your safety and security. Whether you’re looking
            for fire extinguishers, smoke detectors, or fire alarms, we offer a
            wide range of products designed to protect you and your property.
          </p>
          <p className="mb-4">
            Our mission is to provide our customers with reliable fire safety
            products that meet the highest industry standards. With years of
            experience and a dedicated team, we are committed to offering expert
            advice, top-notch service, and effective fire protection solutions
            for homes, businesses, and industrial settings.
          </p>
          <p>
            Our shop prides itself on being a one-stop destination for all your
            fire safety needs. We are passionate about helping our clients stay
            safe and protected by offering innovative and effective fire
            protection products.
          </p>
        </div>
        <div className="mt-10 text-center items-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Why Choose Us?
          </h2>
          <ul className="flex flex-col ml-[25vw] text-justify list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
            <li className="pl-4">Wide range of fire protection products</li>
            <li className="pl-4">Expert advice from trained professionals</li>
            <li className="pl-4">
              Top-quality products that meet safety standards
            </li>
            <li className="pl-4">
              Affordable prices and excellent customer service
            </li>
            <li className="pl-4">
              Fast delivery and reliable after-sales support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
