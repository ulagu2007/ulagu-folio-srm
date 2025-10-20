import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        <div className="glassmorphism p-8 max-w-4xl mx-auto mt-8">
          <div className="space-y-4 text-base leading-relaxed">
          <p className="text-justify">
            I'm Ulaganathan P, a B.Tech Computer Science and Engineering student at SRM University, Kattankulathur, 
            with a strong interest in backend development, artificial intelligence, and innovative technology solutions.
          </p>
          <p className="text-justify">
            I enjoy building applications that combine logical thinking, problem-solving, and real-world impact. With 
            hands-on experience in Java, C, C++, Python, and AI/ML concepts, I continuously explore new technologies to 
            create intelligent and user-friendly systems.
          </p>
          <p className="text-justify">
            I'm passionate about leveraging technology to improve lives, enhance efficiency, and drive meaningful 
            innovation in every project I work on.
          </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
