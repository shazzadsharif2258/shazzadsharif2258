import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/90 via-portfolio-primary/70 to-portfolio-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="animate-fade-in-up">Md. Shazzad</span>
            <span className="block bg-gradient-to-r from-white to-portfolio-accent bg-clip-text text-transparent animate-fade-in-up [animation-delay:0.3s]">
              Hossain Sharif
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.6s]">
            Computer Science & Engineering Student | Full-Stack Developer | AI Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-portfolio-primary hover:bg-white/90 portfolio-transition px-8 py-6 text-lg font-semibold portfolio-shadow-elegant"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-portfolio-primary portfolio-transition px-8 py-6 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/shazzadsharif2258" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/30 rounded-full hover:bg-white/10 portfolio-transition hover:scale-110 animate-glow"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/shazzad-sharif-969b08267" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/30 rounded-full hover:bg-white/10 portfolio-transition hover:scale-110 animate-glow [animation-delay:0.5s]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sharifsh846@gmail.com" 
              className="p-3 border border-white/30 rounded-full hover:bg-white/10 portfolio-transition hover:scale-110 animate-glow [animation-delay:1s]"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;