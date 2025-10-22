import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Award } from "lucide-react";
import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    { img: certificateHackathon, title: "Cyber Hackathon", org: "HackTheBox Chennai" },
    { img: certificateKiHacks, title: "K! HACKS 2.0", org: "Anna University" },
    { img: certificateProducting, title: "Producting101", org: "CodeNex Club SRMIST" }
  ];

  return (
    <>
      <section className="py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Certificates & Achievements
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
              Recognition of skills and accomplishments
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-light p-6 cursor-pointer"
                  onClick={() => setSelectedCert(index)}
                >
                  <div className="relative mb-4">
                    <img
                      src={cert.img}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-64 object-cover rounded-xl border border-gray-200"
                    />
                    <div className="absolute top-3 right-3 p-2 bg-primary rounded-full">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
            className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => setSelectedCert(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-gray-900" />
          </motion.button>

          <motion.div
            className="max-w-6xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl p-4 shadow-2xl">
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
              <h3 className="text-3xl font-bold text-white mb-2">
                {certificates[selectedCert].title}
              </h3>
              <p className="text-xl text-blue-300">{certificates[selectedCert].org}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificatesSection;
