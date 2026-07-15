import React from "react";

const IntroSection = () => {
  return (
    <section className="py-24 bg-[#F8F5F0]">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
              Signature Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Luxury Treatments
              <br />
              Tailored Just For You
            </h2>

          </div>

          {/* Right Side */}

          <div>

            <p className="text-gray-600 leading-8 text-lg">

              Every appointment at Velvet Studio is more than just a beauty
              treatment—it's a personalised experience. From precision hair
              styling and luxury colour transformations to flawless bridal
              makeup, rejuvenating skincare and relaxing spa therapies, every
              service is delivered with exceptional attention to detail.

            </p>

          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-4">
              Premium Products
            </h3>

            <p className="text-gray-500 leading-7">
              We use internationally trusted beauty brands to ensure long-lasting,
              healthy and flawless results.
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-4">
              Expert Stylists
            </h3>

            <p className="text-gray-500 leading-7">
              Our experienced professionals stay updated with the latest beauty
              trends and techniques.
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-4">
              Personal Consultation
            </h3>

            <p className="text-gray-500 leading-7">
              Every treatment begins with a personalised consultation to match
              your unique style and needs.
            </p>

          </div>

          {/* Card 4 */}

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-4">
              Relaxing Experience
            </h3>

            <p className="text-gray-500 leading-7">
              Enjoy a calm, elegant atmosphere designed to help you feel relaxed,
              refreshed and confident.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default IntroSection;