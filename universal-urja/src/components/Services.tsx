"use client";

import { motion } from "framer-motion";
import { Grid3X3, Hash, Flame, Sparkles } from "lucide-react";

const services = [
  {
    title: "Loshu Grid Analysis",
    description: "Unlock hidden potentials and remedy life imbalances through ancient Chinese numerological grids.",
    icon: <Grid3X3 size={32} className="text-[#D4AF37]" />
  },
  {
    title: "Numerology Guidance",
    description: "Discover the profound meaning behind your birth numbers and how they shape your destiny.",
    icon: <Hash size={32} className="text-[#D4AF37]" />
  },
  {
    title: "Crystal Healing",
    description: "Restore physical and energetic balance with prescribed, highly energized gemstones.",
    icon: <Flame size={32} className="text-[#D4AF37]" />
  },
  {
    title: "Spiritual Consultation",
    description: "One-on-one deep guidance sessions to clarify your path and elevate your spiritual journey.",
    icon: <Sparkles size={32} className="text-[#D4AF37]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#F6F1FF] overflow-hidden">
      {/* Mandala Background Pattern */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow fill-[#8B5CF6]">
          <path d="M50 0 C55 20, 70 30, 100 50 C70 70, 55 80, 50 100 C45 80, 30 70, 0 50 C30 30, 45 20, 50 0 Z" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#8B5CF6" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-cinzel text-4xl md:text-5xl mb-6 text-[#3B0764]"
          >
            Divine Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4B5563] text-lg max-w-2xl mx-auto"
          >
            Comprehensive spiritual systems designed to provide clarity, healing, and profound life direction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-[#E9D5FF] shadow-[0_8px_30px_rgba(139,92,246,0.08)] flex gap-6 hover:bg-white transition-colors duration-500 group"
            >
              <div className="shrink-0 w-16 h-16 rounded-xl bg-[#FCFAFF] flex items-center justify-center border border-[#D4AF37]/30 shadow-inner group-hover:animate-pulse-soft">
                {service.icon}
              </div>
              <div>
                <h3 className="heading-cinzel text-2xl font-bold mb-3 text-[#3B0764]">
                  {service.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-[#8B5CF6] font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wider">
                  Learn More <span className="text-[#D4AF37]">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
