import { User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const PortfolioHeader = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 mb-10 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight">Ulaganathan P</h1>
              <p className="text-lg opacity-95">Register Number: RA2411003010265</p>
              <p className="text-base opacity-90">B.Tech Computer Science Engineering</p>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <p className="text-sm opacity-90">Department of Computing Technologies</p>
                <p className="text-sm opacity-90">Faculty of Engineering and Technology, School of Computing</p>
                <p className="text-sm font-semibold mt-1">SRM Institute of Science and Technology, Kattankulathur</p>
              </div>
            </div>
          </div>
          
          <div className="ml-8">
            <div className="w-40 h-40 rounded-lg bg-white/10 backdrop-blur border-2 border-primary-foreground/30 overflow-hidden shadow-xl">
              <img 
                src={profilePhoto} 
                alt="Ulaganathan P Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
