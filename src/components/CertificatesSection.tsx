import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import certificateHackathon from "@/assets/certificate-hackathon.jpg";
import certificateKiHacks from "@/assets/certificate-ki-hacks.jpg";
import certificateProducting from "@/assets/certificate-producting101.jpg";

const CertificatesSection = () => {
  return (
    <section className="mb-8">
      <Card className="border-2">
        <CardHeader className="bg-academic-light">
          <CardTitle className="text-xl font-bold text-primary">
            Certificates & Achievements <span className="text-sm font-normal text-muted-foreground">(3 Marks)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded overflow-hidden">
              <img 
                src={certificateHackathon} 
                alt="Cyber Hackathon Certificate" 
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm font-semibold text-center">Cyber Hackathon Participation</p>
                <p className="text-xs text-muted-foreground text-center mt-1">HackTheBox Chennai, October 2025</p>
              </div>
            </div>

            <div className="border rounded overflow-hidden">
              <img 
                src={certificateKiHacks} 
                alt="K! Hacks 2.0 Certificate" 
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm font-semibold text-center">K! HACKS 2.0 - Idea Submission</p>
                <p className="text-xs text-muted-foreground text-center mt-1">Anna University, Team ERROR 404</p>
              </div>
            </div>

            <div className="border rounded overflow-hidden">
              <img 
                src={certificateProducting} 
                alt="Producting101 Hackathon Certificate" 
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-muted">
                <p className="text-sm font-semibold text-center">Producting101 - 36 Hour Hackathon</p>
                <p className="text-xs text-muted-foreground text-center mt-1">CodeNex Club SRMIST with Niramaya, March 2025</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CertificatesSection;
