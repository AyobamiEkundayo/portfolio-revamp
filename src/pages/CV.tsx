import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Heart, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const CV = () => {
  const experiences = [
    {
      title: "Lead Backend Developer",
      company: "Ebidhaa Services (DriveWell)",
      period: "Feb. 2025 – Present",
      location: "Remote",
      highlights: [
        "Building backend infrastructure for a car hire and documentation service platform, supporting both web and mobile applications",
        "Integrated Paystack and Piggyvest APIs for secure payments and real-time webhook processing, achieving 99.9% transaction accuracy",
        "Automated order tracking and document uploads using Google Cloud Storage",
        "Enhanced user management with bcrypt-based password hashing, cutting load time by 20%"
      ]
    },
    {
      title: "Lead Backend Developer",
      company: "African Institute for Artificial Intelligence (AI4AI)",
      period: "April 2025 – August 2025",
      location: "Remote",
      highlights: [
        "Architected backend for SchoolHub Nigeria, a multi-tenant SaaS platform serving 50+ educational institutions",
        "Developed modular microservices in NestJS and PostgreSQL, improving performance scalability by 30%",
        "Implemented secure authentication and RBAC, reducing unauthorized access attempts by 40%",
        "Optimized database queries and Redis cache strategy, enhancing API response times by 25%"
      ]
    },
    {
      title: "Support Staff (Diagnostics & Training)",
      company: "Auto Clinic, Ibadan",
      period: "July 2021 – Aug. 2024",
      location: "Nigeria",
      highlights: [
        "Conducted computerized vehicle diagnostics for 25+ vehicles weekly",
        "Led summer workshops training over 50 teenagers on automotive diagnostics",
        "Authored weekly automotive articles for 'Gist with the Mechanic' radio segment"
      ]
    }
  ];

  const volunteerExperience = [
    {
      role: "Acting Assistant Head & Unit Lead",
      organization: "Global Harvest Teens Church",
      period: "July 2021 – Sep. 2024",
      highlights: [
        "Supervised and mentored 50+ teenagers in leadership and creativity",
        "Designed digital media initiatives to enhance youth engagement",
        "Coordinated meetings and maintained accurate records for planning"
      ]
    },
    {
      role: "Researcher & Volunteer",
      organization: "REES Africa",
      period: "Jan. 2022 – Sep. 2023",
      highlights: ["Coordinated literacy drives and environmental sustainability initiatives"]
    }
  ];

  const education = [
    { degree: "Cybersecurity Certification", school: "Cisco Networking Academy", year: "2025" },
    { degree: "Diploma in Backend Engineering", school: "AltSchool Africa", year: "2024" },
    { degree: "JavaScript Essentials", school: "Cisco & JS Institute", year: "2024" },
    { degree: "B.A. Religious Studies (2:1)", school: "University of Ibadan", year: "2019" }
  ];

  const awards = [
    "Dedicated Teen Teacher Award - Global Harvest Church (2021, 2023)",
    "Astute Volunteer (SDG Literacy Drive) - REES Africa & TNCI Africa (2022)"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">Resume</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Curriculum <span className="text-gradient">Vitae</span>
            </h1>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Dudley, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>+44 7867 027428</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>ayobamieae@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 text-sm">
              <a href="https://github.com/Ayooluwabami" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:underline">GitHub</a>
              <span className="text-muted-foreground">|</span>
              <a href="https://www.linkedin.com/in/ayobami-ekundayo" target="_blank" rel="noopener noreferrer"
                 className="text-primary hover:underline">LinkedIn</a>
            </div>
          </div>
        </AnimatedSection>

        {/* Professional Summary */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 rounded-2xl border border-border">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" size={24} />
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Results-oriented Backend Engineer with expertise in JavaScript, TypeScript, Node.js, 
                Restana, NestJS, and Express.js. Skilled in designing scalable architectures, 
                optimizing database performance, and integrating secure payment systems. 
                Experienced with MongoDB, MySQL, and PostgreSQL, delivering production-ready APIs 
                in agile environments.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Skills */}
        <AnimatedSection delay={150}>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold mb-6">Core Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Languages & Frameworks", value: "JavaScript, TypeScript, Node.js, NestJS, Express.js, Restana" },
                { label: "Databases", value: "MongoDB, MySQL, PostgreSQL, Redis" },
                { label: "Security & Payments", value: "JWT, OAuth2, Paystack, Stripe, Piggyvest, Flutterwave" },
                { label: "DevOps", value: "Git, GitHub Actions, Docker, Google Cloud, Vercel" }
              ].map((skill, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-xl border border-border">
                  <p className="text-sm font-semibold text-primary mb-1">{skill.label}</p>
                  <p className="text-sm text-muted-foreground">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Professional Experience */}
        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="p-5 bg-muted/30 rounded-xl border border-border hover:shadow-elegant transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="font-bold text-primary">{exp.title}</h3>
                        <p className="font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 md:mt-0 md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Volunteer & Education side by side */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Volunteer Experience */}
          <AnimatedSection delay={250}>
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Heart className="text-accent" size={24} />
                Volunteer Work
              </h2>
              <div className="space-y-4">
                {volunteerExperience.map((exp, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl border border-border">
                    <h3 className="font-semibold text-accent text-sm">{exp.role}</h3>
                    <p className="text-sm font-medium mb-2">{exp.organization}</p>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={300}>
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-secondary" size={24} />
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl border border-border hover:border-secondary/30 transition-colors">
                    <p className="font-semibold text-sm">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Awards */}
        <AnimatedSection delay={350}>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-accent" size={24} />
              Awards & Recognition
            </h2>
            <div className="flex flex-wrap gap-3">
              {awards.map((award, index) => (
                <span key={index} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  {award}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
              <h2 className="font-bold mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p><strong className="text-foreground">Legal Name:</strong> Ayobami Esther Edun</p>
                  <p><strong className="text-foreground">Previous Name:</strong> Ayobami Esther Ekundayo</p>
                </div>
                <div>
                  <p><strong className="text-foreground">Visa Status:</strong> Skilled Worker Dependent Visa</p>
                  <p><strong className="text-foreground">Work Authorization:</strong> Eligible to Work in the UK</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={450}>
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CV;