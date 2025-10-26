import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What are the charges for an airport ride?",
      answer: "City to Airport starts from ₹899* and Airport to City starts from ₹999*. Toll charges are excluded. Prices are for distances up to 45 KM, with ₹25/KM charged for distances above 45 KM.",
    },
    {
      question: "What type of vehicles do you offer?",
      answer: "We offer comfortable sedans with ample boot space for luggage. All our vehicles are 100% electric (EV) for an eco-friendly ride. Cars are clean, hygienic, and sanitized after every ride.",
    },
    {
      question: "How far in advance should I book my ride?",
      answer: "We recommend booking your ride at least 4 hours in advance to ensure availability and get the best rates. However, we'll do our best to accommodate last-minute bookings when possible.",
    },
    {
      question: "How can I book a cab?",
      answer: "You can book via WhatsApp at +91 79756 12340, call us directly, send an SMS, or use our mobile app available on both iOS and Android platforms.",
    },
    {
      question: "Is there an app for booking?",
      answer: "Yes! Our Malama app is available on both iOS (App Store) and Android (Google Play). The app offers features like real-time tracking, instant notifications, and easy booking in just 2 taps.",
    },
    {
      question: "Are your drivers professional and verified?",
      answer: "Absolutely! All our drivers are experienced, professionally trained, courteous, and have excellent knowledge of Bangalore's routes. They undergo thorough background checks and are committed to providing safe, comfortable rides.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-subheading">
            Everything you need to know about Malama Cabs
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold" data-testid={`accordion-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed" data-testid={`accordion-content-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 p-8 bg-card border border-card-border rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you 24/7
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/917975612340"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover-elevate active-elevate-2 transition-all"
              data-testid="button-contact-whatsapp"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917975612340"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-semibold hover-elevate active-elevate-2 transition-all"
              data-testid="button-contact-call"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
