import React from "react";
import Button from "./Button";

const ServiceSection = ({
  title,
  subtitle,
  description,
  image,
  services,
}) => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">

            {subtitle}

          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">

            {title}

          </h2>

          <div className="w-24 h-[3px] bg-yellow-600 rounded-full mx-auto mt-7"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8 mt-8">

            {description}

          </p>

        </div>

        {/* Image */}

        <div className="mt-20">

          <img
            src={image}
            alt={title}
            className="
            w-full
            h-[650px]
            rounded-[35px]
            object-cover
            shadow-xl
            "
          />

        </div>
        {/* ================= PRICE MENU ================= */}

        <div className="mt-24">

          <div className="flex items-center justify-between mb-12">

            <div>
              <p className="uppercase tracking-[4px] text-yellow-600 font-medium">
                Our Price Menu
              </p>

              <h3 className="text-4xl font-bold mt-3">
                Signature Services
              </h3>
            </div>

            <Button
              text="Book Appointment"
              variant="filled"
              to="/appointment"
            />

          </div>

          {services.map((item, index) => (

            <div
              key={index}
              className="
    group
    border-b
    border-gray-200
    py-10
    transition-all
    duration-500
    hover:border-yellow-600
    "
            >

              <div className="grid lg:grid-cols-12 gap-8 items-center">

                {/* Number */}

                <div className="lg:col-span-1">

                  <h2
                    className="
          text-5xl
          font-bold
          text-gray-200
          group-hover:text-yellow-600
          transition-all
          duration-500
          "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </h2>

                </div>

                {/* Service */}

                <div className="lg:col-span-5">

                  <h3
                    className="
          text-3xl
          font-semibold
          transition-all
          duration-300
          group-hover:text-yellow-600
          "
                  >
                    {item.service}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    {item.description}
                  </p>

                </div>

                {/* Divider */}

                <div className="hidden lg:flex lg:col-span-4 items-center">

                  <div
                    className="
          w-full
          border-b
          border-dashed
          border-gray-300
          group-hover:border-yellow-500
          transition-all
          duration-500
          "
                  ></div>

                </div>

                {/* Price */}

                <div className="lg:col-span-2 text-right">

                  <p className="text-gray-400 text-sm">
                    {item.duration}
                  </p>

                  <h2
                    className="
          text-4xl
          font-bold
          text-yellow-600
          mt-2
          "
                  >
                    {item.price}
                  </h2>

                </div>

              </div>

            </div>

          ))}
          
        </div>
      </div>

    </section>
  );
};

export default ServiceSection;