const PortfolioHeader = () => {
  return (
    <header className="bg-card border-b-2 border-primary py-8 mb-8">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4 tracking-wide">
          PORTFOLIO
        </h1>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          21CSC203P – ADVANCED PROGRAMMING PRACTICE
        </h2>
        <div className="space-y-2 text-foreground">
          <p className="font-semibold text-lg">Ulaganathan P</p>
          <p className="text-base">Register Number: RA2411003010265</p>
          <p className="text-sm mt-4">Department of Computing Technologies</p>
          <p className="text-sm">Faculty of Engineering and Technology, School of Computing</p>
          <p className="text-sm font-semibold">SRM Institute of Science and Technology, Kattankulathur</p>
        </div>
        <p className="text-sm text-muted-foreground mt-6 italic">October 2025</p>
      </div>
    </header>
  );
};

export default PortfolioHeader;
