import { Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import easyJava1 from "@/assets/hackerrank-easy1.jpg";
import easyJava2 from "@/assets/hackerrank-easy2.jpg";
import mediumJava1 from "@/assets/hackerrank-medium1.jpg";
import mediumJava2 from "@/assets/hackerrank-medium2.jpg";
import hardPython1 from "@/assets/hackerrank-hard1.jpg";
import hardPython2 from "@/assets/hackerrank-hard2.jpg";

const HackerRankSection = () => {
  const problemCategories = [
    { 
      level: "Easy", 
      language: "Java", 
      gradient: "from-green-500 to-emerald-500",
      problems: [easyJava1, easyJava2],
      icon: "🟢"
    },
    { 
      level: "Medium", 
      language: "Java", 
      gradient: "from-yellow-500 to-orange-500",
      problems: [mediumJava1, mediumJava2],
      icon: "🟡"
    },
    { 
      level: "Hard", 
      language: "Python", 
      gradient: "from-red-500 to-pink-500",
      problems: [hardPython1, hardPython2],
      icon: "🔴"
    }
  ];

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
          <h2 className="section-title">HackerRank Solutions</h2>
        </motion.div>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          {problemCategories.map((category, catIndex) => (
            <motion.div 
              key={`${category.level}-${category.language}`} 
              className="glass-strong rounded-3xl p-8 neon-box-glow relative overflow-hidden"
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} relative`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code2 className="w-8 h-8 text-white" />
                  
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </motion.div>
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white neon-glow">
                    {category.level} Level
                  </h3>
                  <p className="text-cyan-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {category.language}
                  </p>
                </div>
              </div>
              
              {/* Problems Grid */}
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                {category.problems.map((problemImage, idx) => (
                  <motion.div 
                    key={idx}
                    className="glass rounded-2xl p-4 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-cyan-400">Problem {idx + 1}</p>
                      <motion.div
                        className={`w-3 h-3 rounded-full bg-gradient-to-br ${category.gradient}`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      />
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden border-2 border-blue-500/30 group-hover:border-cyan-400/50 transition-colors">
                      <img 
                        src={problemImage} 
                        alt={`${category.level} ${category.language} Problem ${idx + 1}`}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HackerRankSection;
