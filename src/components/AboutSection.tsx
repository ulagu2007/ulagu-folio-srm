import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            About Me <span className="text-sm font-normal text-muted-foreground">(1 Mark)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-justify leading-relaxed text-base">
            I am Ulaganathan P, a B.Tech Computer Science Engineering student at SRM University, Kattankulathur, 
            with a keen interest in backend development, AI, and innovative technology solutions. I enjoy building 
            projects that combine problem-solving, logical thinking, and real-world impact, such as MediLife – a smart 
            health companion and De-Haze – an AI-powered image enhancement system.
          </p>
          <p className="text-justify leading-relaxed text-base mt-4">
            I have hands-on experience in Java, C, C++, Python, and AI-ML concepts, and I continuously explore 
            cutting-edge technologies to create intelligent, user-friendly applications.
          </p>
          <p className="text-justify leading-relaxed text-base mt-4">
            My strengths lie in planning, execution, and delivering functional projects, and I am passionate about 
            leveraging technology to improve lives and streamline processes.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutSection;
