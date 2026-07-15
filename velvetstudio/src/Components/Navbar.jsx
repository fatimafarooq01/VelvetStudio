import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/VelvetStudiologo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

const services = [
  { name: "Hair Styling", path: "/services#hair" },
  { name: "Hair Coloring", path: "/services#hair-color" },
  { name: "Bridal Makeup", path: "/services#bridal" },
  { name: "Skin Care", path: "/services#skin" },
  { name: "Spa Therapy", path: "/services#spa" },
  { name: "Nail Care", path: "/services#nails" },
];

  return (
    <nav className="sticky top-0 z-50">

      {/* Top Bar */}

      <div className="bg-black text-white text-sm">

        <div className="max-w-7xl mx-auto flex justify-center items-center py-3">

          <span>Book your appointment</span>

          <span className="ml-2 text-yellow-500 font-semibold">
            +44 1234567890
          </span>

        </div>

      </div>

      {/* Main Navbar */}

      <div className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-16 py-4">

          {/* Mobile Menu Icon */}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <ImCross className="text-xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>

          {/* Logo */}

          <Link to="/">
            <img
              src={logo}
              alt="Velvet Studio"
              className="w-32"
            />
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">

            {/* Normal Links */}

            {menuItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative font-medium text-gray-700 group hover:text-yellow-600 transition"
              >
                {item.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-0.5
                  bg-yellow-600
                  group-hover:w-full
                  duration-300
                  "
                />
              </Link>
            ))}

            {/* Services Dropdown */}

        <div className="relative group">

  {/* Services Button */}
  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-yellow-600 transition">

    Services

    <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />

  </button>

  {/* Dropdown */}
  <div
    className="
      absolute
      top-full
      left-1/2
      -translate-x-1/2
      pt-4
      invisible
      opacity-0
      group-hover:visible
      group-hover:opacity-100
      transition-all
      duration-300
      z-50
    "
  >

    <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

      {services.map((service) => (
        <Link
          key={service.name}
          to={service.path}
          className="
            block
            px-6
            py-4
            text-gray-700
            hover:bg-yellow-50
            hover:text-yellow-600
            transition
          "
        >
          {service.name}
        </Link>
      ))}

    </div>

  </div>

</div>
                        {/* Remaining Links */}

            {menuItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative font-medium text-gray-700 group hover:text-yellow-600 transition"
              >
                {item.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-0.5
                  bg-yellow-600
                  group-hover:w-full
                  duration-300
                  "
                />
              </Link>
            ))}

          </div>

          {/* Book Now */}

          <button
            className="
            hidden
            md:block
            bg-yellow-600
            text-white
            px-7
            py-3
            rounded-full
            hover:bg-black
            duration-300
            "
          >
            Book Now
          </button>

          {/* Empty Space (Mobile) */}

          <div className="md:hidden w-6"></div>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {isMenuOpen && (

        <div
          className="
          absolute
          top-full
          left-0
          w-full
          bg-white
          shadow-xl
          md:hidden
          "
        >

          <div className="flex flex-col items-center py-8">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-lg hover:text-yellow-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-lg hover:text-yellow-600 transition"
            >
              About
            </Link>

            {/* Services */}

            <div className="w-full text-center">

              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="
                flex
                justify-center
                items-center
                gap-2
                w-full
                py-3
                text-lg
                "
              >
                Services

                <FiChevronDown
                  className={`duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {isServicesOpen && (

                <div className="bg-gray-50">

                  {services.map((service) => (

                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="
                      block
                      py-3
                      hover:text-yellow-600
                      "
                    >
                      {service.name}
                    </Link>

                  ))}

                </div>

              )}

            </div>

            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-lg hover:text-yellow-600 transition"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-lg hover:text-yellow-600 transition"
            >
              Contact
            </Link>

            <button
              className="
              mt-6
              bg-yellow-600
              text-white
              px-8
              py-3
              rounded-full
              hover:bg-black
              duration-300
              "
            >
              Book Now
            </button>

          </div>

        </div>

      )}

    </nav>
  );
};

export default Navbar;