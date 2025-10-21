import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

const GitHubSection = () => {
  const repos = [
    {
      name: "haze-away-magic",
      url: "https://github.com/ulagu2007/haze-away-magic",
      description: "Innovative solution for air quality management",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "website-whisperer-46",
      url: "https://github.com/ulagu2007/website-whisperer-46",
      description: "Advanced web development project",
      gradient: "from-cyan-500 to-blue-400"
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
          <h2 className="section-title">GitHub Projects</h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile */}
          <motion.div 
            className="glass-strong rounded-2xl p-6 neon-box-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-8 h-8 text-white" />
              </motion.div>
              
              <a 
                href="https://github.com/ulagu2007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors group"
              >
                github.com/ulagu2007
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </a>
            </div>
          </motion.div>

          {/* Repositories */}
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                className="glass-strong rounded-2xl p-6 neon-box-glow group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${repo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-br ${repo.gradient}`}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <GitFork className="w-5 h-5 text-white" />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h3>
                  
                  <p className="text-sm text-blue-300/80 mb-4">
                    {repo.description}
                  </p>

                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2 transition-colors"
                  >
                    View Repository
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubSection;
