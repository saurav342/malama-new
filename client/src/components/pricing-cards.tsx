import { motion } from "framer-motion";
import { ArrowRight, MapPin, Plane, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingCards() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const pricingOptions = [
    {
      title: "City to Airport",
      price: "₹899",
      icon: Plane,
      gradient: "from-yellow-400 to-lime-500",
      features: [
        "Professional driver",
        "Clean EV sedan",
        "Luggage space",
        "Real-time tracking",
      ],
    },
    {
      title: "Airport to City",
      price: "₹999",
      icon: MapPin,
      gradient: "from-lime-500 to-green-500",
      features: [
        "Flight monitoring",
        "Wait time included",
        "Meet & greet service",
        "Safe & comfortable",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-pricing-heading">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subheading">
            No hidden charges. Book at least 4 hours in advance for best rates.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 h-full border-2" data-testid={`card-pricing-${index}`}>
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${option.gradient}`} />

                <CardHeader className="space-y-4 pt-8">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center`}>
                      <option.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground font-medium">Starting from</div>
                      <div className="text-4xl font-bold" data-testid={`text-price-${index}`}>{option.price}*</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl" data-testid={`text-pricing-title-${index}`}>{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    Perfect for hassle-free airport transfers
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3" data-testid={`text-feature-${index}-${i}`}>
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${option.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    size="lg"
                    className="w-full gap-2 text-lg"
                    onClick={() => window.open("https://wa.me/917975612340", "_blank")}
                    data-testid={`button-book-${index}`}
                  >
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card border border-card-border rounded-lg p-6"
          data-testid="card-disclaimer"
        >
          <div className="flex gap-4">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">* Pricing Details:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Toll charges excluded</li>
                <li>Prices valid for distances up to 45 KM</li>
                <li>₹25 per KM above 45 KM</li>
                <li>Book at least 4 hours in advance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
