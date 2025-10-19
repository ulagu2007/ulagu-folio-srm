import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  return (
    <section className="mb-10">
      <div className="elegant-card p-8">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
              <img 
                src={certificateHackathon} 
                alt="Cyber Hackathon Certificate" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-gradient-to-br from-muted to-background">
                <p className="text-sm font-semibold text-center text-foreground">Cyber Hackathon</p>
                <p className="text-xs text-muted-foreground text-center mt-1">HackTheBox Chennai</p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
              <img 
                src={certificateKiHacks} 
                alt="K! Hacks 2.0 Certificate" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-gradient-to-br from-muted to-background">
                <p className="text-sm font-semibold text-center text-foreground">K! HACKS 2.0</p>
                <p className="text-xs text-muted-foreground text-center mt-1">Anna University</p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
              <img 
                src={certificateProducting} 
                alt="Producting101 Hackathon Certificate" 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-gradient-to-br from-muted to-background">
                <p className="text-sm font-semibold text-center text-foreground">Producting101</p>
                <p className="text-xs text-muted-foreground text-center mt-1">CodeNex Club SRMIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
