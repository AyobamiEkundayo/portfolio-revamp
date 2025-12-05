import { Link } from 'react-router-dom';
import { Code, Database, Cloud, Shield, Zap, Users, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import photoshoot from '@/assets/photoshoot.jpg';
import working from '@/assets/working.jpg';

const About = () => {
  const expertise = [
    {
      icon: <Code size={24} />,
      title: "Backend Development",
      description: "Building robust, scalable systems with Node.js, TypeScript, NestJS, Express.js, and Restana."
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Expert in MongoDB, MySQL, and PostgreSQL. Optimizing queries and designing efficient schemas."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Architecture",
      description: "Deploying applications on cloud platforms with CI/CD pipelines and scalable infrastructure."
    },
    {
      icon: <Shield size={24} />,
      title: "Security & Payments",
      description: "Implementing JWT, OAuth2, and integrating Paystack, Stripe, Piggyvest, and Flutterwave."
    },
    {
      icon: <Zap size={24} />,
      title: "API Development",
      description: "Creating well-documented RESTful APIs with comprehensive testing and optimization."
    },
    {
      icon: <Users size={24} />,
      title: "Team Leadership",
      description: "Experienced in agile methodologies, code reviews, and mentoring developers."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The Story Behind <span className="text-gradient">the Code</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate engineer with a unique journey from automotive diagnostics to backend development.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Profile Section */}
        <AnimatedSection delay={100}>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={photoshoot} 
                    alt="Ayobami Edun" 
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-background px-6 py-4 rounded-xl shadow-elegant border border-border">
                  <p className="text-3xl font-bold text-gradient">3+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-medium">results-oriented Backend Engineer</span> with 
                    a strong foundation in JavaScript, TypeScript, and modern backend frameworks including Node.js, 
                    Restana, NestJS, and Express.js.
                  </p>
                  <p>
                    My passion lies in building <span className="text-foreground font-medium">secure, scalable, and 
                    user-centric applications</span> with robust database management using MongoDB, MySQL, and PostgreSQL.
                  </p>
                  <p>
                    Currently based in <span className="text-foreground font-medium">Dudley, West Midlands, UK</span>, 
                    I work remotely with teams across the globe, bringing ideas to life through clean, efficient code 
                    and thoughtful architecture.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-gradient">99.9%</p>
                    <p className="text-sm text-muted-foreground">API Uptime</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-gradient">50+</p>
                    <p className="text-sm text-muted-foreground">Mentees Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* My Story Section */}
        <AnimatedSection delay={150}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="p-8 md:p-10 bg-muted/30 rounded-2xl border border-border">
              <Quote className="text-primary/30 mb-4" size={40} />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6">
                "What drives me is the challenge of solving complex problems and seeing the direct impact of my work. 
                Every API endpoint I build, every database I optimize, represents a real improvement in how people 
                interact with technology."
              </p>
              <p className="text-muted-foreground">
                — My approach to engineering
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Expertise Grid */}
        <AnimatedSection delay={200}>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">What I Do</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Areas of <span className="text-gradient">Expertise</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/30 
                           transition-all duration-300 hover:shadow-elegant"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 text-primary 
                                group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Beyond the Code */}
        <AnimatedSection delay={300}>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <p className="text-sm font-medium text-primary tracking-wider uppercase">Beyond the Code</p>
                <h2 className="text-3xl font-bold">A Unique Background</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I believe in continuous learning and giving back to the community. I've mentored over{' '}
                    <span className="text-foreground font-medium">50 teenagers</span> in various technical and 
                    leadership roles.
                  </p>
                  <p>
                    Beyond software development, I have a unique background in{' '}
                    <span className="text-foreground font-medium">automotive technology</span>, which taught me 
                    the importance of precision, diagnostics, and problem-solving—skills that translate perfectly 
                    into backend engineering.
                  </p>
                  <p>
                    I even authored weekly educational articles for the "Gist with the Mechanic" radio segment, 
                    combining my passion for teaching and technology.
                  </p>
                </div>
                <Link 
                  to="/cv" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  View my full experience
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-3xl blur-2xl" />
                <img 
                  src={working} 
                  alt="Ayobami working" 
                  className="relative w-full rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Highlights */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 rounded-2xl p-8 md:p-10 border border-border">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Education</p>
                <h2 className="text-2xl md:text-3xl font-bold">Credentials & Certifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Cybersecurity Certification", org: "Cisco Networking Academy", year: "2025" },
                  { title: "Diploma in Backend Engineering", org: "AltSchool Africa", year: "2024" },
                  { title: "JavaScript Essentials", org: "Cisco & JS Institute", year: "2024" },
                  { title: "B.A. Religious Studies (2:1)", org: "University of Ibadan", year: "2019" }
                ].map((edu, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <p className="font-semibold mb-1">{edu.title}</p>
                    <p className="text-sm text-muted-foreground">{edu.org} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;