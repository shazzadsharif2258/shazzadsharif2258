import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BookSphere",
      description: "An integrated project design for book management and discovery. Built with modern web technologies, this platform provides a comprehensive solution for book lovers to organize, discover, and manage their reading collections with an intuitive interface.",
      technologies: ["ReactJS", "NodeJS", "Firebase"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    },
    {
      title: "Object Detection System",
      description: "An AI-powered object detection system developed for the AI Lab. This project utilizes computer vision algorithms and machine learning to accurately identify and classify objects in real-time, providing detailed analysis and visualization.",
      technologies: ["Python", "KNN", "CV2", "Streamlit"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    },
    {
      title: "Children Learning System",
      description: "An educational system developed for the Microprocessors and Microcontrollers Lab. This interactive platform helps children learn programming concepts through engaging activities and hands-on exercises using Assembly Language.",
      technologies: ["Assembly Language", "Microprocessors", "Educational Design"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    },
    {
      title: "Food Delivery System",
      description: "A comprehensive food delivery management system built for database course project. Features include restaurant management, order tracking, user authentication, and real-time delivery updates with a responsive web interface.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    },
    {
      title: "Encryption Decryption System",
      description: "A secure data communication system that implements various encryption and decryption algorithms. This project demonstrates understanding of cybersecurity principles and provides a robust solution for secure data transmission.",
      technologies: ["Java", "Cryptography", "Data Security"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    },
    {
      title: "Airline Management System",
      description: "A comprehensive airline management system developed using object-oriented programming principles. The system handles flight scheduling, passenger management, booking operations, and administrative tasks with a user-friendly interface.",
      technologies: ["Java", "OOP", "Database Design"],
      image: "/placeholder.svg",
      demoUrl: "https://sites.google.com/view/shazzadsharif",
      githubUrl: "https://github.com/shazzadsharif2258"
    }
  ];

  return (
    <section className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden portfolio-shadow-card hover:shadow-xl portfolio-transition hover:-translate-y-2 group"
            >
              <div className="aspect-video bg-gradient-to-br from-portfolio-accent-light to-portfolio-accent/20 flex items-center justify-center">
                <div className="text-portfolio-accent font-semibold text-lg">
                  Project Image
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-light mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-portfolio-accent text-portfolio-accent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white portfolio-transition px-8 py-6"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;