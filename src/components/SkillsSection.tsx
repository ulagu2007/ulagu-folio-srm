import { motion } from "framer-motion";
import { Code2, Database, Brain, Cpu, GitBranch, Terminal } from "lucide-react";

const skills = [
  { name: "Java", level: 90, icon: Code2, color: "from-orange-500 to-red-500" },
  { name: "Python", level: 85, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "C/C++", level: 80, icon: Terminal, color: "from-purple-500 to-pink-500" },
  { name: "AI/ML", level: 85, icon: Brain, color: "from-green-500 to-emerald-500" },
  { name: "Backend Dev", level: 88, icon: Database, color: "from-primary to-accent" },
  { name: "Git", level: 85, icon: GitBranch, color: "from-yellow-500 to-orange-500" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glassmorphism p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
              </div>

              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-right text-sm text-muted-foreground mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;