import { User } from "lucide-react";

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
            <div className="w-40 h-40 rounded-lg bg-white/10 backdrop-blur border-2 border-primary-foreground/30 flex items-center justify-center overflow-hidden shadow-xl">
              <div className="relative w-full h-full group">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  id="profile-photo"
                />
                <label htmlFor="profile-photo" className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <div className="text-center">
                    <User className="w-16 h-16 mx-auto mb-2 opacity-70" />
                    <p className="text-xs opacity-70">Upload Photo</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
