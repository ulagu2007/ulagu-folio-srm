import { motion } from "framer-motion";

const PortfolioFooter = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-gradient" />
      <div className="relative container mx-auto px-6 py-12">
        <motion.div 
          className="text-center space-y-3 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-bold">
            Ulaganathan P
          </p>
          <p className="text-sm opacity-90">
            Register Number: RA2411003010265
          </p>
          <p className="text-sm opacity-90">
            Department of Computing Technologies
          </p>
          <p className="text-sm opacity-90">
            SRM Institute of Science and Technology, Kattankulathur
          </p>
          <p className="text-xs opacity-75 mt-4 pt-4 border-t border-white/20">
            Portfolio © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
