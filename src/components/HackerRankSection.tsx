import { Code2 } from "lucide-react";
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
      problems: [easyJava1, easyJava2]
    },
    { 
      level: "Medium", 
      language: "Java", 
      gradient: "from-yellow-500 to-orange-500",
      problems: [mediumJava1, mediumJava2]
    },
    { 
      level: "Hard", 
      language: "Python", 
      gradient: "from-red-500 to-pink-500",
      problems: [hardPython1, hardPython2]
    }
  ];

  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">HackerRank Problem Solving</h2>
        
        <div className="space-y-8 mt-12 max-w-5xl mx-auto">
          {problemCategories.map((category, catIndex) => (
            <motion.div 
              key={`${category.level}-${category.language}`} 
              className="glassmorphism p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.level} Level - {category.language}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.problems.map((problemImage, idx) => (
                  <motion.div 
                    key={idx}
                    className="glassmorphism p-4 hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + idx * 0.1, duration: 0.5 }}
                  >
                    <p className="text-sm font-semibold mb-3 text-muted-foreground">Problem {idx + 1}</p>
                    <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                      <img 
                        src={problemImage} 
                        alt={`${category.level} ${category.language} Problem ${idx + 1}`}
                        className="w-full h-auto"
                      />
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
