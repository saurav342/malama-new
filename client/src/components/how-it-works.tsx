import { motion } from "framer-motion";
import { Smartphone, MapPin, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Smartphone,
      title: "Book in Just 2 Taps",
      description: "Quick and easy booking via WhatsApp, phone call, or our mobile app. No complicated forms.",
      color: "from-yellow-400 to-lime-500",
    },
    {
      number: "2",
      icon: MapPin,
      title: "Track Your Driver",
      description: "Real-time GPS tracking lets you know exactly when your driver will arrive at your location.",
      color: "from-lime-400 to-green-500",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Pick & Arrive Safely",
      description: "Enjoy a comfortable, eco-friendly ride with our professional drivers. Arrive on time, every time.",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-how-heading">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-subheading">
            Book your eco-friendly ride in three simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-lime-400 to-green-400 opacity-20" style={{ width: 'calc(100% - 12rem)', left: '6rem' }} />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Step Card */}
              <div className="relative z-10 text-center" data-testid={`card-step-${index}`}>
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative`}
                >
                  <step.icon className="w-12 h-12 text-white" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </div>

              {/* Arrow (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the difference?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://wa.me/917975612340"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold text-lg shadow-lg hover-elevate active-elevate-2"
              data-testid="button-book-whatsapp"
            >
              Book via WhatsApp
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </motion.a>
            <motion.a
              href="tel:+917975612340"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-md font-semibold text-lg shadow-lg hover-elevate active-elevate-2"
              data-testid="button-call-us"
            >
              Call +91 79756 12340
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
