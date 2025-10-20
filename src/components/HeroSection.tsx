import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Ulaganathan P";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 animate-gradient">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 glow-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {text}
              <motion.span
                className="inline-block w-1 h-12 lg:h-16 bg-primary ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Backend Developer | AI Enthusiast | Innovator
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold btn-glow hover:scale-105 transition-transform">
                View Projects
              </button>
              <button className="px-8 py-3 glassmorphism text-primary font-semibold hover:scale-105 transition-transform">
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-20" />
              <div className="absolute inset-2 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-xl" />
              <img 
                src={profilePhoto}
                alt="Ulaganathan P"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-glow"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;