import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, X } from "lucide-react";
import easyJava1 from "@/assets/hackerrank-easy1.jpg";
import easyJava2 from "@/assets/hackerrank-easy2.jpg";
import mediumJava1 from "@/assets/hackerrank-medium1.jpg";
import mediumJava2 from "@/assets/hackerrank-medium2.jpg";
import hardPython1 from "@/assets/hackerrank-hard1.jpg";
import hardPython2 from "@/assets/hackerrank-hard2.jpg";

const HackerRankSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const problemCategories = [
    {
      level: "Easy",
      language: "Java",
      problems: [easyJava1, easyJava2],
      count: 2
    },
    {
      level: "Medium",
      language: "Java",
      problems: [mediumJava1, mediumJava2],
      count: 2
    },
    {
      level: "Hard",
      language: "Python",
      problems: [hardPython1, hardPython2],
      count: 2
    }
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
              HackerRank Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
            <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
              Problem-solving excellence across various difficulty levels
            </p>

            <div className="space-y-8 max-w-6xl mx-auto">
              {problemCategories.map((category, index) => (
                <motion.div
                  key={`${category.level}-${category.language}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-primary p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.level} Level - {category.language}</h3>
                      <p className="text-gray-600">Successfully solved {category.count} problems</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {category.problems.map((problemImage, idx) => (
                      <div
                        key={idx}
                        className="cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:border-primary/50 transition-all hover:shadow-lg"
                        onClick={() => setSelectedImage(problemImage)}
                      >
                        <img
                          src={problemImage}
                          alt={`${category.level} ${category.language} Problem ${idx + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            onClick={() => setSelectedImage(null)}
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
            <img
              src={selectedImage}
              alt="HackerRank Problem"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default HackerRankSection;
