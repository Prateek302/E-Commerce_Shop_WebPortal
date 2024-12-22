import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpg";
const images = [
  { id: 1, src: img1, alt: "Shop Interior" },
  { id: 2, src: img2, alt: "Shop Exterior" },
  { id: 3, src: img3, alt: "Product Display" },
  { id: 4, src: img4, alt: "Customer Area" },
  { id: 5, src: img5, alt: "Shop Decorations" },
  { id: 6, src: img6, alt: "Checkout Area" },
  { id: 7, src: img7, alt: "Checkout Area" },
  { id: 8, src: img8, alt: "Checkout Area" },
  { id: 9, src: img9, alt: "Checkout Area" },
  { id: 10, src: img12, alt: "Checkout Area" },
  { id: 11, src: img11, alt: "Checkout Area" },
  { id: 12, src: img13, alt: "Checkout Area" },
  { id: 13, src: img14, alt: "Checkout Area" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Shop Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h- object-fill transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
