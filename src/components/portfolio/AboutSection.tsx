import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-portfolio-accent" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Palette className="w-8 h-8 text-portfolio-accent" />,
      title: "Beautiful Design",
      description: "Creating visually stunning interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="w-8 h-8 text-portfolio-accent" />,
      title: "Performance",
      description: "Optimizing every aspect to deliver lightning-fast, responsive applications."
    }
  ];

  return (
    <section className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            About Me
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a keen eye for design and a love for creating 
            digital solutions that make a difference. With years of experience in full-stack 
            development, I bring ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-portfolio-text-light">
              <p>
                Started as a curious mind fascinated by technology, I've evolved into a 
                developer who believes in the power of good design and clean code. 
              </p>
              <p>
                I specialize in React, TypeScript, Node.js, and modern web technologies, 
                always staying current with the latest trends and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or mentoring fellow developers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 portfolio-shadow-card hover:shadow-lg portfolio-transition hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-portfolio-accent-light rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-portfolio-text-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;