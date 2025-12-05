import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/20 hover:border-primary/40",
      skills: ["JavaScript", "TypeScript", "Node.js", "Express.js", "NestJS", "Restana"]
    },
    {
      title: "Databases",
      color: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/20 hover:border-secondary/40",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/20 hover:border-accent/40",
      skills: ["Google Cloud", "GitHub Actions", "Render", "Vercel", "Heroku", "Docker"]
    },
    {
      title: "Security & Payments",
      color: "from-primary/20 to-secondary/5",
      borderColor: "border-primary/20 hover:border-primary/40",
      skills: ["JWT", "OAuth2", "bcryptjs", "Paystack", "Stripe", "Flutterwave", "Piggyvest"]
    },
    {
      title: "API & Testing",
      color: "from-secondary/20 to-accent/5",
      borderColor: "border-secondary/20 hover:border-secondary/40",
      skills: ["REST API", "Postman", "Swagger", "OpenAPI", "Jest"]
    },
    {
      title: "Tools & Methods",
      color: "from-accent/20 to-primary/5",
      borderColor: "border-accent/20 hover:border-accent/40",
      skills: ["Git", "GitHub", "Agile", "MVC", "Bash", "CLI"]
    }
  ];

  const softSkills = [
    "Leadership", "Team Collaboration", "Problem-Solving", "Critical Thinking", 
    "Communication", "Time Management", "Agile Methodology", "Mentoring"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">Expertise</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive toolkit for building robust, scalable backend systems 
              and delivering production-ready applications.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 100}>
              <div className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} transition-colors`}>
                <h2 className="text-xl font-bold mb-6">{category.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-background/80 backdrop-blur-sm text-foreground rounded-lg text-sm font-medium
                               border border-border hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Development Approach */}
        <AnimatedSection delay={600}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 md:p-10 bg-muted/30 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Development Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Agile", desc: "Iterative development with continuous feedback and adaptation" },
                  { title: "CI/CD", desc: "Automated testing and deployment pipelines for reliability" },
                  { title: "Clean Code", desc: "MVC architecture and separation of concerns for maintainability" }
                ].map((approach, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-3">{approach.title}</div>
                    <p className="text-sm text-muted-foreground">{approach.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Soft Skills */}
        <AnimatedSection delay={700}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Beyond Technical</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Soft <span className="text-gradient">Skills</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-muted/50 rounded-full border border-border hover:border-primary/50 
                           text-sm font-medium transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;