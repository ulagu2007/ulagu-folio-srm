import { motion } from "framer-motion";
import { useState } from "react";
import { X, Award, Maximize2 } from "lucide-react";
import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  
  const certificates = [
    { img: certificateHackathon, title: "Cyber Hackathon", org: "HackTheBox Chennai", gradient: "from-blue-600 to-cyan-600" },
    { img: certificateKiHacks, title: "K! HACKS 2.0", org: "Anna University", gradient: "from-cyan-600 to-blue-500" },
    { img: certificateProducting, title: "Producting101", org: "CodeNex Club SRMIST", gradient: "from-blue-500 to-indigo-600" }
  ];

  return (
    <>
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
            <h2 className="section-title">Achievements & Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="group glass-strong rounded-2xl overflow-hidden cursor-pointer relative neon-box-glow"
                initial={{ opacity: 0, y: 30, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedCert(index)}
              >
                {/* Award Icon */}
                <motion.div
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-gradient-to-br ${cert.gradient}`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-5 h-5 text-white" />
                </motion.div>

                {/* Expand Icon */}
                <motion.div
                  className="absolute top-4 left-4 z-10 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                >
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                </motion.div>

                {/* Image */}
                <div className="overflow-hidden relative h-64">
                  <motion.img 
                    src={cert.img} 
                    alt={`${cert.title} Certificate`} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-10`} />
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10 neon-glow">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-300 relative z-10">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal */}
      {selectedCert !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.button
            className="absolute top-6 right-6 p-3 glass-strong rounded-full neon-box-glow group"
            onClick={() => setSelectedCert(null)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
          </motion.button>
          
          <motion.div
            className="max-w-6xl w-full"
            initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-strong rounded-3xl p-4 neon-box-glow">
              <img
                src={certificates[selectedCert].img}
                alt={certificates[selectedCert].title}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white neon-glow mb-2">
                {certificates[selectedCert].title}
              </h3>
              <p className="text-xl text-cyan-400">{certificates[selectedCert].org}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificatesSection;
