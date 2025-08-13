import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your printing project or begin your learning journey? 
            Contact us today for more information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">08165772892</p>
                    <p className="text-sm text-muted-foreground">Call or WhatsApp us anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">It is not easy business center</p>
                    <p className="text-sm text-muted-foreground">Visit us for in-person consultations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Services */}
            <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Document Printing</span>
                  <Button variant="hero" size="sm">Order Now</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Training Registration</span>
                  <Button variant="secondary" size="sm">Register</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Bulk Printing</span>
                  <Button variant="hero" size="sm">Get Quote</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="border-border" />
                <Input placeholder="Phone Number" className="border-border" />
              </div>
              <Input placeholder="Email Address" className="border-border" />
              <Input placeholder="Subject" className="border-border" />
              <Textarea 
                placeholder="Tell us about your printing needs or training interests..." 
                className="min-h-32 border-border"
              />
              <Button variant="cta" size="lg" className="w-full">
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;