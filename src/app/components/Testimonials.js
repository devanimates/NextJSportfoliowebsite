"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      quote: "This product is amazing! It has changed my life.",
      image: "/images/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "I highly recommend this service to everyone.",
      image: "/images/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      quote: "I'm so glad I found this company. They are the best.",
      image: "/images/testimonial3.jpg",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index, newQuote) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index].quote = newQuote;
    setTestimonials(updatedTestimonials);
    setEditingIndex(-1);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="container px-4 mx-auto">
      <h2 className="text-4xl font-bold text-white  mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#181818] rounded-lg p-6 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <h3 className="text-white font-bold text-xl">
                  {testimonial.name}
                </h3>
              </div>
              {editingIndex === index ? (
                <input
                  type="text"
                  defaultValue={testimonial.quote}
                  className="bg-[#121212] text-white w-full p-2 rounded-lg mb-4"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSave(index, e.target.value);
                    }
                  }}
                />
              ) : (
                <p className="text-[#ADB7BE] text-base">{testimonial.quote}</p>
              )}
              <button
                className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-4 py-2 rounded-full"
                onClick={() => handleEdit(index)}
              >
                {editingIndex === index ? "Save" : "Edit"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;