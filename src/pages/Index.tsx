import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import GitHubSection from "@/components/GitHubSection";
import CertificatesSection from "@/components/CertificatesSection";
import ECurriculaSection from "@/components/ECurriculaSection";
import HackerRankSection from "@/components/HackerRankSection";
import ContactSection from "@/components/ContactSection";
import PortfolioFooter from "@/components/PortfolioFooter";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import MouseFollower from "@/components/MouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <MouseFollower />
      <ScrollProgress />
      
      <HeroSection />
      
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <GitHubSection />
        <CertificatesSection />
        <ECurriculaSection />
        <HackerRankSection />
        <ContactSection />
      </main>

      <PortfolioFooter />
    </div>
  );
};

export default Index;
