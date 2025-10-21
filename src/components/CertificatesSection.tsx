import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  
  const certificates = [
    { img: certificateHackathon, title: "Cyber Hackathon", org: "HackTheBox Chennai" },
    { img: certificateKiHacks, title: "K! HACKS 2.0", org: "Anna University" },
    { img: certificateProducting, title: "Producting101", org: "CodeNex Club SRMIST" }
  ];

  return (
    <>
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center">Certificates & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="group glassmorphism overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCert(index)}
              >
                <div className="overflow-hidden">
                  <img 
                    src={cert.img} 
                    alt={`${cert.title} Certificate`} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-muted/30 to-background/30">
                  <p className="text-base font-semibold text-center text-foreground">{cert.title}</p>
                  <p className="text-sm text-muted-foreground text-center mt-1">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal */}
      {selectedCert !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedCert(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>
          
          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificates[selectedCert].img}
              alt={certificates[selectedCert].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{certificates[selectedCert].title}</h3>
              <p className="text-lg text-white/80 mt-2">{certificates[selectedCert].org}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificatesSection;
