import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cegoprint Ventures</h3>
                <p className="text-sm text-primary-foreground/80">It is not easy business center</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for professional printing services and comprehensive 
              computer training programs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Document Printing</li>
              <li>Large Format Printing</li>
              <li>Photo Printing</li>
              <li>Microsoft Excel Training</li>
              <li>PowerPoint Training</li>
              <li>CorelDraw & Photoshop</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-primary-foreground/80">08165772892</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-primary-foreground/80">It is not easy business center</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-primary-foreground/80">info@cegoprintventures.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Cegoprint Ventures. All rights reserved. | Empowering businesses through quality and education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;