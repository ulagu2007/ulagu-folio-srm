import { Heart } from "lucide-react";

const PortfolioFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 text-center flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ulaganathan P
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
