import React from "react";
import AboutHero from "../../assets/AboutHero.jpg";
import SalonStory from "../../assets/SalonStory.jpg";
import Artist1 from "../../assets/Artist1.jpg";
import Artist2 from "../../assets/Artist2.jpg";


const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16 text-white">

          <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
            About Velvet Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
            Beauty Crafted With Elegance & Passion
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-200 leading-8">
            At Velvet Studio, every appointment is more than a beauty
            treatment—it's a luxurious experience designed to help you look,
            feel and shine with confidence.
          </p>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image */}

            <div className="relative">

              <img
                src={SalonStory}
                alt="Salon Interior"
                className="rounded-[40px] shadow-xl w-full h-[650px] object-cover"
              />

              {/* Floating Card */}

              <div className="absolute -bottom-8 -right-8 bg-[#111111] text-white p-8 rounded-3xl shadow-2xl hidden lg:block">

                <h3 className="text-5xl font-bold text-yellow-500">
                  10+
                </h3>

                <p className="mt-2 text-gray-300">
                  Years Of Luxury
                  <br />
                  Beauty Experience
                </p>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
                More Than A Salon,
                <br />
                A Luxury Destination.
              </h2>

              <div className="w-24 h-1 bg-yellow-500 mt-8 mb-10"></div>

              <p className="text-gray-500 leading-8 mb-8">
                Velvet Studio was created with one simple vision — to redefine
                beauty through elegance, creativity and personalized care.
                Every client who walks through our doors deserves an experience
                that feels luxurious from the very first moment.
              </p>

              <p className="text-gray-500 leading-8 mb-8">
                Our talented artists combine modern techniques with timeless
                beauty to create styles that complement your personality.
                Whether it's a complete transformation or a simple refresh,
                every detail is carefully crafted with passion.
              </p>

              <p className="text-gray-500 leading-8">
                We believe true luxury isn't only about beautiful results.
                It's about making every guest feel relaxed, confident and
                genuinely cared for.
              </p>

            </div>

          </div>

        </div>

      </section>
 {/* ================= OUR JOURNEY ================= */}

<section className="py-24 bg-[#F8F5F0]">

  <div className="max-w-6xl mx-auto px-6 lg:px-16">

    {/* Heading */}

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
        Our Journey
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
        A Story Of Passion & Excellence
      </h2>

      <p className="text-gray-500 max-w-3xl mx-auto mt-6 leading-8">
        From a small vision to becoming a trusted luxury beauty destination,
        every milestone reflects our commitment to elegance, creativity and
        exceptional client care.
      </p>

    </div>

    {/* Timeline */}

    <div className="relative">

      {/* Vertical Line */}

      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-yellow-500"></div>

      {/* Item 1 */}

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="md:text-right">

          <span className="text-5xl font-bold text-yellow-600">
            2016
          </span>

          <h3 className="text-2xl font-semibold mt-4">
            The Beginning
          </h3>

          <p className="text-gray-500 leading-8 mt-4">
            Velvet Studio opened its doors with a simple mission:
            to provide elegant beauty services with a personalized luxury
            experience.
          </p>

        </div>

        <div className="hidden md:flex justify-center">

          <div className="w-6 h-6 rounded-full bg-yellow-500 border-[6px] border-white shadow-lg"></div>

        </div>

      </div>

      {/* Item 2 */}

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="hidden md:flex justify-center order-2 md:order-1">

          <div className="w-6 h-6 rounded-full bg-yellow-500 border-[6px] border-white shadow-lg"></div>

        </div>

        <div className="order-1 md:order-2">

          <span className="text-5xl font-bold text-yellow-600">
            2019
          </span>

          <h3 className="text-2xl font-semibold mt-4">
            Growing With Confidence
          </h3>

          <p className="text-gray-500 leading-8 mt-4">
            Our team expanded with experienced beauty professionals,
            introducing premium skincare, bridal makeup and luxury hair
            treatments.
          </p>

        </div>

      </div>

      {/* Item 3 */}

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="md:text-right">

          <span className="text-5xl font-bold text-yellow-600">
            2023
          </span>

          <h3 className="text-2xl font-semibold mt-4">
            Trusted By Thousands
          </h3>

          <p className="text-gray-500 leading-8 mt-4">
            With thousands of satisfied clients, Velvet Studio became
            recognized for its luxury experience, attention to detail and
            exceptional customer care.
          </p>

        </div>

        <div className="hidden md:flex justify-center">

          <div className="w-6 h-6 rounded-full bg-yellow-500 border-[6px] border-white shadow-lg"></div>

        </div>

      </div>

      {/* Item 4 */}

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="hidden md:flex justify-center order-2 md:order-1">

          <div className="w-6 h-6 rounded-full bg-yellow-500 border-[6px] border-white shadow-lg"></div>

        </div>

        <div className="order-1 md:order-2">

          <span className="text-5xl font-bold text-yellow-600">
            Today
          </span>

          <h3 className="text-2xl font-semibold mt-4">
            Continuing The Journey
          </h3>

          <p className="text-gray-500 leading-8 mt-4">
            Every appointment is an opportunity to create confidence,
            celebrate individuality and deliver a luxury beauty experience
            that leaves a lasting impression.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= MEET THE ARTISTS ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    {/* Heading */}

    <div className="max-w-3xl">

      <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
        Meet The Artists
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
        Passionate Experts Behind Every Transformation
      </h2>

      <p className="text-gray-500 mt-6 leading-8">
        Our talented professionals combine creativity, precision and years
        of experience to deliver a luxury beauty experience tailored to
        every client.
      </p>

    </div>

    {/* Artist 1 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

      <div className="overflow-hidden rounded-[35px]">

        <img
          src={Artist1}
          alt=""
          className="w-full h-[650px] object-cover hover:scale-105 duration-700"
        />

      </div>

      <div>

        <span className="text-yellow-600 uppercase tracking-[4px]">
          Senior Hair Artist
        </span>

        <h3 className="text-5xl font-bold mt-4">
          Emma Wilson
        </h3>

        <p className="text-gray-500 leading-8 mt-8">
          Emma has over eight years of experience creating elegant hair
          transformations that blend modern trends with timeless beauty.
          Her passion for perfection makes every appointment a personalized
          luxury experience.
        </p>

        <div className="mt-10 flex gap-10">

          <div>

            <h4 className="text-3xl font-bold text-yellow-600">
              8+
            </h4>

            <p className="text-gray-500 mt-2">
              Years Experience
            </p>

          </div>

          <div>

            <h4 className="text-3xl font-bold text-yellow-600">
              2500+
            </h4>

            <p className="text-gray-500 mt-2">
              Happy Clients
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Artist 2 */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">

      <div className="order-2 lg:order-1">

        <span className="text-yellow-600 uppercase tracking-[4px]">
          Bridal Makeup Artist
        </span>

        <h3 className="text-5xl font-bold mt-4">
          Sophia Carter
        </h3>

        <p className="text-gray-500 leading-8 mt-8">
          Sophia specializes in luxury bridal makeup, creating flawless
          looks that enhance natural beauty while ensuring every bride feels
          confident on her special day.
        </p>

        <div className="mt-10 flex gap-10">

          <div>

            <h4 className="text-3xl font-bold text-yellow-600">
              7+
            </h4>

            <p className="text-gray-500 mt-2">
              Years Experience
            </p>

          </div>

          <div>

            <h4 className="text-3xl font-bold text-yellow-600">
              1800+
            </h4>

            <p className="text-gray-500 mt-2">
              Bridal Clients
            </p>

          </div>

        </div>

      </div>

      <div className="order-1 lg:order-2 overflow-hidden rounded-[35px]">

        <img
          src={Artist2}
          alt=""
          className="w-full h-[650px] object-cover hover:scale-105 duration-700"
        />

      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default About;