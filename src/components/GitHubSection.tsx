import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const GitHubSection = () => {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">GitHub Profile & Projects</h2>
        
        <div className="max-w-4xl mx-auto mt-8">
          <motion.div 
            className="glassmorphism p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
          <Github className="w-6 h-6 text-primary" />
          <a 
            href="https://github.com/ulagu2007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold text-base flex items-center gap-2 transition-colors"
          >
            github.com/ulagu2007
            <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="glassmorphism p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-semibold text-sm text-muted-foreground mb-3">Project Repository 1</p>
            <input 
              type="text" 
              placeholder="Enter GitHub project link" 
              className="w-full p-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </motion.div>

            <motion.div 
              className="glassmorphism p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-semibold text-sm text-muted-foreground mb-3">Project Repository 2</p>
              <a 
                href="https://github.com/ulagu2007/website-whisperer-46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold text-base flex items-center gap-2 transition-colors"
              >
                github.com/ulagu2007/website-whisperer-46
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubSection;
