import { motion } from "framer-motion";
import { Smartphone, QrCode, Download, Star, MapPin, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AppDownload() {
  const appFeatures = [
    { icon: MapPin, text: "Real-time tracking" },
    { icon: Bell, text: "Instant notifications" },
    { icon: Star, text: "Rate your experience" },
  ];

  return (
    <section id="app-download" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-app-heading">
            Get the Malama App
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-app-subheading">
            Book rides faster and track your driver in real-time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-card border-8 border-card-border rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Screen Content */}
                <div className="bg-gradient-to-br from-yellow-400 via-lime-400 to-green-500 h-full p-8 flex flex-col">
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Smartphone className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Malama</h3>
                      <p className="text-white/90">Eco-Friendly Rides</p>
                    </div>
                    <div className="space-y-3 w-full">
                      {appFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
                          data-testid={`feature-app-${i}`}
                        >
                          <feature.icon className="w-5 h-5 text-white" />
                          <span className="text-white font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-bold z-10"
              >
                Free Download
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>
          </motion.div>

          {/* Right - Download Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* QR Code Card */}
            <Card className="p-8" data-testid="card-qr">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-20 h-20 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Scan to Download</h3>
                  <p className="text-muted-foreground">
                    Point your camera at the QR code to download the app instantly
                  </p>
                </div>
              </div>
            </Card>

            {/* App Store Badges */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center md:text-left">Available now on</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.malamacabs.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                  data-testid="link-play-store"
                >
                  <Card className="p-6 hover-elevate active-elevate-2 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">GET IT ON</div>
                        <div className="font-bold text-lg">Google Play</div>
                      </div>
                    </div>
                  </Card>
                </motion.a>

                <motion.a
                  href="https://apps.apple.com/app/malama/id6740285748"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                  data-testid="link-app-store"
                >
                  <Card className="p-6 hover-elevate active-elevate-2 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">Download on the</div>
                        <div className="font-bold text-lg">App Store</div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.8 rating from 500+ users</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
