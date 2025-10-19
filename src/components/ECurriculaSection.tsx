import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

const ECurriculaSection = () => {
  const units = [
    { id: 1, name: "Unit 1 - Sessions 1-4" },
    { id: 2, name: "Unit 2 - Sessions 1-4" },
    { id: 3, name: "Unit 3 - Sessions 1-4" },
    { id: 4, name: "Unit 4 - Sessions 1-4" },
    { id: 5, name: "Unit 5 - Sessions 1-4" }
  ];

  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            E-Curricula Completion <span className="text-sm font-normal text-muted-foreground">(10 Marks)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {units.map((unit) => (
              <div key={unit.id} className="border-2 border-dashed border-border rounded p-4 bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-base text-foreground">{unit.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Upload screenshots or PDF proof (4 sessions)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <input 
                      type="file" 
                      accept="image/*,.pdf"
                      className="text-xs w-32"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="border-2 border-accent rounded p-6 bg-accent/5 mt-6">
              <p className="font-semibold text-base text-foreground mb-3">E-Curricula Wheel Proof</p>
              <div className="flex items-center gap-3">
                <Upload className="w-5 h-5 text-accent" />
                <input 
                  type="file" 
                  accept="image/*,.pdf"
                  className="text-sm flex-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ECurriculaSection;
