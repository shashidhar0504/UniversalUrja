"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, UserCheck, Lock } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={20} className="text-[#8B5CF6]" />, title: "Authentic & Certified", sub: "100% Genuine Products" },
  { icon: <Heart size={20} className="text-[#8B5CF6]" />, title: "Trusted by Thousands", sub: "5000+ Happy Customers" },
  { icon: <UserCheck size={20} className="text-[#8B5CF6]" />, title: "Expert Guidance", sub: "From Experienced Experts" },
  { icon: <Lock size={20} className="text-[#8B5CF6]" />, title: "Secure & Reliable", sub: "Safe & Trusted Platform" }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
          
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm mb-4 flex items-center gap-2"
            >
              <div className="w-8 h-[1px] bg-[#D4AF37]" /> ABOUT US
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-cinzel text-4xl md:text-5xl mb-6 text-[#3B0764] leading-tight"
            >
              Ancient Wisdom, <br />
              Modern Guidance
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4B5563] text-base leading-relaxed space-y-4 mb-10"
            >
              <p>
                UniversalUrja is a spiritual wellness platform dedicated to helping individuals discover positivity, healing, and balance through authentic crystals, astrology, and personalized guidance.
              </p>
              <p>
                Our mission is to combine ancient spiritual wisdom with modern technology to provide trusted products, personalized recommendations, and expert consultations for your spiritual journey.
              </p>
            </motion.div>

            {/* Founder Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#FCFAFF] border border-[#E9D5FF] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#E9D5FF] to-white flex-shrink-0 overflow-hidden relative">
                {/* Placeholder for Founder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-[#8B5CF6]">
                  <UserCheck size={40} />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#8B5CF6] font-semibold uppercase tracking-wider mb-1">Meet Our Founder</p>
                <h4 className="heading-cinzel text-xl font-bold text-[#3B0764] mb-1">Shitol Padwal</h4>
                <p className="text-sm text-[#4B5563] font-medium mb-3">Founder & Spiritual Consultant</p>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Shitol is a passionate spiritual practitioner and wellness guide with years of experience in astrology, crystal healing, and energy alignment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_60%)] rounded-full animate-pulse-soft" />
            <img 
              src="/logo.png" 
              alt="UniversalUrja Aura" 
              className="relative w-full max-w-[400px] object-contain drop-shadow-xl z-10"
            />
          </motion.div>
        </div>

        {/* Features Bottom Row */}
        <div className="border-t border-[#E9D5FF] pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCFAFF] flex items-center justify-center border border-[#E9D5FF]">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#3B0764]">{feature.title}</h5>
                  <p className="text-xs text-[#4B5563]">{feature.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
