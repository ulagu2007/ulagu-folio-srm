import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import GitHubSection from "@/components/GitHubSection";
import HackerRankSection from "@/components/HackerRankSection";
import CertificatesSection from "@/components/CertificatesSection";
import ECurriculaSection from "@/components/ECurriculaSection";
import ContactSection from "@/components/ContactSection";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <GitHubSection />
      <HackerRankSection />
      <CertificatesSection />
      <ECurriculaSection />
      <ContactSection />
      <PortfolioFooter />
    </div>
  );
};

export default Index;
