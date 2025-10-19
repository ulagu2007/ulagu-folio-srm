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
              
              <div className="border-2 border-dashed border-accent/30 rounded-lg p-6 hover:border-accent transition-colors text-center">
                <input 
                  type="file" 
                  accept=".pdf,image/*"
                  className="hidden"
                  id="ecurricula-upload"
                />
                <label 
                  htmlFor="ecurricula-upload" 
                  className="cursor-pointer flex flex-col items-center"
                >
                  <FileText className="w-10 h-10 text-accent mb-3" />
                  <span className="text-sm font-semibold text-primary">Click to Upload Document</span>
                  <span className="text-xs text-muted-foreground mt-1">PDF or Image Format</span>
                </label>
              </div>
              
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
