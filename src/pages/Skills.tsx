import SkillBadge from '../components/SkillBadge';
import AnimatedSection from '../components/AnimatedSection';
import { Server, Database, Code, Cloud, Shield, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code size={24} />,
      color: "from-primary/20 to-primary/5",
      skills: [
        { name: "JavaScript", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "Node.js", category: "Runtime" },
        { name: "Express.js", category: "Framework" },
        { name: "NestJS", category: "Framework" },
        { name: "Restana", category: "Framework" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "from-accent/20 to-accent/5",
      skills: [
        { name: "MongoDB", category: "NoSQL" },
        { name: "MySQL", category: "SQL" },
        { name: "PostgreSQL", category: "SQL" },
        { name: "Redis", category: "Cache" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      color: "from-secondary/20 to-secondary/5",
      skills: [
        { name: "Google Cloud", category: "Platform" },
        { name: "GitHub Actions", category: "CI/CD" },
        { name: "Render", category: "Hosting" },
        { name: "Vercel", category: "Hosting" },
        { name: "Heroku", category: "Hosting" },
        { name: "Docker", category: "Container" },
      ]
    },
    {
      title: "Security & Payments",
      icon: <Shield size={24} />,
      color: "from-primary/20 to-accent/5",
      skills: [
        { name: "JWT", category: "Auth" },
        { name: "OAuth2", category: "Auth" },
        { name: "bcryptjs", category: "Encryption" },
        { name: "Paystack", category: "Payment" },
        { name: "Stripe", category: "Payment" },
        { name: "Flutterwave", category: "Payment" },
        { name: "Piggyvest", category: "Payment" },
      ]
    },
    {
      title: "API & Testing",
      icon: <Server size={24} />,
      color: "from-accent/20 to-primary/5",
      skills: [
        { name: "REST API", category: "API" },
        { name: "Postman", category: "Tool" },
        { name: "Swagger", category: "Documentation" },
        { name: "OpenAPI", category: "Specification" },
        { name: "Jest", category: "Testing" },
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: <Wrench size={24} />,
      color: "from-secondary/20 to-primary/5",
      skills: [
        { name: "Git", category: "Version Control" },
        { name: "GitHub", category: "Platform" },
        { name: "Agile", category: "Methodology" },
        { name: "MVC", category: "Pattern" },
        { name: "Bash", category: "Scripting" },
        { name: "CLI", category: "Interface" },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use 
              to build robust, scalable applications.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 100}>
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} border border-border`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      style={{ 
                        animationDelay: `${skillIndex * 50}ms`,
                        animation: 'slideUp 0.5s ease-out forwards'
                      }}
                    >
                      <SkillBadge {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Methodologies */}
        <AnimatedSection delay={600}>
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-center">Development Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-gradient mb-2">Agile</div>
                  <p className="text-muted-foreground">Iterative development with continuous feedback</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-gradient mb-2">CI/CD</div>
                  <p className="text-muted-foreground">Automated testing and deployment pipelines</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-gradient mb-2">MVC</div>
                  <p className="text-muted-foreground">Clean architecture and separation of concerns</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Soft Skills */}
        <AnimatedSection delay={700}>
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Soft <span className="text-gradient">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Leadership', 'Team Collaboration', 'Problem-Solving', 'Critical Thinking', 
                'Communication', 'Time Management', 'Agile Methodology', 'Mentoring'].map((skill, index) => (
                <div 
                  key={skill}
                  className="p-4 bg-muted rounded-xl border border-border hover:border-primary/50 
                           transition-all hover:shadow-elegant text-center font-medium"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;
