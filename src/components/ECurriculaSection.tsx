import { FileText, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ecurriculaWheel from "@/assets/ecurricula-wheel.png";

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
            
            <div className="glassmorphism p-6">
              <img 
                src={ecurriculaWheel} 
                alt="E-Curricula Completion Wheel - ADVANCED PROGRAMMING PRACTICE (21CSC203P)"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  All 5 Units (20 Sessions) Completed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ECurriculaSection;
