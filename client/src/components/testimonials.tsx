import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Priya S.",
      role: "Regular Customer",
      content: "Excellent service! Clean cars and professional drivers. My go-to choice for daily commute to the airport. The EV rides are so smooth and quiet.",
      rating: 5,
      avatar: "P",
    },
    {
      name: "Rahul M.",
      role: "Business Traveler",
      content: "The app is super easy to use and the fare transparency is amazing. No surprises! Booking is quick and drivers are always on time.",
      rating: 5,
      avatar: "R",
    },
    {
      name: "Anjali K.",
      role: "Frequent Flyer",
      content: "Love the eco-friendly approach! The cars are always clean and well-maintained. Drivers are courteous and know the best routes to avoid traffic.",
      rating: 5,
      avatar: "A",
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-testimonials-heading">
            What Our Riders Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
            Real experiences from real customers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="overflow-hidden" data-testid="card-testimonial">
            <CardContent className="p-12 md:p-16 relative min-h-[400px] flex items-center justify-center">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center relative z-10 w-full"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {testimonials[currentIndex].avatar}
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                        data-testid={`icon-star-${i}`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-2xl mx-auto" data-testid="text-testimonial-content">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="font-bold text-lg" data-testid="text-testimonial-name">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground" data-testid="text-testimonial-role">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  data-testid={`button-dot-${index}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
