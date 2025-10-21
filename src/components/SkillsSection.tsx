import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal, GitBranch, Cpu } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2, level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Python", icon: Code2, level: 85, color: "from-cyan-500 to-blue-400" },
  { name: "C/C++", icon: Terminal, level: 80, color: "from-blue-400 to-indigo-500" },
  { name: "AI/ML", icon: Brain, level: 75, color: "from-indigo-500 to-purple-500" },
  { name: "Backend", icon: Database, level: 88, color: "from-blue-500 to-cyan-400" },
  { name: "Git", icon: GitBranch, level: 85, color: "from-cyan-400 to-blue-500" },
];

const SkillsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 10,
              }}
              className="relative group"
            >
              <div className="glass-strong rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-4 cursor-pointer neon-box-glow">
                {/* Icon with gradient background */}
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white text-center">{skill.name}</h3>

                {/* Progress Ring */}
                <div className="relative w-16 h-16">
                  <svg className="transform -rotate-90 w-16 h-16">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                      fill="none"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 175.93" }}
                      whileInView={{
                        strokeDasharray: `${(skill.level / 100) * 175.93} 175.93`,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-400">{skill.level}%</span>
                  </div>
                </div>
              </div>

              {/* Hover effect particles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
