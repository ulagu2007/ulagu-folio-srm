import { FileText, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import ecurriculaWheel from "@/assets/ecurricula-wheel.png";

const ECurriculaSection = () => {
  return (
    <motion.section 
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">E-Curricula Completion</h2>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="glass-strong rounded-3xl p-8 neon-box-glow">
            {/* Header Icons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle className="w-10 h-10 text-cyan-400" />
              </motion.div>
              
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 neon-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Advanced Programming Practice
            </motion.h3>
            
            {/* Wheel Image */}
            <motion.div 
              className="glass rounded-2xl p-4 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative rounded-xl overflow-hidden m-[2px] bg-[#0a0e27]">
                <img 
                  src={ecurriculaWheel} 
                  alt="E-Curricula Completion Wheel - ADVANCED PROGRAMMING PRACTICE (21CSC203P)"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Completion Badge */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <div className="inline-flex items-center gap-3 glass-strong px-6 py-3 rounded-full neon-box-glow">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-semibold text-white">
                  All 5 Units (20 Sessions) Completed
                </span>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ECurriculaSection;
