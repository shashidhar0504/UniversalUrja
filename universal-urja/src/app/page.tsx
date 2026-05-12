import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import CrystalRecommendation from "@/components/CrystalRecommendation";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#F6F1FF] overflow-hidden">
      <Navbar />
      <div className="w-full relative">
        <Hero />
        <ShopByCategory />
        <About />
        <HowItWorks />
        <CrystalRecommendation />
        <Services />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
