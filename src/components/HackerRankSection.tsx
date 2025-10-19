import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

const HackerRankSection = () => {
  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            HackerRank Problem Completion <span className="text-sm font-normal text-muted-foreground">(5 Marks)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Easy Level - Java */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-bold text-foreground mb-3">Easy Level Problems on Java</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={`easy-${num}`} className="border border-border rounded p-3 bg-card">
                    <p className="text-sm font-semibold mb-2">Problem {num}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="Problem link"
                        className="text-xs p-2 border border-input rounded bg-background"
                      />
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <input 
                          type="file" 
                          accept="image/*"
                          className="text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium Level - Java */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-bold text-foreground mb-3">Medium Level Problems on Java</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={`medium-${num}`} className="border border-border rounded p-3 bg-card">
                    <p className="text-sm font-semibold mb-2">Problem {num}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="Problem link"
                        className="text-xs p-2 border border-input rounded bg-background"
                      />
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <input 
                          type="file" 
                          accept="image/*"
                          className="text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hard Level - Python */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-bold text-foreground mb-3">Hard Level Problems on Python</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={`hard-${num}`} className="border border-border rounded p-3 bg-card">
                    <p className="text-sm font-semibold mb-2">Problem {num}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="Problem link"
                        className="text-xs p-2 border border-input rounded bg-background"
                      />
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <input 
                          type="file" 
                          accept="image/*"
                          className="text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default HackerRankSection;
