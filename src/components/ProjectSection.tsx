import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Haze Away Magic",
    description: "An innovative air quality monitoring and prediction system using machine learning algorithms to forecast pollution levels.",
    technologies: ["Python", "Machine Learning", "Flask", "React"],
    github: "https://github.com/ulagu2007/haze-away-magic",
    live: "#"
  },
  {
    title: "AI-Powered Backend System",
    description: "Scalable backend architecture with AI-driven features for intelligent data processing and real-time analytics.",
    technologies: ["Node.js", "PostgreSQL", "TensorFlow", "Docker"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart Automation Tool",
    description: "Automated workflow system that leverages AI to optimize business processes and reduce manual intervention.",
    technologies: ["Python", "FastAPI", "Redis", "Celery"],
    github: "#",
    live: "#"
  }
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            A showcase of my recent work in backend development and AI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-primary p-6 group transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Code</span>
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
