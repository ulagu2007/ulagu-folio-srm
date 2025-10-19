const ProjectSection = () => {
  return (
    <section className="mb-10">
      <div className="elegant-card p-8">
        <h2 className="section-title">Projects</h2>
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-6 border-l-4 border-accent">
          <h3 className="text-xl font-bold text-primary mb-4">
            MediLife – Smart Health Companion
          </h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Developed a Java Swing-based application with a user-friendly GUI to provide daily wellness tips, 
              health suggestions, and interactive greetings.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Implemented secure login and authentication modules with backend logic to manage user data efficiently.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Integrated health tracking, personalized recommendations, and real-time date/time display for 
              dynamic interactivity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Designed backend algorithms to analyze user inputs and provide tailored lifestyle advice.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Demonstrates full-stack Java development using GUI design, backend logic, and data handling.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
