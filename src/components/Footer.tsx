import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F1FF] border-t border-[#D4AF37]/20 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="UniversalUrja" className="w-12 h-12 object-cover rounded-full shadow-lg border-2 border-[#D4AF37]/30" />
              <span className="heading-cinzel text-xl font-bold text-[#3B0764]">UniversalUrja</span>
            </div>
            <p className="text-[#4B5563] text-sm mb-6 leading-relaxed">
              Where Energy becomes destiny. Discover personalized crystals and spiritual guidance for your unique journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#8B5CF6] hover:text-[#3B0764] transition-colors">Our Blog</a>
              <a href="#" className="text-[#8B5CF6] hover:text-[#3B0764] transition-colors">Community</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-cinzel text-[#3B0764] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "How It Works", "Crystal Shop", "Book Consultation", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#4B5563] text-sm hover:text-[#8B5CF6] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="heading-cinzel text-[#3B0764] font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#4B5563] text-sm">
                <Mail size={16} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>blessings@universalurja.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#4B5563] text-sm">
                <Phone size={16} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-[#4B5563] text-sm">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>Sacred Space, New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="heading-cinzel text-[#3B0764] font-semibold mb-6">Newsletter</h4>
            <p className="text-[#4B5563] text-sm mb-4">
              Subscribe to receive weekly spiritual insights and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border border-[#E9D5FF] px-4 py-2 rounded-lg text-sm outline-none focus:border-[#8B5CF6] transition-colors"
              />
              <button className="bg-[#8B5CF6] hover:bg-[#3B0764] text-white text-sm font-medium py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-8" />

        {/* Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#4B5563]">
          <p>&copy; {new Date().getFullYear()} UniversalUrja. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
