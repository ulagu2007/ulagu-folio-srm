import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            Projects <span className="text-sm font-normal text-muted-foreground">(1 Mark)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              MediLife – Smart Health Companion
            </h3>
            <ul className="space-y-2 text-base list-disc list-inside">
              <li>
                Developed a Java Swing-based application with a user-friendly GUI to provide daily wellness tips, 
                health suggestions, and interactive greetings.
              </li>
              <li>
                Implemented secure login and authentication modules with backend logic to manage user data efficiently.
              </li>
              <li>
                Integrated health tracking, personalized recommendations, and real-time date/time display for 
                dynamic interactivity.
              </li>
              <li>
                Designed backend algorithms to analyze user inputs and provide tailored lifestyle advice.
              </li>
              <li>
                Demonstrates full-stack Java development using GUI design, backend logic, and data handling.
              </li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-muted rounded">
            <p className="text-sm text-muted-foreground italic">
              Space reserved for additional future projects
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProjectSection;
