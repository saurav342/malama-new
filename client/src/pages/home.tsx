import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PricingCards } from "@/components/pricing-cards";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { AppDownload } from "@/components/app-download";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <PricingCards />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
        <FAQ />
      </main>

      <Footer />
      
      <FloatingWhatsApp />
      {showScrollTop && <ScrollToTop />}
    </div>
  );
}
