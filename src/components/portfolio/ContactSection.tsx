import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sharifsh846@gmail.com",
      href: "mailto:sharifsh846@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(+880) 1722400194",
      href: "tel:+8801722400194"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="portfolio-shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
                Send Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-portfolio-primary">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-portfolio-primary">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-portfolio-primary">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-portfolio-primary">
                    Subject
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry"
                    className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-portfolio-primary">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white portfolio-transition"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-portfolio-text-light mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out through any of 
                the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="portfolio-shadow-card hover:shadow-lg portfolio-transition">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 text-portfolio-primary hover:text-portfolio-accent portfolio-transition"
                    >
                      <div className="p-3 bg-portfolio-accent-light rounded-lg text-portfolio-accent">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-portfolio-text-light">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;