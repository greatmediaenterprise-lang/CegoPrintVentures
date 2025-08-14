import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Monitor, Palette, BarChart3, FileText, Camera } from "lucide-react";

const Services = () => {
  const printingServices = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Document Printing & Flex",
      description: "High-quality printing, flex banners, flyers, stickers, and business cards.",
      action: () => window.open('https://wa.me/2348165772892?text=I need document printing and flex services', '_blank')
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Lamination & Binding",
      description: "Professional lamination and spiral binding for documents and certificates.",
      action: () => window.open('https://wa.me/2348165772892?text=I need lamination and binding services', '_blank')
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Passport & ID Services",
      description: "Standard passport, immigration-visa passport, plastic ID cards, NIN digital ID.",
      action: () => window.open('https://wa.me/2348165772892?text=I need passport and ID card services', '_blank')
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Custom graphic design for logos, banners, flyers, and marketing materials.",
      action: () => window.open('https://wa.me/2348165772892?text=I need graphic design services', '_blank')
    },
  ];

  const digitalServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Bill Payments",
      description: "Electricity (prepaid/postpaid), TV subscriptions (DSTV, GOTV, StarTimes).",
      action: () => window.open('https://wa.me/2348165772892?text=I need bill payment services', '_blank')
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Educational Services",
      description: "WAEC, NECO, JAMB registration and result checking services.",
      action: () => window.open('https://wa.me/2348165772892?text=I need educational services', '_blank')
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Recharge & Data",
      description: "Airtime recharge, data bundles, and internet services.",
      action: () => window.open('https://wa.me/2348165772892?text=I need recharge and data services', '_blank')
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "ATM Card Services",
      description: "OPAY, PALMPAY, MONIEPOINT ATM card registration and services.",
      action: () => window.open('https://wa.me/2348165772892?text=I need ATM card services', '_blank')
    },
  ];

  const trainingServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Microsoft Word",
      description: "Master document creation, formatting, and professional writing skills.",
      action: () => window.open('https://wa.me/2348165772892?text=I want to register for Microsoft Word training', '_blank')
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Microsoft Excel",
      description: "Master spreadsheets, formulas, charts, and data analysis techniques.",
      action: () => window.open('https://wa.me/2348165772892?text=I want to register for Microsoft Excel training', '_blank')
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "CorelDraw & Photoshop",
      description: "Professional graphics design and photo editing skills.",
      action: () => window.open('https://wa.me/2348165772892?text=I want to register for CorelDraw and Photoshop training', '_blank')
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
            Complete business center solutions - from printing and training to digital services and bill payments.
          </p>
        </div>

        {/* Printing & Design Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Printing & Design Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {printingServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105 cursor-pointer"
                onClick={service.action}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  <Button variant="hero" size="sm" className="w-full">
                    Get Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Digital & Bill Payment Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105 cursor-pointer"
                onClick={service.action}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-hero rounded-full text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Get Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Computer Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105 cursor-pointer"
                onClick={service.action}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  <Button variant="cta" size="sm" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Quote for Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;