import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/111830bb-85a5-4c56-b331-60887915da24.png" 
                  alt="CEGOPRINT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">CEGOPRINT</h3>
                <p className="text-sm text-primary-foreground/80">Business Centre & More</p>
              </div>
            </div>
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
                <span className="text-primary-foreground/80">08038003004</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-primary-foreground/80 text-xs">235,Bola Ahmed Tinubu Road Oreyo, Opposite Oreyo Grammar Sch. Oreyo, Igbogbo, Ikorodu Lagos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-primary-foreground/80">cegoprint2020@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 CEGOPRINT Business Centre. All rights reserved. | Your trusted business partner in Ikorodu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;