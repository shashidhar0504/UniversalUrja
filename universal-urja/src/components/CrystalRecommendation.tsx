"use client";

import { motion } from "framer-motion";

const recommendations = [
  {
    goal: "Wealth & Abundance",
    crystal: "Citrine",
    description: "The merchant's stone, bringing prosperity and success.",
    image: "/citrine.png",
    color: "#EAB308"
  },
  {
    goal: "Peace & Intuition",
    crystal: "Amethyst",
    description: "Calms the mind, enhances spiritual awareness and intuition.",
    image: "/amethyst.png",
    color: "#9333EA"
  },
  {
    goal: "Protection & Grounding",
    crystal: "Black Tourmaline",
    description: "Shields against negative energy and promotes a sense of security.",
    image: "/black-tourmaline.png",
    color: "#374151"
  }
];

export default function CrystalRecommendation() {
  return (
    <section id="crystals" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-cinzel text-4xl md:text-5xl mb-4 text-[#3B0764]">
              Energy Meets Destiny
            </h2>
            <p className="text-[#4B5563] text-lg">
              Our intelligent recommendation system aligns your core intentions with the perfect earthly elements.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full bg-glass text-[#8B5CF6] border border-[#8B5CF6]/30 font-medium hover:bg-[#8B5CF6] hover:text-white transition-all whitespace-nowrap shadow-sm">
            Find Your Crystal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-[#FCFAFF] rounded-3xl p-1 border border-[#E9D5FF] shadow-[0_10px_40px_rgba(196,181,253,0.1)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F6F1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="bg-white rounded-[1.4rem] p-8 h-full relative z-10 flex flex-col items-center text-center">
                <div className="text-sm font-medium tracking-wider text-[#4B5563] uppercase mb-6">
                  For {item.goal}
                </div>
                
                {/* AI Generated Crystal Image */}
                <div className="relative w-32 h-32 mb-8 animate-float flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full opacity-30 blur-2xl" style={{ backgroundColor: item.color }} />
                  <img src={item.image} alt={item.crystal} className="relative z-10 w-full h-full object-contain drop-shadow-xl" />
                </div>

                <h3 className="heading-cinzel text-2xl font-bold mb-3 text-[#3B0764]">
                  {item.crystal}
                </h3>
                <p className="text-[#4B5563]">
                  {item.description}
                </p>

                <div className="mt-8 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Custom clip-path for crystal shape defined in global styles or inline style */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-crystal {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}} />
    </section>
  );
}
