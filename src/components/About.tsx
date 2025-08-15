import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Excellence",
      description: "Committed to delivering high-quality services that exceed expectations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with industry expertise.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Training sessions available at times that work for your schedule.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Skills",
      description: "Focus on real-world applications and hands-on learning.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Cegoprint Ventures
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cegoprint Ventures has been serving the community with professional printing 
              services and comprehensive computer training programs. We believe in empowering 
              individuals and businesses with the skills and tools they need to succeed in 
              today's digital world.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Printing Services</h4>
                  <p className="text-muted-foreground">State-of-the-art equipment for all your printing needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comprehensive Training</h4>
                  <p className="text-muted-foreground">From basic computer skills to advanced software mastery</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Affordable Pricing</h4>
                  <p className="text-muted-foreground">Competitive rates without compromising on quality</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full text-white w-fit">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;