import { Code2 } from "lucide-react";
import easyJava1 from "@/assets/hackerrank-easy1.jpg";
import easyJava2 from "@/assets/hackerrank-easy2.jpg";
import mediumJava1 from "@/assets/hackerrank-medium1.jpg";
import mediumJava2 from "@/assets/hackerrank-medium2.jpg";
import hardPython1 from "@/assets/hackerrank-hard1.jpg";
import hardPython2 from "@/assets/hackerrank-hard2.jpg";

const HackerRankSection = () => {
  const problemCategories = [
    { 
      level: "Easy", 
      language: "Java", 
      color: "bg-green-50 border-green-300", 
      iconColor: "text-green-600",
      problems: [easyJava1, easyJava2]
    },
    { 
      level: "Medium", 
      language: "Java", 
      color: "bg-yellow-50 border-yellow-300", 
      iconColor: "text-yellow-600",
      problems: [mediumJava1, mediumJava2]
    },
    { 
      level: "Hard", 
      language: "Python", 
      color: "bg-red-50 border-red-300", 
      iconColor: "text-red-600",
      problems: [hardPython1, hardPython2]
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
              
              <div className="grid gap-4">
                {category.problems.map((problemImage, idx) => (
                  <div 
                    key={idx}
                    className={`${category.color} rounded-lg p-4 border-2 overflow-hidden`}
                  >
                    <p className="text-sm font-semibold mb-3">Problem {idx + 1}</p>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={problemImage} 
                        alt={`${category.level} ${category.language} Problem ${idx + 1}`}
                        className="w-full h-auto"
                      />
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
