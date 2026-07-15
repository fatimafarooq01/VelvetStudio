import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/VelvetStudiologo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <img
              src={logo}
              alt="Velvet Studio"
              className="w-36 mb-6"
            />

            <p className="text-gray-400 leading-8">
              Experience elegance, luxury and confidence with premium beauty
              services designed just for you.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Hair Styling</p>
              <p>Bridal Makeup</p>
              <p>Skin Care</p>
              <p>Hair Coloring</p>
              <p>Spa Therapy</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>+44 1234567890</p>

              <p>info@velvetstudio.com</p>

              <p>
                221B Baker Street
                <br />
                London, United Kingdom
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 Velvet Studio. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-5 md:mt-0 text-gray-400">

            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;