import { Heart } from "lucide-react";

const PortfolioFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-yellow-50/50 border-t border-primary/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-700 text-center flex items-center gap-2 font-medium">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Ulaganathan P
          </p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
