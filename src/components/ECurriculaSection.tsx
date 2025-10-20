import { FileText, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ECurriculaSection = () => {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">E-Curricula Completion</h2>
        
        <motion.div 
          className="max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="glassmorphism p-8">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-accent mr-3" />
              <FileText className="w-12 h-12 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-center text-primary mb-6 glow-text">
              E-Curricula Wheel Proof
            </h3>
            
            <a 
              href="/ktretecurricula2024.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block glassmorphism p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <CheckCircle className="relative w-16 h-16 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-primary mb-2">View Completion Certificate</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
                    All 5 Units (20 Sessions) Completed
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ECurriculaSection;
