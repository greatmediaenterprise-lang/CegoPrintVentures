import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  const handleWhatsAppContact = () => {
    const message = `Hello CEGOPRINT! I'm interested in your ${service.title}. Please provide more information and pricing.`;
    const whatsappUrl = `https://wa.me/2348038003004?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallContact = () => {
    window.location.href = "tel:08038003004";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="text-primary">{service.icon}</div>
            <span>{service.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">{service.description}</p>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">Service Details:</h4>
            <p className="text-sm text-muted-foreground">{service.details}</p>
          </div>
          
          <div className="space-y-3 pt-4">
            <Button 
              onClick={handleWhatsAppContact}
              className="w-full flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>Contact via WhatsApp</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={handleCallContact}
              className="w-full flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call 08038003004</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;