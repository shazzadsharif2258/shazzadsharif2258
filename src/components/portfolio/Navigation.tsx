import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 portfolio-transition ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md portfolio-shadow-card" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className={`text-2xl font-bold portfolio-transition ${
              isScrolled ? "text-portfolio-primary" : "text-white"
            }`}
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`portfolio-transition hover:text-portfolio-accent ${
                  isScrolled ? "text-portfolio-primary" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="sm"
              className={`portfolio-transition ${
                isScrolled 
                  ? "bg-portfolio-accent hover:bg-portfolio-accent/90 text-white" 
                  : "bg-white text-portfolio-primary hover:bg-white/90"
              }`}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${isScrolled ? "text-portfolio-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white portfolio-shadow-card rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-portfolio-primary hover:text-portfolio-accent portfolio-transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm"
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white self-start"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;