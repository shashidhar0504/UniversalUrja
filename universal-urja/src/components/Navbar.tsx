"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, User, Search, ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#FCFAFF] border-b border-[#E9D5FF] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs text-[#4B5563]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#8B5CF6]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#8B5CF6]" />
              <span>support@universalurja.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-1">
              <MapPin size={14} /> Track Order
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-1">
              <User size={14} /> Login / Register
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="UniversalUrja" className="w-10 h-10 object-cover rounded-full shadow-sm" />
            <div className="flex flex-col">
              <span className="heading-cinzel text-xl font-bold text-[#3B0764] leading-none">UNIVERSAL</span>
              <span className="text-[#D4AF37] font-semibold text-sm tracking-[0.2em]">URJA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[#3B0764] font-medium hover:text-[#8B5CF6] transition-colors">Home</a>
            <div className="flex items-center gap-1 text-[#4B5563] font-medium hover:text-[#8B5CF6] cursor-pointer transition-colors">
              Shop <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 text-[#4B5563] font-medium hover:text-[#8B5CF6] cursor-pointer transition-colors">
              Crystals <ChevronDown size={14} />
            </div>
            <a href="#consultation" className="text-[#4B5563] font-medium hover:text-[#8B5CF6] transition-colors">Consultation</a>
            <a href="#about" className="text-[#4B5563] font-medium hover:text-[#8B5CF6] transition-colors">About Us</a>
            <a href="#blog" className="text-[#4B5563] font-medium hover:text-[#8B5CF6] transition-colors">Blog</a>
            <a href="#contact" className="text-[#4B5563] font-medium hover:text-[#8B5CF6] transition-colors">Contact</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[#4B5563] hover:text-[#8B5CF6] transition-colors">
              <Search size={20} />
            </button>
            <button className="text-[#4B5563] hover:text-[#8B5CF6] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden text-[#3B0764]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-[#E9D5FF] shadow-lg flex flex-col py-4 px-6 gap-4 lg:hidden"
          >
            {["Home", "Shop", "Crystals", "Consultation", "About Us", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-[#4B5563] font-medium py-2 border-b border-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-6 pt-4">
              <button className="text-[#4B5563] hover:text-[#8B5CF6]">
                <Search size={20} />
              </button>
              <button className="text-[#4B5563] hover:text-[#8B5CF6] relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </header>
  );
}
