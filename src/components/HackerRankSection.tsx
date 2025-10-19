import { Code2, Upload, Link as LinkIcon } from "lucide-react";

const HackerRankSection = () => {
  const problemCategories = [
    { 
      level: "Easy", 
      language: "Java", 
      color: "bg-green-50 border-green-300", 
      iconColor: "text-green-600",
      count: 3 
    },
    { 
      level: "Medium", 
      language: "Java", 
      color: "bg-yellow-50 border-yellow-300", 
      iconColor: "text-yellow-600",
      count: 3 
    },
    { 
      level: "Hard", 
      language: "Python", 
      color: "bg-red-50 border-red-300", 
      iconColor: "text-red-600",
      count: 3 
    }
  ];

  return (
    <section className="mb-10">
      <div className="elegant-card p-8">
        <h2 className="section-title">HackerRank Problem Solving</h2>
        
        <div className="space-y-6">
          {problemCategories.map((category) => (
            <div key={`${category.level}-${category.language}`} className="border-l-4 border-primary/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className={`w-6 h-6 ${category.iconColor}`} />
                <h3 className="text-lg font-bold text-foreground">
                  {category.level} Level - {category.language}
                </h3>
              </div>
              
              <div className="grid gap-3">
                {[...Array(category.count)].map((_, idx) => (
                  <div 
                    key={idx}
                    className={`${category.color} rounded-lg p-4 border-2`}
                  >
                    <p className="text-sm font-semibold mb-3">Problem {idx + 1}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <input 
                          type="text" 
                          placeholder="HackerRank problem URL"
                          className="flex-1 text-xs p-2 border border-input rounded bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <input 
                          type="file" 
                          accept="image/*"
                          className="flex-1 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackerRankSection;
