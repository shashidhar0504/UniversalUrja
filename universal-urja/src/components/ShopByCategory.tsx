"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";

const categories = [
  { name: "Healing Crystals", image: "bg-gradient-to-br from-purple-200 to-purple-600" },
  { name: "Crystal Bracelets", image: "bg-gradient-to-br from-orange-200 to-orange-600" },
  { name: "Spiritual Powders", image: "bg-gradient-to-br from-yellow-200 to-yellow-600" },
  { name: "Energy Products", image: "bg-gradient-to-br from-amber-600 to-amber-900" },
  { name: "Home & Decor", image: "bg-gradient-to-br from-yellow-400 to-yellow-700" }
];

const features = [
  { icon: <Truck size={24} className="text-[#8B5CF6]" />, title: "FREE SHIPPING", sub: "On orders above ₹999" },
  { icon: <ShieldCheck size={24} className="text-[#8B5CF6]" />, title: "SECURE PAYMENT", sub: "100% Safe & Secure" },
  { icon: <RefreshCw size={24} className="text-[#8B5CF6]" />, title: "EASY RETURNS", sub: "7 Days Return Policy" },
  { icon: <HeadphonesIcon size={24} className="text-[#8B5CF6]" />, title: "24/7 SUPPORT", sub: "We're here to help" }
];

export default function ShopByCategory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <h2 className="heading-cinzel text-3xl md:text-4xl text-[#3B0764]">Shop By Category</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
          </div>
          <p className="text-[#4B5563]">Explore our wide range of spiritual & healing products.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full border border-[#E9D5FF] shadow-sm mb-4 p-2 group-hover:shadow-md transition-all group-hover:scale-105">
                <div className={`w-full h-full rounded-full ${cat.image} opacity-80`} />
              </div>
              <h4 className="text-[#3B0764] font-medium text-sm text-center mb-1">{cat.name}</h4>
              <span className="text-xs text-[#8B5CF6] group-hover:text-[#3B0764] transition-colors">View Collection</span>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner Bottom */}
        <div className="border border-[#E9D5FF] rounded-lg p-6 bg-[#FCFAFF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E9D5FF]">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#E9D5FF]/50">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="text-[13px] font-bold text-[#3B0764] tracking-wide">{feature.title}</h5>
                  <p className="text-[11px] text-[#4B5563]">{feature.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
