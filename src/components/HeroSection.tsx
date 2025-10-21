import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Ulaganathan P";
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Typing Animation */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-glow">
                {text}
                {showCursor && <span className="text-cyan-400">|</span>}
              </h1>
              
              {/* Glitch Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="relative"
              >
                <p className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Turning code into smart, scalable, and meaningful technology solutions.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="text-lg md:text-xl text-blue-300/80 mb-12 font-light tracking-wide"
              >
                Backend Developer • AI Enthusiast • Innovator
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.6 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  className="px-10 py-4 btn-neon rounded-full text-white font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="px-10 py-4 glass rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-cyan-500/30"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                
                {/* Photo */}
                <motion.div
                  className="absolute inset-8 rounded-full overflow-hidden glass-strong neon-box-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={profilePhoto}
                    alt="Ulaganathan P"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-20 h-20 border border-blue-500/30 rounded-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-32 right-20 w-16 h-16 border border-cyan-500/30 rounded-full"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
