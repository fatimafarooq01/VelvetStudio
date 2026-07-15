import React from "react";
import Hair from "../../assets/Hair.jpg";
import Button from "../../Components/Button";

const HairStylingSection = () => {
    const hairServices = [
        {
            name: "Women's Haircut",
            description: "Precision cut with wash & styling",
            duration: "60 min",
            price: "£40",
        },
        {
            name: "Men's Haircut",
            description: "Classic or modern haircut",
            duration: "45 min",
            price: "£25",
        },
        {
            name: "Kids Haircut",
            description: "Gentle haircut for children",
            duration: "30 min",
            price: "£20",
        },
        {
            name: "Hair Wash & Blow Dry",
            description: "Luxury wash with professional blow dry",
            duration: "45 min",
            price: "£30",
        },
        {
            name: "Hair Spa",
            description: "Deep nourishment & scalp relaxation",
            duration: "60 min",
            price: "£55",
        },
        {
            name: "Deep Conditioning",
            description: "Repair treatment for damaged hair",
            duration: "45 min",
            price: "£45",
        },
        {
            name: "Keratin Treatment",
            description: "Smooth & frizz-free finish",
            duration: "3 hrs",
            price: "From £180",
        },
        {
            name: "Hair Botox",
            description: "Intensive hair restoration treatment",
            duration: "3 hrs",
            price: "From £200",
        },
    ];
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Heading */}

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
                        Hair Styling
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Luxury Hair Styling & Treatments
                    </h2>

                    <p className="text-gray-500 max-w-3xl mx-auto mt-6 leading-8">
                        Discover professional hair services designed to enhance your style,
                        confidence and personality with premium products and expert care.
                    </p>
                    <div className="mt-12 border border-gray-200 rounded-3xl overflow-hidden">

                        {hairServices.map((service, index) => (

                            <div
                                key={index}
                                className="flex justify-between items-center px-8 py-6 border-b last:border-b-0 hover:bg-[#F8F5F0] transition duration-300"
                            >

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {service.name}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {service.description}
                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="text-gray-500 text-sm">
                                        {service.duration}
                                    </p>

                                    <h3 className="text-yellow-600 font-bold text-xl mt-1">
                                        {service.price}
                                    </h3>

                                </div>

                            </div>

                        ))}

                    </div>
                    {/* ================= What's Included ================= */}

                    <div className="grid md:grid-cols-2 gap-10 mt-14">

                        {/* Left */}

                        <div>

                            <h3 className="text-2xl font-bold">
                                What's Included
                            </h3>

                            <p className="text-gray-500 mt-3 leading-7">
                                Every appointment includes professional consultation and premium salon care
                                to ensure you leave looking and feeling your best.
                            </p>

                            <div className="space-y-4 mt-8">

                                {[
                                    "Personal Hair Consultation",
                                    "Premium Shampoo & Conditioner",
                                    "Professional Styling",
                                    "Heat Protection Products",
                                    "Aftercare Advice",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="w-3 h-3 rounded-full bg-yellow-600"></div>

                                        <p>{item}</p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div className="bg-[#F8F5F0] rounded-3xl p-8">

                            <p className="uppercase tracking-[4px] text-yellow-600 text-sm">
                                Most Popular
                            </p>

                            <h3 className="text-3xl font-bold mt-3">
                                Luxury Hair Package
                            </h3>

                            <p className="text-gray-500 mt-5 leading-8">

                                Perfect for clients looking for a complete salon experience.

                            </p>

                            <div className="mt-8 space-y-3">

                                <div className="flex justify-between">
                                    <span>Women's Haircut</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Hair Wash</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Blow Dry</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Hair Spa</span>
                                    <span>✓</span>
                                </div>

                            </div>

                            <div className="border-t mt-8 pt-6 flex justify-between items-center">

                                <div>

                                    <p className="text-gray-500">
                                        Package Price
                                    </p>

                                    <h2 className="text-4xl font-bold text-yellow-600">
                                        £85
                                    </h2>

                                </div>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    Save £15
                                </span>

                            </div>

                            <button
                                className="
      mt-8
      w-full
      bg-yellow-600
      hover:bg-black
      duration-300
      text-white
      py-4
      rounded-full
      font-medium
      "
                            >
                                Book This Package
                            </button>

                        </div>

                    </div>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div className="relative">

                    <img
                        src={Hair}
                        alt="Hair Styling"
                        className="
      w-full
      h-[700px]
      object-cover
      rounded-[35px]
      "
                    />

                    {/* Floating Card */}

                    <div
                        className="
      absolute
      bottom-8
      left-8
      bg-white/95
      backdrop-blur-md
      rounded-3xl
      p-8
      shadow-2xl
      w-[280px]
      "
                    >

                        <p className="uppercase tracking-[4px] text-yellow-600 text-sm">
                            Velvet Studio
                        </p>

                        <h3 className="text-2xl font-bold mt-3">
                            Luxury Hair Care
                        </h3>

                        <div className="mt-6 space-y-4">

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Experience
                                </span>

                                <span className="font-semibold">
                                    10+ Years
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Happy Clients
                                </span>

                                <span className="font-semibold">
                                    5000+
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Rating
                                </span>

                                <span className="font-semibold">
                                    4.9 / 5
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div>

                    <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
                        Signature Collection
                    </p>

                    <h2 className="text-5xl font-bold mt-5 leading-tight">

                        Hair Styling
                        <br />
                        Price List

                    </h2>

                    <p className="text-gray-600 leading-8 mt-8">

                        Whether you're looking for a fresh haircut,
                        a nourishing hair treatment or a complete
                        transformation, our expert stylists deliver
                        personalised services using premium products
                        and the latest techniques.

                    </p>

                </div>

            </div>
        </section>
    );
};

export default HairStylingSection;