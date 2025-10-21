import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const PortfolioFooter = () => {
  return (
    <footer className="py-12 relative border-t border-blue-500/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="flex items-center justify-center gap-2 text-blue-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-lg">Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5 text-red-400 fill-red-400" />
            </motion.div>
            <span className="text-lg">by Ulaganathan P</span>
          </motion.div>
          
          <p className="text-sm text-blue-400/60">
            © {new Date().getFullYear()} All rights reserved
          </p>

          <motion.div
            className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
