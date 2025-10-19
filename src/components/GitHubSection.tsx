import { Github, ExternalLink, Upload } from "lucide-react";

const GitHubSection = () => {
  return (
    <section className="mb-10">
      <div className="elegant-card p-8">
        <h2 className="section-title">GitHub Profile & Projects</h2>
        
        <div className="flex items-center gap-3 mb-6 p-4 bg-muted rounded-lg">
          <Github className="w-6 h-6 text-primary" />
          <a 
            href="https://github.com/ulagu2007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold text-base flex items-center gap-2 transition-colors"
          >
            github.com/ulagu2007
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-border rounded-lg p-5 hover:border-accent/50 transition-colors">
            <p className="font-semibold text-sm text-muted-foreground mb-3">Project Repository 1</p>
            <input 
              type="text" 
              placeholder="Enter GitHub project link" 
              className="w-full p-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="border-2 border-dashed border-border rounded-lg p-5 hover:border-accent/50 transition-colors">
            <p className="font-semibold text-sm text-muted-foreground mb-3">Project Repository 2</p>
            <input 
              type="text" 
              placeholder="Enter GitHub project link" 
              className="w-full p-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
