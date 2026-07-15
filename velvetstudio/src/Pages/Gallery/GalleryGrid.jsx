import React, { useState } from "react";

// Images Import
import img1 from "../../assets/gallery/gallery1.jpg";
import img2 from "../../assets/gallery/gallery2.jpg";
import img3 from "../../assets/gallery/gallery3.jpg";
import img4 from "../../assets/gallery/gallery4.jpg";
import img5 from "../../assets/gallery/gallery5.jpg";
import img6 from "../../assets/gallery/gallery6.jpg";

const images = [
  {
    id: 1,
    image: img1,
    category: "Hair",
    title: "Luxury Hair Styling",
  },
  {
    id: 2,
    image: img2,
    category: "Hair",
    title: "Hair Coloring",
  },
  {
    id: 3,
    image: img3,
    category: "Facial",
    title: "Skin Care",
  },
  {
    id: 4,
    image: img4,
    category: "Makeup",
    title: "Soft Glam Makeup",
  },
  {
    id: 5,
    image: img5,
    category: "Facial",
    title: "Skin Care",
  },
  {
    id: 6,
    image: img6,
    category: "Hair",
    title: "Bridal Hairstyle",
  },
];

const GalleryGrid = () => {
  const [category, setCategory] = useState("All");
const [selectedIndex, setSelectedIndex] = useState(null); 
 const filteredImages =
    category === "All"
      ? images
      : images.filter((item) => item.category === category);

      const handlePrevious = () => {
  setSelectedIndex((prev) =>
    prev === 0 ? filteredImages.length - 1 : prev - 1
  );
};

const handleNext = () => {
  setSelectedIndex((prev) =>
    prev === filteredImages.length - 1 ? 0 : prev + 1
  );
};
 return (
  <section className="py-20 bg-[#FCFAF7]">

    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
          Our Gallery
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Beauty In Every Detail
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
          Explore our collection of luxury beauty transformations.
        </p>

      </div>

      {/* Filter Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {["All", "Hair", "Facial", "Makeup"].map((item) => (

          <button
            key={item}
           onClick={() => setSelectedIndex(
  filteredImages.findIndex((img) => img.id === item.id)
)}
            className={`
              px-7
              py-3
              rounded-full
              border
              transition
              duration-300
              ${
                category === item
                  ? "bg-yellow-600 text-white border-yellow-600"
                  : "bg-white hover:border-yellow-600 hover:text-yellow-600"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Gallery */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {filteredImages.map((item) => (

          <div
            key={item.id}
         onClick={() =>
  setSelectedIndex(
    filteredImages.findIndex((img) => img.id === item.id)
  )
}
            className="group overflow-hidden rounded-xl cursor-pointer"
          >

            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-[220px]
                md:h-[280px]
                lg:h-[320px]
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

          </div>

        ))}

      </div>

    </div>

    {/* Full Screen Image */}

  {selectedIndex !== null && (

  <div
    className="
      fixed
      inset-0
      bg-black/90
      flex
      items-center
      justify-center
      z-50
      p-6
    "
  >

    {/* Close */}

    <button
      onClick={() => setSelectedIndex(null)}
      className="absolute top-6 right-8 text-white text-5xl"
    >
      ×
    </button>

    {/* Previous */}

    <button
      onClick={handlePrevious}
      className="
        absolute
        left-6
        text-white
        text-5xl
        hover:text-yellow-500
        transition
      "
    >
      ❮
    </button>

    {/* Image */}

    <img
      src={filteredImages[selectedIndex].image}
      alt={filteredImages[selectedIndex].title}
      className="
        max-w-5xl
        w-full
        max-h-[85vh]
        object-contain
        rounded-xl
      "
    />

    {/* Next */}

    <button
      onClick={handleNext}
      className="
        absolute
        right-6
        text-white
        text-5xl
        hover:text-yellow-500
        transition
      "
    >
      ❯
    </button>

    {/* Counter */}

    <div className="absolute bottom-8 text-white text-lg">
      {selectedIndex + 1} / {filteredImages.length}
    </div>

  </div>

)}
  </section>
);
};

export default GalleryGrid;