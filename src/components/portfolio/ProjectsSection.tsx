import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      technologies: ["React", "D3.js", "Weather API"],
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
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