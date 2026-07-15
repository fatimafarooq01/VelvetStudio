import React from "react";
import hero from "../../assets/gallery/galleryHero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh]">

      <img
        src={hero}
        alt="Gallery"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[6px] text-yellow-500 font-medium">
            Velvet Studio
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-5">
            Our Gallery
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-200 leading-8">
            Explore our collection of beautiful transformations,
            luxury beauty services and unforgettable moments.
          </p>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;