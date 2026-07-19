import React, { useState } from "react";
const Appointment = () => {
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
});

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  }

  if (!formData.service) {
    newErrors.service = "Please select a service";
  }

  if (!formData.date) {
    newErrors.date = "Please choose a date";
  }

  if (!formData.time) {
    newErrors.time = "Please choose a time";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }
};
  return (
    <section className="bg-[#FCFAF7] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-yellow-600 font-medium">
            Book Appointment
          </p>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Reserve Your Luxury Salon Experience
          </h1>

          <p className="text-gray-600 mt-6 leading-8">
            Book your appointment with our professional stylists and enjoy
            premium beauty services in a relaxing and luxurious environment.
          </p>

        </div>

        {/* Main Layout */}

<div className="max-w-3xl mx-auto mt-20">
          {/* Left Side */}

<div className="bg-white rounded-3xl shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8">
              Book Your Appointment
            </h2>

<form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

               <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-600"
/>

{errors.name && (
  <p className="text-red-500 text-sm mt-2">
    {errors.name}
  </p>
)}

              </div>

              {/* Phone */}

              <div>

                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+44 123456789"
  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-600"
/>

{errors.phone && (
  <p className="text-red-500 text-sm mt-2">
    {errors.phone}
  </p>
)}

              </div>

              {/* Service */}

              <div>

                <label className="block mb-2 font-medium">
                  Select Service
                </label>

                <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-600"
>
  <option value="">Select Service</option>
  <option>Women's Haircut</option>
  <option>Men's Haircut</option>
  <option>Hair Coloring</option>
  <option>Hair Spa</option>
  <option>Keratin Treatment</option>
  <option>Bridal Makeup</option>
</select>

{errors.service && (
  <p className="text-red-500 text-sm mt-2">
    {errors.service}
  </p>
)}

              </div>

              {/* Date & Time */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block mb-2 font-medium">
                    Preferred Date
                  </label>

                  <input
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-600"
/>

{errors.date && (
  <p className="text-red-500 text-sm mt-2">
    {errors.date}
  </p>
)}

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Preferred Time
                  </label>

                  <input
  type="time"
  name="time"
  value={formData.time}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-yellow-600"
/>

{errors.time && (
  <p className="text-red-500 text-sm mt-2">
    {errors.time}
  </p>
)}

                </div>

              </div>

              {/* Button */}

             <button
  type="submit"
  className="
    w-full
    bg-yellow-600
    text-white
    py-4
    rounded-full
    text-lg
    font-semibold
    hover:bg-black
    duration-300
  "
>
  Book Appointment
</button>
{success && (
  <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-4 text-center">
    ✅ Your appointment request has been submitted successfully. We'll contact you shortly.
  </div>
)}

              <p className="text-center text-gray-500 text-sm leading-6">
                We'll contact you shortly to confirm your appointment.
              </p>

            </form>

          </div>

         
        </div>

      </div>

    </section>
  );
};

export default Appointment;