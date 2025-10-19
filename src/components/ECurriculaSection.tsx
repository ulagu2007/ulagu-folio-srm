import { FileText, CheckCircle } from "lucide-react";

const ECurriculaSection = () => {
  return (
    <section className="mb-10">
      <div className="elegant-card p-8">
        <h2 className="section-title">E-Curricula Completion</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 border-2 border-accent/30">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-accent mr-3" />
              <FileText className="w-12 h-12 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-center text-primary mb-6">
              E-Curricula Wheel Proof
            </h3>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Completed: All 5 Units (20 Sessions Total)
                </p>
                <p className="text-xs text-muted-foreground">
                  Upload your E-Curricula completion wheel as proof
                </p>
              </div>
              
              <a 
                href="/ktretecurricula2024.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-accent/30 rounded-lg p-6 hover:border-accent transition-colors block"
              >
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-10 h-10 text-accent mb-3" />
                  <span className="text-sm font-semibold text-primary">E-Curricula Wheel Proof</span>
                  <span className="text-xs text-muted-foreground mt-1">Click to view document</span>
                </div>
              </a>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground italic">
                  Reference: ktretecurricula2024.pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECurriculaSection;
