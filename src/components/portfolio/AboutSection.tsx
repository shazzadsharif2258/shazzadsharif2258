import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-portfolio-accent" />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies with ReactJS, NodeJS, and modern databases."
    },
    {
      icon: <Palette className="w-8 h-8 text-portfolio-accent" />,
      title: "AI & Machine Learning",
      description: "Working on AI projects including object detection systems and intelligent applications."
    },
    {
      icon: <Zap className="w-8 h-8 text-portfolio-accent" />,
      title: "Academic Excellence",
      description: "CGPA 3.82/4.00 with multiple VC Awards and Dean's Awards at Green University of Bangladesh."
    }
  ];

  return (
    <section className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
            I'm a Computer Science & Engineering student at Green University of Bangladesh with a passion for 
            developing innovative solutions. Currently working as an intern at NextTech Limited, I specialize in 
            full-stack development and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-portfolio-text-light">
              <p>
                Currently pursuing B.Sc. in Computer Science & Engineering at Green University of Bangladesh 
                with a CGPA of 3.82/4.00. I've earned multiple VC Awards and Dean's Awards for academic excellence, 
                and I'm currently gaining practical experience as an intern at NextTech Limited.
              </p>
              <p>
                My academic background includes H.S.C in Science with a perfect GPA of 5.00/5.00 from 
                Noakhali Govt. College. I've also completed professional training in Python Programming 
                for Django and Digital Marketing (SEO Expert).
              </p>
              <p>
                Beyond academics, I've volunteered with Bangladesh Red Crescent Society and enjoy playing 
                cricket, public speaking, and leading collaborative projects. I believe in combining 
                technical expertise with strong communication and leadership skills.
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