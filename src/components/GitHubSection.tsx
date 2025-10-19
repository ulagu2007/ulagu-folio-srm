import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GitHubSection = () => {
  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            GitHub Profile <span className="text-sm font-normal text-muted-foreground">(5 Marks)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-6 h-6 text-foreground" />
            <a 
              href="https://github.com/ulagu2007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold text-base flex items-center gap-2"
            >
              https://github.com/ulagu2007
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded p-6 bg-muted/30">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Project Repository 1</p>
              <input 
                type="text" 
                placeholder="Upload GitHub project link 1" 
                className="w-full p-2 border border-input rounded bg-card text-sm"
              />
            </div>

            <div className="border-2 border-dashed border-border rounded p-6 bg-muted/30">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Project Repository 2</p>
              <input 
                type="text" 
                placeholder="Upload GitHub project link 2" 
                className="w-full p-2 border border-input rounded bg-card text-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default GitHubSection;
