import React from "react";
import Hero from "../../assets/Hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-[65vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-white">

        <p className="uppercase tracking-[5px] text-yellow-500">
          Our Services
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-5">
          Luxury Beauty
          <br />
          Experiences
        </h1>

        <p className="max-w-2xl mt-8 text-gray-200 leading-8 text-lg">
          Discover premium salon treatments created to enhance your
          beauty, confidence and self-care experience.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;