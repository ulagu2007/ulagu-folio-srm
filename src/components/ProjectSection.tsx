import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>
        <motion.div 
          className="glassmorphism p-8 max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border-l-4 border-accent">
          <h3 className="text-2xl font-bold text-primary mb-4">
            MediLife – Smart Health Companion
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Developed a Java Swing-based application with a user-friendly GUI to provide daily wellness tips, 
              health suggestions, and interactive greetings.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Implemented secure login and authentication modules with backend logic to manage user data efficiently.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Integrated health tracking, personalized recommendations, and real-time date/time display for 
              dynamic interactivity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Designed backend algorithms to analyze user inputs and provide tailored lifestyle advice.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Demonstrates full-stack Java development using GUI design, backend logic, and data handling.</span>
            </li>
          </ul>
        </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
