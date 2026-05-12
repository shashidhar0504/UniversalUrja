"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Spiritual Seeker",
    text: "UniversalUrja completely changed my perspective. The crystal recommendation was spot on, and the consultation brought me immense clarity during a chaotic phase of my life.",
  },
  {
    name: "Ananya Desai",
    role: "Entrepreneur",
    text: "The Loshu Grid analysis was an eye-opener. It perfectly mapped out my strengths and where I needed to direct my energy. The Citrine crystal has become my daily companion.",
  },
  {
    name: "Rohan Kapoor",
    role: "Creative Director",
    text: "I was skeptical at first, but the premium experience and the deep knowledge of the consultants won me over. Highly recommend their personalized numerology guidance.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="heading-cinzel text-4xl md:text-5xl mb-16 text-[#3B0764]">
          Voices of Awakening
        </h2>

        <div className="relative bg-glass-card rounded-3xl p-10 md:p-16 border border-[#D4AF37]/30 shadow-[0_15px_50px_rgba(212,175,55,0.1)]">
          <Quote size={48} className="text-[#D4AF37] opacity-20 absolute top-8 left-8" />
          
          <div className="h-48 md:h-40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-[#4B5563] italic mb-8 leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="heading-cinzel text-lg font-bold text-[#3B0764]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[#8B5CF6]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-[#E9D5FF] flex items-center justify-center text-[#8B5CF6] hover:bg-[#F6F1FF] hover:border-[#8B5CF6] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-[#E9D5FF] flex items-center justify-center text-[#8B5CF6] hover:bg-[#F6F1FF] hover:border-[#8B5CF6] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
