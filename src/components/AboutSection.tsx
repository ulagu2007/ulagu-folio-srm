import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={ref}
      className="py-32 relative"
      style={{ opacity }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              style={{ y }}
              className="relative"
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass-strong rounded-3xl p-2 neon-box-glow">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={profilePhoto}
                      alt="Ulaganathan P"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-cyan-500/30 rounded-full -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8 space-y-6">
                <motion.p 
                  className="text-lg leading-relaxed text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I'm Ulaganathan P, a B.Tech Computer Science and Engineering student at SRM University, Kattankulathur, 
                  with a strong interest in backend development, artificial intelligence, and innovative technology solutions.
                </motion.p>
                
                <motion.p 
                  className="text-lg leading-relaxed text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  I enjoy building applications that combine logical thinking, problem-solving, and real-world impact. With 
                  hands-on experience in Java, C, C++, Python, and AI/ML concepts, I continuously explore new technologies to 
                  create intelligent and user-friendly systems.
                </motion.p>
                
                <motion.p 
                  className="text-lg leading-relaxed text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  I'm passionate about leveraging technology to improve lives, enhance efficiency, and drive meaningful 
                  innovation in every project I work on.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
