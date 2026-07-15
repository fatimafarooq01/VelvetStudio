import React from "react";

import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";

import ServiceSection from "../../Components/ServiceSection";

import Hair from "../../assets/Hair.jpg";
import Color from "../../assets/Color.jpg";
import Bridal from "../../assets/Bridal.jpg";
import Skin from "../../assets/Skin.jpg";
import Spa from "../../assets/Spa.jpg";
// import Nail from "../../assets/Nail.jpg";

const Services = () => {

  const hairServices = [
    {
      service: "Women's Haircut",
      description: "Precision haircut with wash & styling",
      duration: "60 min",
      price: "£40",
    },
    {
      service: "Men's Haircut",
      description: "Classic haircut tailored to your style",
      duration: "45 min",
      price: "£25",
    },
    {
      service: "Kids Haircut",
      description: "Gentle haircut for children",
      duration: "30 min",
      price: "£20",
    },
    {
      service: "Hair Wash & Blow Dry",
      description: "Luxury wash with professional styling",
      duration: "30 min",
      price: "£30",
    },
    {
      service: "Hair Spa",
      description: "Deep nourishment and scalp care",
      duration: "60 min",
      price: "£55",
    },
    {
      service: "Keratin Treatment",
      description: "Smooth and frizz-free treatment",
      duration: "3 hrs",
      price: "From £180",
    },
  ];

  const colorServices = [
    {
      service: "Global Hair Color",
      description: "Rich, long-lasting full hair color",
      duration: "2 hrs",
      price: "From £80",
    },
    {
      service: "Highlights",
      description: "Natural dimensional highlights",
      duration: "3 hrs",
      price: "From £120",
    },
    {
      service: "Balayage",
      description: "Luxury hand-painted color",
      duration: "4 hrs",
      price: "From £180",
    },
  ];

  const bridalServices = [
    {
      service: "Bridal Makeup",
      description: "Luxury bridal makeup with premium products",
      duration: "3 hrs",
      price: "£250",
    },
    {
      service: "Engagement Makeup",
      description: "Elegant makeup for engagement events",
      duration: "2 hrs",
      price: "£180",
    },
    {
      service: "Party Makeup",
      description: "Professional party glam look",
      duration: "90 min",
      price: "£80",
    },
  ];
const skinServices = [
  {
    service: "Luxury Facial",
    description: "Deep cleansing and hydration facial",
    duration: "60 min",
    price: "£60",
  },
  {
    service: "Hydra Facial",
    description: "Advanced hydration treatment",
    duration: "75 min",
    price: "£90",
  },
  {
    service: "Anti-Aging Facial",
    description: "Firming and rejuvenating skincare",
    duration: "90 min",
    price: "£120",
  },
];

const spaServices = [
  {
    service: "Swedish Massage",
    description: "Relaxing full body massage",
    duration: "60 min",
    price: "£70",
  },
  {
    service: "Hot Stone Therapy",
    description: "Deep muscle relaxation",
    duration: "90 min",
    price: "£110",
  },
  {
    service: "Aromatherapy Massage",
    description: "Essential oil therapy",
    duration: "60 min",
    price: "£80",
  },
];

const nailServices = [
  {
    service: "Classic Manicure",
    description: "Luxury nail care",
    duration: "45 min",
    price: "£30",
  },
  {
    service: "Gel Manicure",
    description: "Long-lasting gel finish",
    duration: "60 min",
    price: "£45",
  },
  {
    service: "Luxury Pedicure",
    description: "Foot care with massage",
    duration: "75 min",
    price: "£55",
  },
];
  return (
    <>
      <HeroSection />

      <IntroSection />

      <ServiceSection
       id="hair"
        title="Luxury Hair Styling"
        subtitle="Hair Styling"
        description="Professional haircuts, treatments and styling tailored to your personality using premium salon products."
        image={Hair}
        services={hairServices}
      />

      <ServiceSection
      id="hair-color"
        title="Luxury Hair Coloring"
        subtitle="Hair Coloring"
        description="Premium colouring techniques that deliver vibrant, healthy and long-lasting results."
        image={Color}
        services={colorServices}
        reverse={true}
      />

      <ServiceSection
       id="bridal"
        title="Luxury Bridal Makeup"
        subtitle="Bridal Makeup"
        description="Flawless bridal and event makeup designed to make every special occasion unforgettable."
        image={Bridal}
        services={bridalServices}
      />
     <ServiceSection
  id="skin"
  title="Luxury Skin Care"
  subtitle="Skin Care"
  description="Professional skincare treatments designed to restore your natural glow."
  image={Skin}
  services={skinServices}
/>

<ServiceSection
  id="spa"
  title="Luxury Spa Therapy"
  subtitle="Spa Therapy"
  description="Relax your body and mind with our premium spa experiences."
  image={Spa}
  services={spaServices}
/>

{/* <ServiceSection
  id="nails"
  title="Luxury Nail Care"
  subtitle="Nail Care"
  description="Elegant manicure and pedicure services with premium products."
  image={Nail}
  services={nailServices}
/>  */}
    </>
  );
};

export default Services;