import { motion } from "framer-motion";
import { Code2, Database, Brain, Cpu, GitBranch, Terminal } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "C/C++", icon: Terminal },
  { name: "AI/ML", icon: Brain },
  { name: "Backend Dev", icon: Database },
  { name: "Git", icon: GitBranch },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glassmorphism p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;