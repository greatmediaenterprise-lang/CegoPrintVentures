import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Monitor, Palette, BarChart3, FileText, Camera } from "lucide-react";

const Services = () => {
  const printingServices = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Document Printing",
      description: "High-quality printing for documents, flyers, business cards, and more.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Large Format Printing",
      description: "Banners, posters, and signage for your business and events.",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Printing",
      description: "Professional photo printing services with excellent color accuracy.",
    },
  ];

  const trainingServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Microsoft Excel",
      description: "Master spreadsheets, formulas, charts, and data analysis techniques.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "PowerPoint",
      description: "Create stunning presentations that captivate your audience.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "CorelDraw & Photoshop",
      description: "Professional graphics design and photo editing skills.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printing solutions and professional computer training 
            to help you and your business succeed.
          </p>
        </div>

        {/* Printing Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Printing Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {printingServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Computer Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-hero rounded-full text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8">
            Get Quote for Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;