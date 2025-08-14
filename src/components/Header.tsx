import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-10 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/3cfd2bf0-a9de-436c-b2f5-8dbe91f8fb3f.png" 
                alt="CEGOPRINT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">CEGOPRINT</h1>
              <p className="text-xs text-muted-foreground">Business Centre & More</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-primary">
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span className="font-medium text-sm">08165772892</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span className="font-medium text-sm">08038003004</span>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => {
                const nav = document.querySelector('nav');
                nav?.classList.toggle('hidden');
              }}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;