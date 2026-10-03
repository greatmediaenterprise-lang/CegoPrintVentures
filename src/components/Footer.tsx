import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
              <a href="#home" className="flex items-center space-x-2 mb-4" aria-label="CEGOPRINT home">
              <div className="w-12 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/111830bb-85a5-4c56-b331-60887915da24.png" 
                  alt="CEGOPRINT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              </a>
              <div>
                <h3 className="text-xl font-bold">CEGOPRINT</h3>
                <p className="text-sm text-primary-foreground/80">Business Centre & More</p>
              </div>
            </a>
            <p className="text-primary-foreground/80 mb-4">
              Your complete business solution for printing, training, bill payments, 
              educational services, and digital solutions in Igbogbo, Ikorodu.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-1 text-primary-foreground/80 text-sm">
              <li>• Printing & Flex Services</li>
              <li>• Bill Payments (Electricity, TV)</li>
              <li>• Educational Services (WAEC, NECO)</li>
              <li>• Passport & ID Cards</li>
              <li>• Recharge Cards & Data</li>
              <li>• ATM Card Services</li>
              <li>• Computer Training</li>
              <li>• Graphic Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                 <a href="tel:08038003004" className="text-primary-foreground/80 hover:underline">08038003004</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                 <a href="https://www.google.com/maps/search/?api=1&query=235+Bola+Ahmed+Tinubu+Road+Oreyo+Opposite+Oreyo+Grammar+School+Igbogbo+Ikorodu+Lagos" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-xs hover:underline">235,Bola Ahmed Tinubu Road Oreyo, Opposite Oreyo Grammar Sch. Oreyo, Igbogbo, Ikorodu Lagos</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                 <a href="mailto:cegoprint2020@gmail.com" className="text-primary-foreground/80 hover:underline break-all">cegoprint2020@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2026 CEGOPRINT Business Centre. All rights reserved. | Your trusted business partner in Ikorodu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;