import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const repos = [
    {
      name: "haze-away-magic",
      url: "https://github.com/ulagu2007/haze-away-magic",
      description: "Innovative solution for air quality management",
      language: "Python"
    },
    {
      name: "website-whisperer-46",
      url: "https://github.com/ulagu2007/website-whisperer-46",
      description: "Advanced web development project",
      language: "TypeScript"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            GitHub Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Explore my open-source contributions and code repositories
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-primary p-8 transition-all duration-300"
              >
                <Github className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{repo.name}</h3>
                <p className="text-gray-600 mb-6">{repo.description}</p>

                <div className="mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full font-medium border border-primary/20">
                    {repo.language}
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  View Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
