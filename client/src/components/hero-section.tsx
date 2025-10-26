import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone, MessageCircle, Zap, Shield, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroCarImage from "@assets/generated_images/Premium_EV_sedan_hero_35adde6f.png";

export function HeroSection() {
  const { scrollY } = useScroll();
  const carY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-lime-400 to-green-500 animate-gradient-shift opacity-10"
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm" data-testid="badge-ev">
                <Zap className="w-4 h-4 text-primary" />
                100% Electric
              </Badge>
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm" data-testid="badge-clean">
                <Shield className="w-4 h-4 text-primary" />
                Clean & Hygienic
              </Badge>
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm" data-testid="badge-comfort">
                <Car className="w-4 h-4 text-primary" />
                Comfortable Sedan
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
              data-testid="text-hero-headline"
            >
              Economical &{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-lime-500 to-green-500 bg-clip-text text-transparent">
                Green
              </span>
              <br />
              Airport Rides
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              Premium EV cab service in Bangalore. Zero emissions, maximum
              comfort. Starting from just ₹899.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                variant="default"
                onClick={() => scrollToSection("pricing")}
                className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                data-testid="button-book-now"
              >
                Book Now
                <ArrowDown className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/917975612340", "_blank")}
                className="gap-2 text-lg px-8 py-6 backdrop-blur-sm"
                data-testid="button-whatsapp-hero"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+917975612340", "_blank")}
                className="gap-2 text-lg px-8 py-6 backdrop-blur-sm"
                data-testid="button-call-hero"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 text-sm text-muted-foreground"
              data-testid="text-booking-note"
            >
              Book at least 4 hours in advance • Available 24/7
            </motion.p>
          </motion.div>

          {/* Right Content - Car Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            style={{ y: carY }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={heroCarImage}
                alt="Malama EV Cab - Premium Electric Sedan"
                className="w-full h-auto drop-shadow-2xl"
                data-testid="img-hero-car"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-8 right-8 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-bold text-lg"
                data-testid="badge-eco-friendly"
              >
                🌱 Eco-Friendly
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        data-testid="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
