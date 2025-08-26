import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "PHP", "Assembly Language"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "ReactJS", "NodeJS", "Firebase", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "LaTeX", "KNN", "CV2", "Streamlit", "Django", "SEO"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-portfolio-surface portfolio-shadow-card hover:shadow-lg portfolio-transition"
            >
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-portfolio-accent-light text-portfolio-primary hover:bg-portfolio-accent hover:text-white portfolio-transition px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;