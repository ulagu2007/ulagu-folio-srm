import { motion } from "framer-motion";
import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  const certificates = [
    { img: certificateHackathon, title: "Cyber Hackathon", org: "HackTheBox Chennai" },
    { img: certificateKiHacks, title: "K! HACKS 2.0", org: "Anna University" },
    { img: certificateProducting, title: "Producting101", org: "CodeNex Club SRMIST" }
  ];

  return (
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
              className="group glassmorphism overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={cert.img} 
                  alt={`${cert.title} Certificate`} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-gradient-to-br from-muted/30 to-background/30">
                <p className="text-sm font-semibold text-center text-foreground">{cert.title}</p>
                <p className="text-xs text-muted-foreground text-center mt-1">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
