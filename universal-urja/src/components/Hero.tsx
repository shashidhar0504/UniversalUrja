"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, UserCheck, Truck } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={24} className="text-[#8B5CF6]" />, title: "Authentic Crystals", sub: "100% Genuine & Certified" },
  { icon: <Sparkles size={24} className="text-[#8B5CF6]" />, title: "Personalized Guidance", sub: "Recommendations for You" },
  { icon: <UserCheck size={24} className="text-[#8B5CF6]" />, title: "Expert Consultation", sub: "From Experienced Experts" },
  { icon: <Truck size={24} className="text-[#8B5CF6]" />, title: "Secure Shipping", sub: "Safe & Trusted Platform" }
];

export default function Hero() {
  return (
    <section className="relative w-full pt-36 pb-12 overflow-hidden bg-[#F6F1FF]">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F1FF] via-white to-[#F6F1FF] z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B0764] leading-[1.2] mb-6 font-cinzel"
            >
              Discover the Power of <br />
              <span className="text-[#8B5CF6]">Spiritual Energy</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#4B5563] text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Authentic Crystals, Expert Guidance & Personalized Recommendations to Bring Balance, Prosperity & Happiness into Your Life.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#3B0764] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#8B5CF6] transition-colors">
                EXPLORE COLLECTION
              </button>
              
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-[#3B0764] text-[#3B0764] font-medium text-sm tracking-wide hover:bg-[#F6F1FF] transition-colors">
                BOOK CONSULTATION
              </button>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative flex justify-center items-center"
          >
            {/* Glowing background behind image */}
            <div className="absolute inset-0 bg-[#8B5CF6] opacity-10 blur-[80px] rounded-full scale-75" />
            
            <img 
              src="/logo.png" 
              alt="Spiritual Energy Globe" 
              className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] animate-float"
            />
          </motion.div>
        </div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E9D5FF]/50 p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E9D5FF]/50">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 sm:pt-0' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-[#F6F1FF] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-[#3B0764] font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-[#4B5563]">{feature.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
