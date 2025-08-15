import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { 
  Printer, 
  Monitor, 
  Palette, 
  BarChart3, 
  FileText, 
  Camera,
  Smartphone,
  CreditCard,
  GraduationCap,
  FileImage,
  Globe,
  Banknote,
  Tv,
  Zap,
  BookOpen,
  BadgeCheck,
  CreditCard as CardIcon,
  Paperclip,
  IdCard,
  ImageIcon,
  MousePointer,
  Wifi
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const printingServices = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Document Printing & Flex",
      description: "High-quality printing, flex banners, flyers, stickers, and business cards.",
      details: "We offer comprehensive printing services including black & white and color printing, document formatting, binding, and professional finishing. We also specialize in flex banners, promotional flyers, custom stickers, and professional business cards.",
      action: () => openServiceModal({
        icon: <Printer className="w-8 h-8" />,
        title: "Document Printing & Flex",
        description: "High-quality printing, flex banners, flyers, stickers, and business cards.",
        details: "We offer comprehensive printing services including black & white and color printing, document formatting, binding, and professional finishing. We also specialize in flex banners, promotional flyers, custom stickers, and professional business cards."
      })
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Lamination & Spiral Binding",
      description: "Professional lamination and spiral binding for documents and certificates.",
      details: "Professional spiral binding services for documents, reports, presentations, and books. Available in various colors and sizes. Perfect for thesis binding, manuals, training materials, and business documents. We also offer document lamination for protection.",
      action: () => openServiceModal({
        icon: <FileText className="w-8 h-8" />,
        title: "Lamination & Spiral Binding",
        description: "Professional lamination and spiral binding for documents and certificates.",
        details: "Professional spiral binding services for documents, reports, presentations, and books. Available in various colors and sizes. Perfect for thesis binding, manuals, training materials, and business documents. We also offer document lamination for protection."
      })
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Passport & ID Services",
      description: "Standard passport, immigration-visa passport, plastic ID cards, NIN digital ID.",
      details: "Professional passport photography meeting all international standards for Nigerian and international passport requirements. We also create plastic ID cards for organizations and provide NIN digital ID card services. All photos meet embassy requirements.",
      action: () => openServiceModal({
        icon: <Camera className="w-8 h-8" />,
        title: "Passport & ID Services",
        description: "Standard passport, immigration-visa passport, plastic ID cards, NIN digital ID.",
        details: "Professional passport photography meeting all international standards for Nigerian and international passport requirements. We also create plastic ID cards for organizations and provide NIN digital ID card services. All photos meet embassy requirements."
      })
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Custom graphic design for logos, banners, flyers, and marketing materials.",
      details: "Professional graphic design services for logos, business cards, banners, flyers, brochures, and all marketing materials. We create eye-catching designs that represent your brand professionally and help your business stand out.",
      action: () => openServiceModal({
        icon: <Palette className="w-8 h-8" />,
        title: "Graphic Design",
        description: "Custom graphic design for logos, banners, flyers, and marketing materials.",
        details: "Professional graphic design services for logos, business cards, banners, flyers, brochures, and all marketing materials. We create eye-catching designs that represent your brand professionally and help your business stand out."
      })
    },
  ];

  const digitalServices = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Recharge Cards & Data",
      description: "Airtime recharge, data bundles, and internet services for all networks.",
      details: "We provide airtime recharge and data bundle services for all major networks in Nigeria (MTN, Glo, Airtel, 9mobile). Quick and reliable service with instant credit delivery. We also offer internet services and connectivity solutions.",
      action: () => openServiceModal({
        icon: <Smartphone className="w-8 h-8" />,
        title: "Recharge Cards & Data",
        description: "Airtime recharge, data bundles, and internet services for all networks.",
        details: "We provide airtime recharge and data bundle services for all major networks in Nigeria (MTN, Glo, Airtel, 9mobile). Quick and reliable service with instant credit delivery. We also offer internet services and connectivity solutions."
      })
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "TV Subscriptions",
      description: "DSTV, GOTV & StarTimes subscription and renewal services.",
      details: "Convenient TV subscription services for DSTV, GOTV, and StarTimes. We handle new subscriptions, renewals, and package upgrades. No need to queue at service centers - we make it easy and fast for you.",
      action: () => openServiceModal({
        icon: <Tv className="w-8 h-8" />,
        title: "TV Subscriptions",
        description: "DSTV, GOTV & StarTimes subscription and renewal services.",
        details: "Convenient TV subscription services for DSTV, GOTV, and StarTimes. We handle new subscriptions, renewals, and package upgrades. No need to queue at service centers - we make it easy and fast for you."
      })
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electricity Bills",
      description: "Prepaid and postpaid electricity bill payments for all distribution companies.",
      details: "Fast and secure electricity bill payment services for all electricity distribution companies across Nigeria. We handle both prepaid and postpaid payments with instant confirmation and receipt generation.",
      action: () => openServiceModal({
        icon: <Zap className="w-8 h-8" />,
        title: "Electricity Bills",
        description: "Prepaid and postpaid electricity bill payments for all distribution companies.",
        details: "Fast and secure electricity bill payment services for all electricity distribution companies across Nigeria. We handle both prepaid and postpaid payments with instant confirmation and receipt generation."
      })
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Services",
      description: "WAEC, NECO & JAMB registration and result checking services.",
      details: "Complete educational services including WAEC, NECO, and JAMB registration, result checking, and certificate verification. We help students with exam registration, payments, and provide assistance with educational documentation.",
      action: () => openServiceModal({
        icon: <BookOpen className="w-8 h-8" />,
        title: "Educational Services",
        description: "WAEC, NECO & JAMB registration and result checking services.",
        details: "Complete educational services including WAEC, NECO, and JAMB registration, result checking, and certificate verification. We help students with exam registration, payments, and provide assistance with educational documentation."
      })
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "ATM Card Services",
      description: "OPAY, PALMPAY, MONIEPOINT ATM card registration and services.",
      details: "ATM card registration and services for OPAY, PALMPAY, and MONIEPOINT. We help with account opening, card activation, PIN setup, and provide ongoing support for your digital banking needs.",
      action: () => openServiceModal({
        icon: <CreditCard className="w-8 h-8" />,
        title: "ATM Card Services",
        description: "OPAY, PALMPAY, MONIEPOINT ATM card registration and services.",
        details: "ATM card registration and services for OPAY, PALMPAY, and MONIEPOINT. We help with account opening, card activation, PIN setup, and provide ongoing support for your digital banking needs."
      })
    },
  ];

  const trainingServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Microsoft Word",
      description: "Master document creation, formatting, and professional writing skills.",
      details: "Comprehensive Microsoft Word training covering document creation, formatting, templates, mail merge, collaboration features, and professional document design. Perfect for students, professionals, and business owners.",
      action: () => openServiceModal({
        icon: <FileText className="w-8 h-8" />,
        title: "Microsoft Word",
        description: "Master document creation, formatting, and professional writing skills.",
        details: "Comprehensive Microsoft Word training covering document creation, formatting, templates, mail merge, collaboration features, and professional document design. Perfect for students, professionals, and business owners."
      })
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Microsoft Excel",
      description: "Master spreadsheets, formulas, charts, and data analysis techniques.",
      details: "Complete Excel training from basic to advanced levels. Learn formulas, pivot tables, charts, data analysis, financial modeling, and automation with macros. Essential for business professionals and students.",
      action: () => openServiceModal({
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Microsoft Excel",
        description: "Master spreadsheets, formulas, charts, and data analysis techniques.",
        details: "Complete Excel training from basic to advanced levels. Learn formulas, pivot tables, charts, data analysis, financial modeling, and automation with macros. Essential for business professionals and students."
      })
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Microsoft PowerPoint",
      description: "Create professional presentations and slide designs.",
      details: "Master PowerPoint presentation creation with professional slide design, animations, transitions, multimedia integration, and effective presentation techniques. Perfect for business professionals, students, and educators.",
      action: () => openServiceModal({
        icon: <Monitor className="w-8 h-8" />,
        title: "Microsoft PowerPoint",
        description: "Create professional presentations and slide designs.",
        details: "Master PowerPoint presentation creation with professional slide design, animations, transitions, multimedia integration, and effective presentation techniques. Perfect for business professionals, students, and educators."
      })
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "CorelDraw & Photoshop",
      description: "Professional graphics design and photo editing skills.",
      details: "Professional training in CorelDraw for vector graphics and Adobe Photoshop for photo editing and digital design. Learn logo design, branding, photo manipulation, and digital marketing materials creation.",
      action: () => openServiceModal({
        icon: <Palette className="w-8 h-8" />,
        title: "CorelDraw & Photoshop",
        description: "Professional graphics design and photo editing skills.",
        details: "Professional training in CorelDraw for vector graphics and Adobe Photoshop for photo editing and digital design. Learn logo design, branding, photo manipulation, and digital marketing materials creation."
      })
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
                    View Details
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                    View Details
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
                    View Details
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

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;