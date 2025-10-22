import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import ecurriculaWheel from "@/assets/ecurricula-wheel.png";

const ECurriculaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            E-Curricula Completion
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Comprehensive academic progress and achievements
          </p>

          <div className="max-w-4xl mx-auto card-light p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">
                Advanced Programming Practice
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-6">
              <img
                src={ecurriculaWheel}
                alt="E-Curricula Completion Wheel - ADVANCED PROGRAMMING PRACTICE (21CSC203P)"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-gray-900">
                  All 5 Units (20 Sessions) Completed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ECurriculaSection;
