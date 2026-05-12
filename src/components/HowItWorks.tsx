"use client";

import { motion } from "framer-motion";
import { UserCircle, Sparkles, Gem, CalendarHeart } from "lucide-react";

const steps = [
  {
    icon: <UserCircle size={28} className="text-[#D4AF37]" />,
    title: "Enter Your Details",
    description: "Share your birth details or current life focus with us."
  },
  {
    icon: <Sparkles size={28} className="text-[#D4AF37]" />,
    title: "Get Recommendations",
    description: "Our system calculates the perfect crystal for your energy."
  },
  {
    icon: <Gem size={28} className="text-[#D4AF37]" />,
    title: "Explore Products",
    description: "Browse our premium collection of authentic, energized crystals."
  },
  {
    icon: <CalendarHeart size={28} className="text-[#D4AF37]" />,
    title: "Book Consultation",
    description: "Connect with our experts for deep spiritual guidance."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative bg-[#F6F1FF] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-cinzel text-4xl md:text-5xl mb-6 text-[#3B0764]">
            Your Journey to Healing
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
            A simple, intuitive four-step path to discovering the energy that aligns with your destiny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border border-[#E9D5FF] shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-6 group relative">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-10 scale-110 transition-all duration-300" />
                <div className="relative z-10 bg-[#FCFAFF] w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B0764] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="heading-cinzel text-xl font-semibold mb-3 text-[#3B0764]">
                {step.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
