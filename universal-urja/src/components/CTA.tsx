"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#F6F1FF_0%,#FFFFFF_100%)] z-0" />
      
      {/* Golden Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full z-0 pointer-events-none animate-aura-glow" />

      {/* Subtle Mandala Watermark */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow fill-[#3B0764]">
          <path d="M50 0 C55 20, 70 30, 100 50 C70 70, 55 80, 50 100 C45 80, 30 70, 0 50 C30 30, 45 20, 50 0 Z" />
          <path d="M50 10 C53 25, 65 35, 90 50 C65 65, 53 75, 50 90 C47 75, 35 65, 10 50 C35 35, 47 25, 50 10 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-cinzel text-4xl md:text-6xl mb-6 text-[#3B0764]"
        >
          Need Personal <br/>
          <span className="gold-gradient-text">Spiritual Guidance?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#4B5563] text-lg md:text-xl mb-12 max-w-2xl text-balance"
        >
          Our master consultants are ready to illuminate your path. Connect with us to decode your destiny and find the perfect healing elements.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white font-medium text-lg shadow-[0_8px_25px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            <CalendarHeart size={20} />
            Book Consultation
          </button>
          
          <button className="px-8 py-4 rounded-full bg-white text-[#25D366] font-medium text-lg border border-[#E9D5FF] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            WhatsApp Chat
          </button>
        </motion.div>
      </div>
    </section>
  );
}
