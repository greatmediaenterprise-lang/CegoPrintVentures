import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [{ label: "Home", href: "#home" }, { label: "Services", href: "#services" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" }];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2" aria-label="CEGOPRINT home">
            <div className="w-12 h-10 rounded-lg overflow-hidden">
            <img 
                src="/lovable-uploads/111830bb-85a5-4c56-b331-60887915da24.png" 
                alt="CEGOPRINT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">CEGOPRINT</h1>
              <p className="text-xs text-muted-foreground">Business Centre & More</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(link => <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">{link.label}</a>)}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-primary">
              <a href="tel:08038003004" className="flex items-center space-x-1 hover:underline">
                <Phone size={16} />
                <span className="font-medium text-sm">08038003004</span>
              </a>
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
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(open => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden flex flex-col gap-1 pt-4 mt-4 border-t border-border">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-3 px-2 text-foreground hover:text-primary hover:bg-accent rounded-md">{link.label}</a>)}
          <a href="tel:08038003004" onClick={() => setMenuOpen(false)} className="py-3 px-2 text-primary font-medium">Call 08038003004</a>
        </nav>}
      </div>
    </header>
  );
};

export default Header;