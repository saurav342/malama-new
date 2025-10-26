import { motion } from "framer-motion";
import { Zap, Shield, Car, Briefcase, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: "100% Electric",
      description: "Zero emissions, eco-friendly EV rides for a sustainable future",
      gradient: "from-yellow-400 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Clean & Hygienic",
      description: "Sanitized after every ride with regular deep cleaning",
      gradient: "from-lime-400 to-lime-500",
    },
    {
      icon: Car,
      title: "Comfortable Sedan",
      description: "Spacious, well-maintained vehicles with AC and comfortable seating",
      gradient: "from-green-400 to-green-500",
    },
    {
      icon: Briefcase,
      title: "Ample Boot Space",
      description: "Plenty of room for your luggage and travel essentials",
      gradient: "from-emerald-400 to-emerald-500",
    },
    {
      icon: Award,
      title: "Professional Drivers",
      description: "Experienced, courteous drivers with excellent local knowledge",
      gradient: "from-teal-400 to-teal-500",
    },
    {
      icon: Leaf,
      title: "Green Initiative",
      description: "Contributing to cleaner air and reduced carbon footprint",
      gradient: "from-cyan-400 to-cyan-500",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-features-heading">
            Why Choose Malama Cabs?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subheading">
            Experience the perfect blend of comfort, sustainability, and affordability
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`card-feature-${index}`}>
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
