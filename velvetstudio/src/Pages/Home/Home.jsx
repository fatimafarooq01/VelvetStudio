import React from "react";
import Hero from "../../assets/Hero.jpg";
import Button from "../../Components/Button";
import Color from '../../assets/Color.jpg'
import Hair from '../../assets/Hair.jpg'
import Makeup from '../../assets/Makeup.jpg'
import Skin from '../../assets/Skin.jpg'
import WhyChoose from "../../assets/WhyChoose.jpg";
import Gallery1 from "../../assets/Gallery1.jpg";
import Gallery2 from "../../assets/Gallery2.jpg";
import Gallery3 from "../../assets/Gallery3.jpg";
import Gallery4 from "../../assets/Gallery4.jpg";
import Gallery5 from "../../assets/Gallery5.jpg";
import Gallery6 from "../../assets/Gallery6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  const testimonials = [
    {
      name: "Sophia Carter",
      service: "Bridal Makeup",
      review:
        "Absolutely loved my bridal makeover. The team was incredibly professional and made me feel beautiful throughout the day.",
    },
    {
      name: "Emma Wilson",
      service: "Hair Styling",
      review:
        "The hairstylists truly understand what suits you best. I always leave feeling confident and refreshed.",
    },
    {
      name: "Olivia Brown",
      service: "Skin Care",
      review:
        "The facial treatment was relaxing and my skin has never looked healthier. Highly recommended.",
    },
    {
      name: "Jessica Taylor",
      service: "Hair Coloring",
      review:
        "The color turned out even better than I imagined. Premium service from start to finish.",
    },
    {
      name: "Emily Davis",
      service: "Luxury Spa",
      review:
        "A peaceful atmosphere with exceptional customer service. Every visit feels like a luxury experience.",
    },
    {
      name: "Charlotte White",
      service: "Makeup",
      review:
        "Professional artists, quality products and amazing results. Definitely coming back again.",
    },
  ];
  return (
    <>
      <section
        className="relative h-[calc(100vh-88px)] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-2xl text-white">

          <p className="text-yellow-500 uppercase tracking-[4px] mb-3">
            Luxury Beauty Salon
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Velvet Studio
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-3">
            Premium Hair • Makeup • Skincare
          </p>

          <p className="text-gray-300 leading-8 mb-8">
            Experience luxury beauty services with our professional stylists.
            From elegant hair transformations to flawless makeup and relaxing
            skincare treatments, we make every visit unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="Book Appointment"
              variant="filled"
            />

            <Button
              text="Our Services"
              variant="outline"
            />
          </div>

        </div>
      </section>
      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-[#F8F5F0]">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
              OUR SERVICES
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Crafted For Your Beauty
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-8">
              Discover premium beauty experiences designed to bring elegance,
              confidence and luxury into every appointment.
            </p>

          </div>

          {/* Masonry Layout */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT BIG CARD */}

            <div className="relative rounded-3xl overflow-hidden group lg:row-span-2 h-162.5">

              <img
                src={Hair}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="text-3xl font-bold mb-3">
                  Hair Styling
                </h3>

                <p className="max-w-sm text-gray-200 leading-7">
                  Elegant haircuts, styling and luxury treatments tailored
                  perfectly for your personality.
                </p>

                <button className="mt-6 border-b border-yellow-500 text-yellow-400 hover:tracking-widest duration-300">
                  Discover →
                </button>

              </div>

            </div>

            {/* RIGHT TOP */}

            <div className="relative rounded-3xl overflow-hidden group h-77.5">

              <img
                src={Makeup}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="text-2xl font-bold">
                  Bridal Makeup
                </h3>

                <button className="mt-4 text-yellow-400">
                  Discover →
                </button>

              </div>

            </div>

            {/* RIGHT TOP 2 */}

            <div className="relative rounded-3xl overflow-hidden group h-77.5">

              <img
                src={Skin}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="text-2xl font-bold">
                  Skin Care
                </h3>

                <button className="mt-4 text-yellow-400">
                  Discover →
                </button>

              </div>

            </div>

            {/* BOTTOM */}

            <div className="relative rounded-3xl overflow-hidden group lg:col-span-2 h-80">

              <img
                src={Color}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute bottom-8 left-8 text-white">

                <h3 className="text-3xl font-bold">
                  Hair Coloring
                </h3>

                <p className="mt-3 text-gray-200 max-w-lg">
                  Premium color transformations using world-class products
                  for vibrant, healthy and long-lasting beauty.
                </p>

                <button className="mt-6 border-b border-yellow-500 text-yellow-400 hover:tracking-widest duration-300">
                  Discover →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div className="relative">

              <img
                src={WhyChoose}
                alt="Luxury Salon"
                className="rounded-3xl w-full h-[650px] object-cover"
              />

              {/* Experience Card */}

              <div className="absolute -bottom-8 -right-8 bg-yellow-600 text-white rounded-2xl px-8 py-6 shadow-2xl">

                <h2 className="text-4xl font-bold">
                  10+
                </h2>

                <p className="uppercase tracking-widest text-sm mt-2">
                  Years Experience
                </p>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="uppercase tracking-[5px] text-yellow-600 font-medium mb-4">
                WHY CHOOSE US
              </p>

              <h2 className="text-5xl font-bold leading-tight mb-6">

                Where Luxury Meets
                <br />
                Beauty

              </h2>

              <p className="text-gray-500 leading-8 mb-10">

                At Velvet Studio, we believe beauty is more than a service—it's
                an experience. Every appointment is designed to make you feel
                confident, elegant and refreshed in a luxurious environment.

              </p>

              {/* Features */}

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-yellow-600 mt-3"></div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Certified Beauty Experts
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Skilled professionals delivering exceptional beauty services.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-yellow-600 mt-3"></div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Premium Products
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Only high-quality international beauty brands are used.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-yellow-600 mt-3"></div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Personalized Consultation
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Every client receives customized beauty recommendations.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-3 h-3 rounded-full bg-yellow-600 mt-3"></div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Luxury Ambience
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Relax in a calm, elegant and beautifully designed salon.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= Statistics ================= */}

      <section className="py-24 bg-[#111111] text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-500">
              OUR ACHIEVEMENTS
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Numbers That Define Excellence
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Our passion for beauty is reflected in every client we serve
              and every transformation we create.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-20">

            <div className="text-center">

              <h3 className="text-5xl font-bold text-yellow-500">
                10+
              </h3>

              <p className="mt-4 text-gray-300">
                Years Experience
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-yellow-500">
                8K+
              </h3>

              <p className="mt-4 text-gray-300">
                Happy Clients
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-yellow-500">
                25+
              </h3>

              <p className="mt-4 text-gray-300">
                Beauty Experts
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-yellow-500">
                35+
              </h3>

              <p className="mt-4 text-gray-300">
                Premium Services
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-yellow-500">
                4.9★
              </h3>

              <p className="mt-4 text-gray-300">
                Client Rating
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Testimonial  */}
      <section className="py-24 bg-[#F8F5F0]">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-600">
              TESTIMONIALS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              What Our Clients Say
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-8">
              Every visit is crafted to deliver confidence, elegance and a luxury
              beauty experience.
            </p>

          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {testimonials.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 h-full border border-transparent hover:border-yellow-500">

                  <p className="text-5xl text-yellow-500 leading-none">
                    "
                  </p>

                  <p className="text-gray-600 leading-8 mt-6">
                    {item.review}
                  </p>

                  <div className="mt-8">

                    <div className="text-yellow-500 text-lg">
                      ★★★★★
                    </div>

                    <h3 className="text-xl font-semibold mt-3">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.service}
                    </p>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-[#F8F5F0]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-[40px] shadow-xl p-10 md:p-16 border border-gray-100">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}

              <div>

                <p className="uppercase tracking-[5px] text-yellow-600 font-medium mb-4">
                  Book Your Visit
                </p>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Experience Luxury Beauty Like Never Before
                </h2>

                <p className="text-gray-500 leading-8 mt-6">
                  Whether you're preparing for a wedding, a special event, or simply
                  treating yourself, our expert stylists are here to create a look
                  you'll love.
                </p>

              </div>

              {/* Right */}

              <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

                <Button
                  text="Book Appointment"
                  variant="filled"
                />

                <Button
                  text="Our Services"
                  variant="outline"
                />

              </div>

            </div>

          </div>

        </div>

      </section>
    </>

  );
};



export default Home;