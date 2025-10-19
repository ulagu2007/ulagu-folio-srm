import PortfolioHeader from "@/components/PortfolioHeader";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import GitHubSection from "@/components/GitHubSection";
import CertificatesSection from "@/components/CertificatesSection";
import ECurriculaSection from "@/components/ECurriculaSection";
import HackerRankSection from "@/components/HackerRankSection";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      
      <main className="container mx-auto px-6 pb-12">
        <AboutSection />
        <ProjectSection />
        <GitHubSection />
        <CertificatesSection />
        <ECurriculaSection />
        <HackerRankSection />
      </main>

      <PortfolioFooter />
    </div>
  );
};

export default Index;
